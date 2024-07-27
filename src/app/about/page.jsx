'use client'
import Image from 'next/image'
import React from 'react'
import Typed from 'typed.js'
const AboutUs = () => {
  const el = React.useRef(null)
  const el2 = React.useRef(null)
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Pleasurable', 'Stress-Free', 'Empowering', 'Discreet', 'Safe'],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    })
    const typed2 = new Typed(el2.current, {
      strings: ['SIMPLE', 'SATISFYING', 'EFFORTLESS', 'TRUSTWORTHY'],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    })

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
       typed2.destroy()
    }
  }, [])
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full bg-cover bg-center md:h-[calc(100vh-64px)] h-auto aspect-square"
        style={{
          backgroundImage: 'url(/images/about/our-story.jpg)',
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

      {/* Content Sections */}
      <div className="bg-[var(--dark-bg)] text-gray-200 px-4 md:px-20">
        {/* Section 1 */}
        <div className="flex h-[300px] md:h-[500px] lg:h-[600px] xl:h-[800px] gap-2 flex-row items-center">
          <div className="w-full flex h-full flex-col justify-center gap-8 md:gap-32 max-w-[50%]">
            <h2 className="text-xl md:text-4xl font-thin mb-4">Pleasurable </h2>
            <p className="text-xs md:text-base">
              Sex should be an enjoyable and fulfilling experience. We make sure
              you and your partner have the tools available to ensure
              you&apos;re having the best inter course possible.
            </p>
          </div>
          <div className="w-1/2 h-[800px] overflow-hidden flex justify-center items-center">
            <Image
              src="/images/about/pleasurable.jpg"
              alt="Stress-Free"
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
          </div>
        </div>
        {/* Section 2 */}
        <div className="flex h-[300px] md:h-[500px] lg:h-[600px] xl:h-[800px] gap-2 flex-row-reverse items-center">
          <div className="w-full flex h-full flex-col justify-center gap-8 md:gap-32 max-w-[50%]">
            <h2 className="text-xl md:text-4xl font-thin mb-4">Stress-Free</h2>
            <p className="text-xs md:text-base">
              Leave the worries behind and focus on the connection with your
              partner. We make sure that you enjoy sex with safe and simple
              sexual enhancers.
            </p>
          </div>
          <div className="w-1/2 h-[800px] overflow-hidden flex justify-center items-center">
            <Image
              src="/images/about/stress-free.jpg"
              alt="Stress-Free"
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
          </div>
        </div>
        {/* Section 3 */}
        <div className="flex h-[300px] md:h-[500px] lg:h-[600px] xl:h-[800px] gap-2 flex-row items-center">
          <div className="w-full flex h-full flex-col justify-center gap-8 md:gap-32 max-w-[50%]">
            <h2 className="text-xl md:text-4xl font-thin mb-4">Empowering </h2>
            <p className="text-xs md:text-base">
              Feel confident and in control of your sexual health. Make informed
              choices that enhance your self-esteem and empower you to enjoy
              every aspect of your sex life with yesnmore.
            </p>
          </div>
          <div className="w-1/2 h-[800px] overflow-hidden flex justify-center items-center">
            <Image
              src="/images/about/empowering.jpg"
              alt="Empowering"
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
          </div>
        </div>
        {/* Section 4 */}
        <div className="flex h-[300px] md:h-[500px] lg:h-[600px] xl:h-[800px] gap-2 flex-row-reverse items-center">
          <div className="w-full flex h-full flex-col justify-center gap-8 md:gap-32 max-w-[50%]">
            <h2 className="text-xl md:text-4xl font-thin mb-4"> Discreet </h2>
            <p className="text-xs md:text-base">
              Your privacy matters. All packaging you receive is completely
              non-branded ensuring your utmost privacy when the package arrives
              at home, at work or anywhere life takes you.
            </p>
          </div>
          <div className="w-1/2 h-[800px] overflow-hidden flex justify-center items-center">
            <Image
              src="/images/about/discrete.jpg"
              alt="Discreet"
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
          </div>
        </div>
        {/* Section 5 */}
        <div className="flex h-[300px] md:h-[500px] lg:h-[600px] xl:h-[800px] gap-2 flex-row items-center">
          <div className="w-full flex h-full flex-col justify-center gap-8 md:gap-32 max-w-[50%]">
            <h2 className="text-xl md:text-4xl font-thin mb-4">Safe </h2>
            <p className="text-xs md:text-base">
              Safety is priority #1. Our facilities are independently reviewed
              on a consistent basis to ensure cGMP standards and FDA approval
            </p>
          </div>
          <div className="w-1/2 h-[800px] overflow-hidden flex justify-center items-center">
            <Image
              src="/images/about/safe.jpg"
              alt="Safe"
              width={1000}
              height={1000}
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* text content */}
      <div className="bg-[var(--light-bg)] text-gray-200 px-4 md:px-20 flex flex-col gap-8 py-8">
        <p className="text-base">
          In a market flooded with one-dimensional generics, fads, and gimmicks,
          we&apos;ve decided to take a different approach to supplementation.
          Our mission at YESNMORE is to redefine how sexual wellness products
          are built, focusing on holistic and scientifically-backed solutions.
        </p>
        <p className="text-base">
          Our journey is grounded in honesty and transparency. From sourcing
          sustainable, clean ingredients to crafting comprehensive solutions, we
          ensure there are no hidden elements. Our ingredients are derived from
          the earth – plants, minerals, and elements – without harmful chemicals
          or unsafe toxins.
        </p>
        <p className="text-base">
          Sexual health and activity are crucial aspects of overall well-being,
          and we are dedicated to addressing common issues of sexual dysfunction
          with quality, natural products. Our range of sexual wellness products
          is designed to enhance your sexual experience and tackle sexual
          dysfunction effectively.
        </p>
        <p className="text-base font-semibold">
          We prioritise using organic botanicals whenever possible, ensuring our
          formulas meet the highest standards. What’s printed on our labels is
          what’s in our products – no exceptions.
        </p>
        <p className="text-base">
          At YESNMORE, we understand that sexual wellness is not just about the
          absence of dysfunction but about the celebration of pleasure and
          performance as integral parts of your well-being.
        </p>
        <p className="text-base font-semibold">
          our commitment to you is to provide quality products that support a
          healthy, fulfilling sexual life.
        </p>
        <p className="text-base">
          Join us in this journey towards better sexual health, where every
          product is crafted with care, ensuring a safe and satisfying sexual
          experience. Let’s break the stigmas together and embrace a new era of
          sexual wellness with YESNMORE.
        </p>
      </div>
      {/* our science */}
      <div
        className="relative w-full bg-cover bg-center md:h-[calc(100vh-64px)] h-auto aspect-square"
        style={{
          backgroundImage: 'url(/images/about/our-science.jpg)',
        }}
      >
        <div className="absolute  bottom-8 left-4 md:left-20  text-white md:text-xl sm:text-sm">
          <h1 className="text-4xl md:text-7xl mb-2">OUR SCIENCE</h1>
        </div>
      </div>
      <div className="bg-[var(--light-bg)] text-gray-200 px-4 md:px-20 flex flex-col gap-8 py-8">
        <div>
          <h2 className="text-4xl">
            <span ref={el2} className="" />
          </h2>
          <p className="text-sm mt-2">sex the way it should be</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Product Ideation</h3>
          <p className="text-base">
            In the product ideation stage, we brainstorm innovative concepts
            based on market needs and customer feedback. This creative phase
            involves exploring various ideas and narrowing them down to the most
            promising solutions that align with our mission of enhancing sexual
            wellness.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Formulation</h3>
          <p className="text-base">
            During the formulation stage, our expert team of scientists and
            researchers develop precise formulas. We carefully select
            high-quality ingredients, ensuring each product is safe, effective,
            and meets our stringent standards for sexual wellness.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Trials and Stability</h3>
          <p className="text-base">
            In the trials and stability stage, we conduct rigorous testing to
            ensure product efficacy and safety. Stability tests determine the
            shelf life and durability of the product under various conditions,
            ensuring consistent performance and reliability.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Production</h3>
          <p className="text-base">
            The production stage involves scaling up the formulation for mass
            manufacturing. We use state-of-the-art facilities and adhere to
            strict guidelines to ensure each product is produced with the
            highest level of precision and hygiene.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Quality Testing</h3>
          <p className="text-base">
            Quality testing is the final stage, where each batch undergoes
            comprehensive testing to verify it meets our quality standards. This
            step ensures that every product delivered to our customers is safe,
            effective, and of the highest quality.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
