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
    <div className="relative min-h-[calc(100vh-4rem)] pt-16 md:pt-0">
      {/* Desktop Image */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/images/hero-bg-desk.png" // replace with your desktop image path
          alt="Desktop Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 brightness-75"
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src="/images/product/chem-bg.png" // replace with your mobile image path
          alt="Mobile Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 brightness-50"
        />
      </div>

      <div
        className={`absolute inset-0 z-10 ${
          isMenuOpen ? 'bg-black opacity-60' : ''
        }`}
      ></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-between md:justify-center items-start md:items-center p-4 md:p-0">
        <button
          onClick={openModal}
          className={`bg-white md:hidden text-black py-2 px-6 rounded-xl mx-auto mt-8 md:mb-8 font-semibold text-xl hover:bg-black hover:text-gray-100 ${
            isMenuOpen ? 'hidden' : 'block'
          }`}
        >
          TAKE HEALTH TEST
        </button>

        {/* Mobile Text */}
        <div className="md:hidden flex w-full overflow-hidden">
          <div className="text-gray-100 text-left absolute bottom-32 left-4 md:hidden z-10">
            <h1 className="text-2xl mb-8">
              EXPERIENCE <br /> INTIMACY <br /> LIKE NEVER <br /> BEFORE!
            </h1>
            <Link
              href="/product/1"
              className=" bg-blue-200 text-black py-2 px-6 mx-auto font-semibold text-xl"
            >
              BUY NOW
            </Link>
          </div>
          <div className="absolute bottom-24 right-4 overflow-hidden">
            <Image
              src="/images/product-bg.png"
              width={1000}
              height={1000}
              alt="Hero Image"
              className="h-96 w-48 rounded-xl overflow-hidden"
            ></Image>
          </div>
        </div>

        {/* Desktop Text */}
        <div className="hidden w-full md:flex justify-center items-center md:items-center text-gray-100  font-thin text-center ">
          <div className="flex flex-col gap-4 justify-center items-center">
            <button
              onClick={openModal}
              className={`bg-white  text-black py-2 px-6 rounded-xl mx-auto  font-semibold text-xl hover:bg-black hover:text-gray-100`}
            >
              TAKE HEALTH TEST
            </button>
            <h1 className="md:text-3xl xl:text-4xl 2xl:text-5xl font-thin tracking-wide 2xl:tracking-widest my-8">
              EXPERIENCE <br className="md:hidden" /> INTIMACY <br /> LIKE NEVER{' '}
              <br className="md:hidden" /> BEFORE!
            </h1>
            <Link
              href="/product/1"
              className=" bg-blue-200 text-black hover:text-gray-100 hover:bg-blue-400 py-2 px-6 w-fit font-semibold text-xl"
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
