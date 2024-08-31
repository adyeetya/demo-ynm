import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Strips from './Strips'
import './Aboutus.css'
const Aboutus = () => {
  return (
    <div
      className="md:py-6 bg-cover bg-center h-[1200px] mt-8 relative"
      style={{ backgroundImage: "url('/images/aboutus-bg.webp')" }}
    >
      {/* Top Marquee */}
      <div className="">
        <Strips />
        {/* Silver Gradient Section */}
        <div className=" flex items-center">
          <div className="flex flex-col items-start max-w-screen-xl mx-auto px-4 py-16">
            {/* <div className="flex w-full flex-col md:flex-row items-center justify-between mb-8 md:mb-16">
              <Image
                src="/images/about/YESnMore_blacklogo.png"
                alt="Placeholder"
                width={1000}
                height={1000}
                className="w-full md:max-w-sm"
              />
            </div> */}

            <div className="text-left">
              <h3 className="text-6xl md:text-7xl font-semibold text-white my-12">
                FROM <br /> INCEPTION <br /> TO{' '}
                <span className="italic text-[var(--dark-bg)]">REALITY</span>
              </h3>

              <Link
                href="/about"
                className="my-8 group w-fit text-2xl md:text-3xl font-semibold flex items-center gap-2 text-[var(--dark-bg)]"
              >
                OUR STORY
                <AiOutlineArrowRight className="group-hover:scale-125 group-hover:translate-x-3" />
              </Link>
              <p className="text-[var(--dark-bg)] md:text-xl">
                We empower Indian men to take control of their sexual health
                with confidence. We understand the silent struggles and offer a
                discreet, judgment-free space for personalized guidance and
                solutions. Explore your pleasure, optimize your performance, and
                embrace inner well-being with us.
              </p>
            </div>
          </div>
          <div className="absolute top-80 md:top-1/4 right-12 w-40 h-40 md:w-80 md:h-80">
            <Image
              src="/images/stamp_logo.webp"
              alt="Placeholder"
              width={1000}
              height={1000}
              className="scroll-rotate-img opacity-10 w-full h-full"
            />
          </div>
        </div>

        {/* icons */}

        <div className="flex flex-row justify-center gap-4 md:gap-12 max-w-screen-xl mx-auto px-4 py-8 md:py-16">
          <Image
            src="/images/FDA.webp"
            alt=""
            width={1000}
            height={1000}
            className="w-14 h-14 md:w-24 md:h-24"
          ></Image>
          <Image
            src="/images/about/clinically_tested.webp"
            alt=""
            width={1000}
            height={1000}
            className="w-14 h-14 md:w-24 md:h-24"
          ></Image>
          <Image
            src="/images/about/Cruelty_free.webp"
            alt=""
            width={1000}
            height={1000}
            className="w-14 h-14 md:w-24 md:h-24"
          ></Image>
          <Image
            src="/images/about/GMP_certificate.webp"
            alt=""
            width={1000}
            height={1000}
            className="w-14 h-14 md:w-24 md:h-24"
          ></Image>

          <Image
            src="/images/fssai_logo.webp"
            alt=""
            width={1000}
            height={1000}
            className="w-14 h-14 md:w-24 md:h-24"
          ></Image>
        </div>

        {/* Bottom Marquee */}
        {/* <div className=" py-2 my-16">
          <Marquee gradient={false}>
            <p className="whitespace-nowrap mx-4 text-2xl text-black tracking-widest">
              YES n MORE x APCO YESnMORE x
            </p>
          </Marquee>
        </div> */}
      </div>
    </div>
  )
}

export default Aboutus
