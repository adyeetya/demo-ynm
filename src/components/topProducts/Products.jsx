import React from 'react'
import Image from 'next/image'

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
    rating: 4.5,
    imageUrl: '/images/yes n more typo 3.1 @1.png',
  },
  {
    id: 4,
    name: 'Tadalafil',
    category: 'For Longer Erection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a turpis quis est dictum egestas.',
    rating: 4.5,
    imageUrl: '/images/yes n more typo 3.1 @1.png',
  },
  // Add more products as needed
]

const Products = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Products</h2>
        <a href="/all-products" className="text-blue-500">
          View All Products
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-[#190E0B] text-white rounded-2xl md:rounded-3xl shadow-md p-2 md:p-4 flex flex-col"
          >
            <div className="relative h-40 md:h-60 w-full mb-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg w-full"
              />
            </div>
            <h3 className=" text-sm md:text-lg mb-1">{product.name}</h3>
            <p className="text-[10px] md:text-sm text-gray-300 mb-2">
              {product.category}
            </p>
            <p className="text-[10px] md:text-sm text-gray-400 mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {[...Array(Math.floor(product.rating))].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0l2.5 6.5H20l-5 4.2 1.9 5.8-5-4.2-5 4.3 1.9-5.8-5-4.2h7.5L10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                {product.rating % 1 !== 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-500 fill-current"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0l2.5 6.5H20l-5 4.2 1.9 5.8-5-4.2-5 4.3 1.9-5.8-5-4.2h7.5L10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <button className="bg-white text-black py-1 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300 text-[9px] md:text-sm">
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
