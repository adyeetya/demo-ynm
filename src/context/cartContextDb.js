'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useUser } from './userContext'
import { toast } from 'react-hot-toast'
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const { user } = useUser() // Access user context
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCart = async () => {
      if (user && user._id) {
        try {
          const response = await axios.get(
            `${serverUrl}/api/cart/getCart/${user._id}`,
            {
              withCredentials: true,
            }
          )
          if (response.status === 200) {
            setCart(response.data.cart)
          }
        } catch (error) {
          console.error('Failed to fetch cart', error)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchCart()
  }, [user])

  const addToCart = async (product) => {
    if (user && user._id) {
      try {
        await axios.post(
          `${serverUrl}/api/cart/add`,
          {
            userId: user._id,
            productId: product.id,
            quantity: 1, // Default quantity or adjust as needed
          },
          {
            withCredentials: true,
          }
        )
        toast.success('Product added to cart!')
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }])
      } catch (error) {
        toast.error('Failed to add product to cart')
        console.error('Failed to add product to cart', error)
      }
    } else {
      toast.error('User not logged in')
    }
  }

  const removeFromCart = async (productId) => {
    if (user && user._id) {
      try {
        await axios.delete(
          `${serverUrl}/api/cart/remove`,
          {
            data: { userId: user._id, productId },
            withCredentials: true,
          }
        )
        toast.success('Product removed from cart!')
        setCart((prevCart) =>
          prevCart.filter((item) => item.productId !== productId)
        )
      } catch (error) {
        toast.error('Failed to remove product from cart')
        console.error('Failed to remove product from cart', error)
      }
    } else {
      toast.error('User not logged in')
    }
  }

  const clearCart = async () => {
    if (user && user._id) {
      try {
        await axios.delete(
          `${serverUrl}/api/cart/empty`,
          {
            data: { userId: user._id },
            withCredentials: true,
          }
        )
        toast.success('Cart emptied!')
        setCart([])
      } catch (error) {
        toast.error('Failed to empty cart')
        console.error('Failed to empty cart', error)
      }
    } else {
      toast.error('User not logged in')
    }
  }

  const increaseQuantity = async (productId) => {
    if (user && user._id) {
      try {
        await axios.put(
          `${serverUrl}/api/cart/update`,
          {
            userId: user._id,
            productId,
            quantity:
              cart.find((item) => item.productId === productId).quantity + 1,
          },
          {
            withCredentials: true,
          }
        )
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        )
      } catch (error) {
        toast.error('Failed to update product quantity')
        console.error('Failed to update product quantity', error)
      }
    } else {
      toast.error('User not logged in')
    }
  }

  const decreaseQuantity = async (productId) => {
    if (user && user._id) {
      const currentQuantity = cart.find(
        (item) => item.productId === productId
      ).quantity
      if (currentQuantity > 1) {
        try {
          await axios.put(
            `${serverUrl}/api/cart/update`,
            {
              userId: user._id,
              productId,
              quantity: currentQuantity - 1,
            },
            {
              withCredentials: true,
            }
          )
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.productId === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          )
        } catch (error) {
          toast.error('Failed to update product quantity')
          console.error('Failed to update product quantity', error)
        }
      }
    } else {
      toast.error('User not logged in')
    }
  }

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        cartCount,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}