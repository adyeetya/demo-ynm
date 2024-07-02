'use client'
import React, { useContext } from 'react'
import { GlobalStateContext } from '../../context/navbarContext'
import Image from 'next/image'

const Hero = () => {
  const { isMenuOpen } = useContext(GlobalStateContext)

  return (
    <div className="relative h-[calc(100vh-4rem)]">
      <Image
        src="/images/yes n more dark1 desktop.png" // replace with your image path
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      <div
        className={`absolute inset-0 z-10 ${
          isMenuOpen ? 'bg-black opacity-60' : ''
        }`}
      ></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-between md:justify-center items-start md:items-center p-4 md:p-0">
        {/* Mobile Button */}
        <button
          className={`bg-white text-black py-3 px-10 rounded-xl mx-auto mt-16 font-extrabold text-xl ${
            isMenuOpen ? 'hidden' : 'block'
          } md:hidden`}
        >
          TAKE HEALTH TEST
        </button>

        {/* Mobile Text */}
        <div className="text-white text-left absolute bottom-8 left-8 md:hidden">
          <h1 className="text-4xl font-extrabold mb-4">
            CLIMAX <br /> DELAY SPRAY
          </h1>
          <p className="text-md">
            a brand which has solution to all your problems
          </p>
        </div>

        {/* Desktop Text */}
        <div className="hidden md:block text-white text-6xl font-thin text-center mb-32">
          SAY YES TO MORE PLEASURE
        </div>
      </div>
    </div>
  )
}

export default Hero
