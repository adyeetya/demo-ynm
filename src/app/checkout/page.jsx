'use client'
import React from 'react'
import { useCart } from '../../context/cartContext'
import Image from 'next/image'

const CheckoutPage = () => {
  const { cart } = useCart()

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className="p-4 md:py-12 max-w-screen-xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
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
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1 flex flex-col justify-between">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-4">
            <span>Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-4 mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${totalPrice.toFixed(2)}</span>
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
