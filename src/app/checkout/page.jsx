"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "../../context/userContext";
import axios from "axios";
import Image from "next/image";
import {
  FaRegEdit,
  FaShippingFast,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

import Link from "next/link";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { LuFileLock } from "react-icons/lu";
import CustomDropdown from "./StateDropdown";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);
  const [showOffers, setShowOffers] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [token, setToken] = useState(
    typeof window !== "undefined" ? Cookies.get("ynmtoken") : null
  );
  const { user, setUser } = useUser();
  // console.log(user)
  const userId = user?._id;
  const [newAddress, setNewAddress] = useState({});
  useEffect(() => {
    if (user) {
      setNewAddress({
        address: user.address || "",
        landmark: user.landmark || "",
        city: user.city || "",
        state: user.state || "",
        pincode: user.pincode || "",
      });
    }
  }, [user]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          `${serverUrl}/api/cart/getCart/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (response.status === 200) {
          // console.log('res cart', response.data.cart)
          setCart(response.data.cart);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, [user, token, userId]);

  // Calculate total price based on quantity
  const totalPrice = cart.reduce(
    (acc, item) => acc + item?.productId?.price * item.quantity,
    0
  );

  const offers = [
    "10% off on orders above ₹500",
    "Free shipping on your first order",
    "Buy 1 get 1 free on select items",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const updatedAddress = {
        ...user,
        ...newAddress,
      };

      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/update/${user._id}`,
        updatedAddress,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      if (response.status !== 200) {
        toast.error(data.message || "Failed to update address");
        throw new Error("Failed to update user information");
      }
      const { data } = response;

      setIsEditing(false);
      setUser(data.user);
      toast.success("Address updated successfully");
    } catch (error) {
      console.error("Error updating address:", error);
      toast.error("Failed to update address");
    }
  };
  const twoDaysFromNow = new Date();
  twoDaysFromNow.setDate(twoDaysFromNow.getDate() + 2);
  const deliveryDate = twoDaysFromNow.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
  });

  const simulatePayment = async () => {
    try {
      const response = await axios.post(
        `${serverUrl}/api/users/simulatePayment`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Payment successful and order placed!");
        setCart([]); // Clear the cart on the frontend
      } else {
        toast.error("Payment failed, please try again.");
      }
    } catch (error) {
      console.error("Error during payment simulation:", error);
      toast.error("Payment failed, please try again.");
    }
  };

  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <nav className="mb-4 md:mb-8">
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
            <Link href="/cart" className="text-blue-600 hover:underline">
              Cart
            </Link>
          </li>
          <li>
            <span className="text-gray-400">/</span>
          </li>
          <li>
            <span className="text-gray-600">Checkout</span>
          </li>
        </ul>
      </nav>
      <h1 className="text-xl md:text-3xl font-bold mb-2">Checkout</h1>

      <div className="mb-8 p-3 bg-white rounded-lg shadow-md">
        <div className="flex items-center mb-4 gap-2 text-gray-600">
          <FaShippingFast className="w-6 h-6" />
          <span className="font-semibold text-[#2d0f12]">
            Get Delivery By {deliveryDate}
          </span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-[#2d0f12]">
            Delivering To
          </h2>
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaRegEdit className="w-6 h-6" />
            <span className="ml-1 text-sm font-medium">Change</span>
          </button>
        </div>
        {isEditing ? (
          <div className="border-l-4 border-[#2d0f12] pl-4">
            <input
              type="text"
              name="address"
              value={newAddress.address}
              onChange={handleChange}
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
              placeholder="Address"
            />
            <input
              type="text"
              name="landmark"
              value={newAddress.landmark}
              onChange={handleChange}
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
              placeholder="Landmark"
            />
            <input
              type="text"
              name="city"
              value={newAddress.city}
              onChange={handleChange}
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
              placeholder="City"
            />
            {/* <input
              type="text"
              name="state"
              value={newAddress.state}
              onChange={handleChange}
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
              placeholder="State"
            /> */}
            <CustomDropdown
              selected={newAddress.state}
              onSelectedChange={(value) =>
                setNewAddress((prev) => ({ ...prev, state: value }))
              }
            />
            <input
              type="text"
              name="pincode"
              value={newAddress.pincode}
              onChange={handleChange}
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
              placeholder="Pincode"
            />

            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-600 text-white rounded ml-2"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="border-l-4 border-[#2d0f12] pl-4">
            <p className="font-medium text-gray-800">{user?.name}</p>
            <p className="text-gray-600">+91 {user?.phoneNumber}</p>
            <p className="text-gray-600">{user?.address}</p>
            <p className="text-gray-600">{user?.landmark}</p>
            <p className="text-gray-600">
              {user?.city}, {user?.state}, {user?.pincode}
            </p>
            <p className="text-gray-600">{user?.country}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Your Items</h2>
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center border-b border-gray-200 py-4"
            >
              <div className="w-20 h-20 relative rounded-lg overflow-hidden mr-4">
                <Image
                  src={item?.productId?.productImages[0]}
                  alt={item?.productId?.name}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">
                  {item?.productId?.name}
                </h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">
                  ₹{item?.productId?.price?.toFixed(2)} per item
                </p>
              </div>
            </div>
          ))}
          <div className="my-2 p-2 shadow-lg rounded-lg">
            <p className="text-semibold my-2">Apply Coupon</p>
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            <button
              onClick={() => setShowOffers((prev) => !prev)}
              className="mt-2 flex items-center text-blue-600 hover:underline"
            >
              {showOffers ? "Hide Offers" : "View Offers"}
              {showOffers ? (
                <FaChevronUp className="ml-1" />
              ) : (
                <FaChevronDown className="ml-1" />
              )}
            </button>
            {showOffers && (
              <div className="mt-2 bg-white border border-gray-200 rounded-lg p-2">
                <ul className="list-disc list-inside">
                  {offers.map((offer, index) => (
                    <li key={index} className="text-gray-700">
                      {offer}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-between max-h-60">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span>Subtotal:</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-4 mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">₹{totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="rounded-full hover:bg-blue-600 transition-colors bg-black text-gray-100 px-8 py-2 text-center"
            onClick={() => alert("Payment functionality to be implemented")}
          >
            Proceed to Pay
          </button>
          {/* <button
            className="mt-2 w-fit rounded-full hover:bg-blue-600 transition-colors bg-black text-gray-100 px-8 py-2 text-center"
            onClick={simulatePayment}
          >
            Buy now
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
