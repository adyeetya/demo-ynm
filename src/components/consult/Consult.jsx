"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-1  md:p-2 w-11/12 max-w-md md:max-w-lg lg:max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute text-xl top-2 right-4 md:right-2 text-gray-200 md:text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

const Consult = () => {
  const [openModal, setOpenModal] = useState(null);

  const modalContent = {
    modal1: (
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/indian_partner.webp"
            alt="last long"
            height={1000}
            width={1000}
            className="w-full rounded"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between px-4 py-2 md:px-0 md:py-4">
          <h2 className="text-xl font-bold mb-4">Last Long</h2>
          <p className="text-xs">
            Long-lasting problems in sexual wellness can significantly impact
            quality of life and relationships. These issues may be physical,
            psychological, or relational, and addressing them often requires a
            comprehensive approach.
          </p>
          <Link
            href="/product/66c9b27a0686cead3079c844"
            className="rounded-full text-center px-4 py-2 bg-[var(--dark-bg)] text-white w-full mt-4"
          >
            Solution for it
          </Link>
        </div>
      </div>
    ),
    modal2: (
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/indian_partner.webp"
            alt="last long"
            height={1000}
            width={1000}
            className="w-full rounded"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between px-4 md:px-0 py-2 md:py-4">
          <h2 className="text-xl font-bold mb-4">Erection Support</h2>
          <p className="text-xs">
            Erection support involves various strategies and treatments to help
            individuals achieve and maintain an erection. Effective approaches
            include- <br />
            Medical Treatments <br /> Lifestyle Changes
          </p>
          <Link
            href="/product/66c9a2fe0686cead3079c72a"
            className="rounded-full text-center px-4 py-2 bg-[var(--dark-bg)] text-white w-full mt-4"
          >
            Solution for it
          </Link>
        </div>
      </div>
    ),
    modal3: (
      <div>
        <h2 className="text-xl font-bold mb-4">Wellness</h2>
        <p>Details about Nutrition Metabolism Immunity...</p>
      </div>
    ),
  };

  const closeModal = () => setOpenModal(null);

  return (
    <div className="p-4 md:py-8 mt-4 max-w-screen-xl overflow-x-hidden mx-auto z-0">
      {/* Wide Cards Section */}
      <div className="relative mb-24 flex w-full flex-col items-end md:flex-row gap-8 justify-between">
        <div className="w-48 h-48 md:w-80 md:h-80 absolute -z-10 rounded-full md:top-1/2 md:-translate-y-[42%] -left-12 md:-left-28 border-4 border-green-100 "></div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="font-bold text-3xl mb-4">
            Expert Advice <br /> that Works
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            maxime dolore dicta nostrum porro debitis.
          </p>
        </div>
        {/* doctors card with bg too */}
        <div className="group relative w-full md:w-1/2 h-52">
          {/* White circles grid behind the card and doctor image */}
          <div className="absolute w-56 -right-8 top-0 z-0 grid grid-cols-9 grid-rows-6 gap-2">
            {/* Each circle */}
            {Array.from({ length: 54 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full bg-white border border-[#273314] opacity-50 "
              />
            ))}
          </div>

          {/* Card with green glass effect */}
          <div className="absolute bottom-0 p-4 rounded-3xl shadow-xl h-44 w-full flex justify-start items-center bg-gradient-to-r from-green-100/50 via-green-100/20 to-transparent backdrop-blur-[4px] border border-green-200 z-10">
            <div className="text-sm h-full w-[70%] flex flex-col justify-between py-4">
              <div>
                <h2 className="font-semibold mb-2">Dr. Ankit Tyagi</h2>
                <p>M.B.B.S, MS General Surgery, MCH</p>
                <p>Urology</p>
              </div>
              <Link
                href="/experts"
                className="whitespace-nowrap md:text- w-fit border px-4 py-1 rounded-full bg-white border-green-200"
              >
                Consult for Free
              </Link>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="h-52">
            <Image
              src="/images/DOCTOR.webp"
              alt="Wide Card 1"
              width={1000}
              height={1000}
              className="absolute top-0 right-2 md:right-4 z-10 h-full w-auto"
            />
          </div>
        </div>
      </div>

      {/* Other Cards Section */}
      <ConcernCards setOpenModal={setOpenModal} />

      {/* Steps Section */}
      <StepsImage />

      {/* Modal */}
      <Modal
        isOpen={openModal !== null}
        onClose={closeModal}
        content={modalContent[openModal]}
      />
    </div>
  );
};

export default Consult;

const Steps = () => {
  return (
    <div className="mt-24 mb-12">
      <div className="mb-12">
        <h2 className="font-bold text-2xl">How it Works</h2>
      </div>
      <div className="flex justify-start mb-2 relative mx-auto max-w-4xl">
        {/* Step 1 */}
        <div className="relative flex flex-col items-center w-1/3">
          <div className="w-16 h-16 md:w-[114px] md:h-[114px] rounded-full bg- flex items-center justify-center overflow-hidden z-10 border-2 border-black border-dashed">
            <Image
              src="/images/hygiene.webp"
              alt="Step 1"
              width={1000}
              height={1000}
              className="w-16 h-16 md:w-28 md:h-28 cover"
            />
          </div>
          <div className="block absolute top-1/2 left-1/2 w-full h-0.5 bg-black -translate-y-1/2 z-0"></div>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center w-1/3">
          <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-[#A2A685] flex items-center justify-center overflow-hidden z-10">
            <Image
              src="/images/DOCTOR.webp"
              alt="Step 2"
              width={1000}
              height={1000}
              className="w-12 h-16 md:w-20 md:h-28"
            />
          </div>
          <div className="block absolute top-1/2 left-1/2 w-full h-0.5 bg-black -translate-y-1/2 z-0"></div>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center w-1/3">
          <div className="w-16 h-16 md:w-28 md:h-28 rounded-full bg-[#A2A685] flex items-center justify-center overflow-hidden z-10">
            <Image
              src="/images/Long_lasting_box.webp"
              alt="Step 3"
              width={1000}
              height={1000}
              className="object-contain h-12 md:h-24"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center relative mx-auto max-w-4xl ">
        <div className="relative flex flex-col items-center w-1/3 justify-center text-center">
          <p className="text-sm font-semibold">
            Assess <br /> Yourself
          </p>
        </div>
        <div className="relative flex flex-col items-center w-1/3 justify-center text-center">
          <p className="text-sm font-semibold">
            Consult For <br /> Free
          </p>
        </div>
        <div className="relative flex flex-col items-center w-1/3 justify-center text-center">
          <p className="text-sm font-semibold">
            {" "}
            Be <br /> Consistent
          </p>
        </div>
      </div>
    </div>
  );
};

const ConcernCards = ({ setOpenModal }) => {
  return (
    <div className="flex flex-row gap-4 lg:gap-8 my-12 justify-between py-4">
      <Swiper
        spaceBetween={10}
        className="py-8"
        slidesPerView={1.2} // Default for very small screens
        breakpoints={{
          // When the viewport is ≥ 640px (mobile)
          640: {
            slidesPerView: 1.2, // Show 1 card
            spaceBetween: 10,
          },
          // When the viewport is ≥ 768px (tablet)
          768: {
            slidesPerView: 2, // Show 2 cards
            spaceBetween: 20,
          },
          // When the viewport is ≥ 1024px (desktop)
          1024: {
            slidesPerView: 3, // Show 3 cards
            spaceBetween: 30,
          },
          // When the viewport is ≥ 1280px (larger desktops)
          1280: {
            slidesPerView: 4, // Show 4 cards
            spaceBetween: 40,
          },
        }}
        pagination={{
          type: "progressbar",
          clickable: true, // Enable clickable bullets
        }}
        modules={[Pagination]}
      >
        {/* Swiper slides */}
        <SwiperSlide>
          {/* card1 */}
          <div className="group hover:shadow-xl rounded-3xl flex flex-col w-full max-w-[350px] h-[380px]  overflow-hidden border border-gray-300">
            {/* Image Section */}
            <div className="relative w-full h-[70%] bg-[var(--light-bg)]">
              <Image
                src="/images/happy couple in love lying in bed .png"
                alt="Card Image"
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Section */}
            <div className="p-2 lg:p-4 w-full flex flex-col gap-2 justify-center h-[30%]">
              <button
                onClick={() => setOpenModal("modal1")}
                className="group-hover:scale-110 w-fit lg:text-md"
              >
                Long Lasting
              </button>
              <div className="flex flex-row gap-4 justify-between md:items-center">
                <p className="text-sm">Sexual Health Vitality Stamina</p>
                <button
                  onClick={() => setOpenModal("modal1")}
                  className="w-8 h-8 shrink-0 rounded-full border border-black flex justify-center items-center"
                >
                  <FaArrowRight className="group-hover:translate-x-1 w-4 h-4 font-thin" />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* card1 */}
          <div className="group hover:shadow-xl rounded-3xl  flex flex-col w-full h-[380px] max-w-[350px] overflow-hidden border border-gray-300">
            {/* Image Section */}
            <div className="relative w-full h-[70%] bg-[var(--light-bg)]">
              <Image
                src="/images/happy couple in love lying in bed .png"
                alt="Card Image"
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Section */}
            <div className="p-2 lg:p-4 w-full flex flex-col gap-2 justify-center h-[30%]">
              <button
                onClick={() => setOpenModal("modal1")}
                className="group-hover:scale-110 w-fit lg:text-md"
              >
                Erection Support
              </button>
              <div className="flex flex-row gap-4 justify-between md:items-center">
                <p className="text-sm">Sexual Health Vitality Stamina</p>
                <button
                  onClick={() => setOpenModal("modal1")}
                  className="w-8 h-8 shrink-0 rounded-full border border-black flex justify-center items-center"
                >
                  <FaArrowRight className="group-hover:translate-x-1 w-4 h-4 font-thin" />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          {/* card1 */}
          <div className="group hover:shadow-xl rounded-3xl  flex flex-col w-full h-[380px] max-w-[350px] overflow-hidden border border-gray-300">
            {/* Image Section */}
            <div className="relative w-full h-[70%] bg-[var(--light-bg)]">
              <Image
                src="/images/happy couple in love lying in bed .png"
                alt="Card Image"
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Section */}
            <div className="p-2 lg:p-4 w-full flex flex-col gap-2 justify-center h-[30%]">
              <button
                onClick={() => setOpenModal("modal1")}
                className="group-hover:scale-110 w-fit lg:text-md"
              >
                Wellness
              </button>
              <div className="flex flex-row gap-4 justify-between md:items-center">
                <p className="text-sm">Sexual Health Vitality Stamina</p>
                <button
                  onClick={() => setOpenModal("modal1")}
                  className="w-8 h-8 shrink-0 rounded-full border border-black flex justify-center items-center"
                >
                  <FaArrowRight className="group-hover:translate-x-1 w-4 h-4 font-thin" />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          {/* card1 */}
          <div className="group hover:shadow-xl rounded-3xl  flex flex-col w-full h-[380px] max-w-[350px] overflow-hidden border border-gray-300">
            {/* Image Section */}
            <div className="relative w-full h-[70%] bg-[var(--light-bg)]">
              <Image
                src="/images/happy couple in love lying in bed .png"
                alt="Card Image"
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text Section */}
            <div className="p-2 lg:p-4 w-full flex flex-col gap-2 justify-center h-[30%]">
              <button
                onClick={() => setOpenModal("modal1")}
                className="group-hover:scale-110 w-fit lg:text-md"
              >
                Hygiene
              </button>
              <div className="flex flex-row gap-4 justify-between md:items-center">
                <p className="text-sm">Sexual Health Vitality Stamina</p>
                <button
                  onClick={() => setOpenModal("modal1")}
                  className="w-8 h-8 shrink-0 rounded-full border border-black flex justify-center items-center"
                >
                  <FaArrowRight className="group-hover:translate-x-1 w-4 h-4 font-thin" />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const StepsImage = () => {
  return (
    <div className="my-12">
      <div className="mb-12">
        <h2 className="font-bold text-2xl">How it Works</h2>
      </div>
      <Image
        src="/images/how_it_work.png"
        alt="steps"
        width={1000}
        height={1000}
        className="w-[80%] mx-auto hidden md:block"
      />
      <Image
        src="/images/how_it_work_phone.png"
        alt="steps"
        width={1000}
        height={1000}
        className="w-[80%] mx-auto block md:hidden"
      />
    </div>
  );
};
