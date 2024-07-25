import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Aboutus = () => {
  return (
    <div className="py-4 md:py-6">
      {/* Top Marquee */}
      <div className="bg-[var(--dark-bg)] py-2">
        <Marquee gradient={false}>
          <p className="whitespace-nowrap mx-4 text-lg font-semibold text-yellow-400">
            YES n MORE | PERFORMANCE | PLEASURE | PROTECTION | CONFIDENCE |
            SCIENCE BACKED | LAB TESTED | YES n MORE | PERFORMANCE | PLEASURE |
            PROTECTION | CONFIDENCE | SCIENCE BACKED | LAB TESTED |
          </p>
        </Marquee>
      </div>

      {/* Silver Gradient Section */}
      <div className="bg-gradient-to-tr from-gray-500 via-gray-200 to-gray-500 py-8 md:py-28">
        <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto p-4">
          <Image
            src="/images/ynm-logo-black.png"
            alt="Placeholder"
            width={1000}
            height={1000}
            className="mx-auto w-full p-8 md:max-w-sm "
          />
          <div className="text-left mt-4 md:mt-0 md:ml-8">
            <Link
              href="#"
              className="group w-fit text-2xl md:text-3xl font-semibold flex items-center gap-2 underline decoration-yellow-500"
            >
              ABOUT US <AiOutlineArrowRight className="group-hover:scale-125 group-hover:translate-x-3" />
            </Link>
            <p className="text-gray-700 my-4">
              We empower Indian men to take control of their sexual health with
              confidence. We understand the silent struggles and offer a
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
          <p className="whitespace-nowrap mx-4 text-lg font-semibold text-yellow-400">
            YES n MORE | PERFORMANCE | PLEASURE | PROTECTION | CONFIDENCE |
            SCIENCE BACKED | LAB TESTED | YES n MORE | PERFORMANCE | PLEASURE |
            PROTECTION | CONFIDENCE | SCIENCE BACKED | LAB TESTED |
          </p>
        </Marquee>
      </div>
    </div>
  )
}

export default Aboutus
