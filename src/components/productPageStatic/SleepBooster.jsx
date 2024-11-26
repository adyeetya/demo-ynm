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
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

import { Badges, DiscreetSection } from "./common/Common";

const details = [
  {
    description: "Promotes healthy testosterone levels naturally.",
  },
  {
    description: "Boosts libido and enhances sexual performance.",
  },
  {
    description: "Supports lean muscle mass and improved strength.",
  },
  {
    description: "Reduces fatigue and boosts energy for active living.",
  },
  {
    description: "Improves sperm quality and reproductive health.",
  },
  {
    description: "Reduces stress and promotes hormonal balance.",
  },
];

const questions = [
  {
    id: 1,
    question: "How long does it take to see results?",
    answer:
      "Results vary by individual, but noticeable improvements in energy and vitality are usually observed within 2–4 weeks of consistent use.",
  },
  {
    id: 2,
    question: "Can this be taken with other supplements?",
    answer:
      " Yes, this product can generally be taken alongside other supplements. However, consult your physician for personalized advice.",
  },
  {
    id: 3,
    question: "Is it safe for long-term use?",
    answer:
      " Yes, the Testosterone Booster is non-habit forming and safe for long-term use when taken as recommended.",
  },
  {
    id: 4,
    question: "Are there any side effects?",
    answer:
      "The product is made from natural ingredients and is generally well-tolerated. Minor side effects like mild digestive discomfort may occur initially but typically subside.",
  },
  {
    id: 5,
    question: "Can this product help with fertility issues?",
    answer:
      "Yes, ingredients like Ashwagandha, Zinc, and Safed Musli are known to support sperm quality and overall reproductive health.",
  },
  {
    id: 6,
    question: "Is this suitable for vegetarians or vegans?",
    answer: " Yes, this product is 100% vegan and cruelty-free.",
  },
  {
    id: 7,
    question: " Can this product be taken by men of all ages?",
    answer:
      "The Testosterone Booster is designed for adult men. It is generally recommended for men aged 18 and above. Consult a healthcare professional if you have specific concerns.",
  },
  {
    id: 8,
    question: "Does this product help with weight management?",
    answer:
      "Yes, balanced testosterone levels can support healthy fat distribution and help reduce obesity risk. Combined with regular exercise and a healthy diet, this product may aid in weight management.",
  },
  {
    id: 9,
    question: "Can this product be used to enhance athletic performance?",
    answer:
      "Absolutely! Ingredients like Tribulus Terrestris, Ashwagandha, and Ginseng may improve stamina, strength, and recovery, making it beneficial for athletes and fitness enthusiasts.",
  },
  {
    id: 10,
    question:
      "Can I take this if I have a medical condition or am on medication?",
    answer:
      "If you have a medical condition or are taking medication, consult your physician before starting this supplement to ensure it is safe for you.",
  },
];

