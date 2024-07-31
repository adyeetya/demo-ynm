'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Typed from 'typed.js'

const steps = [
  {
    title: 'Pleasurable',
    description:
      'Sex should be an enjoyable and fulfilling experience. We make sure you and your partner have the tools available to ensure you&apos;re having the best inter course possible.',
    image: '/images/about/pleasurable.jpg',
  },
  {
    title: 'Stress-Free',
    description:
      ' Leave the worries behind and focus on the connection with your partner. We make sure that you enjoy sex with safe and simple sexual enhancers.',
    image: '/images/about/stress-free.jpg',
  },
  {
    title: 'Empowering ',
    description:
      'Feel confident and in control of your sexual health. Make informed choices that enhance your self-esteem and empower you to enjoy every aspect of your sex life with yesnmore.',
    image: '/images/about/empowering.jpg',
  },
  {
    title: 'Discreet ',
    description:
      'Your privacy matters. All packaging you receive is completely non-branded ensuring your utmost privacy when the package arrives at home, at work or anywhere life takes you.',
    image: '/images/about/discrete.jpg',
  },
  {
    title: 'Safe ',
    description:
      'Safety is priority #1. Our facilities are independently reviewed on a consistent basis to ensure cGMP standards and FDA approval',
    image: '/images/about/safe.jpg',
  },
]

const Stepper = () => {
  const [activeStep, setActiveStep] = useState(0)
  const handleStepClick = (index) => {
    setActiveStep(index)
  }

  return (
    <div className="p-4 md:px-20 md:py-8 text-[var(--dark-bg)] flex flex-col gap-8">
      <div className="flex justify-center space-x-4 md:space-x-8">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => handleStepClick(index)}
            className={`text-xs md:text-lg font-semibold ${
              activeStep === index
                ? 'text-[var(--dark-bg)] underline underline-offset-8'
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col transition-opacity duration-500 md:flex-row items-center justify-between gap-4 md:gap-8 ${
              activeStep === index ? 'block' : 'hidden'
            }`}
          >
            <div className="md:w-[40%] w-full">
              <Image
                src={step.image}
                alt={step.title}
                width={1000}
                height={1000}
                className="object-cover w-full rounded-lg aspect-square"
              />
            </div>
            <div className="md:w-1/2 w-full flex flex-col gap-4 md:gap-8">
              <h3 className="text-3xl font-semibold">{step.title}</h3>
              <p className="text-base md:text-xl">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
const AboutUs = () => {
  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Pleasurable', 'Stress-Free', 'Empowering', 'Discreet', 'Safe'],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center md:h-[calc(100vh-64px)] h-auto aspect-square"
        style={{
          backgroundImage: 'url(/images/about/ourstory_banner.jpg)',
        }}
      >
        <div className="absolute  bottom-8 left-4 md:left-20  text-white md:text-xl sm:text-sm">
          <h1 className="text-4xl md:text-7xl mb-2">OUR STORY</h1>
        </div>
      </div>
      <div className="bg-[var(--light-bg)] p-4 md:p-20">
        <h1 className="text-base sm:text-lg md:text-5xl text-gray-200 font-thin ">
          We believe that sex should be
          <span ref={el} className="ml-2 md:ml-4 font-normal" />
        </h1>
        <div className="h-[1px] rounded mt-2 md:mt-4 bg-gray-200"></div>
      </div>

      <div>
        <Stepper />
      </div>
      <div className="mx-4 md:mx-20 bg-gray-500 h-[1px]"></div>

      {/* text content */}
      <div className="text-[var(--dark-bg)]  px-4 md:px-20 flex flex-col gap-8 py-8">
        <p className="text-base md:text-lg">
          In a market flooded with one-dimensional generics, fads, and gimmicks,
          we&apos;ve decided to take a different approach to supplementation.
          Our mission at YESNMORE is to redefine how sexual wellness products
          are built, focusing on holistic and scientifically-backed solutions.
        </p>
        <p className="text-base md:text-lg">
          Our journey is grounded in honesty and transparency. From sourcing
          sustainable, clean ingredients to crafting comprehensive solutions, we
          ensure there are no hidden elements. Our ingredients are derived from
          the earth – plants, minerals, and elements – without harmful chemicals
          or unsafe toxins.
        </p>
        <p className="text-base md:text-lg">
          Sexual health and activity are crucial aspects of overall well-being,
          and we are dedicated to addressing common issues of sexual dysfunction
          with quality, natural products. Our range of sexual wellness products
          is designed to enhance your sexual experience and tackle sexual
          dysfunction effectively.
        </p>
        <p className="text-base font-semibold md:text-lg">
          We prioritise using organic botanicals whenever possible, ensuring our
          formulas meet the highest standards. What’s printed on our labels is
          what’s in our products – no exceptions.
        </p>
        <p className="text-base md:text-lg">
          At YES&apos;N&apos;MORE, we understand that sexual wellness is not
          just about the absence of dysfunction but about the celebration of
          pleasure and performance as integral parts of your well-being.
        </p>
        <p className="text-base font-semibold md:text-lg">
          Our commitment to you is to provide quality products that support a
          healthy, fulfilling sexual life.
        </p>
        <p className="text-base md:text-lg">
          Join us in this journey towards better sexual health, where every
          product is crafted with care, ensuring a safe and satisfying sexual
          experience. Let&apos;s break the stigmas together and embrace a new
          era of sexual wellness with YES&apos;N&apos;MORE.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
