'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '../modal/Modal'
import SelfAssessment from '../modal/SelfAssessment'
const Consult = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }
  return (
    <div className="p-4 md:py-6 mt-4 max-w-screen-xl mx-auto">
      <div className="mb-12 ">
        <h2 className="font-bold text-2xl">Expert Advice that Works</h2>
      </div>
      {/* Wide Cards Section */}
      <div className="flex flex-col md:flex-row gap-14 md:gap-24 mb-12 justify-center">
        <div className="relative w-full md:w-96">
          <div className="bg-[#F1D7B7] rounded-3xl shadow-lg flex h-44 md:h-44 relative">
            <div className="w-2/5 relative h-full">
              <Image
                src="/images/—Pngtree—the lab doctor smiles_14602877 1.png"
                alt="Wide Card 1"
                layout="fill"
                objectFit="cover"
                objectPosition="top center"
                className="absolute top-[-50%] left-0 right-0 bottom-0 -mt-[14px]  ml-2 transform scale-[115%] z-10" // Adjust top position and scale the image
              />
            </div>
            <div className="w-3/5 flex justify-center items-center mb-6">
              <button className="font-bold text-lg">
                Consult for free {'>'}
              </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[15%] bg-black rounded-b-3xl"></div>
          </div>
        </div>

        {/* -------------- */}
        <div className="relative w-full md:w-96">
          <div className="bg-[#F1D7B7] rounded-3xl shadow-lg flex h-44 md:h-44 relative">
            <div className="w-2/5 relative h-full">
              <Image
                src="/images/SeekPng.com_hombre-png_1943212 1.png"
                alt="Wide Card 1"
                layout="fill"
                objectFit="cover"
                objectPosition="top center"
                className="absolute top-[-50%] left-0 right-0 bottom-0 -mt-[6px] md:-mt-[5px] ml-[13px] md:ml-[20px] transform scale-[106%] z-10" // Adjust top position and scale the image
              />
            </div>
            <div className="w-3/5 flex justify-center items-center mb-6">
              <button onClick={openModal} className="font-bold text-lg">
                Assess myself {'>'}
              </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[15%] bg-black rounded-b-3xl"></div>
          </div>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex flex-col md:flex-row-reverse md:gap-6 justify-center items-center mb-12">
        <div className="mb-4 md:mb-0 text-center">
          <h2 className="font-bold text-xl">
            TRUSTED BY <br className="hidden md:block" /> 1L+ USERS
          </h2>
        </div>
        <div className="flex flex-row justify-around items-center  md:mx-4 gap-8">
          <div className="flex flex-col items-center bg-[#F1D7B7] rounded-xl p-2 w-16 h-16">
            <Image
              src="/images/trust-icons/user icon@2x.png"
              alt="Icon 1"
              width={1000}
              height={1000}
              className="w-12 h-12"
            />
          </div>
          <div className="flex bg-[#F1D7B7] rounded-xl p-2 w-16 h-16 justify-center items-center">
            <Image
              src="/images/trust-icons/doctor icon@3x.png"
              alt="Icon 1"
              width={1000}
              height={1000}
              className="w-8 h-8"
            />
          </div>
          <div className="flex flex-col  bg-[#F1D7B7] rounded-xl p-2 w-16 h-16 justify-center items-center">
            <Image
              src="/images/trust-icons/phone icon@3x.png"
              alt="Icon 1"
              width={1000}
              height={1000}
              className="w-8 h-8"
            />
          </div>
        </div>
      </div>

      {/* Other Cards Section */}
      <div className="flex flex-col md:flex-row mb-8 justify-center gap-4 md:gap-8">
        {/* card1 */}
        <div className="bg-[#0A0A06] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-[450px] md:w-[270px] overflow-hidden">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%]">
            <Image
              src="/images/happy couple in love lying in bed .png" // dummy image
              alt="Card Image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Text Section */}
          <div className="p-4 md:p-6 w-[55%] md:w-full flex flex-col gap-4 justify-center text-gray-100 h-full md:h-[45%]">
            <Link href='/product/1' className="text-xl font-semibold mb-2 md:mb-0">
              Performance {'>'}
            </Link>
            <p className="text-sm">Sexual Health Vitality Stamina</p>
          </div>
        </div>

        {/* card2 */}
        <div className="bg-[#0A0A06] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-[450px] md:w-[270px] overflow-hidden brightness-75">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%]">
            <Image
              src="/images/vecteezy_fresh-food-in-human-body.png" // dummy image
              alt="Card Image"
              layout="fill"
              objectFit="cover md:contain"
              className=""
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col h-full md:h-[45%] w-[55%] md:w-full">
            <div className="p-4  h-[80%] flex flex-col gap-4 justify-center text-gray-100">
              <h2 className="text-xl font-semibold mb-2 md:mb-0">
                Nutrition {'>'}
              </h2>
              <p className="text-sm">Nutrition Metabolism Immunity</p>
            </div>
            <div className="text-black flex justify-center items-center text-lg text-center bg-[#F1D7B7] h-[20%]">
              Coming Soon
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className="bg-[#0A0A06] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-[450px] md:w-[270px] overflow-hidden brightness-75">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%]">
            <Image
              src="/images/image-Photoroom (4).png" // dummy image
              alt="Card Image"
              layout="fill"
              objectFit="cover md:contain"
              className=""
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col h-full md:h-[45%] w-[55%] md:w-full">
            <div className="p-4  h-[80%] flex flex-col gap-4 justify-center text-gray-100">
              <h2 className="text-xl font-semibold mb-2 md:mb-0">
                Hygiene {'>'}
              </h2>
              <p className="text-sm">Sexual Health Vitality Stamina</p>
            </div>
            <div className="text-black flex justify-center items-center text-lg text-center bg-[#F1D7B7] h-[20%]">
              Coming Soon
            </div>
          </div>
        </div>
        {/* card4 */}
        <div className="bg-[#0A0A06] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-[450px] md:w-[270px] overflow-hidden brightness-75">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%]">
            <Image
              src="/images/maledoc.jpg" // dummy image
              alt="Card Image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col h-full md:h-[45%] w-[55%] md:w-full">
            <div className="p-4  h-[80%] flex flex-col gap-4 justify-center text-gray-100">
              <h2 className="text-xl font-semibold mb-2 md:mb-0">
                Wellness {'>'}
              </h2>
              <p className="text-sm">Nutrition Metabolism Immunity</p>
            </div>
            <div className="text-black flex justify-center items-center text-lg text-center bg-[#F1D7B7] h-[20%]">
              Coming Soon
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="flex justify-center mb-2 relative mx-auto max-w-4xl mt-8">
        {/* Step 1 */}
        <div className="relative flex flex-col items-center w-1/3">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#EDC800] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/image-Photoroom (4).png"
              alt="Step 1"
              width={1000}
              height={1000}
              className="w-16 h-16 md:w-20 md:h-20 mt-4 mr-4 cover"
            />
          </div>
          <div className="block absolute top-1/2 left-1/2 w-full h-0.5 bg-black -translate-y-1/2 -z-10"></div>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center w-1/3">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#EDC800] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/happy couple in love lying in bed .png"
              alt="Step 1"
              width={50}
              height={50}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <div className="block absolute top-1/2 left-1/2 w-full h-0.5 bg-black -translate-y-1/2 -z-10"></div>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center w-1/3">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#EDC800] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/product-bg.png"
              alt="Step 1"
              width={50}
              height={50}
              className="w-6 h-12 md:w-8 md:h-16"
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

      {/* Modal */}
      {modalOpen && (
        <Modal closeModal={closeModal}>
          {/* Content of your modal */}
          <SelfAssessment closeModal={closeModal} />
        </Modal>
      )}
    </div>
  )
}

export default Consult
