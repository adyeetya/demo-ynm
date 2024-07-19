// Hero.js
'use client'
import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '../modal/Modal'
import SelfAssessment from '../modal/SelfAssessment'
import { GlobalStateContext } from '../../context/navbarContext'

const Hero = () => {
  const { isMenuOpen } = useContext(GlobalStateContext)
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="relative z-0 w-full h-[100vh] lg:h-[70vh] xl:min-h-screen bg-red-500 -mt-16 overflow-hidden">
      {/* Desktop Image */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero/web-banner.png"
          alt="Desktop Background Image"
          height={1000}
          width={1000}
          priority
          className="absolute w-full h-full object-cover"
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src="/images/hero/banner-phone.png"
          alt="Mobile Background Image"
          width={1000}
          height={1000}
          priority
          className="absolute w-full h-full object-cover"
        />
      </div>

      <div
        className={`absolute inset-0 z-10 ${
          isMenuOpen ? 'bg-black opacity-60' : ''
        }`}
      ></div>
      <div className="absolute mt-16 inset-0 z-10 flex flex-col justify-between md:justify-center items-start md:items-center p-4 md:p-0">
        <button
          onClick={openModal}
          className={`z-10 absolute top-0 left-0 right-0 w-fit text-black py-1 px-6 rounded-xl mx-auto mt-8 font-semibold text-lg bg-gray-300 hover:bg-black hover:text-gray-100 ${
            isMenuOpen ? 'hidden' : 'block'
          }`}
        >
          TAKE HEALTH TEST
        </button>

        {/* Mobile Text */}
        <div className="md:hidden flex w-full overflow-hidden">
          <div className="text-gray-100 text-left absolute bottom-32 left-4 md:hidden z-10">
            <h1 className="text-3xl font-bold text-left text-gray-100 tracking-wide 2xl:tracking-widest">
              experience <br /> intimacy
            </h1>
            <p className="text-lg mb-12">like never before!</p>
            <Link
              href="/product/1"
              className="mt-2 bg-white text-black hover:text-gray-100 hover:bg-black py-2 px-6 w-fit font-semibold text-xl rounded-full "
            >
              BUY NOW
            </Link>
          </div>
        </div>

        {/* Desktop Text */}
        <div className="hidden w-full max-w-screen-lg md:flex px-4 items-center md:items-center text-gray-100 font-thin text-center ">
          <div className="flex flex-col gap-4 justify-start items-start z-10">
            <h1 className="md:text-3xl xl:text-7xl font-bold text-left text-gray-100 tracking-wide 2xl:tracking-widest">
              experience <br /> intimacy
            </h1>
            <p className="text-lg">like never before!</p>
            <Link
              href="/product/1"
              className="bg-white text-black hover:text-gray-100 hover:bg-black py-2 px-6 w-fit font-semibold text-xl rounded-full mt-4 "
            >
              BUY NOW
            </Link>
          </div>
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

export default Hero
