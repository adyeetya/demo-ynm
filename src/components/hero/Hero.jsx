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
          className="absolute inset-0 brightness-50"
        />
      </div>

      {/* Mobile Image */}
      <div className="block md:hidden absolute inset-0">
        <Image
          src="/images/hero-bg-mob.png" // replace with your mobile image path
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
        {/* Mobile Button */}
        <button
          onClick={openModal}
          className={`bg-white text-black py-2 px-6 rounded-xl mx-auto mt-8 md:mb-8 font-semibold text-xl ${
            isMenuOpen ? 'hidden' : 'block'
          }`}
        >
          TAKE HEALTH TEST
        </button>

        {/* Mobile Text */}
        <div className="text-[#FFF5EA] text-left absolute bottom-24 left-8 md:hidden">
          <h1 className="text-3xl mb-8">
            EXPERIENCE <br /> INTIMACY <br /> LIKE NEVER <br /> BEFORE!
          </h1>
          <Link
            href="/product/1"
            className=" bg-white text-black py-2 px-6 rounded-xl mx-auto font-semibold text-xl"
          >
            BUY NOW
          </Link>
        </div>

        {/* Desktop Text */}
        <div className="hidden w-full md:px-8 md:flex md:items-center text-[#FFF5EA]  font-thin text-left mb-32">
          <div>
            <h1 className="md:text-3xl xl:text-5xl mb-8">
              EXPERIENCE <br className="md:hidden" /> INTIMACY <br /> LIKE NEVER{' '}
              <br className="md:hidden" /> BEFORE!
            </h1>
            <Link
              href="/product/1"
              className=" bg-white text-black py-2 px-6 rounded-xl font-semibold text-xl"
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
          <SelfAssessment />
        </Modal>
      )}
    </div>
  )
}

export default Hero
