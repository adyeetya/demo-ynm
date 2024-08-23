import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
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
        <div className="bg-gradient-to-tr from-white via-white to-white flex items-center">
          <div className="flex flex-col items-start  max-w-screen-xl mx-auto px-4 py-16">
            <div className="flex w-full flex-col md:flex-row items-center justify-between mb-8 md:mb-16">
              <Image
                src="/images/about/YESnMore_blacklogo.png"
                alt="Placeholder"
                width={1000}
                height={1000}
                className="w-full  md:max-w-sm "
              />
              <div className="flex flex-col gap-4 md:gap-8">
                <div className="flex justify-center gap-4 md:gap-8">
                  <Image
                    src="/images/about/clinically_tested.webp"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-20 h-20"
                  ></Image>
                  <Image
                    src="/images/about/Cruelty_free.webp"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-20 h-20"
                  ></Image>
                  <Image
                    src="/images/about/GMP_certificate.webp"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-20 h-20"
                  ></Image>
                </div>
                <div className="flex gap-4 md:gap-8">
                  <Image
                    src="/images/about/FDA.webp"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-auto h-16"
                  ></Image>
                  <Image
                    src="/images/about/FSSAI.webp"
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-auto h-16"
                  ></Image>
                </div>
              </div>
            </div>

            <div className="text-left">
              <Link
                href="/about"
                className="group w-fit text-2xl md:text-3xl font-semibold flex items-center gap-2 text-[var(--dark-bg)]"
              >
                <div className="w-20 md:w-24 h-20 md:h-24">
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
              <p className="text-[var(--dark-bg)] my-4 md:text-xl">
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
