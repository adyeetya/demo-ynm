'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { products } from '../../data/Products'
import { useCart } from '../../context/cartContext'

import { IoMdStar } from 'react-icons/io'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '400', subsets: ['latin'] })

const ProductsPage = () => {
  const { addToCart } = useCart()
  const [sortOrder, setSortOrder] = useState('')
  const [filterCategory, setFilterCategory] = useState('')
  const [openDropdown, setOpenDropdown] = useState(null)
  const sortRef = useRef(null)
  const filterRef = useRef(null)

  const handleAddToCart = (product) => {
    addToCart(product)
  }

  const calculatePercentageOff = (mrp, price) => {
    return ((mrp - price) / mrp) * 100
  }

  const handleSortChange = (value) => {
    setSortOrder(value)
    setOpenDropdown(null)
  }

  const handleFilterChange = (value) => {
    setFilterCategory(value)
    setOpenDropdown(null)
  }

  const handleOutsideClick = (e) => {
    if (
      sortRef.current &&
      !sortRef.current.contains(e.target) &&
      openDropdown === 'sort'
    ) {
      setOpenDropdown(null)
    }
    if (
      filterRef.current &&
      !filterRef.current.contains(e.target) &&
      openDropdown === 'filter'
    ) {
      setOpenDropdown(null)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [openDropdown])

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === 'price-low-to-high') {
      return a.price - b.price
    } else if (sortOrder === 'price-high-to-low') {
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
        <div className="mb-4 md:mb-0 flex flex-col gap-2 w-full md:w-fit relative text-sm md:text-md">
          <div className="relative w-full" ref={sortRef}>
            <label
              onClick={() =>
                setOpenDropdown(openDropdown === 'sort' ? null : 'sort')
              }
              className="cursor-pointer flex items-center w-full capitalize"
            >
              Sort by{' '}
              {sortOrder && (
                <span className="font-semibold text-blue-600 ml-2">
                  {' '}
                  {sortOrder.replace(/-/g, ' ')}
                </span>
              )}
              {openDropdown === 'sort' ? (
                <BsChevronUp className="ml-2" />
              ) : (
                <BsChevronDown className="ml-2" />
              )}
            </label>
            {openDropdown === 'sort' && (
              <div className="absolute top-8 left-0 w-full md:w-56 bg-white border border-gray-300 rounded-lg shadow-md py-2 px-4 z-10">
                <div
                  onClick={() => handleSortChange('price-low-to-high')}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md"
                >
                  Price: Low to High
                </div>
                <div
                  onClick={() => handleSortChange('price-high-to-low')}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md"
                >
                  Price: High to Low
                </div>
                <div
                  onClick={() => handleSortChange('rating')}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md"
                >
                  Rating
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mb-4 md:mb-0 flex flex-col gap-2 w-full md:w-fit relative text-sm md:text-md">
          <div className="relative w-full md:w-auto" ref={filterRef}>
            <label
              onClick={() =>
                setOpenDropdown(openDropdown === 'filter' ? null : 'filter')
              }
              className="cursor-pointer flex items-center md:justify-end w-full"
            >
              Filter by Category{' '}
              {filterCategory && (
                <span className="font-semibold text-blue-600 ml-2">
                  {filterCategory}
                </span>
              )}
              {openDropdown === 'filter' ? (
                <BsChevronUp className="ml-2" />
              ) : (
                <BsChevronDown className="ml-2" />
              )}
            </label>
            {openDropdown === 'filter' && (
              <div className="absolute top-8 right-0 w-full md:w-60 bg-white border border-gray-300 rounded-lg shadow-md py-2 px-4 z-10">
                <div
                  onClick={() => handleFilterChange('')}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md"
                >
                  All
                </div>
                {uniqueCategories.map((category) => (
                  <div
                    key={category}
                    onClick={() => handleFilterChange(category)}
                    className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md"
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
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
                  className="w-full object-cover rounded-xl"
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
