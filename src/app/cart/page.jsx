'use client'
import React, { useState, useEffect } from 'react'
import { useCart } from '../../context/cartContext'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdStar } from 'react-icons/io'
import { IoTrashBinOutline } from 'react-icons/io5'
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

      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="w-full md:w-2/3">
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
            <div className="grid grid-cols-1 gap-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white h-44 p-2 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-stretch justify-between"
                >
                  <div className="relative w-40 h-full">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg border border-gray-300"
                    />
                  </div>
                  <div className="mt-4 md:mt-0 flex flex-col justify-between md:ml-4 flex-1">
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
                       <IoTrashBinOutline className='w-6 h-6'/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full md:w-1/3 mt-8 md:mt-0 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Order Summary</h2>
          <div className="mb-4 flex justify-between items-center">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-bold">₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="mb-4 flex justify-between items-center">
            <span className="text-gray-600">Shipping</span>
            <span className="font-bold">₹50.00</span>
          </div>
          <div className="mb-4 flex justify-between items-center">
            <span className="text-gray-600">Promo Discount</span>
            <span className="font-bold">-₹50.00</span>
          </div>
          <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
            <span className="text-gray-600">Total</span>
            <span className="text-xl md:text-2xl font-bold">
              ₹{(totalPrice + 50).toFixed(2)}
            </span>
          </div>
          <button
            onClick={handleNavigation}
            className="w-full mt-6 rounded-full hover:bg-orange-600 transition-colors bg-black text-gray-100 px-8 py-2 text-center"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage
