import React from 'react'
import {
  BrandsCarousel,
  BrandsCarouselContent,
  BrandsCarouselItem,
} from '../../components/ui/bannerCarousel'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion'

import Image from 'next/image'
import Link from 'next/link'

const questions = [
  {
    id: 1,
    question: 'Why YESNMORE?',
    answer:
      'YESNMORE is dedicated to enhancing your sexual wellness with high-quality, effective, and safe products. Our mission is to empower you with confidence and satisfaction, ensuring a stress-free, discreet, and fulfilling experience.',
  },
  {
    id: 2,
    question: 'Where are YESNMORE products available?',
    answer:
      'YESNMORE products are available at www.yesnmore.com and on Amazon and Flipkart. They will soon be available on Zepto and Blinkit as well.',
  },
  {
    id: 3,
    question: 'Are YESNMORE products 100% safe and effective to use?',
    answer:
      'Yes, YESNMORE products are formulated with the highest standards of safety and effectiveness in mind. We rigorously test each product to ensure it meets our stringent quality standards.',
  },
  {
    id: 4,
    question: 'Is doctor consultation free?',
    answer:
      'Yes, doctor consultations at YESNMORE are free. We believe in providing accessible and personalized guidance to support your sexual wellness journey.',
  },
  {
    id: 5,
    question: 'Is my information safe and private during consultation?',
    answer:
      'Absolutely. Your information is safe and private during consultations. We prioritize your privacy and ensure that all your personal data is handled with the utmost confidentiality.',
  },
]

const banners = [
  {
    id: 1,
    imageUrl: '/images/contact/max-t-banner.webp',
  },
  {
    id: 2,
    imageUrl: '/images/contact/max-t-banner.webp',
  },
]

function AccordionDemo() {
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
  )
}

const Faq = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className=" shadow-lg p-4 lg:p-8">
        <div className="max-w-screen-2xl p-4 lg:py-12 mx-auto flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-8">
          <h1 className="text-4xl lg:text-7xl font-bold max-w-4xl">
            Questions?
          </h1>
          <p className="mt-4 text-lg">
            If you have questions, we have answers for you here. <br /> In case
            we don&apos;t please feel free to reach out to us at{' '}
            <span>
              <Link
                href="/contactus"
                className="text-blue-500 italic hover:underline"
              >
                Contact Us
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto flex flex-col-reverse lg:flex-row lg:gap-8 w-full lg:p-8">
        {/* for banner */}
        <div className="w-full lg:w-1/2">
          <BrandsCarousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full overflow-hidden"
          >
            <BrandsCarouselContent>
              {banners.map((card) => (
                <BrandsCarouselItem key={card.id} className="basis-full ">
                  <div className="flex p-4 md:p-12 justify-center items-center w-full">
                    <Image
                      src={card.imageUrl}
                      alt={card.heading}
                      width={1000}
                      height={1000}
                      className=" object-cover w-full"
                    />
                  </div>
                </BrandsCarouselItem>
              ))}
            </BrandsCarouselContent>
          </BrandsCarousel>
        </div>
        {/* faq accordion */}
        <div className="w-full lg:w-1/2 flex lg:justify-center lg:items-center p-4 lg:p-8">
          <AccordionDemo />
        </div>
      </div>
    </div>
  )
}

export default Faq
