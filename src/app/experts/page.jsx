import React from 'react'
import Image from 'next/image'
import { expertsData } from '../../data/Experts'
import { GoArrowRight } from 'react-icons/go'

const WelcomeSection = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg mb-8">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Welcome to YESnMORE Clinic
      </h1>
      <p className="text-gray-700 text-center mb-6">
        Find the best expert for your concern
      </p>
      <div className="flex justify-center space-x-4 w-full md:px-6 ">
        <div className="bg-white p-4 rounded-xl flex flex-col justify-center items-center shadow-lg text-center w-1/3">
          <Image
            src="/images/amit-bansal.webp"
            alt="Specialist Panel"
            className="rounded-full w-16 h-16 md:w-20 md:h-20"
            width={500}
            height={500}
          />
          <h3 className="text-sm font-semibold">Urologist Expert</h3>
        </div>
        <div className="bg-white p-4 rounded-xl flex flex-col justify-center items-center shadow-lg text-center w-1/3">
          <Image
            src="/images/health-coach.jpg"
            alt="Health Coach"
            className="rounded-full w-16 h-16 md:w-20 md:h-20"
            width={500}
            height={500}
          />
          <h3 className="text-sm font-semibold">Health Coach</h3>
        </div>
        <div className="bg-white p-4 rounded-xl flex flex-col justify-center items-center shadow-lg text-center w-1/3">
          <Image
            src="/images/femdoc.png"
            alt="General Physician"
            className="rounded-full w-16 h-16 md:w-20 md:h-20"
            width={500}
            height={500}
          />
          <h3 className="text-sm font-semibold">General Physician</h3>
        </div>
      </div>
    </div>
  )
}

const ExpertCard = ({ expert }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg mb-4">
      <div className="flex items-center mb-4">
        <Image
          src={expert.imageUrl}
          alt={expert.name}
          className="rounded-full"
          width={64}
          height={64}
        />
        <div className="flex-1 ml-4">
          <h3 className="text-xl font-bold">{expert.name}</h3>

          <p className="text-gray-600 text-sm">{expert.degree}</p>
        </div>
        {/* <span
          className={`px-1 py-0 rounded-full ${
            expert.status === 'Online'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {expert.status}
        </span> */}
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600">
          <span className="font-bold">{expert.experience}</span> of experience
        </div>
      </div>
      <p className="text-gray-700 mb-4">
        Tired of solutions that do not work for you? Get expert guidance for all
        your issues.
      </p>
      <p className="text-gray-600 mb-4">
        Can speak <span className="font-semibold">{expert.languages}</span>
      </p>
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Get in Touch
        </button>
      </div>
    </div>
  )
}

const GlassShineEffect = () => {
  return (
    <div className="flex h-24 justify-between items-center bg-orange-100 p-4 rounded-lg mb-4 relative glass-shine-container overflow-hidden">
      <div>
        <h2 className="md:text-xl font-bold">Talk to us</h2>
        <p className="text-sm md:text-base">Get Expert Opinion Now</p>
      </div>
      <button className="bg-orange-400 text-gray-100 px-4 py-2 rounded-lg flex items-center justify-between gap-4">
        Talk Now
        <GoArrowRight className="w-8 h-6 text-gray-100" />
      </button>
    </div>
  )
}

const ExpertSection = () => {
  const onlineExperts = expertsData.filter(
    (expert) => expert.status === 'Online'
  )

  return (
    <div className="p-4">
      <GlassShineEffect />
      <h2 className="text-2xl font-bold mb-4">Our Experts</h2>
      {expertsData.map((expert) => (
        <ExpertCard key={expert.id} expert={expert} />
      ))}
      {/* <h2 className="text-2xl font-bold mt-8 mb-4">All Available Experts</h2>
      {expertsData.map((expert) => (
        <ExpertCard key={expert.id} expert={expert} />
      ))} */}
    </div>
  )
}

const Page = () => {
  return (
    <div className="max-w-screen-sm mx-auto">
      <WelcomeSection />
      <ExpertSection />
    </div>
  )
}

export default Page
