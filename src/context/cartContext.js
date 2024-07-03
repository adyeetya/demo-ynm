'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'
const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  const addToCart = (product) => {
    const productId = product.id

    // Check if the product already exists in the cart
    const isProductInCart = cart.some((item) => item.id === productId)

    if (isProductInCart) {
      // Product already exists in cart, show a toast or alert
      toast('This product is already in your cart!')
      return
    }

    // Product does not exist in cart, add it
    const updatedCart = [...cart, product]
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    toast.success('Product added to cart!')
  }

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId)
    setCart(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem('cart')
  }

  const cartCount = cart.length

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, cartCount }}
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
