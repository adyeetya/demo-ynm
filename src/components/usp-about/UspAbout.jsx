"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { Montserrat } from "next/font/google";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });
import { motion, useInView } from "framer-motion";
export const Usp = () => {
  return (
    <div className=" p-4 md:py-6 max-w-screen-xl mx-auto my-12 md:my-24">
      {/* Top SVG Text Image */}
      <div className="text-center mb-12 md:mb-24 flex w-full justify-center">
        {/* Replace with your SVG image */}
        <div className="relative text-center">
          <h1 className="text-[10vw] md:text-[5vw] text-black leading-none text-center">
            <span className="ml-2 mr-4">Our</span>
            <span className="relative inline-block italic z-10">
              {/* "Unique" word with SVG outline */} Belief
              <img
                src="/images/hero/stroke_vector.svg"
                alt="Outline"
                className="absolute bottom-0 left-0 pointer-events-none -z-10 w-[200%] h-auto scale-[115%]"
              />
            </span>
            <br className="" />
            <span className="ml-4 text-3xl">- scientifically backed</span>
          </h1>
        </div>

        {/* <Image
          src="/images/hero/USP.svg"
          alt="SVG Text"
          width={300}
          height={100}
          className="w-full md:w-1/2"
        /> */}
      </div>

      {/* Three Columns Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Column 1 */}
        <div className="text-center">
          {/* <Image
            src="/images/indian_partner.webp"
            alt="Column 1 Image"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          /> */}
          <h2 className="text- font-bold mt-4">DIAGNOSE</h2>
          <p className="mt-2 text-xs text-gray-600">
            This is some descriptive text about the first column. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Sed, excepturi.
          </p>
        </div>
        {/* Column 2 */}
        <div className="text-center">
          {/* <Image
            src="/images/indian_partner.webp"
            alt="Column 1 Image"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          /> */}
          <h2 className="text- font-bold mt-4">PRESCRIPTION</h2>
          <p className="mt-2 text-xs text-gray-600">
            This is some descriptive text about the first column. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Sed, excepturi.
          </p>
        </div>
        {/* Column 3 */}
        <div className="text-center">
          {/* <Image
            src="/images/indian_partner.webp"
            alt="Column 1 Image"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          /> */}
          <h2 className="text- font-bold mt-4">MEDICATION</h2>
          <p className="mt-2 text-xs text-gray-600">
            This is some descriptive text about the first column. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Sed, excepturi.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-6 justify-center gap-4 md:gap-8 mt-24 w-full">
        <div className="text-center flex justify-center items-center p-4 border rounded-xl ">
          <Image
            src="/images/hero/FDA.webp"
            height={200}
            width={200}
            alt="FDA"
            className="w-20 h-20 md:w-32 md:h-32"
          />
        </div>
        <div className="text-center flex justify-center items-center p-4 border rounded-xl ">
          <Image
            src="/images/hero/fssai.webp"
            height={200}
            width={200}
            alt="FDA"
            className="w-20 h-20 md:w-32 md:h-32"
          />
        </div>
        <div className="text-center flex justify-center items-center p-4 border rounded-xl ">
          <Image
            src="/images/hero/GMP.webp"
            height={200}
            width={200}
            alt="FDA"
            className="w-20 h-20 md:w-32 md:h-32"
          />
        </div>
        <div className="text-center flex justify-center items-center p-4 border rounded-xl ">
          <Image
            src="/images/hero/clinically_tested.webp"
            height={200}
            width={200}
            alt="FDA"
            className="w-20 h-20 md:w-32 md:h-32"
          />
        </div>
        <div className="text-center flex justify-center items-center p-4 border rounded-xl ">
          <Image
            src="/images/hero/who_badge.webp"
            height={200}
            width={200}
            alt="FDA"
            className="w-20 h-20 md:w-32 md:h-32"
          />
        </div>
      </div>
    </div>
  );
};

export const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-b from-white via-gray-100 to-white py-4 relative md:my-12 overflow-hidden max-w-[100vw]"
    >
      {/* Background element with gradient */}
      <div className="p-4 my-12 md:py-6 max-w-screen-xl mx-auto relative z-10">
        {/* Animated Heading */}
        <motion.div
          className={`text-center flex flex-col gap-4 w-full justify-center ${montserrat.className}`}
        >
          <motion.h1
            initial={{ x: -100 }}
            animate={{ x: isInView ? 0 : -100 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10vw] md:text-[8vw] text-[#f1c232] leading-none text-right font-montserrat"
          >
            FROM <span className="font-semibold">INCEPTION</span>
          </motion.h1>
          <motion.h1
            initial={{ x: 100 }}
            animate={{ x: isInView ? 0 : 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[10vw] md:text-[8vw] text-[#f1c232] leading-none text-right font-montserrat"
          >
            TO <span className="font-semibold">REALITY</span>
          </motion.h1>
        </motion.div>

        {/* Video Container with Scale and Rotate Animation */}
        <motion.div className="absolute inset-0 top-20 -left-8 md:left-4 md:top-28 -z-10">
          <div className="rounded-full w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] md:w-96 md:h-96 flex items-center justify-center overflow-hidden shadow-lg">
            <video
              src="/images/reality.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full rounded-full"
            ></video>
          </div>
        </motion.div>

        {/* Image and Text Container */}
        <div className="mt-40 md:mt-28 lg:mt-10 flex flex-col md:flex-row items-center md:items-end justify-end relative">
          {/* Text Content with Animated Fade-in */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 text-black w-full max-w-2xl flex flex-col items-end"
          >
            <p className="md:text-lg leading-relaxed text-justify mt-8 md:mt-0">
              We empower Indian men to take control of their sexual health with
              confidence. We understand the silent struggles and offer a
              discreet, judgment-free space for personalized guidance and
              solutions. Explore your pleasure, optimize your performance, and
              embrace inner well-being with us.
            </p>

            {/* Button with Hover Effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 ml-auto md:ml-0 text-black"
            >
              <Link
                href="/about"
                className="text-sm md:text-base border border-black px-6 py-2 rounded-full active:scale-95"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
