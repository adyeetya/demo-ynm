import React from 'react'
import {
  BrandsCarousel,
  BrandsCarouselContent,
  BrandsCarouselItem,
} from '../../components/ui/bannerCarousel'
import Image from 'next/image'
const banners = [
  {
    id: 1,
    imageUrl: '/images/contact/banner2.webp',
  },
  {
    id: 2,
    imageUrl: '/images/contact/banner2.webp',
  },
]
const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="shadow-xl p-4 md:p-8">
        <h1 className="text-4xl md:text-7xl font-bold max-w-4xl">
          MONDAY. TUESDAY. WEDNESDAY. THURSDAY. FRIDAY. SATURDAY. SUNDAY.
        </h1>
        <p className="mt-4 text-lg">connect to us any day.</p>
      </div>
      <div className="text-left p-4 md:p-12 max-w-screen-xl mx-auto my-12 md:my-0">
        <p className="text-lg mb-4">
          Hey there, pleasure seeker!🌟 <br /> you've just taken the first step
          towards a more confident, pleasure-packed life. Got questions? Want to
          share your triumphs? Need a high-five or just want to say “Hello”?
          We’re all ears (and smiles)!
        </p>
        <p className="text-lg mb-2 font-semibold">Drop us a line or two at</p>
        <p className="text-lg mb-8">
          <span className="font-semibold">📧Email: </span>
          <a href="mailto:support@yesnmore.com" className="hover:underline">
            support@yesnmore.com
          </a>{' '}
          <br /> <span className="font-semibold">📞Phone:</span>{' '}
          <a href="tel:+" className="hover:underline">
            999999999
          </a>{' '}
        </p>

        <p className="text-lg mb-2 font-semibold">Office Hours </p>
        <p className="mb-2 text-lg">
          Monday - Friday (24x7) <br /> Saturday and Sunday (because pleasure
          knows no weekend!)
        </p>
        {/* <p>
          Or just use the form below to send us a message. We promise to get
          back to you faster than you can say "Pleasure Paradise!"
        </p> */}
        <p className="mb-2 text-lg">
          <span className="font-semibold">Note:</span> No question is too
          cheeky, and no concern is too quirky. We’re here to make sure you have
          a good time, in every way possible.
        </p>
        <p className="mb-2 text-lg">
          We’re here to support, guide, and make you chuckle. Drop us a text,
          give us a ring, or send a carrier pigeon (just kidding, we’re not that
          old-school).
        </p>
        <p className="mb-6 text-lg">
          Let’s make your day a little more exciting—reach out to us now!
        </p>

        <p className="mb-2 text-lg">Best chuckles with endless enthusiasm,</p>
        <h2 className="mb-2 text-lg font-semibold">TEAM YESNMORE</h2>
      </div>
      <div className="max-w-screen-xl mx-auto">
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
                <div className="flex p-2  justify-center items-center shadow-lg w-full">
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
    </div>
  )
}

export default ContactUs
