'use client'
import React from 'react'
import Image from 'next/image'
import { IoMdStar } from 'react-icons/io'
import { products } from '../../data/Products'
import { useCart } from '../../context/cartContext'
import { useProducts } from '../../context/productContext'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

const Products = () => {
  const { addToCart } = useCart()
  const { products, isLoading, isError } = useProducts()
  const handleAddToCart = (product) => {
    addToCart(product)
  }
  return (
    <div className="p-4 md:py-6 max-w-screen-xl mx-auto ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Best Sellers</h2>
        <Link href="/products" className="text-blue-500">
          View All Products
        </Link>
      </div>

      <div className="flex flex-wrap sm:justify-around gap-4 md:gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="border border-gray-300 rounded-2xl md:rounded-3xl shadow-xl p-2 md:p-2 flex flex-col h-[20rem] sm:h-[23rem] w-[calc(50%-0.5rem)] sm:w-44 md:h-[24rem] md:w-72"
          >
            <Link
              href={`/product/${product._id}`}
              className="relative w-full h-[60%] overflow-hidden mb-4"
            >
              <Image
                src={product.productImages[0]}
                alt={product.name}
                width={1000}
                height={1000}
                className="rounded-xl md:rounded-2xl object-cover w-full h-full"
              />
            </Link>
            <div className="h-[40%] flex flex-col justify-between">
              <div>
                <Link href={`/product/${product._id}`}>
                  <h3 className="text-sm md:text-lg">{product.name}</h3>
                </Link>
                <p className="text-[10px] md:text-sm text-gray-700">
                  {product.category}
                </p>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-600">
                {product.description}
              </p>
              <div className="flex items-center justify-between mx-2 md:mx-3">
                <div className="text-[12px] md:text-sm flex items-center justify-center gap-1 md:gap-2">
                  {product.rating}{' '}
                  <IoMdStar className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mb-[2px]" />
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className=" text-white py-1 px-2 md:px-3 border hover:border-black rounded-lg hover:bg-white hover:text-black bg-black transition-colors duration-300 text-[9px] md:text-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
