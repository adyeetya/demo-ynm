import Image from 'next/image'
import React from 'react'

const AnalysisPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Here is your Wellness report</h1>
      <div className="flex items-center mb-4">
        <Image
          src="/images/wellness.png"
          alt="Wellness"
          width={100}
          height={100}
          className="w-12 h-12 mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold">Diagnosis</h2>
          <p className="text-blue-700">Erectile Dysfunction</p>
        </div>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
        <div className="w-3/5 h-full bg-red-500 rounded-full"></div>
      </div>
      <h3 className="text-xl font-semibold mb-4">
        Root causes of your concern
      </h3>
      <div className="flex space-x-4 mb-6">
        <div className="flex-1 p-4 border rounded-lg shadow-md bg-white">
          <Image
            src="/images/nutrition.png"
            alt="Nutrition"
            width={100}
            height={100}
            className="w-full h-32 object-cover rounded mb-4"
          />
          <h4 className="font-semibold">Nutrition</h4>
          <p className="text-gray-700 text-sm">
            Deficiencies in zinc, vitamin D, C, E can negatively impact sexual
            health
          </p>
        </div>
        <div className="flex-1 p-4 border rounded-lg shadow-md bg-white">
          <Image
            src="/images/lifestyle.png"
            alt="Lifestyle"
            width={100}
            height={100}
            className="w-full h-32 object-cover rounded mb-4"
          />
          <h4 className="font-semibold">Lifestyle</h4>
          <p className="text-gray-700 text-sm">
            Lack of exercise and excessive use of alcohol can negatively impact
            sexual performance
          </p>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4">Your Treatment @₹549</h3>
      <div className="flex items-center mb-4">
        <Image
          src="/images/tostero.png"
          alt="TOSTERO Capsules"
          width={100}
          height={100}
          className="w-12 h-12 mr-4"
        />
        <div>
          <h4 className="font-semibold">TOSTERO Capsules (60N)</h4>
          <p className="text-gray-700">₹899 ₹549</p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold">Total price</p>
        <p className="font-semibold">₹549</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Start Treatment @₹549
      </button>
    </div>
  )
}

export default AnalysisPage
