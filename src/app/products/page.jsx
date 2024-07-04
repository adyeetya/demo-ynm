'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '../../data/Products'
import { useCart } from '../../context/cartContext'

import { IoMdStar } from 'react-icons/io'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

const ProductsPage = () => {
  const { addToCart } = useCart()
  const [sortOrder, setSortOrder] = useState('')
  const [filterCategory, setFilterCategory] = useState('')

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  const calculatePercentageOff = (mrp, price) => {
    return ((mrp - price) / mrp) * 100
  }

  const handleSortChange = (e) => {
    setSortOrder(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value)
  }

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'low-to-high') {
      return a.price - b.price
    } else if (sortOrder === 'high-to-low') {
      return b.price - a.price
    } else if (sortOrder === 'rating') {
      return b.rating - a.rating
    } else {
      return 0
    }
  })

  const filteredProducts = sortedProducts.filter((product) => {
    if (filterCategory) {
      return product.category === filterCategory
    }
    return true
  })

  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ]

  return (
    <div
      className={`p-4 md:py-6 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="mb-4 md:mb-0 flex flex-col gap-2 w-full md:w-fit">
          <label className="mr-2">Sort by</label>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="border p-2 rounded-md"
          >
            <option value="">Select</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div className="mb-4 md:mb-0 flex flex-col gap-2 w-full md:w-fit">
          <label className="mr-2">Filter by Category</label>
          <select
            value={filterCategory}
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            <option value="">All</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const percentageOff = calculatePercentageOff(
            product.mrp,
            product.price
          )
          return (
            <div
              key={product.id}
              className="bg-[#190E0B] text-[#FFF5EA] rounded-2xl md:rounded-3xl block border overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-2"
            >
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </Link>
              <div className="p-4">
                <Link href={`/product/${product.id}`}>
                  <div>
                    <div className="flex justify-between items-center">
                      <h1 className="text-lg font-bold mb-1">{product.name}</h1>
                      <div className="text-gray-300 flex justify-center items-center gap-2">
                        <p>{product.rating}</p>
                        <IoMdStar className="w-4 h-4 md:w-5 md:h-5 text-[#debb02]" />
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{product.category}</p>
                  </div>
                </Link>
                <p className="text-gray-400 mt-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-sm font-semibold text-green-600 border border-green-500 rounded px-2 py-1">
                    {percentageOff.toFixed(0)}% off
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm line-through">
                      ₹{product.mrp.toFixed(2)}
                    </p>
                    <p className="text-lg font-bold">
                      ₹{product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-4 bg-[#FFF5EA] text-black px-6 py-2 rounded-full hover:bg-gray-300 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductsPage
