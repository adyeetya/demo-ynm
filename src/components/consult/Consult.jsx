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
            src="/images/hero/longlast6.png"
            alt="last long"
            height={1000}
            width={1000}
            className="w-full rounded"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between px-4 py-2 md:px-0 md:py-4">
          <h2 className="text-xl font-bold mb-4">Last Long</h2>
          <p className="text-xs">
            Many Indian men silently struggle with issues of premature
            ejaculation, impacting their confidence and intimate relationships.
            Stress, lifestyle, and lack of open conversations often leave them
            feeling isolated and unsure of solutions.
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
            src="/images/hero/maxt6.png"
            alt="last long"
            height={1000}
            width={1000}
            className="w-full rounded"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between px-4 md:px-0 py-2 md:py-4">
          <h2 className="text-xl font-bold mb-4">Erection Support</h2>
          <p className="text-xs">
            Stress, aging, and lifestyle factors can take a toll on men&apos;s
            confidence and intimacy, causing erection difficulties that are
            often left unspoken. You’re not alone, and there’s support to help
            you regain control.
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
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/hero/Sleep6.webp"
            alt="last long"
            height={1000}
            width={1000}
            className="w-full rounded"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between px-4 md:px-0 py-2 md:py-4">
          <h2 className="text-xl font-bold mb-4">Sleep Booster</h2>
          <p className="text-xs">
            Stress, late nights, and lifestyle habits can rob men of the deep
            sleep their bodies need, affecting energy, mood, and focus. Let’s
            turn those restless nights into rejuvenating rest.
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
    modal4: (
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/hero/immune1.webp"
            alt="last long"
            height={1000}
            width={1000}
            className="w-full rounded"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between px-4 md:px-0 py-2 md:py-4">
          <h2 className="text-xl font-bold mb-4">Immunity Booster</h2>
          <p className="text-xs">
            Busy schedules and environmental stressors can lead to frequent
            fatigue and increased illness, which are often signs of low
            immunity—a challenge many men face today. Let’s fortify your health
            and reclaim your vitality.
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
  };

  const closeModal = () => setOpenModal(null);

  return (
    <div className="p-4 md:py-8 mt-4 max-w-screen-xl overflow-x-hidden mx-auto z-0">
      {/* <div className="mb-24 mt-4 md:mt-12">
        <p className="text-md mb-12">
          At <span className="text-xl font-bold">Yes N More</span>, we believe
          that every man deserves a fulfilling and healthy intimate life. Our
          mission is to provide safe, discreet, and personalized care for your
          wellness journey. With expert consultations, science-backed products,
          and a commitment to your privacy, we’re here to support you every step
          of the way.
        </p>
        <Link
          href="/products"
          className="px-4 py-2 text-lg rounded-full border w-full mx-auto bg-[#3a472e] text-white hover:bg-transparent hover:text-[#3a472e]"
        >
          Start Your Journey
        </Link>
      </div> */}
      {/* Wide Cards Section */}
      <div className="relative mb-24 flex w-full flex-col items-end md:flex-row gap-8 justify-between">
        <div className="w-48 h-48 md:w-80 md:h-80 absolute z-0 rounded-full md:top-1/2 md:-translate-y-[42%] -left-12 md:-left-28 border-[3px] border-[#fbd354] "></div>
        <div className="w-full md:w-1/2 p-4 z-10">
          <h2 className="font-bold text-4xl text-[#3a472e] mb-4">
            Expert Advice <br /> that Works
          </h2>
          <p className="text-sm">
            Take the first step toward feeling your best—start your assessment
            today. We’re here to make your health journey simple, stress-free,
            and empowering.
          </p>
        </div>
        {/* doctors card with bg too */}
        <div className="group relative w-full md:w-1/2 h-52">
          {/* White circles grid behind the card and doctor image */}
          <div className="absolute -right-8 top-0 z-0 ">
            {/* Each circle */}
            {/* {Array.from({ length: 54 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full border bg-[#ffd037] border-[#f9ce40] opacity-50 "
              />
            ))} */}
            <Image
              src="/images/hero/Dots.svg"
              width={1000}
              height={1000}
              alt="."
              className="w-56 "
            />
          </div>

          {/* Card with green glass effect */}
          <div className="absolute bottom-0 p-4 rounded-3xl shadow-xl h-44 w-full flex justify-start items-center bg-gradient-to-r from-[#a5b398]/50 via-from-[#a5b398]/20 to-transparent backdrop-blur-[4px]  z-10">
            <div className="text-xs h-full w-[70%] flex flex-col justify-between py-4">
              <div>
                <h2 className="font-semibold mb-2">Dr. Ankit Tyagi</h2>
                <p className="">M.B.B.S, MS General Surgery, MCH</p>
                <p className="">Urology</p>
              </div>
              <Link
                href="/self-assessment"
                className="whitespace-nowrap text-base w-fit border px-4 py-1 rounded-full bg-white border-[#3a472e] "
              >
                Take Online Assessment
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
      {/* <StepsImage /> */}

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

const Card = ({ title, imageSrc, setOpenModal, modalId }) => {
  return (
    <div className="group hover:shadow-xl rounded-3xl flex flex-col w-full max-w-[350px] h-[350px] overflow-hidden border border-gray-300">
      {/* Image Section */}
      <div className="relative w-full h-[80%] aspect-square bg-[#d6decd] overflow-hidden">
        <Image
          src={imageSrc}
          alt="Card Image"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full object-cover p-1 rounded-3xl"
        />
      </div>

      {/* Text Section */}
      <div className="h-[20%] p-2 md:p-3 lg:p-4 w-full flex flex-col gap-2 justify-center bg-[#d6decd]">
        <div className="flex flex-row gap-4 justify-between items-center">
          <button
            onClick={() => setOpenModal(modalId)}
            className="group-hover:scale-110 w-fit text-xl text-[#3a472e]"
          >
            {title}
          </button>
          <button
            onClick={() => setOpenModal(modalId)}
            className="w-8 h-8 shrink-0 rounded-full border border-[#3a472e] bg-[#3a472e] flex justify-center items-center"
          >
            <FaArrowRight className="group-hover:translate-x-1 w-4 h-4 font-thin text-[#fff]" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ConcernCards = ({ setOpenModal }) => {
  const cardData = [
    {
      title: "Long Lasting",
      imageSrc: "/images/hero/longlast.webp",
      modalId: "modal1",
    },
    {
      title: "Erection Support",
      imageSrc: "/images/hero/erection.webp",
      modalId: "modal2",
    },
    {
      title: "Wellness",
      imageSrc: "/images/hero/fitness.webp",
      modalId: "modal3",
    },
    {
      title: "Immunity",
      imageSrc: "/images/hero/wellness.webp",
      modalId: "modal4",
    },
  ];

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

        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              title={card.title}
              imageSrc={card.imageSrc}
              setOpenModal={setOpenModal}
              modalId={card.modalId}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
