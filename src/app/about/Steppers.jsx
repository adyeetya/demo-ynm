"use client";
import React, { useState } from "react";
import Image from "next/image";
const steps = [
  {
    title: "Pleasurable",
    description:
      "Sex should be an enjoyable and fulfilling experience. We make sure you and your partner have the tools available to ensure you&apos;re having the best inter course possible.",
    image: "/images/about/pleasurable.jpg",
  },
  {
    title: "Stress-Free",
    description:
      " Leave the worries behind and focus on the connection with your partner. We make sure that you enjoy sex with safe and simple sexual enhancers.",
    image: "/images/about/stress-free.jpg",
  },
  {
    title: "Empowering ",
    description:
      "Feel confident and in control of your sexual health. Make informed choices that enhance your self-esteem and empower you to enjoy every aspect of your sex life with yesnmore.",
    image: "/images/about/empowering.jpg",
  },
  {
    title: "Discreet ",
    description:
      "Your privacy matters. All packaging you receive is completely non-branded ensuring your utmost privacy when the package arrives at home, at work or anywhere life takes you.",
    image: "/images/about/discrete.jpg",
  },
  {
    title: "Safe ",
    description:
      "Safety is priority #1. Our facilities are independently reviewed on a consistent basis to ensure cGMP standards and FDA approval",
    image: "/images/about/safe.jpg",
  },
];

export const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div className={`p-4 md:py-8 text-[var(--dark-bg)] flex flex-col `}>
      <div className="flex flex-col gap-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col transition-opacity duration-500 md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 ${
              activeStep === index ? "block" : "hidden"
            }`}
          >
            {/* left img */}
            <div className="relative md:w-1/2 w-full">
              <Image
                src={step.image}
                alt={step.title}
                width={1000}
                height={1000}
                className="object-cover w-full rounded-lg aspect-square"
              />
              <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 md:bottom-1/2 md:left-full flex flex-row md:flex-col gap-4 md:gap-6">
                {steps.map((step, idx) => (
                  <div
                    key={step.title}
                    className={`h-8 w-8 md:h-12 md:w-12 rounded-full bg-center bg-cover ${
                      index === idx ? "border-2 border-white" : "brightness-75"
                    } `}
                    style={{ backgroundImage: `url(${step.image})` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* right side */}
            <div className="md:w-1/2 lg:h-72 w-full flex flex-col justify-between ">
              <div className=" flex justify-center space-x-4 lg:space-x-8">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => handleStepClick(index)}
                    className={`text-xs lg:text-lg font-semibold ${
                      activeStep === index
                        ? "text-[var(--dark-bg)] underline underline-offset-8"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    {step.title}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 my-4">
                <span className="h-fit mb-4">{index + 1}</span>{" "}
                <span className="text-2xl lg:text-4xl font-thin">/</span>
                <span className="h-fit mt-6"> 5</span>
              </div>
              <div className="lg:h-32 flex flex-col gap-4 md:gap-8">
                <h3 className="text-3xl lg:text-5xl font-semibold">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-xl">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
