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

import {
  FaFlask,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

import { Badges, DiscreetSection } from "./common/Common";

const questions = [
  {
    id: 1,
    question: "What is the Long Lasting Spray, and how does it work?",
    answer:
      "The Long Lasting Spray is a specially formulated product designed to help men prolong their intimate experiences. It contains 10% Lidocaine, a mild anesthetic that temporarily desensitizes the skin, reducing sensitivity in targeted areas. This allows for better control and longer-lasting performance during intimacy.",
  },
  {
    id: 2,
    question: " Is the spray safe to use?",
    answer:
      "Yes, the Long Lasting Spray is safe for use when applied as directed. It is dermatologist-tested and formulated with Lidocaine, a medically approved ingredient. However, it’s always advisable to consult a healthcare professional if you have sensitive skin, allergies, or pre-existing medical conditions.",
  },
  {
    id: 3,
    question: "How do I use the spray for the best results?",
    answer:
      "To use, spray a small amount (1-2 sprays) directly onto the sensitive area, and allow it to absorb for about 10-15 minutes before engaging in intimacy. Avoid excessive use, and always follow the instructions provided on the packaging.",
  },
  {
    id: 4,
    question: " Will the spray affect my partner?",
    answer:
      "No, the spray is designed to absorb quickly and work effectively without transferring to your partner. However, it’s recommended to wait a few minutes after application or gently wipe away any excess to ensure optimal results.",
  },
  {
    id: 5,
    question: "Can I use this spray with condoms?",
    answer:
      "Yes, the spray is compatible with most latex condoms. Ensure the spray has fully absorbed into the skin before putting on a condom to maintain its effectiveness and safety.",
  },
  {
    id: 6,
    question: " How long does the effect of the spray last?",
    answer:
      "The effects typically last for about 20-60 minutes, depending on individual sensitivity and the amount applied. Start with the recommended dosage and adjust based on your needs.",
  },
  {
    id: 7,
    question: " Is the spray portable and discreet?",
    answer:
      "Absolutely! The spray comes in a compact, pocket-friendly 20g bottle, making it easy to carry and use discreetly whenever needed.",
  },
  {
    id: 8,
    question: "Are there any side effects?",
    answer:
      "Side effects are rare when used as directed. Some individuals may experience mild irritation or numbness. If any discomfort persists, discontinue use and consult a doctor.",
  },
  {
    id: 9,
    question: " Who should not use this spray?",
    answer:
      "The spray is not recommended for individuals with a known allergy to Lidocaine or related anesthetics. It should also be avoided if you have open wounds or irritated skin in the application area.",
  },
  {
    id: 5,
    question: "Can the spray treat premature ejaculation permanently?",
    answer:
      "The spray is designed for temporary relief and control during intimate moments. For a long-term solution, we recommend consulting our healthcare professional first for a personalized treatment plan.",
  },
];

export const DetailsHowToUseLongLasting = () => {
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
          <h2 className="text-lg font-bold mb-2">
            Why Choose Long Lasting Spray?
          </h2>

          <ul className="list-disc ">
            {/* 1 */}
            <li className="flex items-start mb-3">
              <span className="mr-2 mt-1">
                <FaFlask className="text-[#999999]" />
              </span>
              <div className="text-sm">
                <strong>Prolong Duration</strong> Formulated to gently extend
                intimate moments, giving you more time to connect.
              </div>
            </li>

            {/* 2 */}
            <li className="flex items-start mb-3">
              <span className="mr-2 mt-1">
                <FaFlask className="text-[#999999]" />
              </span>
              <div className="text-sm">
                <strong>Enhance Control</strong> Supports increased control for
                a more satisfying experience.
              </div>
            </li>
            {/* 3 */}
            <li className="flex items-start mb-3">
              <span className="mr-2 mt-1">
                <FaFlask className="text-[#999999]" />
              </span>
              <div className="text-sm">
                <strong>Boost Confidence</strong> Feel confident in your
                performance with a scientifically backed solution.
              </div>
            </li>
            {/* 4 */}
            <li className="flex items-start mb-3">
              <span className="mr-2 mt-1">
                <FaFlask className="text-[#999999]" />
              </span>
              <div className="text-sm">
                <strong>Enhance Intimacy</strong> Crafted to help you focus on
                what matters most – enjoying every moment.
              </div>
            </li>
            {/* 5 */}
            <li className="flex items-start mb-3">
              <span className="mr-2 mt-1">
                <FaFlask className="text-[#999999]" />
              </span>
              <div className="text-sm">
                <strong>Absorbs More Thoroughly</strong> Tested formulation
                ensures quicker and more effective absorption than competitors.
              </div>
            </li>
            {/* 6 */}
            <li className="flex items-start mb-3">
              <span className="mr-2 mt-1">
                <FaFlask className="text-[#999999]" />
              </span>
              <div className="text-sm">
                <strong>Better Surface Coverage</strong> Precise nozzle spray
                ensures even application, covering the surface area effectively.
              </div>
            </li>
            {/* 7 */}
            <li className="flex items-start mb-3">
              <span className="mr-2 mt-1">
                <FaFlask className="text-[#999999]" />
              </span>
              <div className="text-sm">
                <strong>Compact and Portable</strong>At just 20g, the product is
                pocket-friendly and easy to carry, perfect for use anytime,
                anywhere
              </div>
            </li>
          </ul>
        </div>
      )}

      {activeTab === "howToUse" && (
        <div>
          <h3 className="font-semibold mb-4">
            How to Use Long Lasting Spray for Best Results
          </h3>
          <ul className="list-decimal ">
            {/* 1 */}
            <li className="flex items-start mb-3">
              <span className="mr-2">
                <FaCheckCircle className="text-blue-500" />
              </span>
              <div className="text-sm">
                Prepare - Shake the bottle well before use for even application.
              </div>
            </li>
            {/* 2 */}
            <li className="flex items-start mb-3">
              <span className="mr-2">
                <FaCheckCircle className="text-blue-500" />
              </span>
              <div className="text-sm">
                Apply – Hold the spray 10-12 cm away and apply 1-3 sprays to the
                desired area. Start with the lowest amount and gradually
                increase as needed.
              </div>
            </li>
            {/* 3 */}
            <li className="flex items-start mb-3">
              <span className="mr-2">
                <FaCheckCircle className="text-blue-500" />
              </span>
              <div className="text-sm">
                Wait – Allow the spray to absorb for 10-15 minutes for maximum
                effectiveness. ions on the packaging or from your healthcare
                provider.
              </div>
            </li>
            {/* 4 */}
            <li className="flex items-start mb-3">
              <span className="mr-2">
                <FaCheckCircle className="text-blue-500" />
              </span>
              <div className="text-sm">
                Enjoy – Proceed with confidence and savor the experience.
              </div>
            </li>
            {/* 5 */}
            <li className="flex items-start mb-3">
              <div className="text-xs text-gray-700">
                Safety Note: For external use only. Do not apply on broken skin.
                Please consult with a healthcare professional if you have any
                allergies or sensitivities.
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

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

const GeneralInfo = () => {
  return (
    <div className="mx-auto py-4  rounded-lg">
      {/* Information Section */}
      <section className="bg-[#f7faf0] py-16 px-4">
        <div className="max-w-screen-xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Does Premature Ejaculation (PE) Occur?
          </h2>
          <p className="text-gray-600">
            Understanding the causes can help find the right approach to
            treatment and management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-lg mx-auto">
          {/* Psychological Factors */}
          <div className="flex flex-col items-center md:flex-row">
            {/* <img
              src="/images/psychological-factors.jpg"
              alt="Psychological Factors"
              className="w-full md:w-40 h-40 object-cover rounded-lg shadow-lg"
            /> */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                Psychological Factors
              </h3>
              <p className="text-gray-600 mt-2">
                Anxiety, stress, or performance pressure can heighten
                sensitivity and reduce control during intimacy. Unresolved
                emotional challenges or strained relationships may worsen the
                issue.
              </p>
            </div>
          </div>

          {/* Biological Triggers */}
          <div className="flex flex-col items-center md:flex-row">
            {/* <img
              src="/images/biological-triggers.jpg"
              alt="Biological Triggers"
              className="w-full md:w-40 h-40 object-cover rounded-lg shadow-lg"
            /> */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                Biological Triggers
              </h3>
              <p className="text-gray-600 mt-2">
                Imbalances in neurotransmitters, hormonal irregularities, or
                medical conditions like prostatitis can affect ejaculation
                timing.
              </p>
            </div>
          </div>

          {/* Genetics */}
          <div className="flex flex-col items-center md:flex-row">
            {/* <img
              src="/images/genetics.jpg"
              alt="Genetics"
              className="w-full md:w-40 h-40 object-cover rounded-lg shadow-lg"
            /> */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <h3 className="text-2xl font-semibold text-gray-700">Genetics</h3>
              <p className="text-gray-600 mt-2">
                Genetics may predispose some men to heightened sensitivity or
                specific neural responses affecting ejaculation.
              </p>
            </div>
          </div>

          {/* Lifestyle Factors */}
          <div className="flex flex-col items-center md:flex-row">
            {/* <img
              src="/images/lifestyle-factors.jpg"
              alt="Lifestyle Factors"
              className="w-full md:w-40 h-40 object-cover rounded-lg shadow-lg"
            /> */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                Lifestyle Factors
              </h3>
              <p className="text-gray-600 mt-2">
                Poor sleep, unhealthy diet, or lack of physical activity can
                influence sexual performance and contribute to PE.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12 ">
        <Image
          src="/images/product_page_img/lls/lls_hero.webp"
          alt="Daa"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover hidden md:block"
        />
        <Image
          src="/images/product_page_img/lls/lls_hero_phone.webp"
          alt="Daa"
          width={1000}
          height={1000}
          className="w-full h-auto object-cover md:hidden"
        />
      </section>
    </div>
  );
};

const ProductQualities = () => {
  return (
    <div className="my-12 text-xs md:text-base">
      {/* badges */}
      {/* <Badges /> */}

      {/* <h3 className="font-bold mb-2 mt-12">
        What does it do and how does it do it?
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
              <span className="font-semibold">Price:</span> <span>₹299</span>
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
      {/* <div className="flex gap-1 md:gap-4 my-2 md:my-4 md:w-[600px] mx-auto">
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
      </div> */}
      {/* Expert Section */}
      {/* <div className="bg-[#f5faff] w-full mt-16">
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
      </div> */}
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

export const LongLasting = () => {
  return (
    <div>
      <div>
        <CertificationSection />
      </div>
      <div>
        <GeneralInfo />
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
