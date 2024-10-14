'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const ScrollAnimation = () => {
  // Create references for the sections
  const firstSectionRef = useRef(null)
  const secondSectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: secondSectionRef,
    offset: ['start end', 'end start'],
  })
  // Track scroll progress using Framer Motion's useScroll with a reference to the first section
  // const { scrollYProgress } = useScroll()

  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [window.innerHeight * 0.5 - 224, window.innerHeight + 336]
  )
  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [20, window.innerWidth * 0.5]
  )
  const yWithSpring = useSpring(y, {
    stiffness: 100,
    damping: 20,
  })
  const xWithSpring = useSpring(x, {
    stiffness: 100,
    damping: 20,
  })
  return (
    <div className="relative w-full">
      {/* First Section */}
      <div
        ref={firstSectionRef}
        className="h-[100vh] bg-blue-500 flex justify-center items-center relative"
      ></div>

      {/* Second Section */}
      <div
        ref={secondSectionRef}
        className="h-[100vh] bg-green-500 flex justify-center items-center relative"
      >
        <h1 className="text-white text-3xl font-bold">Second Section</h1>
      </div>

      {/* Third Section */}
      <div className="h-[80vh] bg-yellow-500 flex justify-center items-center relative">
        <h1 className="text-white text-3xl font-bold">Third Section</h1>
      </div>

      {/* Image that moves between sections */}
      <motion.img
        src="/images/Long_lasting_box.webp" // Your image path
        alt="Product"
        className="w-auto h-56 absolute"
        style={{
          top: yWithSpring,
          left: xWithSpring,
        }}
      />
    </div>
  )
}

export default ScrollAnimation
