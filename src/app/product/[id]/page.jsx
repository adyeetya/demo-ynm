'use client'
import React, { useState } from 'react'
import { products } from '../../../data/Products'
import { reviewsData } from '../../../data/Reviews'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../../../context/cartContext'
import { IoMdStar } from 'react-icons/io'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ weight: '400', subsets: ['latin'] })
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../../components/ui/carousel'

import { FaCheckCircle } from 'react-icons/fa'

const DetailsHowToUse = ({ productId }) => {
  const [activeTab, setActiveTab] = useState('details')
  const product = products.find((product) => product.id === parseInt(productId))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className={`${poppins.className} py-4`}>
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === 'details'
              ? 'border-b-2 border-blue-500 font-bold text-blue-500'
              : ''
          }`}
          onClick={() => setActiveTab('details')}
        >
          Details
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === 'howToUse'
              ? 'border-b-2 border-blue-500 font-bold text-blue-500'
              : ''
          }`}
          onClick={() => setActiveTab('howToUse')}
        >
          How to Use
        </button>
      </div>

      {activeTab === 'details' && (
        <div>
          <h2 className="text-lg font-bold mb-2">
            LAST LONGER SPRAY by YES N MORE :
          </h2>
          <p className="font-semibold mb-4">SAY YES TO MORE PLEASURE</p>
          <ul className="list-disc ">
            {product.details.map((detail, index) => (
              <li key={index} className="flex items-start mb-3">
                <span className="mr-2 mt-1">{detail.icon}</span>
                <div className="text-xs">
                  <strong>{detail.title}</strong> {detail.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'howToUse' && (
        <div>
          <h2 className="text-xl font-bold mb-2">HOW TO USE</h2>
          <h3 className="text-lg font-semibold mb-4">{product.name}</h3>
          <ul className="list-decimal ">
            {product.howToUse.map((step, index) => (
              <li key={index} className="flex items-start mb-3">
                <span className="mr-2">
                  <FaCheckCircle className="text-blue-500" />
                </span>
                <div className="text-xs">{step}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-around mt-6 items-center overflow-hidden">
        <div className="flex flex-col justify-between items-center w-24">
          <img
            src="/images/product/medical-globe.png"
            alt="WHO Certified"
            className="w-12 h-12"
          />
          <p className="mt-2 text-[10px] md:text-sm text-center">
            WHO <br className="hidden md:block" /> Certified
          </p>
        </div>
        <div className="flex flex-col justify-between items-center w-24">
          <div className="rounded-full border-2 border-gray-800 w-12 h-12 flex justify-center items-center">
            <img
              src="/images/product/rabit.png"
              alt="Cruelty Free"
              className="w-12 h-12"
            />
          </div>
          <p className="mt-2 text-[10px] md:text-sm text-center">
            Cruelty <br className="hidden md:block" /> Free
          </p>
        </div>
        <div className="flex flex-col justify-between items-center w-24">
          <div className="rounded-full border-2 border-gray-800 w-12 h-12 flex justify-center items-center">
            <img
              src="/images/product/test.png"
              alt="Lab Tested"
              className="w-8 h-8"
            />
          </div>
          <p className="mt-2 text-[10px] md:text-sm text-center">
            Lab <br className="hidden md:block" /> Tested
          </p>
        </div>
        <div className="flex flex-col justify-between items-center w-28">
          <div className="rounded-full border-2 border-gray-800 w-12 h-12 flex justify-center items-center">
            <img
              src="/images/product/atom.png"
              alt="Scientifically Proven"
              className="w-8 h-8"
            />
          </div>
          <p className="mt-2 text-[10px] md:text-sm text-center">
            Scientifically <br className="hidden md:block" /> Proven
          </p>
        </div>
      </div>
    </div>
  )
}

const RatingsReviews = ({ productId }) => {
  const reviews = reviewsData.filter(
    (review) => review.productId === parseInt(productId)
  )
  const product = products.find((product) => product.id === parseInt(productId))

  if (!product) {
    return <div>Product not found</div>
  }

  const calculateAverageRating = () => {
    const totalReviews = reviews.length
    const totalStars = reviews.reduce((sum, review) => sum + review.stars, 0)
    return (totalStars / totalReviews).toFixed(1)
  }

  const averageRating = calculateAverageRating()

  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold mb-6">Ratings & Reviews</h2>

      <div className="flex items-center mb-6">
        <div className="text-6xl font-bold mr-4">{averageRating}</div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.round(averageRating)
                      ? 'text-yellow-500'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.691h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.456a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.381-2.457a1 1 0 00-1.175 0l-3.381 2.457c-.784.57-1.84-.197-1.54-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.245 9.403c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.691l1.286-3.975z" />
                </svg>
              ))}
            </div>
            <div className="ml-2 text-xl">{averageRating} out of 5</div>
          </div>
          <div className="text-sm text-gray-600">{reviews.length} reviews</div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Rating Breakdown</h3>
        {Object.keys(product.ratingPercentage).map((key, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="w-20">{key}</span>
            <div className="flex items-center w-full">
              <div className="w-full bg-gray-200 rounded-full h-4 mx-2 relative">
                <div
                  className="absolute bg-blue-500 h-4 rounded-full"
                  style={{ width: `${product.ratingPercentage[key]}%` }}
                ></div>
              </div>
              <span className="ml-2 w-[17%] md:w-[5%]">
                {product.ratingPercentage[key]}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} className="mb-4 p-4 border rounded">
              <div className="flex items-center mb-2">
                <div className="font-semibold">{review.customerName}</div>
                <div className="ml-2 text-yellow-500">
                  {Array.from({ length: review.stars }, (_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 inline-block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.691h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.456a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.381-2.457a1 1 0 00-1.175 0l-3.381 2.457c-.784.57-1.84-.197-1.54-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.245 9.403c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.691l1.286-3.975z" />
                    </svg>
                  ))}
                  {Array.from({ length: 5 - review.stars }, (_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 inline-block text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.691h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.456a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.381-2.457a1 1 0 00-1.175 0l-3.381 2.457c-.784.57-1.84-.197-1.54-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.245 9.403c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.691l1.286-3.975z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-gray-600">{review.review}</div>
              <div className="text-sm text-gray-400">
                {new Date().toLocaleDateString()}
              </div>
            </div>
          ))
        ) : (
          <div>No reviews available</div>
        )}
      </div>
    </div>
  )
}

const ProductQualities = ({ productId }) => {
  const product = products.find((product) => product.id === parseInt(productId))

  if (!product) {
    return <div>Product not found</div>
  }

  const { productQualities } = product

  return (
    <div className="py-4 text-xs md:text-base">
      <h2 className="text-2xl font-bold mb-6">PRODUCT QUALITIES</h2>
      <p className="mb-2">
        Powered by the active ingredient Lidocaine, this last longer spray has
        been formulated to help enhance endurance and control for proven
        results.
      </p>
      <ul className="list-disc list-inside mb-4">
        {productQualities.points.map((point, index) => (
          <li key={index} className="mb-1">
            {point}
          </li>
        ))}
      </ul>
      <p className="mb-4">
        A 2022 study looked at how a lidocaine-based spray affected 150 men with
        self-reported PE.{' '}
        <a href="#" className="text-blue-500 underline">
          read more
        </a>
      </p>
      <p className="mb-4">
        Beyond that, 80 percent of men said they were sexually satisfied, and 70
        percent said they were happy with their ejaculatory control when using
        the product.
      </p>
      <h3 className="font-bold mb-2">What does it do and how does it do it?</h3>
      <div className="md:flex gap-2">
        <div className="w-full md:hidden">
          <Swiper spaceBetween={10} slidesPerView={1.2}>
            {productQualities.imagesWithText.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-left text-sm p-4">
                  <Image
                    width={1000}
                    height={1000}
                    src={item.imageUrl}
                    alt={item.text}
                    className="mb-2 mx-auto w-30 h-30"
                  />
                  <p>{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden md:flex gap-2">
          {productQualities.imagesWithText.map((item, index) => (
            <div key={index} className="text-left text-sm md:p-8">
              <Image
                width={1000}
                height={1000}
                src={item.imageUrl}
                alt={item.text}
                className="mb-2 mx-auto w-30 h-30"
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="italic font-semibold text-xs md:text-sm mt-4">
        “Proceed with sexual activity as usual. If necessary, better if choose
        to wipe off any excess spray to avoid transferring it to the partner”
      </p>
    </div>
  )
}

const OtherInformation = ({ productId }) => {
  const product = products.find((product) => product.id === parseInt(productId))

  if (!product) {
    return <div>Product not found</div>
  }

  const { otherInformation, properties } = product

  return (
    <div className="py-4">
      <div className="mb-4 w-full md:w-[600px] mx-auto bg-[#05223B] text-white text-[10px] md:text-sm p-4">
        <h2 className="text-md md:text-lg mb-2 uppercase">Product Details</h2>

        <p>
          <span className="font-">Suitable for age:</span> {properties.ageRange}
        </p>
        <p>
          <span className="">Net quantity:</span> {properties.quantityPerBottle}
        </p>
        <p>
          <span className="">Price:</span> {properties.price}
        </p>
        <p>
          <span className="font-">Lasts for:</span> {properties.lastsFor}
        </p>
        <p>
          <span className="font-">Properties:</span> {properties.properties}
        </p>
      </div>
      <div className="flex gap-1 md:gap-4 my-2 md:my-4 md:w-[600px] mx-auto">
        <div className="w-1/2">
          <h3 className="text-sm md:text-lg text-white font- mb-2 rounded-full bg-[#05223B] w-fit px-4 py-1">
            What it will do
          </h3>
          <ul className="list-disc list-inside mb-4 px-2">
            {otherInformation.willDo.map((item, index) => (
              <p key={index} className="mb-1 text-[10px] md:text-sm underline">
                {item}
              </p>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <h3 className="text-sm md:text-lg text-white font- mb-2 rounded-full bg-[#05223B] w-fit px-4 py-1">
            What it won&apos;t do
          </h3>
          <ul className="list-disc list-inside mb-4 px-2">
            {otherInformation.wontDo.map((item, index) => (
              <p key={index} className="mb-1 text-[10px] md:text-sm underline">
                {item}
              </p>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const GeneralInfo = ({ productId }) => {
  return (
    <div className=" mx-auto py-4 bg-white rounded-lg">
      {/* Expert Section */}
      <div className="flex w-full md:w-[600px] py-8 md:py-12 mx-auto justify-center items-center p-4 md:p-6 bg-[#05223B] rounded mb-6 text-white">
        <img
          src="/images/femdoc.avif" // replace with actual path
          alt="Expert"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mr-4"
        />
        <div>
          <h2 className="text-sm md:text-base mb-2">
            Get in touch with our Experts
          </h2>
          <button className="text-sm md:text-base mt-2 px-8 py-1 bg-white font-semibold text-black rounded-full hover:bg-blue-700">
            CLICK HERE NOW
          </button>
        </div>
      </div>

      {/* Information Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-6">
          The Truth About <br className="block md:hidden" /> Premature
          Ejaculation
        </h2>
        <ul className="space-y-4 text-xs md:text-base">
          <li className="flex flex-col">
            <p>
              <strong>Premature ejaculation</strong> affects approximately 30%
              to 40% of men worldwide, peaking in younger men and remaining a
              prevalent issue as men age. It is considered to be the most common
              male sexual disorder.
            </p>
            <a href="#" className="text-blue-500 hover:underline mt-2">
              read more
            </a>
          </li>
          <li className="flex flex-col">
            <p>
              40% of women’s experienced sexual distress due to premature
              ejaculation.
            </p>
            <a href="#" className="text-blue-500 hover:underline mt-2">
              read more
            </a>
          </li>
          <li className="flex flex-col">
            <p>
              Out-dated treatments for premature ejaculation have poor
              formulations, low efficacy, and bioavailability. They often lack
              clinical backing and contain substandard ingredients.
            </p>
            <a href="#" className="text-blue-500 hover:underline mt-2">
              read more
            </a>
          </li>
        </ul>
      </div>

      {/* Compound Highlight Section */}
      <div className="w-full  md:mx-auto bg-gradient-to-b from-blue-500 to-white mb-4 md:mb-8  text-white">
        <div className="flex justify-between md:justify-center items-center gap-4 p-6">
          <Image
            src="/images/product/—Pngtree—buy 1 get free offer_6402685-Recoverednm@2x.png"
            width={1000}
            height={1000}
            className="w-36 h-32 md:w-48 md:h-44"
            alt="information"
          />
          <Image
            src="/images/product/—Pngtree—buy 1 get free offer_6402685-Recoverednm@2x.png"
            width={1000}
            height={1000}
            className="w-36 h-32 md:w-48 md:h-44"
            alt="information"
          />
        </div>
      </div>

      <div className="relative w-full md:mx-auto bg-gray-200 mb-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/product/chem-bg.png')",
          }}
        />
        <div className="relative flex h-full bg-opacity-50 text-white py-8 ">
          <div className="w-1/2 flex flex-col justify-center p-2 text-right">
            <h1 className="text-xl md:text-3xl font-[50] mb-1">The Hero</h1>
            <h1 className="text-xl md:text-2xl italic mb-2 underline">
              Licodine
            </h1>
            <p className="text-xs md:text-sm">
              Lidocaine (LYE doe kane) is a local anaesthetic commonly used to
              reduce sensitivity in tissues in a specific area.
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center p-2">
            <Image
              src="/images/product/chem-mol.png"
              alt="Right Side Image"
              width={1000}
              height={1000}
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

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
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="h-fit flex flex-col-reverse md:flex-row items-center gap-4 w-full md:w-1/2 relative md:sticky md:top-20">
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
              <CarouselPrevious className="border-none" />
              <CarouselNext className="border-none" />
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
              <h1 className="text-md md:text-3xl font-bold  md:mt-0">
                {product.name}
              </h1>
              <div className="flex flex-col justify-between items-end mt-1">
                <div className="flex items-center gap-1">
                  <p className="mt- text-sm md:text-base font-bold">
                    ₹{(product.price * quantity).toFixed(2)}
                  </p>
                  <p className="mt- text-xs md:text-sm line-through">
                    ₹{(product.mrp * quantity).toFixed(2)}
                  </p>

                  <p className="mt- text-[10px] md:text-xs text-green-900 border bg-green-400 rounded px-1">
                    {percentageOff.toFixed(0)}% OFF
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-gray-900 text-sm md:text-base md:mt-0 md:text-md">
                {product.category}
              </p>
              <p className="text-[10px] md:text-xs text-gray-700 text-right">
                MRP Inclusive of all taxes
              </p>
            </div>
            <div className="text-gray-600 flex justify-start items-center mt-2">
              <p className="text-sm md:text-base mr-1">1.2k</p>
              {Array.from(
                { length: Math.floor(product.rating) },
                (_, index) => (
                  <IoMdStar
                    key={index}
                    className="w-4 h-4 md:w-6 md:h-6 text-[#debb02] mb-[2px]"
                  />
                )
              )}
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-semibold">Concern</p>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border border-[#05213B] px-4 py-2 text-sm hover:bg-[#05213B] hover:text-white ${
                    selectedConcern === 'PREMATURE EJACULATION'
                      ? 'bg-[#05213B] text-white'
                      : ''
                  }`}
                  onClick={() => handleConcernClick('PREMATURE EJACULATION')}
                >
                  PREMATURE EJACULATION
                </button>

                <button
                  className={`flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border border-[#05213B] px-4 py-2 text-sm hover:bg-[#05213B] hover:text-white ${
                    selectedConcern === 'TALK TO DOCTOR'
                      ? 'bg-[#05213B] text-white'
                      : ''
                  }`}
                  onClick={() => handleConcernClick('TALK TO DOCTOR')}
                >
                  TALK TO DOCTOR
                </button>
                <button
                  className={`flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border border-[#05213B] px-4 py-2 text-sm hover:bg-[#05213B] hover:text-white ${
                    selectedConcern === 'ASSESS YOURSELF'
                      ? 'bg-[#05213B] text-white'
                      : ''
                  }`}
                  onClick={() => handleConcernClick('ASSESS YOURSELF')}
                >
                  ASSESS YOURSELF
                </button>
              </div>
            </div>

            {/* type of  */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-semibold">Type</p>
              <div className="flex flex-wrap gap-2">
                <button
                  className=" w-fit  rounded-xl border bg-[#05213B] text-white hover:border-[#05213B] px-4 py-2 text-sm hover:bg-white hover:text-black ${
                   "
                >
                  Performance Kit
                </button>
              </div>
            </div>

            {/* quantity */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-semibold">Quantity</p>
              <div className="flex gap-2">
                <button
                  className={`rounded-xl border border-[#05213B] px-4 py-2 text-sm hover:bg-[#05213B] hover:text-white ${
                    quantity === 1 ? 'bg-[#05213B] text-white' : ''
                  }`}
                  onClick={() => handleQuantityChange(1)}
                >
                  1 Month
                </button>
                <button
                  className={`rounded-xl border border-[#05213B] px-4 py-2 text-sm hover:bg-[#05213B] hover:text-white ${
                    quantity === 2 ? 'bg-[#05213B] text-white' : ''
                  }`}
                  onClick={() => handleQuantityChange(2)}
                >
                  2 Months
                </button>
                <button
                  className={`rounded-xl border border-[#05213B] px-4 py-2 text-sm hover:bg-[#05213B] hover:text-white ${
                    quantity === 3 ? 'bg-[#05213B] text-white' : ''
                  }`}
                  onClick={() => handleQuantityChange(3)}
                >
                  3 Months
                </button>
              </div>
            </div>
          </div>

          <div className=" md:mx-0 w-full">
            <button
              onClick={handleAddToCart}
              className="w-1/2  text-2xl mt-1 md:mt-4 bg-[#A6C9F0] font-bold px-6 py-6  hover:bg-orange-600 transition-colors"
            >
              BUY
            </button>
            <button
              onClick={handleAddToCart}
              className="w-1/2 text-2xl mt-1 md:mt-4 bg-[#E6F1FF] font-bold px-6 py-6 hover:bg-orange-600 transition-colors"
            >
              CART
            </button>
          </div>

          {/* details */}
          <div>
            <DetailsHowToUse productId={id} />
          </div>
        </div>
      </div>

      {/* general info */}
      <div>
        <GeneralInfo productId={id} />
      </div>

      {/* qualities */}
      <div>
        <ProductQualities productId={id} />
      </div>
      {/* other details */}
      <div>
        <OtherInformation productId={id} />
      </div>
      {/* reviewsrating */}
      <div>
        <RatingsReviews productId={id} />
      </div>

      {/* similar products */}
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
