"use client";
import React from "react";
import { useState } from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
import { Lora } from "next/font/google";
const lora = Lora({ weight: "400", subsets: ["latin"] });
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import {
  FaFlask,
  FaCheckCircle,
  FaSprayCan,
  FaHourglass,
  FaShieldAlt,
  FaLeaf,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export const DetailsHowToUseArkyn = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className={`${poppins.className} py-4`}>
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "details"
              ? "border-b-2 border-blue-500 font-bold text-blue-500"
              : ""
          }`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "howToUse"
              ? "border-b-2 border-blue-500 font-bold text-blue-500"
              : ""
          }`}
          onClick={() => setActiveTab("howToUse")}
        >
          How to Use
        </button>
      </div>

      {activeTab === "details" && (
        <div>
          <h2 className="text-lg font-bold mb-2">Arkyn by YES N MORE :</h2>
          <p className="font-semibold mb-4">SAY YES TO MORE PLEASURE</p>
          <ul className="list-disc ">
            {/* 1 */}
            <li className="flex items-start mb-3">
              <span className="mr-2 mt-1">
                <FaFlask className="text-[#999999]" />
              </span>
              <div className="text-sm">
                <strong>Powerful Performance Formula</strong> Crafted with
                potent ingredients for optimal testosterone enhancement. No
                unwanted side effects, ensuring a smooth, effective experience.
              </div>
            </li>

            {/* 2 */}
            <li className="flex items-start mb-3">
              <span className="mr-2 mt-1">
                <FaFlask className="text-[#999999]" />
              </span>
              <div className="text-sm">
                <strong>Powerful Performance Formula</strong> Crafted with
                potent ingredients for optimal testosterone enhancement. No
                unwanted side effects, ensuring a smooth, effective experience.
              </div>
            </li>
            {/* 3 */}
            <li className="flex items-start mb-3">
              <span className="mr-2 mt-1">
                <FaFlask className="text-[#999999]" />
              </span>
              <div className="text-sm">
                <strong>Powerful Performance Formula</strong> Crafted with
                potent ingredients for optimal testosterone enhancement. No
                unwanted side effects, ensuring a smooth, effective experience.
              </div>
            </li>
            {/* 4 */}
            <li className="flex items-start mb-3">
              <span className="mr-2 mt-1">
                <FaFlask className="text-[#999999]" />
              </span>
              <div className="text-sm">
                <strong>Powerful Performance Formula</strong> Crafted with
                potent ingredients for optimal testosterone enhancement. No
                unwanted side effects, ensuring a smooth, effective experience.
              </div>
            </li>
            {/* 5 */}
            <li className="flex items-start mb-3">
              <span className="mr-2 mt-1">
                <FaFlask className="text-[#999999]" />
              </span>
              <div className="text-sm">
                <strong>Powerful Performance Formula</strong> Crafted with
                potent ingredients for optimal testosterone enhancement. No
                unwanted side effects, ensuring a smooth, effective experience.
              </div>
            </li>
          </ul>
        </div>
      )}

      {activeTab === "howToUse" && (
        <div>
          <h2 className="text-lg font-bold mb-2">HOW TO USE</h2>
          <h3 className="font-semibold mb-4">Arkyn</h3>
          <ul className="list-decimal ">
            {/* 1 */}
            <li className="flex items-start mb-3">
              <span className="mr-2">
                <FaCheckCircle className="text-blue-500" />
              </span>
              <div className="text-sm">
                Follow the dosage instructions on the packaging or from your
                healthcare provider.
              </div>
            </li>
            {/* 2 */}
            <li className="flex items-start mb-3">
              <span className="mr-2">
                <FaCheckCircle className="text-blue-500" />
              </span>
              <div className="text-sm">
                Follow the dosage instructions on the packaging or from your
                healthcare provider.
              </div>
            </li>
            {/* 3 */}
            <li className="flex items-start mb-3">
              <span className="mr-2">
                <FaCheckCircle className="text-blue-500" />
              </span>
              <div className="text-sm">
                Follow the dosage instructions on the packaging or from your
                healthcare provider.
              </div>
            </li>
            {/* 4 */}
            <li className="flex items-start mb-3">
              <span className="mr-2">
                <FaCheckCircle className="text-blue-500" />
              </span>
              <div className="text-sm">
                Follow the dosage instructions on the packaging or from your
                healthcare provider.
              </div>
            </li>
          </ul>
        </div>
      )}

      <div className="flex justify-around mt-6 items-center overflow-hidden">
        <div className="flex flex-col justify-between items-center w-24">
          <Image
            src="/images/product/medical-globe.png"
            alt="WHO Certified"
            width={100}
            height={100}
            className="w-12 h-12"
          />
          <p className="mt-2 text-[10px] md:text-sm text-center">
            WHO <br className="hidden md:block" /> Certified
          </p>
        </div>
        <div className="flex flex-col justify-between items-center w-24">
          <div className="rounded-full border-2 border-gray-800 w-12 h-12 flex justify-center items-center">
            <Image
              src="/images/product/rabit.png"
              alt="Cruelty Free"
              width={100}
              height={100}
              className="w-12 h-12"
            />
          </div>
          <p className="mt-2 text-[10px] md:text-sm text-center">
            Cruelty <br className="hidden md:block" /> Free
          </p>
        </div>
        <div className="flex flex-col justify-between items-center w-24">
          <div className="rounded-full border-2 border-gray-800 w-12 h-12 flex justify-center items-center">
            <Image
              src="/images/product/test.png"
              alt="Lab Tested"
              width={100}
              height={100}
              className="w-8 h-8"
            />
          </div>
          <p className="mt-2 text-[10px] md:text-sm text-center">
            Lab <br className="hidden md:block" /> Tested
          </p>
        </div>
        <div className="flex flex-col justify-between items-center w-28">
          <div className="rounded-full border-2 border-gray-800 w-12 h-12 flex justify-center items-center">
            <Image
              src="/images/product/atom.png"
              alt="Scientifically Proven"
              width={100}
              height={100}
              className="w-8 h-8"
            />
          </div>
          <p className="mt-2 text-[10px] md:text-sm text-center">
            Scientifically <br className="hidden md:block" /> Proven
          </p>
        </div>
      </div>
    </div>
  );
};

