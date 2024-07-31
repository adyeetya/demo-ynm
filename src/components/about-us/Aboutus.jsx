import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { AiOutlineArrowRight } from 'react-icons/ai'
const Aboutus = () => {
  return (
    <div className="py-4 md:py-6 ">
      {/* Top Marquee */}
      <div className="">
        <div className="bg-[var(--dark-bg)] py-2">
          <Marquee gradient={false}>
            <p className="whitespace-nowrap mx-4 text-lg text-gray-200">
              YES n MORE | PERFORMANCE | PLEASURE | PROTECTION | CONFIDENCE |
              SCIENCE BACKED | LAB TESTED | YES n MORE | PERFORMANCE | PLEASURE
              | PROTECTION | CONFIDENCE | SCIENCE BACKED | LAB TESTED |
            </p>
          </Marquee>
        </div>

        {/* Silver Gradient Section */}
        <div className="bg-gradient-to-tr from-gray-200 via-gray-200 to-gray-200 flex items-center">
          <div className="flex flex-col items-start  max-w-screen-xl mx-auto px-4 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-16">
              <Image
                src="/images/about/YESnMore_blacklogo.png"
                alt="Placeholder"
                width={1000}
                height={1000}
                className="w-full  md:max-w-sm "
              />
            </div>

            <div className="text-left">
              <Link
                href="/about"
                className="group w-fit text-2xl md:text-3xl font-semibold flex items-center gap-2 text-[var(--dark-bg)]"
              >
                <div className="w-20 md:w-24 h-20 md:h-24">
                  <script
                    src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
                    type="module"
                  ></script>

                  <dotlottie-player
                    src="https://lottie.host/e0e14799-7a40-466b-aa32-202df8c479d0/Hae5JPwY5c.json"
                    background="transparent"
                    speed="1"
                    className="w-20 md:w-32 h-20 md:h-32"
                    loop
                    autoplay
                  ></dotlottie-player>
                </div>
                OUR STORY
                <AiOutlineArrowRight className="group-hover:scale-125 group-hover:translate-x-3" />
              </Link>
              <p className="text-[var(--dark-bg)] my-4 text-xl">
                We empower Indian men to take control of their sexual health
                with confidence. We understand the silent struggles and offer a
                discreet, judgment-free space for personalized guidance and
                solutions. Explore your pleasure, optimize your performance, and
                embrace inner well-being with us.
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold inline text-[var(--dark-bg)]">
                FROM INCEPTION TO REALITY
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Marquee */}
        <div className="bg-black py-2">
          <Marquee gradient={false}>
            <p className="whitespace-nowrap mx-4 text-lg text-gray-200">
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
