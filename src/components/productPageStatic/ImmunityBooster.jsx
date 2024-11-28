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
    description:
      "Strengthens immune response to fight infections and illnesses.",
  },
  {
    description: "Rejuvenates cells for improved energy and vitality.",
  },
  {
    description: "Boosts overall immunity with clinically proven ingredients.",
  },
  {
    description: "Promotes skin health and antioxidant protection.  ",
  },
  {
    description: "Enhances resistance to colds, flu, and seasonal allergies.",
  },
  {
    description:
      "Supports men’s sexual health by improving blood flow and testosterone levels.",
  },
];

const questions = [
  {
    id: 1,
    question: "Who can use the Immunity Booster?",
    answer:
      "This product is suitable for adults looking to improve their immune system, fight fatigue, and enhance overall health. Consult a physician if you have specific medical conditions.",
  },
  {
    id: 2,
    question: "Can it help with frequent colds or infections?",
    answer:
      "Yes, the combination of Vitamin C, Zinc, and other natural ingredients strengthens your immunity, reducing susceptibility to colds, flu, and other infections.",
  },
  {
    id: 3,
    question: "Does it improve energy levels?",
    answer:
      " Absolutely! The blend of rejuvenating ingredients like Vitamin B6 and Amla helps combat fatigue and enhances energy levels.",
  },
  {
    id: 4,
    question: "Is it safe for daily use?",
    answer:
      " Yes, this non-GMO and natural formula is designed for safe daily consumption when taken as directed.",
  },
  {
    id: 5,
    question: "Can it support men’s sexual health?",
    answer:
      "Yes, with ingredients like Vitamin C and Zinc, this booster improves blood flow, testosterone production, and overall vitality, supporting men’s sexual health.",
  },
  {
    id: 6,
    question: "Are there any side effects?",
    answer:
      " The product is made from natural ingredients and is generally well-tolerated. However, if you experience any adverse effects, discontinue use and consult a physician.",
  },
  {
    id: 7,
    question: "Can women use this Immunity Booster?",
    answer:
      " While the product is tailored for men’s health, its immune-boosting and energy-enhancing properties are beneficial for women as well. However, consult a physician before use.",
  },
  {
    id: 8,
    question: "How long does it take to see results?",
    answer:
      "Results vary by individual, but most users notice improved energy and reduced fatigue within 2–3 weeks of consistent use. For immunity benefits, long-term usage is recommended.",
  },
  {
    id: 9,
    question: "Can I take this with other supplements or medications?",
    answer:
      "Yes, it is generally safe to take alongside other supplements or medications. However, consult your healthcare provider to avoid any potential interactions.",
  },
  {
    id: 10,
    question: "Does this product contain allergens?",
    answer:
      "The Immunity Booster is free from common allergens like gluten and soy. However, review the ingredient list for specific sensitivities.",
  },
];

const CertificationSection = () => {
  return (
    <div className="my-12 max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2">
        <h2 className={`text-xl md:text-3xl font-bold mb-6`}>
          Certified for effectiveness: <br />{" "}
          <span className="text-[#3a472e] text-lg md:text-xl">
            Each product undergoes rigorous testing to ensure it delivers as
            promised.
          </span>
        </h2>
      </div>
      <div className="w-full md:w-1/2 flex justify-center ">
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

export const DetailsHowToUseImmunityBooster = () => {
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
      <section className="bg-[] py-16 px-4">
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
        <Image
          src="/images/product_page_img/immunity/immunity-hero.webp"
          alt="Daa"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover hidden md:block"
        />
        <Image
          src="/images/product_page_img/immunity/immunity-hero-phone.webp"
          alt="Daa"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover md:hidden"
        />
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
      title: "Amla",

      imageUrl: "/images/product_page_img/immunity/amala.png",
      modalTitle: "Amla",
      modalDescription:
        "Rich in Vitamin C and antioxidants, Amla strengthens immune function, fights free radicals, and supports digestive health.",
    },
    {
      id: 2,
      title: "Vitamin B6",

      imageUrl: "/images/product_page_img/immunity/vitamin b.png",
      modalTitle: "Vitamin B6",
      modalDescription:
        "Vitamin B6 is essential in a multivitamin booster as it supports immune health, enhances brain function, and helps regulate mood by aiding in neurotransmitter production. It also assists in metabolizing proteins and converting food into energy, boosting overall vitality",
    },
    {
      id: 3,
      title: "Vitamin E",

      imageUrl: "/images/product_page_img/immunity/vitamin e.png",
      modalTitle: "Vitamin E",
      modalDescription:
        "Vitamin E in a multivitamin booster acts as a powerful antioxidant, protecting cells from damage and supporting skin health. It also strengthens immune function and promotes heart health by improving blood circulation and reducing oxidative stress.",
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

              imageUrl,
              modalTitle,
              modalDescription,
            }) => (
              <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative h-60 p-4 border rounded-3xl bg-[#a5b398] text-white shadow-md flex">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm mt-2">{modalDescription}</p>
                  </div>
                  <div className="w-1/3 p-2 flex items-center justify-center">
                    <Image
                      width={1000}
                      height={1000}
                      src={imageUrl}
                      alt={title}
                      className="object-contain w-full h-36 rounded-lg"
                    />
                  </div>
                  {/* <button
                    className="absolute bottom-4 rounded-full left-8 bg-[#3a472e] text-white px-2 py-1"
                    onClick={() => handleCardClick({ title, modalDescription })}
                  >
                    Learn More
                  </button> */}
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Modal */}
      {/* {isModalOpen && modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg md:w-1/3">
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
      )} */}
    </section>
  );
};

const ProductQualities = () => {
  return (
    <div className="py-4 text-xs md:text-base">
      {/* <Badges /> */}

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
              <span className="font-semibold">Price:</span> <span>₹749</span>
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

export const ImmunityBooster = () => {
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
