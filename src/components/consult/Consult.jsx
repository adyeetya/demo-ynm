'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import Link from 'next/link'

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-1  md:p-2 w-11/12 max-w-md md:max-w-lg lg:max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute text-xl top-2 right-4 md:right-2 text-gray-200 md:text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <div>{content}</div>
      </div>
    </div>
  )
}

const Consult = () => {
  const [openModal, setOpenModal] = useState(null)

  const modalContent = {
    modal1: (
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/indian_partner.webp"
            alt="last long"
            height={1000}
            width={1000}
            className="w-full rounded"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between px-4 py-2 md:px-0 md:py-4">
          <h2 className="text-xl font-bold mb-4">Last Long</h2>
          <p className="text-xs">
            Long-lasting problems in sexual wellness can significantly impact
            quality of life and relationships. These issues may be physical,
            psychological, or relational, and addressing them often requires a
            comprehensive approach.
          </p>
          <Link
            href="/product/66c9b27a0686cead3079c844"
            className="rounded-full text-center px-4 py-2 bg-[var(--dark-bg)] text-white w-full mt-4"
          >
            Solution for it
          </Link>
        </div>
      </div>
    ),
    modal2: (
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/indian_partner.webp"
            alt="last long"
            height={1000}
            width={1000}
            className="w-full rounded"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between px-4 md:px-0 py-2 md:py-4">
          <h2 className="text-xl font-bold mb-4">Erection Support</h2>
          <p className="text-xs">
            Erection support involves various strategies and treatments to help
            individuals achieve and maintain an erection. Effective approaches
            include- <br />
            Medical Treatments <br /> Lifestyle Changes
          </p>
          <Link
            href="/product/66c9a2fe0686cead3079c72a"
            className="rounded-full text-center px-4 py-2 bg-[var(--dark-bg)] text-white w-full mt-4"
          >
            Solution for it
          </Link>
        </div>
      </div>
    ),
    modal3: (
      <div>
        <h2 className="text-xl font-bold mb-4">Wellness</h2>
        <p>Details about Nutrition Metabolism Immunity...</p>
      </div>
    ),
  }

  const closeModal = () => setOpenModal(null)

  return (
    <div className="p-4 md:py-6 mt-4 max-w-screen-xl mx-auto z-0">
      <div className="mb-12 ">
        <h2 className="font-bold text-2xl">Expert Advice that Works</h2>
      </div>
      {/* Wide Cards Section */}
      <div className="flex flex-col items-center sm:flex-row gap-14 sm:gap-4 md:gap-24 my-12 justify-center">
        <div className="group relative w-full h-52 max-w-96 md:w-96">
          <div className="h-52">
            <Image
              src="/images/DOCTOR.webp"
              alt="Wide Card 1"
              width={1000}
              height={1000}
              className="absolute top-0 left-0 z-10 h-full w-auto"
            />
          </div>
          <div className="absolute inset-x-0 rounded-3xl bottom-0 bg-[var(--light-bg)] shadow-xl h-44 w-full flex justify-end items-center">
            <Link
              href="/experts"
              className="group-hover:scale-110 text-white whitespace-nowrap md:text-lg w-1/2 mr-4"
            >
              Consult for Free {'>'}
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[15%] bg-[var(--dark-bg)] rounded-b-3xl"></div>
        </div>

        {/* -------------- */}
        <div className="group relative w-full h-52 max-w-96 md:w-96">
          <div className="h-52">
            <Image
              src="/images/SeekPng.com_hombre-png_1943212 1.png"
              alt="Wide Card 1"
              width={1000}
              height={1000}
              className="absolute top-0 left-4 z-10 h-full w-auto"
            />
          </div>
          <div className="absolute inset-x-0 rounded-3xl bottom-0 bg-[var(--light-bg)] shadow-xl h-44 w-full flex justify-end items-center">
            <Link
              href="/self-assessment"
              className="group-hover:scale-110 text-white whitespace-nowrap md:text-lg w-1/2"
            >
              Assess myself {'>'}
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[15%] bg-[var(--dark-bg)] rounded-b-3xl"></div>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex flex-col md:flex-row-reverse md:gap-6 justify-center items-center my-16 md:my-24">
        <div className="mb-4 md:mb-0 text-center">
          <h2 className="font-bold text-xl">
            TRUSTED BY <br className="hidden md:block" /> OUR USERS
          </h2>
        </div>
        <div className="flex flex-row justify-around items-center  md:mx-4 gap-8 md:gap-20">
          <div>
            <div className="flex bg-white shadow-lg rounded-xl p-2 w-20 h-20 md:w-24 md:h-24 justify-center items-center">
              <dotlottie-player
                src="https://lottie.host/542bcbea-da75-4f4f-aedf-d4252cf37298/X0IOYFkvyq.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <p className="text-center text-xs mt-2">
              User <br /> Friendly
            </p>
          </div>
          <div>
            <div className="rotate-90 flex bg-white shadow-lg rounded-xl p-2 w-20 h-20 md:w-24 md:h-24 justify-center items-center">
              <dotlottie-player
                src="https://lottie.host/99e917b1-85d2-477f-b8af-a1cb8f45b821/HQMOsF5tQM.json"
                background="transparent"
                speed="0.5"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <p className="text-center text-xs mt-2">
              Quick <br /> Response
            </p>
          </div>
          <div>
            <div className="flex flex-col shadow-lg bg-white rounded-xl p-2 w-20 h-20 md:w-24 md:h-24 justify-center items-center">
              <div className="w-28 h-28">
                <dotlottie-player
                  src="https://lottie.host/ca3ade05-5e38-4496-83d4-aeb54576f1ad/CU0prhhACO.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></dotlottie-player>
              </div>
            </div>
            <p className="text-center text-xs mt-2">
              Prescription <br /> Based
            </p>
          </div>
        </div>
      </div>

      {/* Other Cards Section */}
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8 my-12 justify-between">
        {/* card1 */}
        <div className="group hover:shadow-2xl bg-[var(--dark-bg)] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-[320px] lg:h-[380px] md:w-[180px] lg:w-[250px] xl:w-[270px] overflow-hidden">
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
            <button
              onClick={() => setOpenModal('modal1')}
              className="group-hover:scale-110 w-fit lg:text-lg mb-2 md:mb-0"
            >
              Last Long {'>'}
            </button>
            <p className="text-xs lg:text-sm">Sexual Health Vitality Stamina</p>
          </div>
        </div>

        {/* card2 */}
        <div className="group hover:shadow-2xl bg-[var(--dark-bg)] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-[320px] lg:h-[380px] md:w-[180px] lg:w-[250px] xl:w-[270px] overflow-hidden ">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%] bg-[var(--light-bg)]">
            <Image
              src="/images/DOCTOR.webp" // dummy image
              alt="Card Image"
              width={1000}
              height={1000}
              className="object-cover lg:object-contain h-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col h-full md:h-[45%] w-[55%] md:w-full">
            <div className="p-2 lg:p-4 h-full flex flex-col gap-4 justify-center text-gray-100">
              <button
                onClick={() => setOpenModal('modal2')}
                className="group-hover:scale-110 w-fit text-sm lg:text-lg mb-2 md:mb-0"
              >
                Erection Support {'>'}
              </button>
              <p className="text-xs lg:text-sm">
                Nutrition Metabolism Immunity
              </p>
            </div>
          </div>
        </div>

        {/* card3 */}
        <div className="group hover:shadow-2xl bg-[var(--dark-bg)] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-[320px] lg:h-[380px] md:w-[180px] lg:w-[250px] xl:w-[270px] overflow-hidden ">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%] bg-[var(--light-bg)]">
            <Image
              src="/images/nutrition-img.png"
              alt="Card Image"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col h-full md:h-[45%] w-[55%] md:w-full">
            <div className="p-4 h-full flex flex-col gap-4 justify-center text-gray-100">
              <button
                onClick={() => setOpenModal('modal3')}
                className="group-hover:scale-110 w-fit text-sm lg:text-lg mb-2 md:mb-0"
              >
                Wellness {'>'}
              </button>
              <p className="text-xs lg:text-sm">
                Nutrition Metabolism Immunity
              </p>
            </div>
          </div>
        </div>

        {/* card4 */}
        <div className="bg-[var(--dark-bg)] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-[320px] lg:h-[380px] md:w-[180px] lg:w-[250px] xl:w-[270px] overflow-hidden brightness-75">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%] bg-[var(--light-bg)]">
            <Image
              src="/images/hygiene.webp" // dummy image
              alt="Card Image"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
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
      </div>

      {/* Steps Section */}
      <div className="mt-24 mb-12">
        <div className="mb-12">
          <h2 className="font-bold text-2xl">How it Works</h2>
        </div>
        <div className="flex justify-start mb-2 relative mx-auto max-w-4xl">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center w-1/3">
            <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-[#A2A685] flex items-center justify-center overflow-hidden z-10">
              <Image
                src="/images/hygiene.webp"
                alt="Step 1"
                width={1000}
                height={1000}
                className="w-16 h-16 md:w-28 md:h-28 cover"
              />
            </div>
            <div className="block absolute top-1/2 left-1/2 w-full h-0.5 bg-black -translate-y-1/2 z-0"></div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center w-1/3">
            <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-[#A2A685] flex items-center justify-center overflow-hidden z-10">
              <Image
                src="/images/DOCTOR.webp"
                alt="Step 2"
                width={1000}
                height={1000}
                className="w-12 h-16 md:w-20 md:h-28"
              />
            </div>
            <div className="block absolute top-1/2 left-1/2 w-full h-0.5 bg-black -translate-y-1/2 z-0"></div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center w-1/3">
            <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-[#A2A685] flex items-center justify-center overflow-hidden z-10">
              <Image
                src="/images/Long_lasting_box.webp"
                alt="Step 3"
                width={1000}
                height={1000}
                className="object-contain h-12 md:h-24"
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

      {/* Modal */}
      <Modal
        isOpen={openModal !== null}
        onClose={closeModal}
        content={modalContent[openModal]}
      />
    </div>
  )
}

export default Consult
