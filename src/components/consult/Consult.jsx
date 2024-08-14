'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'

import { HiMiniDevicePhoneMobile } from 'react-icons/hi2'
import { LuStethoscope } from 'react-icons/lu'
import { LuUsers } from 'react-icons/lu'
const Consult = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="p-4 md:py-6 mt-4 max-w-screen-xl mx-auto z-0">
      <div className="mb-12 ">
        <h2 className="font-bold text-2xl">Expert Advice that Works</h2>
      </div>
      {/* Wide Cards Section */}
      <div className="flex flex-col md:flex-row gap-14 md:gap-24 mb-12 justify-center">
        <div className="relative w-full h-40  md:w-80">
          <div className="h-40">
            <Image
              src="/images/amit-bansal-nobg.webp"
              alt="Wide Card 1"
              width={1000}
              height={1000}
              className="absolute top-0 left-0 z-10 h-full w-auto"
            />
          </div>
          <div className="absolute inset-x-0 rounded-3xl bottom-0 bg-[#F1F1F1] h-36 w-full flex justify-end items-center">
            <Link href="/experts" className="font-bold text-lg w-1/2 mr-4">
              Consult for Free {'>'}
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[15%] bg-black rounded-b-3xl"></div>
        </div>

        {/* -------------- */}
        <div className="relative w-full h-40  md:w-80">
          <div className="h-40">
            <Image
              src="/images/SeekPng.com_hombre-png_1943212 1.png"
              alt="Wide Card 1"
              width={1000}
              height={1000}
              className="absolute top-0 left-4 z-10 h-full w-auto"
            />
          </div>
          <div className="absolute inset-x-0 rounded-3xl bottom-0 bg-[#F1F1F1] h-36 w-full flex justify-end items-center">
            <Link href="/self-assessment" className="font-bold text-lg w-1/2">
              Assess myself {'>'}
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[15%] bg-black rounded-b-3xl"></div>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex flex-col md:flex-row-reverse md:gap-6 justify-center items-center mb-12">
        <div className="mb-4 md:mb-0 text-center">
          <h2 className="font-bold text-xl">
            TRUSTED BY <br className="hidden md:block" /> OUR USERS
          </h2>
        </div>
        <div className="flex flex-row justify-around items-center  md:mx-4 gap-8">
          <div className="flex bg-[#F1F1F1] shadow-lg rounded-xl p-2 w-16 h-16 justify-center items-center">
            <dotlottie-player
              src="https://lottie.host/542bcbea-da75-4f4f-aedf-d4252cf37298/X0IOYFkvyq.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div className="rotate-90 flex bg-[#F1F1F1] shadow-lg rounded-xl p-2 w-16 h-16 justify-center items-center">
            <dotlottie-player
              src="https://lottie.host/99e917b1-85d2-477f-b8af-a1cb8f45b821/HQMOsF5tQM.json"
              background="transparent"
              speed="0.5"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div className="flex flex-col shadow-lg bg-[#F1F1F1] rounded-xl p-2 w-16 h-16 justify-center items-center">
            <div className="w-20 h-20">
              <dotlottie-player
                src="https://lottie.host/ca3ade05-5e38-4496-83d4-aeb54576f1ad/CU0prhhACO.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </div>
        </div>
      </div>

      {/* Other Cards Section */}
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mb-8 justify-between">
        {/* card1 */}
        <div className="bg-[var(--dark-bg)] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-[320px] lg:h-[380px] md:w-[180px] lg:w-[250px] xl:w-[270px] overflow-hidden">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%] bg-[var(--light-bg)]">
            <Image
              src="/images/happy couple in love lying in bed .png" // dummy image
              alt="Card Image"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div className="p-2 lg:p-4 w-[55%] md:w-full flex flex-col gap-4 justify-center text-gray-100 h-full md:h-[45%]">
            <Link href="/product/1" className="lg:text-lg mb-2 md:mb-0">
              Last Long {'>'}
            </Link>
            <p className="text-xs lg:text-sm">Sexual Health Vitality Stamina</p>
          </div>
        </div>

        {/* card2 */}
        <div className="bg-[var(--dark-bg)] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-[320px] lg:h-[380px] md:w-[180px] lg:w-[250px] xl:w-[270px] overflow-hidden brightness-75">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%] bg-[var(--light-bg)]">
            <Image
              src="/images/nutrition-img.png" // dummy image
              alt="Card Image"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col h-full md:h-[45%] w-[55%] md:w-full">
            <div className="p-2 lg:p-4 h-[80%] flex flex-col gap-4 justify-center text-gray-100">
              <h2 className="text-sm lg:text-lg mb-2 md:mb-0">
                Erection Support {'>'}
              </h2>
              <p className="text-xs lg:text-sm">
                Nutrition Metabolism Immunity
              </p>
            </div>
            <div className="text-white flex justify-center items-center text-sm lg:text-lg text-center bg-[var(--light-bg)] h-[20%]">
              Coming Soon
            </div>
          </div>
        </div>

        {/* card3 */}
        <div className="bg-[var(--dark-bg)] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-[320px] lg:h-[380px] md:w-[180px] lg:w-[250px] xl:w-[270px] overflow-hidden brightness-75">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%] bg-[var(--light-bg)]">
            <Image
              src="/images/image-Photoroom (4).png" // dummy image
              alt="Card Image"
              width={1000}
              height={1000}
              className="object-cover  w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col h-full md:h-[45%] w-[55%] md:w-full">
            <div className="p-4 h-[80%] flex flex-col gap-4 justify-center text-gray-100">
              <h2 className="text-sm lg:text-lg mb-2 md:mb-0">Hygiene {'>'}</h2>
              <p className="text-xs lg:text-sm">
                Sexual Health Vitality Stamina
              </p>
            </div>
            <div className="text-white flex justify-center items-center text-sm lg:text-lg text-center bg-[var(--light-bg)] h-[20%]">
              Coming Soon
            </div>
          </div>
        </div>

        {/* card4 */}
        <div className="bg-[var(--dark-bg)] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-[320px] lg:h-[380px] md:w-[180px] lg:w-[250px] xl:w-[270px] overflow-hidden brightness-75">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%] bg-[var(--light-bg)]">
            <Image
              src="/images/amit-bansal-nobg.webp"
              alt="Card Image"
              width={1000}
              height={1000}
              className="object-cover lg:object-contain h-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col h-full md:h-[45%] w-[55%] md:w-full">
            <div className="p-4 h-[80%] flex flex-col gap-4 justify-center text-gray-100">
              <h2 className="text-sm lg:text-lg mb-2 md:mb-0">
                Wellness {'>'}
              </h2>
              <p className="text-xs lg:text-sm">
                Nutrition Metabolism Immunity
              </p>
            </div>
            <div className="text-white flex justify-center items-center text-sm lg:text-lg text-center bg-[var(--light-bg)] h-[20%]">
              Coming Soon
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="flex justify-center mb-2 relative mx-auto max-w-4xl mt-8">
        {/* Step 1 */}
        <div className="relative flex flex-col items-center w-1/3">
          <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-[var(--dark-bg)] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/image-Photoroom (4).png"
              alt="Step 1"
              width={1000}
              height={1000}
              className="w-16 h-16 md:w-28 md:h-28 mt-4 mr-4 cover"
            />
          </div>
          <div className="block absolute top-1/2 left-1/2 w-full h-0.5 bg-black -translate-y-1/2 -z-10"></div>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center w-1/3">
          <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-[var(--dark-bg)] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/happy couple in love lying in bed .png"
              alt="Step 1"
              width={1000}
              height={1000}
              className="w-16 h-16 md:w-28 md:h-28"
            />
          </div>
          <div className="block absolute top-1/2 left-1/2 w-full h-0.5 bg-black -translate-y-1/2 -z-10"></div>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center w-1/3">
          <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-[var(--dark-bg)] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/product-bg.png"
              alt="Step 1"
              width={1000}
              height={1000}
              className="w-6 h-12 md:w-12 md:h-24"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center relative mx-auto max-w-4xl ">
        <div className="relative flex flex-col items-center w-1/3 justify-center text-center">
          <p className="text-sm font-semibold">
            Assess <br /> Yourself
          </p>
        </div>
        <div className="relative flex flex-col items-center w-1/3 justify-center text-center">
          <p className="text-sm font-semibold">
            Consult For <br /> Free
          </p>
        </div>
        <div className="relative flex flex-col items-center w-1/3 justify-center text-center">
          <p className="text-sm font-semibold">
            {' '}
            Be <br /> Consistent
          </p>
        </div>
      </div>
    </div>
  )
}

export default Consult
