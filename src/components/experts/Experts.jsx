import Image from 'next/image'
import React from 'react'

// Example data structure for experts
const expertsData = [
  {
    id: 1,
    name: 'Dr. Saurabh Jain',
    status: 'Online',
    rating: 4,
    imageUrl: '/images/image 10.png',
    info: 'Urologists are specialized health professionals who have expert training for treating the male reproductive system and urinary tracts. Mainly, they conduct diagnosis and treatment for issues like cancer kidney stones, kidney disease, urethra disease, bladder disorder, infections, and pelvic muscle problems.',
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    status: 'Offline',
    rating: 3,
    imageUrl: '/images/image 10.png',
    info: 'Urologists are specialized health professionals who have expert training for treating the male reproductive system and urinary tracts. Mainly, they conduct diagnosis and treatment for issues like cancer kidney stones, kidney disease, urethra disease, bladder disorder, infections, and pelvic muscle problems.',
  },
]

const Experts = () => {
  return (
    <div className="my-8 p-4 max-w-screen-xl mx-auto">
      <div className="mb-12 ">
        <h2 className="font-bold text-2xl">Meet Our Expert </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 ">
        {/* Map through expertsData */}
        {expertsData.map((expert) => (
          <div
            key={expert.id}
            className="flex flex-row md:gap-4 h-68 overflow-hidden border-b-2 rounded-2xl border-gray-300 shadow-xl border-r-2"
          >
            <div className="w-full md:w-[40%] h-full relative">
              <Image
                src={expert.imageUrl}
                alt="expert"
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
              />
            </div>
            {/* text right */}
            <div className="w-full md:w-[60%] flex flex-col text-left p-4">
              <div className="flex flex-col md:flex-row  justify-between md:items-center gap-4">
                <h2 className="text-md font-semibold">{expert.name}</h2>
                <p
                  className={`${
                    expert.status === 'Online' ? 'bg-yellow-400' : 'bg-red-400'
                  } rounded-full px-4 py-2 text-sm w-fit`}
                >
                  {expert.status}
                </p>
              </div>
              {/* rating */}
              <div className="flex my-2">
                {[...Array(Math.floor(expert.rating))].map((_, index) => (
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
              </div>
              {/* desc */}
              <div className="flex-grow">
                <p className="text-[10px] md:text-[12px]">{expert.info}</p>
              </div>
              <button className="bg-black w-fit text-white text-sm py-2 px-4 mt-4 rounded-full hover:bg-blue-900 transition-colors duration-300">
                Free Concern
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="my-8 flex justify-center items-center">
        <button className="px-8 py-2 bg-black hover:bg-blue-900 text-white rounded-full">
          Get in touch with our experts
        </button>
      </div>
    </div>
  )
}

export default Experts
