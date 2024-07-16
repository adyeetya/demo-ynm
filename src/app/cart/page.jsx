'use client'
import React, { useState, useEffect } from 'react'
import { useCart } from '../../context/cartContext'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdStar } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ weight: '400', subsets: ['latin'] })
const CartPage = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart()
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [user, setUser] = useState({})
  const router = useRouter()
  useEffect(() => {
    setCartItems(cart)

    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
    setTotalPrice(totalPrice)
  }, [cart])

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId)
  }

  const handleClearCart = () => {
    clearCart()
  }

  const handleNavigation = () => {
    if (Object.keys(user).length) {
      router.push('/checkout')
    } else {
      router.push('/login?referrer=cart')
    }
  }

  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <div className="mb-4 md:mb-8 hidden md:flex">
        <Link
          href="/"
          className="text-[12px] md:text-sm px-2 py-1 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-gray-100"
        >
          Home{' '}
        </Link>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-3xl font-bold">Shopping Cart</h1>
        <button
          onClick={handleClearCart}
          className="border border-red-500 text-sm hover:bg-red-500 hover:text-gray-100 text-black px-4 py-2 rounded-md shadow-md focus:outline-none"
        >
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="mb-6 text-center text-lg text-gray-600">
          Your cart is empty.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-2 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div className="relative w-full h-auto">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  objectFit="contain"
                  className="rounded-t-lg w-full h-full"
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <div className="text-gray-600 flex justify-center items-center gap-2">
                    <p>{item.rating}</p>
                    <IoMdStar className="w-4 h-4 md:w-5 md:h-5 text-[#debb02]" />
                  </div>
                </div>
                <p className="text-gray-600 mb-2"> {item.category}</p>
                <div className="flex items-center gap-2">
                  <p className="mt- text-sm line-through">
                    ₹{item.mrp.toFixed(2)}
                  </p>
                  <p className="mt- text-xl font-bold">
                    ₹{item.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="text-sm bg-gray-200 px-[12px] py-1 rounded-md shadow-md focus:outline-none"
                    >
                      -
                    </button>
                    <p className="mx-4 text-lg">{item.quantity}</p>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="text-sm bg-gray-200 px-[10px] py-1 rounded-md shadow-md focus:outline-none"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className=" text-red-500 hover:text-red-700 transition-colors"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="my-8 md:my-12">
        {cartItems.length === 0 ? (
          <Link
            href="/"
            className="block w-full md:inline-block md:w-auto rounded-full hover:bg-orange-600 transition-colors bg-black text-gray-100 px-8 py-2 text-center mb-4 md:mb-0"
          >
            Home
          </Link>
        ) : (
          <>
            <p className="text-2xl font-bold mb-8 md:mb-12 text-center md:text-left">
              Total: ₹{totalPrice.toFixed(2)}
            </p>
            <button
              onClick={handleNavigation}
              className="block w-full md:inline-block md:w-auto rounded-full hover:bg-orange-600 transition-colors bg-black text-gray-100 px-8 py-2 text-center"
            >
              Check Out
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default CartPage
