'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedCart = sessionStorage.getItem('cart')
      return storedCart ? JSON.parse(storedCart) : []
    } else {
      return []
    }
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  const addToCart = (product) => {
    const productId = product.id

    const isProductInCart = cart.some((item) => item.id === productId)

    if (isProductInCart) {
      toast('This product is already in your cart!')
      return
    }

    const updatedCart = [...cart, { ...product, quantity: 1 }]
    setCart(updatedCart)
    toast.success('Product added to cart!')
  }

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId)
    setCart(updatedCart)
  }

  const clearCart = () => {
    setCart([])
    sessionStorage.removeItem('cart')
  }

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
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
