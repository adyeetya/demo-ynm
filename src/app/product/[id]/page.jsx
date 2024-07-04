'use client'
import React from 'react'
import { products } from '../../../data/Products'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../../../context/cartContext'
import { IoMdStar } from 'react-icons/io'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

const ProductPage = ({ params }) => {
  const { addToCart } = useCart()
  const { id } = params
  const product = products.find((product) => product.id === parseInt(id))

  if (!product) {
    return <p>Product not found</p>
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  const similarProducts = products.filter((p) => p.id !== parseInt(id))

  const calculatePercentageOff = (mrp, price) => {
    return ((mrp - price) / mrp) * 100
  }

  const percentageOff = calculatePercentageOff(product.mrp, product.price)

  const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
      <div
        className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaChevronRight className="text-2xl text-gray-800" />
      </div>
    )
  }

  const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
      <div
        className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer"
        onClick={onClick}
      >
        <FaChevronLeft className="text-2xl text-gray-800" />
      </div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="p-4 md:py-12 max-w-screen-xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex-shrink-0 flex w-full md:w-1/2">
          <Slider {...settings} className="w-full">
            {product.productImages.map((image, index) => (
              <div key={index} className="relative w-full h-96">
                <Image
                  src={image}
                  alt={`Product image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg pointer-events-none"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col justify-center gap-4 md:gap-8 w-full md:w-1/2">
          <div>
            <div className="flex justify-between">
              <h1 className="text-xl md:text-3xl font-bold mb-1 mt-2 md:mt-0">{product.name}</h1>
              <div className="text-gray-600 flex justify-center items-center gap-2">
                <p className="text-lg">{product.rating}</p>
                <IoMdStar className="w-4 h-4 md:w-6 md:h-6 text-[#debb02]" />
              </div>
            </div>
            <p className="text-gray-900">{product.category}</p>
          </div>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex md:flex-col justify-between gap-4 items-start">
            <p className="mt- text-sm font-semibold text-green-600 border border-green-500 rounded px-2 py-1">
              {percentageOff.toFixed(0)}% off
            </p>
            <div className="flex items-center gap-2">
              <p className="mt- text-sm line-through">
                ₹{product.mrp.toFixed(2)}
              </p>
              <p className="mt- text-xl font-bold">
                ₹{product.price.toFixed(2)}
              </p>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="md:w-fit mt-1 md:mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarProducts.map((product) => {
            const similarProductPercentageOff = calculatePercentageOff(
              product.mrp,
              product.price
            )
            return (
              <Link
                href={`/product/${product.id}`}
                key={product.id}
                className="bg-[#190E0B] text-[#FFF5EA] rounded-2xl md:rounded-3xl block border overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-4"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="p-4">
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
                  <div className="flex justify-between items-center mt-4">
                    <p className="w-fit mt- text-sm font-semibold text-green-500 border border-green-500 rounded px-2 py-1">
                      {similarProductPercentageOff.toFixed(0)}% off
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="mt- text-sm line-through">
                        ₹{product.mrp.toFixed(2)}
                      </p>
                      <p className="mt- text-lg font-bold">
                        ₹{product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
