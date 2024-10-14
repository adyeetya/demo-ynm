'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { GlobalStateContext } from '../../context/navbarContext'
import { useProducts } from '../../context/productContext'
const Hero = () => {
  const { isMenuOpen } = useContext(GlobalStateContext)

  const { products } = useProducts()
  const product = products[0]
  // console.log(product)

  return (
    <div className="relative z-0 w-full h-[100vh]  rounded-br-[2rem] -mt-16 overflow-hidden customCurve">
      {/* Desktop Image */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero/boostewave_banner_web.png"
          alt="Desktop Background Image"
          height={1000}
          width={1000}
          priority
          className="absolute w-full h-full object-cover"
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden absolute inset-0 rounded-b-3xl">
        <Image
          src="/images/hero/boostewave_banner_phone.png"
          alt="Mobile Background Image"
          width={1000}
          height={1000}
          priority
          className="absolute w-full h-full object-cover rounded-b-3xl"
        />
      </div>

      <div className="absolute mt-16 inset-0 z-10 flex flex-col justify-between items-start px-4">
        {/* texts */}
        <div className="flex w-full md:mt-12 mb-20 py-4 h-full justify-start items-end md:items-center overflow-hidden max-w-screen-xl mx-auto">
          <div className="text-gray-100 text-left z-10">
            <h1 className="text-5xl mb-1 2xl:text-7xl font-bold text-left text-gray-100 tracking-wide 2xl:tracking-widest">
              experience
            </h1>
            <h1 className="text-5xl 2xl:text-7xl font-bold text-left text-gray-100 tracking-wide 2xl:tracking-widest">
              intimacy
            </h1>
            <p className="text-lg mb-12">like never before!</p>
            <Link
              href="/self-assessment"
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white/30 z-50 w-fit text-white py-1 px-6 rounded-full text-lg  hover:bg-black hover:text-gray-100"
            >
              Access Yourself
            </Link>
            {/* {product ? (
              <Link
                href={`/products`}
                className="mt-2 bg-white text-black hover:text-gray-100 hover:bg-black py-2 px-6 w-fit font-semibold text-xl rounded-full"
              >
                explore
              </Link>
            ) : (
              <div className="mt-2 bg-white text-black hover:text-gray-100 hover:bg-black py-2 px-6 w-fit font-semibold text-xl rounded-full">
                explore
              </div>
            )} */}
          </div>
        </div>

        {/* Desktop Text */}
        {/* <div className="hidden w-full max-w-screen-lg md:flex px-4 items-center md:items-center text-gray-100 font-thin text-center ">
          <div className="flex flex-col gap-4 justify-start items-start z-10">
            <h1 className="md:text-3xl xl:text-7xl font-bold text-left text-gray-100 tracking-wide 2xl:tracking-widest">
              experience
            </h1>
            <h1 className="md:text-3xl xl:text-7xl font-bold text-left text-gray-100 tracking-wide 2xl:tracking-widest">
              intimacy
            </h1>
            <p className="text-lg">like never before!</p>
            {product ? (
              <Link
                href={`/products`}
                className="mt-2 bg-white text-black hover:text-gray-100 hover:bg-black py-2 px-6 w-fit font-semibold text-xl rounded-full"
              >
                explore
              </Link>
            ) : (
              <div className="mt-2 bg-white text-black hover:text-gray-100 hover:bg-black py-2 px-6 w-fit font-semibold text-xl rounded-full">
                explore
              </div>
            )}
          </div>
        </div> */}

        {/* explore products */}

        <div className="absolute bottom-0 left-0 md:ml-auto flex items-center w-full h-16 mx-auto border-none shadow-none">
          <div className="z-50 flex flex-1 w-full md:w-[calc(100vw-4rem)] shadow-none justify-end items-center h-16 bg-white rounded-bl-none rounded-[2rem] p-2">
            <div className="flex flex-col w-[18rem] gap-1">
              {/* Circles with Background Images */}
              <div className="z-50 flex flex-row justify-between gap-3 items-center w-full">
                <div className="flex -space-x-4">
                  <div
                    className="w-10 h-10 bg-cover bg-center border bg-white border-gray-400 rounded-full"
                    style={{
                      backgroundImage: 'url("/images/Long_lasting_box.webp")',
                    }}
                  ></div>
                  <div
                    className="w-10 h-10 bg-cover bg-center border bg-white border-gray-400 rounded-full"
                    style={{
                      backgroundImage: 'url("/images/Long_lasting_box.webp")',
                    }}
                  ></div>
                  <div
                    className="w-10 h-10 bg-cover bg-center bg-white border border-gray-400 rounded-full flex items-center justify-center"
                    style={{
                      backgroundImage: 'url("/images/Long_lasting_box.webp")',
                    }}
                  ></div>
                  {/* <span>+2</span> */}
                </div>

                {/* Text */}
                <div className="text-left ">
                  <a
                    href="#"
                    className="flex items-center space-x-2 font-semibold text-sm"
                  >
                    <span>Explore products</span>
                  </a>

                  <p className="z-50 text-xs">
                    We got the solution for your problem
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* button side */}
          <div className="flex w-16 h-16 justify-center items-center">
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white/30 h-12 w-12 rounded-full flex justify-center items-center shadow-lg">
              <span className="text-3xl text-white">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
