import React from 'react'
import Image from 'next/image'
import { IoMdStar } from 'react-icons/io'
const productsData = [
  {
    id: 1,
    name: 'Climax Delay Spray',
    category: 'For Premature Ejaculation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a turpis quis est dictum egestas.',
    rating: 4.5,
    imageUrl: '/images/yes n more typo 3.1 @1.png',
  },
  {
    id: 2,
    name: 'Climax Delay Wipes',
    category: 'For Premature Ejaculation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a turpis quis est dictum egestas.',
    rating: 4.5,
    imageUrl: '/images/yes n more typo 3.1 @1.png',
  },
  {
    id: 3,
    name: 'Testo Booster',
    category: 'For Super Strength',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a turpis quis est dictum egestas.',
    rating: 2.5,
    imageUrl: '/images/yes n more typo 3.1 @1.png',
  },
  {
    id: 4,
    name: 'Tadalafil',
    category: 'For Longer Erection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a turpis quis est dictum egestas.',
    rating: 3.5,
    imageUrl: '/images/yes n more typo 3.1 @1.png',
  },
  // Add more products as needed
]

const Products = () => {
  return (
    <div className="p-4 md:py-6 max-w-screen-xl mx-auto ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Products</h2>
        <a href="/all-products" className="text-blue-500">
          View All Products
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-[#190E0B] text-[#FFF5EA] rounded-2xl md:rounded-3xl shadow-md p-3 md:p-4 flex flex-col h-72 w-[165px] sm:w-44 md:h-96 md:w-60"
          >
            <div className="relative w-full h-52 md:h-52 mb-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-sm md:text-lg mb-1">{product.name}</h3>
            <p className="text-[10px] md:text-sm text-gray-300 mb-2">
              {product.category}
            </p>
            <p className="text-[10px] md:text-sm text-gray-400 mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <div className="text-[12px] md:text-sm flex items-center justify-center gap-2">
                {product.rating}{' '}
                <IoMdStar className="w-4 h-4 md:w-5 md:h-5 text-[#debb02]" />
              </div>
              <button className="bg-white text-black py-1 px-2 md:px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300 text-[9px] md:text-sm">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
