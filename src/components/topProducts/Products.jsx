'use client'
import React from 'react'
import Image from 'next/image'
import { IoMdStar } from 'react-icons/io'
import { products } from '../../data/Products'
import { useCart } from '../../context/cartContext'
import { useProducts } from '../../context/productContext'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Link from 'next/link'
import './Product.css'

const Products = () => {
  const { addToCart } = useCart()
  const { products, isLoading, isError } = useProducts()
  const handleAddToCart = (product) => {
    addToCart(product)
  }
  return (
    <div className="p-4 mb-24 md:py-6 max-w-screen-xl mx-auto ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Best Sellers</h2>
        <Link href="/products" className="text-blue-500">
          View All Products
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 md:justify-around gap-16 sm:gap-20 md:gap-24 lg:gap-8">
        {products?.map((product, index) => (
          <div
            key={product._id}
            className={`w-full p-2 md:p-2 flex  justify-center items-center gap-4 ${
              index % 2 === 0 ? 'lg:flex-row flex-row' : 'lg:flex-row flex-row-reverse'
            } `}
          >
            <Link href={`/product/${product._id}`} className="relative w-[50%]">
              <div className="">
                <Image
                  src={product.productImages[product.productImages.length - 1]}
                  alt={product.name}
                  width={1000}
                  height={1000}
                  className="product-image rounded-xl hover:scale-105 md:rounded-2xl object-cover w-full h-full"
                />
                <span id="shadow"></span>
              </div>
            </Link>
            <div className="flex w-[50%] flex-col justify-center gap-2 md:gap-4">
              <div>
                <Link href={`/product/${product._id}`}>
                  <h3 className="text-sm font-semibold md:text-2xl">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-[10px] md:text-sm text-gray-700">
                  {product.category}
                </p>
              </div>
              <p className="text-[12px] md:text-sm text-gray-600">
                {product.description}
              </p>
              <div className="flex md:flex-col items-start justify-between gap-2">
                <div className="text-[12px] md:text-sm flex items-center justify-center gap-1 md:gap-2">
                  {product.rating}{' '}
                  <IoMdStar className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mb-[2px]" />
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="text-sm md:text-base text-white py-1 px-2 md:px-3 border hover:border-black rounded-lg hover:bg-white hover:text-black bg-black transition-colors duration-300"
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
