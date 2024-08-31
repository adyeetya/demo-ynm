'use client'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const Strips = () => {
  const aniRef = useRef()
  const { scrollYProgress } = useScroll({
    target: aniRef,
  })
  const translateXright = useTransform(scrollYProgress, [1, 0], [400, -400])
  const translateXleft = useTransform(scrollYProgress, [1, 0], [-200, 200])

  const translateXrightMob = useTransform(scrollYProgress, [1, 0], [400, -400])
  const translateXleftMob = useTransform(scrollYProgress, [1, 0], [-400, 400])

  const translateXrightWithSpring = useSpring(translateXright, {
    stiffness: 200,
    damping: 40,
  })
  const translateXleftWithSpring = useSpring(translateXleft, {
    stiffness: 200,
    damping: 40,
  })

  const translateXrightWithSpringMob = useSpring(translateXrightMob, {
    stiffness: 10,
    damping: 10,
  })
  const translateXleftWithSpringMob = useSpring(translateXleftMob, {
    stiffness: 10,
    damping: 10,
  })

  return (
    <div>
      <div
        className="w-full overflow-hidden mx-auto text-center z-10 "
        ref={aniRef}
      >
        <motion.h2
          className="text-xl md:text-3xl text-yellow-400 text-center font-thin whitespace-nowrap mb-2"
          style={{
            x: translateXleftWithSpring,
          }}
        >
          <span className="font-thin">
            Confidence | Science Backed | Lab Tested | Confidence | Science
            Backed | Lab Tested | Confidence | Science Backed | Lab Tested |
            Confidence | Science Backed | Lab Tested |
          </span>
        </motion.h2>
        <motion.h2
          className="md:text-7xl text-4xl text-[var(--dark-bg)] text-center pr-2 font-semibold mb-8 whitespace-nowrap"
          style={{
            x: translateXrightWithSpring,
          }}
        >
          <span className="font-thin">
            {' '}
            Protection. Performance. Pleasure. Protection. Performance.
            Pleasure.
          </span>
        </motion.h2>
      </div>
    </div>
  )
}

export default Strips
