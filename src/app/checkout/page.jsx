'use client'
import React from 'react'
import { useCart } from '../../context/cartContext'
import Image from 'next/image'
import { FaRegEdit } from 'react-icons/fa'
import { FaShippingFast } from 'react-icons/fa'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
const poppins = Poppins({ weight: '400', subsets: ['latin'] })
const CheckoutPage = () => {
  const { cart } = useCart()

  // Calculate total price based on quantity
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <div className="mb-4 md:mb-8 hidden md:flex">
        <Link
          href="/"
          className="text-[12px] md:text-sm px-2 py-1 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
        >
          Home{' '}
        </Link>
      </div>
      <h1 className="text-xl md:text-3xl font-bold mb-2">Checkout</h1>

      <div className="mb-8 p-3 bg-white rounded-lg shadow-md">
        <div className="flex items-center mb-4 gap-2 text-gray-600">
          <FaShippingFast className="w-6 h-6" />
          <span className="font-semibold text-[#190E0B]">
            Get Delivery By 5th July
          </span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-[#190E0B]">
            Delivering To
          </h2>
          <button
            onClick={() =>
              alert('Change address functionality to be implemented')
            }
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <FaRegEdit className="w-6 h-6" />
            <span className="ml-1 text-sm font-medium">Change</span>
          </button>
        </div>
        <div className="border-l-4 border-[#190E0B] pl-4">
          <p className="font-medium text-gray-800">Aditya Singh</p>
          <p className="text-gray-600">+91 8787887878</p>
          <p className="text-gray-600">123 Main Street</p>
          <p className="text-gray-600">City, State, ZIP</p>
          <p className="text-gray-600">Country</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Your Items</h2>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b border-gray-200 py-4"
            >
              <div className="w-20 h-20 relative rounded-lg overflow-hidden mr-4">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
                <p className="text-gray-600">
                  ₹{item.price.toFixed(2)} per item
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1 flex flex-col justify-between">
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
            className="rounded-full hover:bg-orange-600 transition-colors bg-black text-white px-8 py-2 text-center"
            onClick={() => alert('Payment functionality to be implemented')}
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
