"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useCart } from "../../context/cartContext";
import { useUser } from "../../context/userContext";
import { IoMdStar } from "react-icons/io";
import { IoTrashBinOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const { removeFromCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  const { user } = useUser();
  const [token, setToken] = useState(
    typeof window !== "undefined" ? Cookies.get("ynmtoken") : null
  );
  const router = useRouter();

  // useEffect(() => {
  //   const fetchCart = async () => {
  //     if (user && user._id) {
  //       try {
  //         const response = await fetch(
  //           `${serverUrl}/api/cart/getCart/${user._id}`,
  //           {
  //             method: "GET",
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //               "Content-Type": "application/json",
  //             },
  //           }
  //         );

  //         if (response.ok) {
  //           const data = await response.json();
  //           setCart(data.cart);
  //         } else {
  //           console.error("Failed to fetch cart. Status:", response.status);
  //         }
  //       } catch (error) {
  //         console.error("Failed to fetch cart", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     } else {
  //       const localCart = localStorage.getItem("ynmc");
  //       setCart(localCart ? JSON.parse(localCart) : []);
  //       setLoading(false);
  //     }
  //   };

  //   fetchCart();
  // }, [user, token]);

  // useEffect(() => {
  //   console.log('cart from context: ', cart)
  // }, [cart])

  useEffect(() => {
    if (!user) {
      const localCart = localStorage.getItem("ynmc");
      setCart(localCart ? JSON.parse(localCart) : []);
      setLoading(false);
      return;
    }

    const fetchCart = async () => {
      try {
        const response = await fetch(
          `${serverUrl}/api/cart/getCart/${user._id}`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setCart(data.cart);
        } else {
          console.error("Failed to fetch cart. Status:", response.status);
        }
      } catch (error) {
        console.error("Failed to fetch cart", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [user, token]);

  useEffect(() => {
    if (cart.length > 0) {
      const calculateTotalPrice = () => {
        const newTotalPrice = cart.reduce(
          (total, item) =>
            total + (item?.productId?.price || 0) * (item?.quantity || 0),
          0
        );
        setTotalPrice(newTotalPrice);
      };
      calculateTotalPrice();
    } else {
      setTotalPrice(0);
    }
  }, [cart]);

  const handleRemoveFromCart = async (productId) => {
    if (user && user._id) {
      try {
        await axios.delete(`${serverUrl}/api/cart/remove`, {
          data: { userId: user._id, productId },
          headers: { Authorization: `Bearer ${token}` },
        });
        setCart((prevCart) =>
          prevCart.filter((item) => item.productId._id !== productId)
        );
        const updatedCart = cart.filter(
          (item) => item.productId._id !== productId
        );
        removeFromCart(updatedCart);

        toast.success("Product removed from cart!");
      } catch (error) {
        console.error("Failed to remove product from cart", error);
        toast.error("Failed to remove product!");
      }
    } else {
      const localCart = cart.filter((item) => item.productId._id !== productId);
      localStorage.setItem("ynmc", JSON.stringify(localCart));
      setCart(localCart);
      const updatedCart = cart.filter(
        (item) => item.productId._id !== productId
      );
      removeFromCart(updatedCart);
      toast.success("Product removed from cart!");
    }
  };

  const updateQuantity = async (productId, newQuantity, currentQuantity) => {
    if (newQuantity < 1 || newQuantity > 10) return; // Prevent invalid quantities

    // Step 1: Update the UI immediately
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );

    // Step 2: Update the backend asynchronously
    if (user && user._id) {
      try {
        await axios.put(
          `${serverUrl}/api/cart/update`,
          {
            userId: user._id,
            productId,
            quantity: newQuantity,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } catch (error) {
        console.error(
          "Failed to update product quantity in the backend",
          error
        );
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.productId._id === productId
              ? { ...item, quantity: currentQuantity }
              : item
          )
        );
        toast.error("Something went wrong.");
      }
    } else {
      // Update local storage for guest users
      const newCart = cart.map((item) =>
        item.productId._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
      localStorage.setItem("ynmc", JSON.stringify(newCart));
    }
  };

  const increaseQuantity = (productId, currentQuantity) => {
    const newQuantity = currentQuantity + 1;
    updateQuantity(productId, newQuantity, currentQuantity);
  };

  const decreaseQuantity = (productId, currentQuantity) => {
    const newQuantity = currentQuantity - 1;
    updateQuantity(productId, newQuantity, currentQuantity);
  };

  const handleNavigation = () => {
    if (user && user._id) {
      router.push("/checkout");
    } else {
      router.push("/login");
    }
  };

  if (loading || !cart) {
    return (
      <div className="flex justify-center items-center w-full text-xl min-h-screen">
        <AiOutlineLoading3Quarters className="animate-spin w-8 h-8" />
      </div>
    );
  }

  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <div className="mb-4 md:mb-8 flex justify-between items-center">
        <nav className="">
          <ul className="flex space-x-2 text-sm md:text-base">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <Link href="/products" className="text-blue-600 hover:underline">
                Products
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="text-gray-600">Cart</span>
            </li>
          </ul>
        </nav>
        <Link
          href="/products"
          className="text-sm text-blue-500 md:p-2 hidden md:block"
        >
          Continue Shopping
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-2/3">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl md:text-3xl font-bold">Shopping Cart</h1>
          </div>

          {cart.length === 0 ? (
            <p className="mb-6 text-left text-lg text-gray-600">
              Your cart is empty {":("}
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-8">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="bg-white h-32 md:h-44 p-2 rounded-lg shadow-lg flex flex-row items-stretch justify-between gap-2"
                >
                  <div className="relative w-28 h-28 md:w-40">
                    <Image
                      src={item?.productId?.productImages[0]}
                      alt={item?.productId?.name || "Product Image"}
                      width={1000}
                      height={1000}
                      className="rounded-lg w-full border border-gray-300"
                    />
                  </div>
                  <div className="w-full h-28 flex flex-col justify-between md:ml-4 flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="md:text-lg font-bold text-gray-800">
                        {item?.productId?.name}
                      </h3>
                      <div className="text-gray-600 flex justify-center items-center gap-2">
                        <p>{item?.productId?.rating}</p>
                        <IoMdStar className="w-4 h-4 md:w-5 md:h-5 text-[#debb02]" />
                      </div>
                    </div>
                    <p className="text-gray-600 md:mb-2 text-sm md:text-base">
                      {item?.productId?.category}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs md:text-sm line-through">
                        ₹{item?.productId?.mrp?.toFixed(2) || "0.00"}
                      </p>
                      <p className="md:text-lg font-bold">
                        ₹{item?.productId?.price?.toFixed(2) || "0.00"}
                      </p>
                    </div>
                    <div className="flex items-center justify-between md:mt-4">
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            decreaseQuantity(
                              item?.productId?._id.toString(),
                              item?.quantity
                            )
                          }
                          className="text-sm bg-gray-200 px-[12px] py-1 rounded-md shadow-md focus:outline-none"
                          disabled={item?.quantity === 1}
                        >
                          -
                        </button>
                        <p className="mx-4 text-lg">{item?.quantity}</p>
                        <button
                          onClick={() =>
                            increaseQuantity(
                              item?.productId?._id.toString(),
                              item?.quantity
                            )
                          }
                          className="text-sm bg-gray-200 px-[10px] py-1 rounded-md shadow-md focus:outline-none"
                          disabled={item?.quantity === 10}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          handleRemoveFromCart(item?.productId?._id.toString())
                        }
                        className="md:p-2 text-gray-500 hover:text-red-500 focus:outline-none"
                      >
                        <IoTrashBinOutline className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className=" bg-white rounded-lg shadow-lg p-4 w-full md:w-1/3 gap-4 h-[360px] relative md:sticky md:top-20">
            <div className="flex flex-col justify-between h-full">
              <h2 className="text-xl md:text-2xl font-semibold">
                Order Summary
              </h2>
              <div className="flex justify-between text-gray-600">
                <p>Subtotal</p>
                <p>₹{totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-gray-600">
                <p>Estimated Shipping</p>
                <p>₹0.00</p>
              </div>
              <div className="flex justify-between text-gray-600">
                <p>Taxes</p>
                <p>₹0.00</p>
              </div>
              <div className="border-t border-gray-300 mt-2"></div>
              <div className="flex justify-between font-semibold">
                <p>Total</p>
                <p>₹{totalPrice.toFixed(2)}</p>
              </div>
              <button
                onClick={handleNavigation}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                disabled={cart.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