const GeneralInfo = () => {
  return (
    <div className="mx-auto py-4 bg-white rounded-lg">
      {/* Information Section */}
      <div className="mb-6 max-w-screen-xl mx-auto px-4">
        <h2 className={`text-3xl max-w-60 font-bold mb-6 ${lora.className}`}>
          The Truth About Testosterone
        </h2>

        <div className="max-w-screen-xl mx-auto w-full md:mx-auto mb-4 md:mb-8 text-gray-100">
          <div
            className={`bg-gradient-to-b rounded-md flex justify-between md:justify-center items-center gap-4 p-2 md:p-6 from-black to-white`}
          >
            <Image
              src="/images/products/Arkyn/testo-graph1.webp"
              width={1000}
              height={1000}
              className="w-[47%] md:w-72 md:h-56 rounded-md"
              alt="information"
            />
          </div>
        </div>

        <p>
          Testosterone, the primary male sex hormone, peaks during puberty and
          declines as men age. This decrease can be exacerbated by factors like
          stress, obesity, poor diet, and other lifestyle choices. Research
          indicates that average testosterone levels in men today are
          significantly lower than they were 30 years ago.
        </p>
        <p>
          Many outdated testosterone boosters suffer from poor formulations, low
          efficacy, and lack of clinical support. They often contain substandard
          ingredients and fail to improve sexual function effectively.
        </p>
        <p>
          Low levels of testosterone can lead to reduced sex drive, weight gain,
          and an increased risk of health issues such as testosterone deficiency
          and prostate cancer. The pituitary gland and adrenal gland play
          crucial roles in regulating the amount of testosterone in the body.
          Blood tests are essential to diagnose low testosterone levels and
          determine the need for testosterone replacement therapy.
        </p>
        <p>
          Our testosterone booster can help increase testosterone levels,
          improve sexual function, and enhance overall well-being.. Addressing
          testosterone deficiency can significantly improve quality of life,
          especially for older men.
        </p>
        <a
          href="https://academic.oup.com/jcem/article/92/1/196/2598434?searchresult=1&login=false"
          target="_blank"
        ></a>
      </div>

      <div className="mx-auto relative w-full md:mx-auto bg-gray-200 mb-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/product/maxt_background.webp')",
          }}
        />
        <div className="relative flex justify-center items-center h-full bg-opacity-50 text-gray-100 py-8 ">
          <div className="w-1/2 md:w-fit md:gap-4 flex flex-col justify-center p-2 md:text-right">
            <h1
              className="text-2xl md:text-6xl mb-1"
              style={{ fontWeight: 50 }}
            >
              The Hero
            </h1>
            <h1 className="text-lg md:text-2xl italic mb-2 underline">
              D-Aspartic Acid
            </h1>
            <p className="text-[10px] md:text-sm max-w-[350px]">
              D-aspartic acid is an amino acid synthesized in the body and
              obtained through protein-containing foods or a dietary supplement
            </p>
          </div>
          <div className="w-1/2 flex items-center justify-center p-2">
            <Image
              src="/images/products/Arkyn/daa-molecule.webp"
              alt="Right Side Image"
              width={1000}
              height={1000}
              className="w-auto h-auto rounded-lg max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductQualities = () => {
  return (
    <div className="py-4 text-xs md:text-base">
      <h2 className="text-2xl font-bold mb-6">PRODUCT QUALITIES</h2>
      <p className="mb-2">
        Powered by potent, unique ingredients, this testosterone booster is
        designed to -
      </p>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-1">
          Enhance Sexual Performance: Improve libido and sexual function for a
          more satisfying intimate experience, also supports erection.
        </li>
        <li className="mb-1">
          Increase Muscle Mass: Support muscle growth and strength, helping you
          achieve your fitness goals.
        </li>
        <li className="mb-1">
          Boosts Energy Levels: Experience higher energy and stamina throughout
          the day for improved performance
        </li>
        <li className="mb-1">
          Improve Mood and Vitality: Elevate mood and mental clarity,
          contributing to overall well-being and confidence.
        </li>
        <li className="mb-1">
          Supports Reproductive Health: Enhance fertility and reproductive
          function, supporting overall sexual health.
        </li>
      </ul>

      <h3 className="font-bold mb-2">What does it do and how does it do it?</h3>
      <div className="md:flex gap-2">
        <div className="w-full md:hidden">
          <Swiper spaceBetween={10} slidesPerView={1.2}>
            <SwiperSlide>
              <div className="text-left text-sm p-4">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/products/Arkyn/muscle.webp"
                  alt="point 1"
                  className="mb-2 mx-auto"
                />
                <p>
                  Action in Target Organs: Increased testosterone levels
                  circulate and exert their effects on muscles (promoting growth
                  and repair), bones (enhancing density), and sexual organs
                  (improving libido and sexual function).
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-left text-sm p-4">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/products/Arkyn/muscle.webp"
                  alt="point 1"
                  className="mb-2 mx-auto"
                />
                <p>
                  Action in Target Organs: Increased testosterone levels
                  circulate and exert their effects on muscles (promoting growth
                  and repair), bones (enhancing density), and sexual organs
                  (improving libido and sexual function).
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-left text-sm p-4">
                <Image
                  width={1000}
                  height={1000}
                  src="/images/products/Arkyn/muscle.webp"
                  alt="point 1"
                  className="mb-2 mx-auto"
                />
                <p>
                  Action in Target Organs: Increased testosterone levels
                  circulate and exert their effects on muscles (promoting growth
                  and repair), bones (enhancing density), and sexual organs
                  (improving libido and sexual function).
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hidden md:flex gap-2">
          {/* 1 */}
          <div className="text-left text-sm md:p-8 w-1/3">
            <Image
              width={1000}
              height={1000}
              src="/images/products/Arkyn/muscle.webp"
              alt="point 1"
              className="mb-2 mx-auto "
            />
            <p>
              Action in Target Organs: Increased testosterone levels circulate
              and exert their effects on muscles (promoting growth and repair),
              bones (enhancing density), and sexual organs (improving libido and
              sexual function).
            </p>
          </div>
          {/* 2 */}
          <div className="text-left text-sm md:p-8 w-1/3">
            <Image
              width={1000}
              height={1000}
              src="/images/products/Arkyn/muscle.webp"
              alt="point 1"
              className="mb-2 mx-auto "
            />
            <p>
              Action in Target Organs: Increased testosterone levels circulate
              and exert their effects on muscles (promoting growth and repair),
              bones (enhancing density), and sexual organs (improving libido and
              sexual function).
            </p>
          </div>
          {/* 3 */}
          <div className="text-left text-sm md:p-8 w-1/3">
            <Image
              width={1000}
              height={1000}
              src="/images/products/Arkyn/muscle.webp"
              alt="point 1"
              className="mb-2 mx-auto "
            />
            <p>
              Action in Target Organs: Increased testosterone levels circulate
              and exert their effects on muscles (promoting growth and repair),
              bones (enhancing density), and sexual organs (improving libido and
              sexual function).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OtherInformation = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setIsDetailsOpen(!isDetailsOpen);
  };

  return (
    <div className="py-4">
      <div className="mb-4 w-full md:w-[600px] mx-auto text-[10px] md:text-sm p-4 rounded-lg shadow-md">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleDetails}
        >
          <h2 className="text-md flex-1 text-sm text-center md:text-lg uppercase font-bold">
            Product Details
          </h2>
          {isDetailsOpen ? (
            <FaChevronUp className="w-4 h-4 " />
          ) : (
            <FaChevronDown className="w-4 h-4 " />
          )}
        </div>
        {isDetailsOpen && (
          <div className="mt-4 space-y-2 text-center">
            <p className="flex justify-between">
              <span className="font-semibold">Suitable for age:</span>{" "}
              <span>18 - 49</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Net quantity:</span>{" "}
              <span>60 tablets per bottle</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Price:</span> <span>₹899</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Lasts for:</span>{" "}
              <span>3 years after Mnf.</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold">Properties:</span>{" "}
              <span className="text-right">
                Optimal Dosage | Quick Absorption | Fast Action
              </span>
            </p>
          </div>
        )}
      </div>
      <div className="flex gap-1 md:gap-4 my-2 md:my-4 md:w-[600px] mx-auto">
        <div className="w-1/2">
          <h3
            className={`text-xs md:text-lg text-gray-100 font-thin mb-2 rounded-full bg-[#faa91c] w-fit px-4 py-1`}
          >
            What it will do
          </h3>
          <ul className="list-disc list-inside mb-4 px-2">
            <p className="mb-1 text-[10px] md:text-sm underline">
              Boosts muscular strength
            </p>
            <p className="mb-1 text-[10px] md:text-sm underline">
              May improve cognitive function
            </p>
            <p className="mb-1 text-[10px] md:text-sm underline">
              Can help increase blood flow
            </p>
            <p className="mb-1 text-[10px] md:text-sm underline">
              May help improve bone strength and density
            </p>
            <p className="mb-1 text-[10px] md:text-sm underline">
              Can help improve sexual desire and satisfaction.
            </p>
          </ul>
        </div>
        <div className="w-1/2">
          <h3
            className={`text-xs md:text-lg text-gray-100 font-thin mb-2 rounded-full bg-[#faa91c] w-fit px-4 py-1`}
          >
            What it won&apos;t do
          </h3>
          <ul className="list-disc list-inside mb-4 px-2">
            <p className="mb-1 text-[10px] md:text-sm underline">
              Doesn&apos;t treat ED
            </p>
            <p className="mb-1 text-[10px] md:text-sm underline">
              Doesn&apos;t replace your doctor
            </p>
            <p className="mb-1 text-[10px] md:text-sm underline">
              Doesn&apos;t act as alternate to food
            </p>
            <p className="mb-1 text-[10px] md:text-sm underline">
              Doesn&apos;t decrease strength
            </p>
          </ul>
        </div>
      </div>
      {/* Expert Section */}
      <div className="bg-[#f5faff] w-full mt-16">
        <div className="max-w-screen-xl flex w-full md:w-[600px] mx-auto justify-center items-center bg-[var(--lastlonger-light)] text-gray-100">
          <Image
            src="/images/femdoc.png"
            alt="Expert"
            width={500}
            height={500}
            className="w-1/3"
          />
          <div className="w-2/3">
            <h2 className="text-sm md:text-base text-black mb-2">
              Get in touch with our Experts
            </h2>
            <Link
              href="/experts"
              className="text-sm md:text-base mt-2 px-8 py-1 bg-white text-black rounded-full hover:bg-[#0B2251] hover:text-white"
            >
              CLICK HERE NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Arkyn = () => {
  return (
    <div>
      <div>
        <GeneralInfo />
      </div>

      {/* qualities */}
      <div className="max-w-screen-xl mx-auto p-4">
        <ProductQualities />
      </div>
      {/* other details */}
      <div className="max-w-screen-xl mx-auto p-4">
        <OtherInformation />
      </div>
    </div>
  );
};
