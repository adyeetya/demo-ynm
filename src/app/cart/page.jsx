'use client'
import { useState, useEffect } from 'react'
import { useCart } from '../../context/cartContext'
import Image from 'next/image'
import Link from 'next/link'

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart() // Import clearCart from context
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setCartItems(cart) // Initial load of cart items

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    setTotalPrice(totalPrice)
  }, [cart]) // Listen for changes in cart to update cartItems and total price

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId) // Remove item from cart
    setCartItems(cart.filter((item) => item.id !== productId)) // Update cartItems state
  }

  const handleClearCart = () => {
    clearCart() // Clear the cart
    setCartItems([]) // Update cartItems state to empty array
  }

  return (
    <div className="p-4 md:py-6 max-w-screen-xl mx-auto min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-3xl font-bold ">Shopping Cart</h1>
        <button
          onClick={handleClearCart}
          className="border border-red-500 text-sm hover:bg-red-500 hover:text-white text-black px-2 py-1 rounded-md shadow-md focus:outline-none"
        >
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="mb-6">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between w-full"
            >
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={200}
                height={200}
                className="rounded-lg w-full h-full"
              />
              <div>
                <h3 className="mt-2 text-lg font-bold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="mt-2 text-gray-800 py-2 hover:text-red-500 transition-colors"
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="my-8 md:my-12 ">
        {cartItems.length === 0 ? (
          <Link
            href="/"
            className="block w-full md:inline-block md:w-auto rounded-full hover:bg-orange-600 transition-colors bg-black text-white px-8 py-2 text-center  mb-4 md:mb-0"
          >
            Home
          </Link>
        ) : (
          <>
            <p className="text-xl font-bold mb-8 md:mb-12 text-center md:text-left" >
              Total: ${totalPrice.toFixed(2)}
            </p>
            <Link
              href="/checkout"
              className="block w-full md:inline-block md:w-auto rounded-full hover:bg-orange-600 transition-colors bg-black text-white px-8 py-2 text-center "
            >
              Check Out
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default CartPage