const CertificationSection = () => {
  return (
    <div className="my-12 max-w-screen-xl mx-auto px-4 flex items-center justify-between">
      <div className="w-1/2">
        <h2 className={`text-3xl font-bold mb-6 ${lora.className}`}>
          Certified for effectiveness: <br />{" "}
          <span className="text-[#3a472e] text-xl">
            Each product undergoes rigorous testing to ensure it delivers as
            promised.
          </span>
        </h2>
      </div>
      <div className="w-1/2 flex justify-center ">
        <a
          href="/certificate.jpg" // Adjust the path to your certificate image
          download="Certificate_of_Effectiveness.jpg"
          className="inline-flex items-center px-4 py-2 bg-[#3a472e] text-white rounded-full hover:bg-white hover:text-[#3a472e] border hover:border-[#3a472e] focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          What is COA
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5 7.5m0 0l7.5-7.5m-7.5 7.5V3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export const DetailsHowToUseSleepBooster = () => {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className={`${poppins.className} py-4`}>
      <div className="flex border-b mb-4">
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "details"
              ? "border-b-2 border-black font-bold text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          className={`px-4 py-2 focus:outline-none ${
            activeTab === "howToUse"
              ? "border-b-2 border-black font-bold text-black"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("howToUse")}
        >
          How to Use
        </button>
      </div>

      {activeTab === "details" && (
        <ul className="list-disc">
          {details.map((item, index) => (
            <li className="flex items-start mb-3" key={index}>
              <span className="mr-2">
                {/* <FaFlask className="text-[#999999]" /> */}•
              </span>
              <div className="text-sm">{item.description}</div>
            </li>
          ))}
        </ul>
      )}

      {activeTab === "howToUse" && (
        <div>
          {/* <h2 className="text-lg font-bold mb-2">HOW TO USE</h2>
          <h3 className="font-semibold mb-4">Arkyn</h3> */}
          <ul className="list-decimal ">
            {/* 1 */}
            <li className="flex items-start mb-3">
              <span className="mr-2">
                <FaCheckCircle className="text-blue-500" />
              </span>
              <div className="text-sm">
                Take 2 tablets daily with a glass of water or milk, preferably
                after a meal, or as directed by a physician.
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const HeroElements = () => {
  return (
    <div className="mx-auto py-4 bg- rounded-lg">
      <section className="bg-[#f7faf0] py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            The Importance of Testosterone for Men&apos;s Health
          </h2>
          <p className="text-gray-600">
            Understanding how testosterone affects vitality and overall
            wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-lg mx-auto">
          {/* Physical Strength */}
          <div className="flex flex-col items-center md:flex-row">
            {/* <img
              src="/images/physical-strength.jpg"
              alt="Physical Strength"
              className="w-full md:w-40 h-40 object-cover rounded-lg shadow-lg"
            /> */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                Physical Strength & Energy
              </h3>
              <p className="text-gray-600 mt-2">
                Testosterone plays a vital role in maintaining muscle mass,
                energy levels, and physical performance. Low levels can lead to
                muscle loss, fatigue, and reduced stamina.
              </p>
            </div>
          </div>

          {/* Emotional Stability */}
          <div className="flex flex-col items-center md:flex-row">
            {/* <img
              src="/images/emotional-stability.jpg"
              alt="Emotional Stability"
              className="w-full md:w-40 h-40 object-cover rounded-lg shadow-lg"
            /> */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                Emotional Stability
              </h3>
              <p className="text-gray-600 mt-2">
                Hormonal imbalances can trigger mood swings, anxiety, and even
                depression. Balanced testosterone levels support emotional
                well-being and resilience.
              </p>
            </div>
          </div>

          {/* Reproductive Health */}
          <div className="flex flex-col items-center md:flex-row">
            {/* <img
              src="/images/reproductive-health.jpg"
              alt="Reproductive Health"
              className="w-full md:w-40 h-40 object-cover rounded-lg shadow-lg"
            /> */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                Reproductive Health
              </h3>
              <p className="text-gray-600 mt-2">
                Testosterone is crucial for fertility, libido, and overall
                sexual health. Low levels may lead to reduced libido and
                reproductive challenges.
              </p>
            </div>
          </div>

          {/* Overall Wellness */}
          <div className="flex flex-col items-center md:flex-row">
            {/* <img
              src="/images/overall-wellness.jpg"
              alt="Overall Wellness"
              className="w-full md:w-40 h-40 object-cover rounded-lg shadow-lg"
            /> */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                Overall Wellness
              </h3>
              <p className="text-gray-600 mt-2">
                Low testosterone impacts vitality, relationships, and quality of
                life. Maintaining balanced levels ensures mental, physical, and
                intimate well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12 ">
        <section className="mb-12 ">
          <Image
            src="/images/product_page_img/sleep/sleep-hero.webp"
            alt="Daa"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover hidden md:block"
          />
          <Image
            src="/images/product_page_img/sleep/sleep-hero-phone.webp"
            alt="Daa"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover md:hidden"
          />
        </section>
      </section>
    </div>
  );
};

const OtherIngredients = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const dummyData = [
    {
      id: 1,
      title: "L-Theanine",

      imageUrl: "/images/product_page_img/sleep/L-Theanine.png",
      modalTitle: "L-Theanine",
      modalDescription:
        "A natural amino acid known for its calming effects, L-Theanine helps reduce stress and anxiety, promoting a stable mood and improved focus. By fostering relaxation, it indirectly supports overall well-being, including men's sexual health.",
    },
    {
      id: 2,
      title: "Magnesium",

      imageUrl: "/images/product_page_img/sleep/magnesium.png",
      modalTitle: "Magnesium",
      modalDescription:
        "An essential mineral, magnesium plays a vital role in numerous bodily functions. It supports testosterone levels, enhances blood flow for better erectile function, and reduces stress while promoting relaxation, contributing to both physical and sexual health.",
    },
  ];

  return (
    <section className="mb-12">
      <div>
        <h2 className="text-2xl font-bold mb-6">Other Ingredients</h2>
      </div>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {dummyData.map(
            ({
              id,
              title,
              description,
              imageUrl,
              modalTitle,
              modalDescription,
            }) => (
              <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative p-4 border rounded-3xl bg-[#a5b398] text-white shadow-md flex">
                  <div className="flex-1 p-4">
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>
                  <div className="w-1/2 p-2 flex items-center justify-center">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="object-contain w-full h-32 rounded-lg"
                    />
                  </div>
                  <button
                    className="absolute bottom-4 rounded-full left-8 bg-[#3a472e] text-white px-2 py-1"
                    onClick={() => handleCardClick({ title, modalDescription })}
                  >
                    Learn More
                  </button>
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Modal */}
      {isModalOpen && modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold mb-4">
              {modalContent.title}
            </h2>
            <p>{modalContent.modalDescription}</p>
            <button
              className="mt-4 text-red-400"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

const ProductQualities = () => {
  return (
    <div className="py-4 text-xs md:text-base">
      <Badges />

      {/* <h3 className="font-bold mb-2 mt-12">
        {" "}
        What Does It Do and How Does It Do It?
      </h3> */}
      <div className=" gap-2 hidden">
        {/* <div className="w-full md:hidden">
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
                  Testosterone Booster combines clinically backed ingredients
                  like D-Aspartic Acid and Tribulus Terrestris to stimulate
                  natural testosterone production. These ingredients enhance
                  hormonal activity in the pituitary gland and testes, leading
                  to improved testosterone levels and overall vitality.
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
                  The blend of Ashwagandha, Safed Musli, and Zinc supports
                  reproductive health by improving sperm quality, boosting
                  libido, and promoting better blood circulation. These benefits
                  enhance sexual performance and overall physical stamina,
                  enabling a healthier and more active lifestyle.
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
                  Ingredients like Shilajit and Ginseng act as adaptogens,
                  reducing stress and fatigue while improving energy levels.
                  Vitamins B6 and B12 support energy metabolism, helping you
                  stay focused, motivated, and energized throughout the day.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div> */}
        {/* <div className="hidden md:flex gap-2">
       
          <div className="text-left text-sm md:p-8 w-1/3">
            <Image
              width={1000}
              height={1000}
              src="/images/products/Arkyn/muscle.webp"
              alt="point 1"
              className="mb-2 mx-auto "
            />
            <p>
              Testosterone Booster combines clinically backed ingredients like
              D-Aspartic Acid and Tribulus Terrestris to stimulate natural
              testosterone production. These ingredients enhance hormonal
              activity in the pituitary gland and testes, leading to improved
              testosterone levels and overall vitality.
            </p>
          </div>
         
          <div className="text-left text-sm md:p-8 w-1/3">
            <Image
              width={1000}
              height={1000}
              src="/images/products/Arkyn/muscle.webp"
              alt="point 1"
              className="mb-2 mx-auto "
            />
            <p>
              The blend of Ashwagandha, Safed Musli, and Zinc supports
              reproductive health by improving sperm quality, boosting libido,
              and promoting better blood circulation. These benefits enhance
              sexual performance and overall physical stamina, enabling a
              healthier and more active lifestyle.
            </p>
          </div>
         
          <div className="text-left text-sm md:p-8 w-1/3">
            <Image
              width={1000}
              height={1000}
              src="/images/products/Arkyn/muscle.webp"
              alt="point 1"
              className="mb-2 mx-auto "
            />
            <p>
              Ingredients like Shilajit and Ginseng act as adaptogens, reducing
              stress and fatigue while improving energy levels. Vitamins B6 and
              B12 support energy metabolism, helping you stay focused,
              motivated, and energized throughout the day.
            </p>
          </div>
        </div> */}
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
    </div>
  );
};

function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {questions.map((item) => (
        <div key={item.id} className="my-4 lg:my-8">
          <AccordionItem value={`item-${item.id}`}>
            <AccordionTrigger>
              <h2 className="text-xl text-left">{item.question}</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h3 className="text-lg">{item.answer}</h3>
            </AccordionContent>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
}

export const SleepBooster = () => {
  return (
    <div>
      <div>
        <CertificationSection />
      </div>
      <div>
        <HeroElements />
      </div>
      <div className="max-w-screen-xl mx-auto p-4">
        <OtherIngredients />
      </div>
      {/* qualities */}
      <div className="max-w-screen-xl mx-auto p-4">
        <ProductQualities />
      </div>
      <div className="max-w-screen-xl mx-auto p-4">
        <DiscreetSection />
      </div>
      {/* other details */}
      <div className="max-w-screen-xl mx-auto p-4">
        <OtherInformation />
      </div>
      <div className="max-w-screen-xl mx-auto p-4">
        <Faq />
      </div>
    </div>
  );
};
