import React from 'react'
import {
  BrandsCarousel,
  BrandsCarouselContent,
  BrandsCarouselItem,
  BrandsCarouselPrevious,
  BrandsCarouselNext,
} from '../ui/carousel'

const news = [
  {
    id: 1,
    imageUrl: '/images/Visa-Emblem.jpg',
  },
  {
    id: 2,
    imageUrl: '/images/Visa-Emblem.jpg',
  },
  {
    id: 3,
    imageUrl: '/images/Visa-Emblem.jpg',
  },
  {
    id: 4,
    imageUrl: '/images/Visa-Emblem.jpg',
  },
  {
    id: 5,
    imageUrl: '/images/Visa-Emblem.jpg',
  },
]
const PaymentSlider = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 my-12">
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
          {news.map((card) => (
            <BrandsCarouselItem
              key={card.id}
              className="basis-1/3 lg:basis-1/4 "
            >
              <div className="flex p-2 rounded-2xl justify-center items-center shadow-lg lg:w-[150px] lg:h-[90px] border-2 border-gray-400">
                <img
                  src={card.imageUrl}
                  alt={card.heading}
                  className="rounded-xl object-cover  "
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
