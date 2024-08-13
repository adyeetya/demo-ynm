import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMdStar } from 'react-icons/io'
import { expertsData } from '@/data/Experts'

const Experts = () => {
  return (
    <div className="p-4 md:py-6 max-w-screen-xl mx-auto">
      <div className="mb-12">
        <h2 className="font-bold text-2xl">Meet Our Experts</h2>
      </div>
      <div className="grid grid-cols-1 ">
        {expertsData.map((expert) => (
          <div
            key={expert.id}
            className="flex flex-col md:flex-row md:gap-4 overflow-hidden border-2 rounded-2xl border-gray-300 shadow-xl"
          >
            <div className="w-full h-full md:w-1/4 relative">
              <Image
                src={expert.imageUrl}
                alt="expert"
                width={1000}
                height={1000}
                className="rounded-t-2xl md:rounded-l-2xl md:rounded-none object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-3/4 flex flex-col gap-4 text-left p-4">
              <div className="flex items-end justify-between">
                <h2 className="text-md md:text-lg font-semibold">
                  {expert.name}
                </h2>
                <Link
                  href="/experts"
                  className="ml-auto px-3 py-2 text-sm w-fit bg-black hover:bg-white hover:text-black border hover:border-black text-gray-100 rounded-full"
                >
                  Free Consultation
                </Link>
              </div>
              <div className="flex flex-col justify-between h-full gap-4">
                <div>
                  <h2 className="text-sm">{expert.experience} of experience</h2>
                  <h2 className="text-sm">{expert.degree}</h2>
                  <h2 className="text-sm">
                    Specialization - {expert.specialization}
                  </h2>
                </div>
                <div className="">
                  <p className="text-xs md:text-sm">{expert.info}</p>
                </div>
              </div>
              {/* <div className="flex flex-row justify-between items-center gap-2 mt-1">
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
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experts
