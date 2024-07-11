'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IoMdStar } from 'react-icons/io'
import { products } from '../../data/Products'
import { useCart } from '../../context/cartContext'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../components/ui/carousel'
const Products = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0)
  const { addToCart } = useCart()
  const handleAddToCart = (product) => {
    addToCart(product)
  }

  // Assuming you want to display only the first product
  const product = products[0]

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index)
  }

  return (
    <div className="p-4 md:py-6 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Product</h2>
        <Link href="/products" className="text-blue-500">
          View All Products
        </Link>
      </div>
      <div className="flex justify-center">
        <div
          key={product.id}
          className="bg-[#0a172c] text-gray-100 rounded-2xl md:rounded-3xl shadow-md p-2 flex flex-col lg:flex-row w-full"
        >
          {/* left side */}
          <div className="h-fit flex flex-col-reverse md:flex-row items-center gap-4 w-full md:w-1/2 relative md:sticky md:top-20 ">
            {/* vertical carousel for desktop */}
            <div className="hidden md:flex justify-center items-center h-fit">
              <Carousel
                opts={{
                  align: 'center',
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
                <CarouselPrevious className="bg-[#0a172c] text-gray-100 border-none" />
                <CarouselNext className="bg-[#0a172c] text-gray-100 border-none" />
              </Carousel>
            </div>
            {/* horizontal carousel for mobile */}
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
                <CarouselPrevious className="bg-[#0a172c] text-gray-100 border-none" />
                <CarouselNext className="bg-[#0a172c] text-gray-100 border-none" />
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
          <div className="lg:w-1/2 flex flex-col justify-between p-4">
            <div>
              <Link href={`/product/${product.id}`}>
                <h3 className="text-lg md:text-xl xl:text-4xl mb-2">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm md:text-md xl:text-2xl text-gray-300 mb-4">
                {product.category}
              </p>
              <p className="text-sm md:text-md xl:text-xl text-gray-400 mb-4">
                {product.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="text-sm md:text-md flex items-center gap-2">
                {product.rating}
                <IoMdStar className="w-5 h-5 text-[#debb02] mb-[2px]" />
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300 text-sm md:text-base"
              >
                Add to cart
              </button>
            </div>
            <Link href={`/product/${product.id}`}>
              <button className="bg-blue-500 text-gray-100 py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300 text-sm w-full">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
