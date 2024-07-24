'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IoMdStar } from 'react-icons/io'
import { useCart } from '../../context/cartContext'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Link from 'next/link'
import { useProducts } from '../../context/productContext'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../components/ui/carousel'
const Products = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0)

  const { products, isLoading, isError } = useProducts()
  const { addToCart } = useCart()
  const handleAddToCart = (product) => {
    addToCart(product)
  }

  // Assuming you want to display only the first product
  const product = products[0]

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index)
  }
  if (isLoading)
    return (
      <div className="flex justify-center w-full text-xl">
        <AiOutlineLoading3Quarters className="animate-spin w-8 h-8" />
      </div>
    )
  if (isError) return <div>Error loading products</div>
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
          className="bg-white text-black rounded-2xl md:rounded-3xl shadow-lg p-2 flex flex-col lg:flex-row w-full"
        >
          {/* left side */}
          <div className="h-fit flex flex-col-reverse lg:flex-row items-center justify-center gap-4 w-full md:w-1/2 mx-auto relative ">
            {/* vertical carousel for desktop */}
            <div className="hidden lg:flex justify-center items-center h-fit">
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
                <CarouselPrevious className="bg-white text-black border-none" />
                <CarouselNext className="bg-white text-black border-none" />
              </Carousel>
            </div>
            {/* horizontal carousel for mobile */}
            <div className="lg:hidden flex justify-center items-center">
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
                <CarouselPrevious className="bg-white text-black border-none" />
                <CarouselNext className="bg-white text-black border-none" />
              </Carousel>
            </div>

            <div className="relative w-full overflow-hidden flex ">
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
                <h3 className="text-lg md:text-xl xl:text-4xl mb-2 font-semibold">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm md:text-md xl:text-xl  mb-4 text-yellow-500">
                {product.category}
              </p>
              <p className="text-sm xl:text-base text-gray-800 mb-4">
                {product.description}
              </p>
            </div>
            <div className="flex justify-around items-center overflow-hidden mt-auto md:mx-8">
              <div className="flex flex-col justify-between items-center w-16 md:w-24 my-4 md:my-0">
                <img
                  src="/images/product/medical-globe.png"
                  alt="WHO Certified"
                  className="w-12 h-12 md:w-16 md:h-16"
                />
                <p className="mt-2 text-xs text-center">
                  WHO <br className="hidden md:block" /> Certified
                </p>
              </div>
              <div className="flex flex-col justify-between items-center w-16 md:w-24">
                <div className="rounded-full border-2 border-gray-800 w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
                  <img
                    src="/images/product/rabit.png"
                    alt="Cruelty Free"
                    className="w-12 h-12 md:w-16 md:h-16"
                  />
                </div>
                <p className="mt-2 text-xs text-center">
                  Cruelty <br className="hidden md:block" /> Free
                </p>
              </div>
              <div className="flex flex-col justify-between items-center w-16 md:w-24">
                <div className="rounded-full border-2 border-gray-800 w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
                  <img
                    src="/images/product/test.png"
                    alt="Lab Tested"
                    className=" w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
                <p className="mt-2 text-xs text-center">
                  Lab <br className="hidden md:block" /> Tested
                </p>
              </div>
              <div className="flex flex-col justify-between items-center w-16 md:w-24">
                <div className="rounded-full border-2 border-gray-800 w-12 h-12 md:w-16 md:h-16 flex justify-center items-center">
                  <img
                    src="/images/product/atom.png"
                    alt="Scientifically Proven"
                    className="w-8 h-8 md:w-10 md:h-10"
                  />
                </div>
                <p className="mt-2 text-xs text-center">
                  Scientifically <br className="hidden md:block" /> Proven
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="text-sm md:text-md flex items-center gap-2">
                {product.rating}
                <IoMdStar className="w-5 h-5 text-yellow-500 mb-[2px]" />
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-black hover:bg-white text-gray-100 hover:text-black border border-black py-2 px-4 rounded-lg hover:shadow-xl transition-colors duration-300 text-sm md:text-base"
              >
                Add to cart
              </button>
            </div>
            <Link href={`/product/${product._id}`}>
              <button className="bg-white w-full text-blue-500 border border-blue-500 py-2 px-4 rounded-lg mt-4 hover:bg-blue-500 hover:text-white transition-colors duration-300 text-sm">
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
