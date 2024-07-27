'use client'
import React, { useState, useEffect } from 'react'
import { useUser } from '../../context/userContext'
import axios from 'axios'
import Image from 'next/image'
import {
  FaRegEdit,
  FaShippingFast,
  FaChevronUp,
  FaChevronDown,
} from 'react-icons/fa'
import { Poppins } from 'next/font/google'
import Link from 'next/link'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
const poppins = Poppins({ weight: '400', subsets: ['latin'] })

const CheckoutPage = () => {
  const [cart, setCart] = useState([])
  const [showOffers, setShowOffers] = useState(false)
  const [token, setToken] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('ynmtoken') : null
  )
  const { user } = useUser()
  console.log(user)
  const userId = user?._id

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          `${serverUrl}/api/cart/getCart/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        if (response.status === 200) {
          console.log('res cart', response.data.cart)
          setCart(response.data.cart)
        }
      } catch (error) {
        console.error('Error fetching cart:', error)
      }
    }

    fetchCart()
  }, [user, token])

  // Calculate total price based on quantity
  const totalPrice = cart.reduce(
    (acc, item) => acc + item?.productId?.price * item.quantity,
    0
  )

  const offers = [
    '10% off on orders above ₹500',
    'Free shipping on your first order',
    'Buy 1 get 1 free on select items',
  ]

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
            Get Delivery By 5th July
          </span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-[#2d0f12]">
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
        <div className="border-l-4 border-[#2d0f12] pl-4">
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
              key={item._id}
              className="flex items-center border-b border-gray-200 py-4"
            >
              <div className="w-20 h-20 relative rounded-lg overflow-hidden mr-4">
                <Image
                  src={item?.productId?.imageUrl}
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
              {showOffers ? 'Hide Offers' : 'View Offers'}
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
            className="rounded-full hover:bg-orange-600 transition-colors bg-black text-gray-100 px-8 py-2 text-center"
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
