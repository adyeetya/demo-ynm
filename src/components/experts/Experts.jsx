import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdStar } from 'react-icons/io'
import { expertsData } from '@/data/Experts'
// const expertsData = [
//   {
//     id: 1,
//     name: 'Dr. Saurabh Jain',

//     status: 'Online',
//     rating: 4,
//     imageUrl: '/images/maledoc.jpg',
//     info: 'Urologists are specialized health professionals who have expert training for treating the male reproductive system and urinary tracts. Mainly, they conduct diagnosis and treatment for issues like cancer kidney stones, kidney disease, urethra disease, bladder disorder, infections, and pelvic muscle problems.',
//   },
//   {
//     id: 2,
//     name: 'Dr. Indra Singh',
//     status: 'Offline',
//     rating: 3,
//     imageUrl: '/images/femdoc.avif',
//     info: 'Urologists are specialized health professionals who have expert training for treating the male reproductive system and urinary tracts. Mainly, they conduct diagnosis and treatment for issues like cancer kidney stones, kidney disease, urethra disease, bladder disorder, infections, and pelvic muscle problems.',
//   },
// ]

const Experts = () => {
  return (
    <div className="p-4 md:py-6 max-w-screen-xl mx-auto">
      <div className="mb-12">
        <h2 className="font-bold text-2xl">Meet Our Experts</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4">
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
                className="rounded-l-2xl"
              />
            </div>
            <div className="w-full md:w-[60%] flex flex-col text-left p-4">
              <h2 className="text-md font-semibold">{expert.name}</h2>
              <div className="flex flex-row justify-between items-center gap-2 mt-1">
                <div className="flex items-center">
                  {[...Array(Math.floor(expert.rating))].map((_, index) => (
                    <IoMdStar key={index} className="w-5 h-5 text-[#fad73a]" />
                  ))}
                </div>
                <p
                  className={`${
                    expert.status === 'Online' ? 'bg-green-500' : 'bg-red-400'
                  } rounded-full px-4 py-[2px] md:py-1 text-[10px] md:text-[14px] w-fit`}
                >
                  {expert.status}
                </p>
              </div>
              <div className="flex-grow mt-2">
                <p className="text-[10px] md:text-[12px]">{expert.info}</p>
              </div>
              <button className=" bg-black w-fit text-gray-100 text-[12px] md:text-sm py-2 px-4 mt-4 rounded-full hover:bg-blue-900 transition-colors duration-300">
                Free Consultation
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center items-center">
        <Link href='/experts' className="px-8 py-2 bg-black hover:bg-blue-900 text-gray-100 rounded-full">
          Get in touch with our experts
        </Link>
      </div>
    </div>
  )
}

export default Experts
