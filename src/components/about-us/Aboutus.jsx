import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Aboutus = () => {
  return (
    <div className="py-4 md:py-6 ">
      {/* Top Marquee */}
      <div className="min-h-[calc(100vh-64px)]">
        <div className="bg-[var(--dark-bg)] py-2">
          <Marquee gradient={false}>
            <p className="whitespace-nowrap mx-4 text-lg text-yellow-400">
              YES n MORE | PERFORMANCE | PLEASURE | PROTECTION | CONFIDENCE |
              SCIENCE BACKED | LAB TESTED | YES n MORE | PERFORMANCE | PLEASURE
              | PROTECTION | CONFIDENCE | SCIENCE BACKED | LAB TESTED |
            </p>
          </Marquee>
        </div>

        {/* Silver Gradient Section */}
        <div className="bg-gradient-to-tr from-gray-300 via-gray-100 to-gray-400 flex items-center">
          <div className="flex flex-col items-start  max-w-screen-xl mx-auto p-4">
            <Image
              src="/images/ynm-logo-black.png"
              alt="Placeholder"
              width={1000}
              height={1000}
              className="w-full py-8 md:max-w-sm "
            />

            <div className="text-left my-4 ">
              <Link
                href="#"
                className="group w-fit text-2xl md:text-3xl font-semibold flex items-center gap-2 "
              >
                ABOUT US{' '}
                <AiOutlineArrowRight className="group-hover:scale-125 group-hover:translate-x-3" />
              </Link>
              <p className="text-gray-700 my-4 text-xl">
                We empower Indian men to take control of their sexual health
                with confidence. We understand the silent struggles and offer a
                discreet, judgment-free space for personalized guidance and
                solutions. Explore your pleasure, optimize your performance, and
                embrace inner well-being with us.
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold inline">
                FROM INCEPTION TO REALITY
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="bg-black py-2">
          <Marquee gradient={false}>
            <p className="whitespace-nowrap mx-4 text-lg text-[#39FF14]">
              YES n MORE | PERFORMANCE | PLEASURE | PROTECTION | CONFIDENCE |
              SCIENCE BACKED | LAB TESTED | YES n MORE | PERFORMANCE | PLEASURE
              | PROTECTION | CONFIDENCE | SCIENCE BACKED | LAB TESTED |
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
