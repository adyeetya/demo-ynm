import React from 'react'
import {
  BrandsCarousel,
  BrandsCarouselContent,
  BrandsCarouselItem,
} from '../ui/autoCarousel'
import Image from 'next/image'

const types = [
  {
    id: 1,
    imageUrl: '/images/payments/BHIM UPI.png',
  },
  {
    id: 2,
    imageUrl: '/images/payments/G pay.png',
  },
  {
    id: 3,
    imageUrl: '/images/payments/mastercard.png',
  },
  {
    id: 4,
    imageUrl: '/images/Visa-Emblem.jpg',
  },
  {
    id: 5,
    imageUrl: '/images/payments/netbanking.png',
  },
  {
    id: 6,

    imageUrl: '/images/payments/mastercard.png',
  },
]
const PaymentSlider = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-0 md:p-4 my-12">
      <h2 className="text-xl mb-8 text-center">
        {' '}
        Complete your Payment with any of these Payment Methods
      </h2>
      <BrandsCarousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full overflow-hidden"
      >
        <BrandsCarouselContent>
          {types.map((card) => (
            <BrandsCarouselItem
              key={card.id}
              className="basis-1/3 lg:basis-1/4 "
            >
              <div className="flex p-2 rounded lg:rounded-2xl justify-center items-center shadow-lg w-[100px] h-[60px] lg:w-[150px] lg:h-[90px] border-2 border-gray-400">
                <Image
                  src={card.imageUrl}
                  alt={card.heading}
                  width={500}
                  height={500}
                  className="rounded lg:rounded-xl object-cover  "
                />
              </div>
            </BrandsCarouselItem>
          ))}
        </BrandsCarouselContent>
      </BrandsCarousel>
    </div>
  )
}

export default PaymentSlider
