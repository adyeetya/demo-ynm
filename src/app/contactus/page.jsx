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
      <div className="text-center p-4 md:p-12 max-w-screen-xl mx-auto my-12 md:my-0">
        <p className="text-lg mb-4">If you have any questions</p>
        <p className="text-lg mb-4">
          Phone number -{' '}
          <a
            href="tel:+917489190166"
            className="font-semibold hover:text-blue-500"
          >
            +91 7489190166
          </a>
        </p>
        <p className="text-lg">
          Email -{' '}
          <a
            href="mailto:support@yesnmore.com"
            target="_blank"
            className="font-semibold hover:text-blue-500"
          >
            support@yesnmore.com
          </a>
        </p>
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
