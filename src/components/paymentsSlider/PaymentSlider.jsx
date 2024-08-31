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
    <div className="max-w-screen-md mx-auto py-12">
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
              <div className="flex p-2 rounded lg:rounded-md justify-center items-center">
                <Image
                  src={card.imageUrl}
                  alt="payment method"
                  width={500}
                  height={500}
                  className="rounded lg:rounded-md object-contain w-[100px] h-[60px] lg:w-[100px] lg:h-[50px]"
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


