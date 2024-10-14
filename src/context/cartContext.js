"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "./userContext";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useUser();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = typeof window !== "undefined" ? Cookies.get("ynmtoken") : null;

  useEffect(() => {
    const fetchCart = async () => {
      if (user && user._id) {
        try {
          const response = await fetch(
            `${serverUrl}/api/cart/getCart/${user._id}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
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
      } else {
        const localCart = localStorage.getItem("ynmc");
        setCart(localCart ? JSON.parse(localCart) : []);
        setLoading(false);
      }
    };

    fetchCart();
  }, [user, token]);

  useEffect(() => {
    if (user && user._id) {
      const localCart = localStorage.getItem("ynmc");
      if (localCart) {
        syncLocalCartToDB(JSON.parse(localCart));
      }
    }
  }, [user]);

  const syncLocalCartToDB = async (localCart) => {
    if (user && user._id) {
      try {
        await axios.post(
          `${serverUrl}/api/cart/sync`,
          {
            userId: user._id,
            cart: localCart,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        localStorage.removeItem("ynmc"); // Clear local cart after syncing
        setCart(localCart);
      } catch (error) {
        console.error("Failed to sync cart to DB", error);
      }
    }
  };

  const addToCart = async (product) => {
    if (user && user._id) {
      try {
        const response = await axios.post(
          `${serverUrl}/api/cart/add`,
          {
            userId: user._id,
            productId: product._id,
            quantity: 1,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.status === 200) {
          let itemAlreadyInCart = false;
          setCart((prevCart) => {
            const existingItem = prevCart.find(
              (item) => item.productId._id === product._id
            );

            if (existingItem) {
              itemAlreadyInCart = true;
              return prevCart;
            } else {
              return [...prevCart, { productId: product, quantity: 1 }];
            }
          });

          if (itemAlreadyInCart) {
            toast.error("Item Already In Cart");
          } else {
            toast.success("Product added to cart!");
          }
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message);
        }
        console.error("Failed to add product to cart", error);
      }
    } else {
      let itemAlreadyInCart = false;
      setCart((prevCart) => {
        const existingItem = prevCart.find(
          (item) => item.productId._id === product._id
        );

        if (existingItem) {
          itemAlreadyInCart = true;
          return prevCart;
        } else {
          const newCart = [...prevCart, { productId: product, quantity: 1 }];
          localStorage.setItem("ynmc", JSON.stringify(newCart));
          return newCart;
        }
      });

      if (itemAlreadyInCart) {
        return false;
        toast.error("Item Already In Cart");
      } else {
        return true;
        toast.success("Product added to cart!");
      }
    }
  };

  const removeFromCart = async (updatedCart) => {
    // console.log('cart from remove from cart', cart)
    try {
      setCart(updatedCart);
    } catch (error) {
      toast.error("Failed to remove product from cart");
      console.error("Failed to remove product from cart", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
