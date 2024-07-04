'use client'
import React, { useState } from 'react'
import { products } from '../../../data/Products'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../../../context/cartContext'
import { IoMdStar } from 'react-icons/io'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../../components/ui/carousel'
const ProductPage = ({ params }) => {
  const { addToCart } = useCart()
  const { id } = params
  const [mainImageIndex, setMainImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedConcern, setSelectedConcern] = useState(null)
  const product = products.find((product) => product.id === parseInt(id))

  if (!product) {
    return <p>Product not found</p>
  }

  const handleConcernClick = (concern) => {
    setSelectedConcern(concern)
  }
  const handleThumbnailClick = (index) => {
    setMainImageIndex(index)
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  const handleQuantityChange = (months) => {
    setQuantity(months)
  }

  const similarProducts = products.filter((p) => p.id !== parseInt(id))

  const calculatePercentageOff = (mrp, price) => {
    return ((mrp - price) / mrp) * 100
  }

  const percentageOff = calculatePercentageOff(product.mrp, product.price)

  const similarProductPercentageOff = (mrp, price) => {
    return ((mrp - price) / mrp) * 100
  }

  return (
    <div className="p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen">
      
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="flex-shrink-0 flex flex-col-reverse md:flex-row  gap-4 w-full md:w-1/2 relative">
          <div className="hidden md:flex justify-center items-center  h-">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              orientation="vertical"
              className="bg flex justify-center items-center"
            >
              <CarouselContent className="  h-64">
                {product.productImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-1/3  h-16">
                    <div
                      onClick={() => handleThumbnailClick(index)}
                      className={`cursor-pointer w-16 h-16 rounded-lg overflow-hidden ${
                        index === mainImageIndex
                          ? 'border-2 border-blue-500'
                          : ''
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Product thumbnail ${index + 1}`}
                        width={1000}
                        height={1000}
                        objectFit="contain"
                        className="rounded-lg w-16 h-16"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-none" />
              <CarouselNext className="border-none" />
            </Carousel>
          </div>
          <div className="md:hidden flex justify-center items-center  h-">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="bg flex justify-center items-center"
            >
              <CarouselContent className=" w-60">
                {product.productImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-1/3 h-16 w-16">
                    <div
                      onClick={() => handleThumbnailClick(index)}
                      className={`cursor-pointer w-16 h-16 rounded-lg overflow-hidden ${
                        index === mainImageIndex
                          ? 'border-2 border-blue-500'
                          : ''
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Product thumbnail ${index + 1}`}
                        width={1000}
                        height={1000}
                        objectFit="contain"
                        className="rounded-lg w-16 h-16"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="relative w-full  overflow-hidden flex ">
            <Zoom>
              <Image
                src={product.productImages[mainImageIndex]} // Displaying the selected main image
                alt={`Product image ${mainImageIndex + 1}`}
                width={1000}
                height={1000}
                objectFit="cover"
                className="rounded-lg "
              />
            </Zoom>
          </div>
        </div>
        <div className="mt-4 md:-mt-0 flex flex-col justify- gap-4  w-full md:w-1/2">
          <div>
            <div className="flex justify-between">
              <h1 className="text-xl md:text-3xl font-bold mb-1 mt-2 md:mt-0">
                {product.name}
              </h1>
              <div className="text-gray-600 flex justify-center items-center gap-2">
                <p className="text-lg">{product.rating}</p>
                <IoMdStar className="w-4 h-4 md:w-6 md:h-6 text-[#debb02]" />
              </div>
            </div>
            <p className="text-gray-900">{product.category}</p>
          </div>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex  justify-between gap-4 items-start">
            <p className="mt- text-sm font-semibold text-green-600 border border-green-500 rounded px-2 py-1">
              {percentageOff.toFixed(0)}% off
            </p>
            <div className="flex items-center gap-2">
              <p className="mt- text-sm line-through">
                ₹{(product.mrp * quantity).toFixed(2)}
              </p>
              <p className="mt- text-xl font-bold">
                ₹{(product.price * quantity).toFixed(2)}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-semibold">Concern</p>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border border-black px-4 py-2 text-sm hover:bg-black hover:text-white ${
                    selectedConcern === 'PREMATURE EJACULATION'
                      ? 'bg-black text-white'
                      : ''
                  }`}
                  onClick={() => handleConcernClick('PREMATURE EJACULATION')}
                >
                  PREMATURE EJACULATION
                </button>
                <button
                  className={`flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border border-black px-4 py-2 text-sm hover:bg-black hover:text-white ${
                    selectedConcern === 'TALK TO CHATBOT'
                      ? 'bg-black text-white'
                      : ''
                  }`}
                  onClick={() => handleConcernClick('TALK TO CHATBOT')}
                >
                  TALK TO CHATBOT
                </button>
                <button
                  className={`flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border border-black px-4 py-2 text-sm hover:bg-black hover:text-white ${
                    selectedConcern === 'TALK TO DOCTOR'
                      ? 'bg-black text-white'
                      : ''
                  }`}
                  onClick={() => handleConcernClick('TALK TO DOCTOR')}
                >
                  TALK TO DOCTOR
                </button>
                <button
                  className={`flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border border-black px-4 py-2 text-sm hover:bg-black hover:text-white ${
                    selectedConcern === 'ASSESS YOURSELF'
                      ? 'bg-black text-white'
                      : ''
                  }`}
                  onClick={() => handleConcernClick('ASSESS YOURSELF')}
                >
                  ASSESS YOURSELF
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <p className="font-semibold">Quantity</p>
              <div className="flex gap-2">
                <button
                  className={`rounded-xl border border-black px-4 py-2 text-sm hover:bg-black hover:text-white ${
                    quantity === 1 ? 'bg-black text-white' : ''
                  }`}
                  onClick={() => handleQuantityChange(1)}
                >
                  1 Month
                </button>
                <button
                  className={`rounded-xl border border-black px-4 py-2 text-sm hover:bg-black hover:text-white ${
                    quantity === 2 ? 'bg-black text-white' : ''
                  }`}
                  onClick={() => handleQuantityChange(2)}
                >
                  2 Months
                </button>
                <button
                  className={`rounded-xl border border-black px-4 py-2 text-sm hover:bg-black hover:text-white ${
                    quantity === 3 ? 'bg-black text-white' : ''
                  }`}
                  onClick={() => handleQuantityChange(3)}
                >
                  3 Months
                </button>
              </div>
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
          {similarProducts.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="bg-[#190E0B] text-[#FFF5EA] rounded-2xl md:rounded-3xl block border overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-2"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full  object-cover rounded-xl"
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
                    {similarProductPercentageOff(
                      product.mrp,
                      product.price
                    ).toFixed(0)}
                    % off
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
