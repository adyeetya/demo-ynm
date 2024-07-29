'use client'
import Image from 'next/image'
import React from 'react'
import Typed from 'typed.js'
const OurScience = () => {
  const el = React.useRef(null)
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['SIMPLE', 'SATISFYING', 'EFFORTLESS', 'TRUSTWORTHY'],
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
      {' '}
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
      <div className="text-[var(--dark-bg)]  px-4 md:px-20 flex flex-col gap-8 py-8">
        <div>
          <h2 className="text-4xl">
            <span ref={el} className="" />
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

export default OurScience
