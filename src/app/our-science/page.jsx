'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Typed from 'typed.js'

const steps = [
  {
    title: 'Product Ideation',
    description:
      'In the product ideation stage, we brainstorm innovative concepts based on market needs and customer feedback. This creative phase involves exploring various ideas and narrowing them down to the most promising solutions that align with our mission of enhancing sexual wellness.',
    image: '/images/science/Untitled_52.jpg',
  },
  {
    title: 'Formulation',
    description:
      'During the formulation stage, our expert team of scientists and researchers develop precise formulas. We carefully select high-quality ingredients, ensuring each product is safe, effective, and meets our stringent standards for sexual wellness.',
    image: '/images/science/Untitled_53.jpg',
  },
  {
    title: 'Trials and Stability',
    description:
      'In the trials and stability stage, we conduct rigorous testing to ensure product efficacy and safety. Stability tests determine the shelf life and durability of the product under various conditions, ensuring consistent performance and reliability.',
    image: '/images/science/Untitled_54.jpg',
  },
  {
    title: 'Production',
    description:
      'The production stage involves scaling up the formulation for mass manufacturing. We use state-of-the-art facilities and adhere to strict guidelines to ensure each product is produced with the highest level of precision and hygiene.',
    image: '/images/science/Untitled_56.jpg',
  },
  {
    title: 'Quality Testing',
    description:
      'Quality testing is the final stage, where each batch undergoes comprehensive testing to verify it meets our quality standards. This step ensures that every product delivered to our customers is safe, effective, and of the highest quality.',
    image: '/images/science/Untitled_55.jpg',
  },
]

const OurScience = () => {
  const el = React.useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['SIMPLE', 'SATISFYING', 'EFFORTLESS', 'TRUSTWORTHY'],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  const handleStepClick = (index) => {
    setActiveStep(index)
  }

  return (
    <div>
      <div
        className="relative w-full bg-cover bg-center md:h-[calc(100vh-64px)] h-auto aspect-square"
        style={{
          backgroundImage: 'url(/images/about/our-science.jpg)',
        }}
      >
        <div className="absolute bottom-8 left-4 md:left-20 text-white md:text-xl sm:text-sm">
          <h1 className="text-4xl md:text-7xl mb-2">OUR SCIENCE</h1>
        </div>
      </div>
      <div className="">
        <div className="bg-[var(--light-bg)] text-white p-4 md:p-20">
          <h2 className="text-4xl">
            <span ref={el} />
          </h2>
          <p className="text-lg italic mt-2">sex the way it should be</p>
        </div>

        <div className="p-4 md:px-20 md:py-8 text-[var(--dark-bg)] flex flex-col gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Product Development</h2>
          </div>
          <div className="flex md:justify-center space-x-4 md:space-x-8">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`md:text-lg font-semibold ${
                  activeStep === index
                    ? 'text-blue-600 underline underline-offset-8'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Step {index + 1}
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
      </div>
    </div>
  )
}

export default OurScience
