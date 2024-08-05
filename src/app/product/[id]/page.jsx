'use client'
import React, { useState, useEffect } from 'react'

import { reviewsData } from '../../../data/Reviews'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../../../context/cartContext'
import { IoMdStar } from 'react-icons/io'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import 'swiper/css'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ weight: '400', subsets: ['latin'] })
import { Lora } from 'next/font/google'
const lora = Lora({ weight: '400', subsets: ['latin'] })

import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../../components/ui/carousel'

import {
  FaFlask,
  FaCheckCircle,
  FaSprayCan,
  FaHourglass,
  FaShieldAlt,
  FaLeaf,
} from 'react-icons/fa'

const DetailsHowToUse = ({ product }) => {
  const [activeTab, setActiveTab] = useState('details')

  const iconMap = {
    FaFlask: <FaFlask className="text-[#999999]" />,
    FaCheckCircle: <FaCheckCircle className="text-[#ff0000]" />,
    FaSprayCan: <FaSprayCan className="text-[#c6c630]" />,
    FaHourglass: <FaHourglass className="text-[#ff9933]" />,
    FaShieldAlt: <FaShieldAlt className="text-[#00cc00]" />,
    FaLeaf: <FaLeaf className="text-[#339900]" />,
  }
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
            {product.name} by YES N MORE :
          </h2>
          <p className="font-semibold mb-4">SAY YES TO MORE PLEASURE</p>
          <ul className="list-disc ">
            {product.details.map((detail, index) => (
              <li key={index} className="flex items-start mb-3">
                <span className="mr-2 mt-1">{iconMap[detail.icon]}</span>
                <div className="text-sm">
                  <strong>{detail.title}</strong> {detail.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'howToUse' && (
        <div>
          <h2 className="text-lg font-bold mb-2">HOW TO USE</h2>
          <h3 className="font-semibold mb-4">{product.name}</h3>
          <ul className="list-decimal ">
            {product.howToUse.map((item, index) => (
              <li key={index} className="flex items-start mb-3">
                <span className="mr-2">
                  <FaCheckCircle className="text-blue-500" />
                </span>
                <div className="text-sm">{item.steps}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-around mt-6 items-center overflow-hidden">
        <div className="flex flex-col justify-between items-center w-24">
          <Image
            src="/images/product/medical-globe.png"
            alt="WHO Certified"
            width={100}
            height={100}
            className="w-12 h-12"
          />
          <p className="mt-2 text-[10px] md:text-sm text-center">
            WHO <br className="hidden md:block" /> Certified
          </p>
        </div>
        <div className="flex flex-col justify-between items-center w-24">
          <div className="rounded-full border-2 border-gray-800 w-12 h-12 flex justify-center items-center">
            <Image
              src="/images/product/rabit.png"
              alt="Cruelty Free"
              width={100}
              height={100}
              className="w-12 h-12"
            />
          </div>
          <p className="mt-2 text-[10px] md:text-sm text-center">
            Cruelty <br className="hidden md:block" /> Free
          </p>
        </div>
        <div className="flex flex-col justify-between items-center w-24">
          <div className="rounded-full border-2 border-gray-800 w-12 h-12 flex justify-center items-center">
            <Image
              src="/images/product/test.png"
              alt="Lab Tested"
              width={100}
              height={100}
              className="w-8 h-8"
            />
          </div>
          <p className="mt-2 text-[10px] md:text-sm text-center">
            Lab <br className="hidden md:block" /> Tested
          </p>
        </div>
        <div className="flex flex-col justify-between items-center w-28">
          <div className="rounded-full border-2 border-gray-800 w-12 h-12 flex justify-center items-center">
            <Image
              src="/images/product/atom.png"
              alt="Scientifically Proven"
              width={100}
              height={100}
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

const RatingsReviews = ({ product }) => {
  const reviews = reviewsData.filter(
    (review) => review.productId === product._id
  )

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
        <div className="text-6xl font-bold mr-4">{product.rating}</div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.round(product.rating)
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
            <div className="ml-2 text-xl">{product.rating} out of 5</div>
          </div>
          <div className="text-sm text-gray-600">{reviews.length} reviews</div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Rating Breakdown</h3>
        {Object.keys(product.ratingPercentage).map((key, index) => {
          // Extract the numeric part from the key
          const starNumber = key.replace('star', '')
          // Create the display text
          const displayText = `${starNumber} Star${starNumber > 1 ? 's' : ''}`

          return (
            <div key={index} className="flex items-center mb-2">
              <span className="w-20">{displayText}</span>
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
          )
        })}
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

const ProductQualities = ({ product }) => {
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
        {/* {productQualities.points.map((point, index) => (
          <li key={index} className="mb-1">
            {point}
          </li>
        ))} */}
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
                    className="mb-2 mx-auto"
                  />
                  <p>{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden md:flex gap-2">
          {productQualities.imagesWithText.map((item, index) => (
            <div key={index} className="text-left text-sm md:p-8 w-1/3">
              <Image
                width={1000}
                height={1000}
                src={item.imageUrl}
                alt={item.text}
                className="mb-2 mx-auto "
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="italic font-semibold w-full  mt-4">
        “Proceed with sexual activity as usual. If necessary, better if choose
        to wipe off any excess spray to avoid transferring it to the partner”
      </p>
    </div>
  )
}

const OtherInformation = ({ product }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  if (!product) {
    return <div>Product not found</div>
  }

  const { otherInformation, properties } = product

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen)
  }

  return (
    <div className="py-4">
      <div className="mb-4 w-full md:w-[600px] mx-auto   text-[10px] md:text-sm p-4 rounded-lg shadow-md">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleDetails}
        >
          <h2 className="text-md flex-1 text-sm text-center md:text-lg uppercase font-bold">
            Product Details
          </h2>
          {isDetailsOpen ? (
            <FaChevronUp className="w-4 h-4 " />
          ) : (
            <FaChevronDown className="w-4 h-4 " />
          )}
        </div>
        {isDetailsOpen && (
          <div className="mt-4 space-y-2 text-center">
            <p className="flex justify-between">
              <span className="font-semibold">Suitable for age:</span>{' '}
              <span>{properties.ageRange}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Net quantity:</span>{' '}
              <span>{properties.quantityPerBottle}ml per bottle</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Price:</span>{' '}
              <span>₹{properties.price}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Lasts for:</span>{' '}
              <span>{properties.lastsFor}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Properties:</span>{' '}
              <span className="text-right">
                Optimal Dosage | Quick Absorption <br /> Fast Action | Zero
                Transference
              </span>
            </p>
          </div>
        )}
      </div>
      <div className="flex gap-1 md:gap-4 my-2 md:my-4 md:w-[600px] mx-auto">
        <div className="w-1/2">
          <h3 className="text-sm md:text-lg text-gray-100 font-semibold mb-2 rounded-full bg-[var(--lastlonger-dark)] w-fit px-4 py-1">
            What it will do
          </h3>
          <ul className="list-disc list-inside mb-4 px-2">
            {otherInformation.willDo.map((item, index) => (
              <p key={index} className="mb-1 text-[10px] md:text-sm underline">
                {item.points}
              </p>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <h3 className="text-sm md:text-lg text-gray-100 font-semibold mb-2 rounded-full bg-[var(--lastlonger-dark)] w-fit px-4 py-1">
            What it won&apos;t do
          </h3>
          <ul className="list-disc list-inside mb-4 px-2">
            {otherInformation.wontDo.map((item, index) => (
              <p key={index} className="mb-1 text-[10px] md:text-sm underline">
                {item.points}
              </p>
            ))}
          </ul>
        </div>
      </div>
      {/* Expert Section */}
      <div className="bg-[#f5faff] w-full mt-16">
        <div className="max-w-screen-xl flex w-full md:w-[600px] mx-auto justify-center items-center bg-[var(--lastlonger-light)] text-gray-100">
          <Image
            src="/images/femdoc.png" // replace with actual path
            alt="Expert"
            width={500}
            height={500}
            className="w-1/3"
          />
          <div className="w-2/3">
            <h2 className="text-sm md:text-base text-black mb-2">
              Get in touch with our Experts
            </h2>
            <Link
              href="/experts"
              className="text-sm md:text-base mt-2 px-8 py-1 bg-white text-black rounded-full hover:bg-[var(--lastlonger-dark)] hover:text-white"
            >
              CLICK HERE NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const GeneralInfo = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>
  }
  const { categoryInfo, heroElement } = product
  return (
    <div className="mx-auto py-4 bg-white rounded-lg">
      {/* Information Section */}
      <div className="mb-6 max-w-screen-xl mx-auto p-4">
        <h2 className={`text-3xl font-bold mb-6 ${lora.className}`}>
          {categoryInfo.title}
        </h2>
        {/* Compound Highlight Section */}
        <div className="max-w-screen-xl mx-auto w-full  md:mx-auto  mb-4 md:mb-8  text-gray-100">
          <div className="bg-gradient-to-b rounded-md from-blue-300 to-white flex justify-between md:justify-center items-center gap-4 p-6">
            {categoryInfo.images.map((item, index) => (
              <Image
                key={index}
                src={item.points}
                width={1000}
                height={1000}
                className="w-36 h-32 md:w-48 md:h-44"
                alt="information"
              />
            ))}
          </div>
        </div>
        <ul className="space-y-4 text-xs md:text-base">
          {categoryInfo.points.map((point, index) => (
            <li key={index} className="flex flex-col">
              <p>{point.text}</p>
              <a
                href={point.readMoreLink}
                className="text-blue-500 hover:underline mt-2"
              >
                read more
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto relative w-full md:mx-auto bg-gray-200 mb-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/product/blue-bg.png')",
          }}
        />
        <div className="relative flex justify-center items-center h-full bg-opacity-50 text-gray-100 py-8 ">
          <div className="w-1/2 md:w-fit md:gap-4 flex flex-col justify-center p-2 md:text-center">
            <h1
              className="text-2xl md:text-6xl mb-1"
              style={{ fontWeight: 50 }}
            >
              The Hero
            </h1>
            <h1 className="text-lg md:text-2xl italic mb-2 underline">
              {heroElement.name}
            </h1>
            <p className="text-[10px] md:text-sm max-w-[350px]">
              {heroElement.description}
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center p-2">
            <Image
              src={heroElement.image}
              alt="Right Side Image"
              width={1000}
              height={1000}
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const ProductPage = ({ params }) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL
  // console.log('serverUrl', serverUrl)
  const { addToCart } = useCart()
  const { id } = params
  const [mainImageIndex, setMainImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true)
      setIsError(false)
      try {
        const response = await fetch(`${serverUrl}/api/products/${id}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log('data from api', data)
        setProduct(data)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  useEffect(() => {
    console.log('products on the product page', product)
  }, [product])

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index)
  }

  const handleAddToCart = () => {
    addToCart(product)
  }

  const handleQuantityChange = (months) => {
    setQuantity(months)
  }

  // const similarProducts = products.filter((p) => p.id !== parseInt(id))

  const calculatePercentageOff = (mrp, price) => {
    return ((mrp - price) / mrp) * 100
  }

  const percentageOff = product
    ? calculatePercentageOff(product.mrp, product.price)
    : 0

  // const similarProductPercentageOff = (mrp, price) => {
  //   return ((mrp - price) / mrp) * 100
  // }
  if (isLoading)
    return (
      <div className="flex justify-center items-center w-full text-xl min-h-screen">
        <AiOutlineLoading3Quarters className="animate-spin w-8 h-8" />
      </div>
    )

  if (!product) {
    return (
      <p className="text-red-500 flex justify-center items-center w-full text-xl min-h-screen">
        Product not found
      </p>
    )
  }
  if (isError)
    return (
      <div className="text-red-500 flex justify-center items-center w-full text-xl min-h-screen">
        Error loading products
      </div>
    )
  return (
    <div className={` md:py-8 mx-auto min-h-screen ${poppins.className}`}>
      <div className="hidden md:flex max-w-screen-xl mx-auto">
        <nav className="mb-4 md:mb-8">
          <ul className="flex space-x-2 text-sm md:text-base">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <Link href="/products" className="text-blue-600 hover:underline">
                Products
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="text-gray-600">{product.name}</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-4 flex flex-col md:flex-row md:space-x-8 max-w-screen-xl mx-auto">
        {/* this is the left side with the carousel and the image */}
        <div className="h-fit flex flex-col-reverse md:flex-row items-center gap-4 w-full md:w-1/2 relative md:sticky md:top-20 ">
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
                        className="rounded-lg w-16 h-16 object-contain"
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
                        className="rounded-lg w-16 h-16 object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-none" />
              <CarouselNext className="border-none" />
            </Carousel>
          </div>

          <div className="relative w-full shadow-lg overflow-hidden flex ">
            <Zoom>
              <Image
                src={product.productImages[mainImageIndex]} // Displaying the selected main image
                alt={`Product image ${mainImageIndex + 1}`}
                width={1000}
                height={1000}
                className="rounded-lg object-cover"
              />
            </Zoom>
          </div>
        </div>

        {/* this is the right side with the text and details */}
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
                    className="w-4 h-4 md:w-6 md:h-6 text-yellow-400 mb-[2px]"
                  />
                )
              )}

              <Link
                href="#ratings-reviews"
                className="text-sm md:text-base ml-2 underline"
              >
                Ratings
              </Link>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-semibold">Concern</p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="#"
                  className="flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border border-[var(--lastlonger-dark)] px-4 py-2 text-sm hover:bg-[var(--lastlonger-dark)] hover:text-gray-100 "
                >
                  PREMATURE EJACULATION
                </Link>

                <Link
                  href="/experts"
                  className="flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border border-[var(--lastlonger-dark)] px-4 py-2 text-sm hover:bg-[var(--lastlonger-dark)] hover:text-gray-100 "
                >
                  TALK TO DOCTOR
                </Link>
                <Link
                  href="/self-assessment"
                  className="flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border border-[var(--lastlonger-dark)] px-4 py-2 text-sm hover:bg-[var(--lastlonger-dark)] hover:text-gray-100 "
                >
                  ASSESS YOURSELF
                </Link>
              </div>
            </div>

            {/* quantity */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-semibold">Quantity</p>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`rounded-xl border border-[var(--lastlonger-dark)] px-4 py-2 text-sm hover:bg-[var(--lastlonger-dark)] hover:text-gray-100 ${
                    quantity === 1
                      ? 'bg-[var(--lastlonger-dark)] text-gray-100'
                      : ''
                  }`}
                  onClick={() => handleQuantityChange(1)}
                >
                  1 Month
                </button>
                <button
                  className={`rounded-xl border border-[var(--lastlonger-dark)] px-4 py-2 text-sm hover:bg-[var(--lastlonger-dark)] hover:text-gray-100 ${
                    quantity === 2
                      ? 'bg-[var(--lastlonger-dark)] text-gray-100'
                      : ''
                  }`}
                  onClick={() => handleQuantityChange(2)}
                >
                  2 Months
                </button>
                <button
                  className={`rounded-xl border border-[var(--lastlonger-dark)] px-4 py-2 text-sm hover:bg-[var(--lastlonger-dark)] hover:text-gray-100 ${
                    quantity === 3
                      ? 'bg-[var(--lastlonger-dark)] text-gray-100'
                      : ''
                  }`}
                  onClick={() => handleQuantityChange(3)}
                >
                  3 Months
                </button>
                <button
                  className={`rounded-xl border border-[var(--lastlonger-dark)] px-4 py-2 text-sm hover:bg-[var(--lastlonger-dark)] hover:text-gray-100 ${
                    quantity === 6
                      ? 'bg-[var(--lastlonger-dark)] text-gray-100'
                      : ''
                  }`}
                  onClick={() => handleQuantityChange(6)}
                >
                  6 Months
                </button>
              </div>
            </div>
          </div>

          <div className=" md:mx-0 w-full">
            <button
              onClick={handleAddToCart}
              className="w-1/2 md:w-1/3  text-2xl mt-1 md:mt-4 bg-[var(--lastlonger-light)] font-bold px-6 py-3  hover:bg-[var(--lastlonger-dark)] hover:text-white transition-colors"
            >
              BUY
            </button>
            <button
              onClick={handleAddToCart}
              className="w-1/2 md:w-1/3 text-2xl mt-1 md:mt-4 bg-[#E6F1FF] font-bold px-6 py-3 hover:bg-[var(--lastlonger-dark)] hover:text-white transition-colors"
            >
              CART
            </button>
          </div>

          {/* details */}
          <div>
            <DetailsHowToUse product={product} />
          </div>
        </div>
      </div>

      {/* general info */}
      <div>
        <GeneralInfo product={product} />
      </div>

      {/* qualities */}
      <div className="max-w-screen-xl mx-auto p-4">
        <ProductQualities product={product} />
      </div>
      {/* other details */}
      <div className="max-w-screen-xl mx-auto p-4">
        <OtherInformation product={product} />
      </div>
      {/* reviewsrating */}
      <div id="ratings-reviews" className="max-w-screen-xl mx-auto p-4">
        <RatingsReviews product={product} />
      </div>

      {/* similar products */}
      {/* <div className="mt-12 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarProducts.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="bg-[var(--lastlonger-dark)] text-gray-100 rounded-2xl md:rounded-3xl block border overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-2"
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
      </div> */}
    </div>
  )
}

export default ProductPage
