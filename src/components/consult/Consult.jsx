import React from 'react'
import Image from 'next/image'

const Consult = () => {
  return (
    <div className="p-4 my-4 max-w-screen-xl mx-auto">
      <div className="mb-12 ">
        <h2 className="font-bold text-2xl">Expert Advice that Works</h2>
      </div>
      {/* Wide Cards Section */}
      <div className="flex flex-col md:flex-row gap-14 md:gap-24 mb-12 justify-center">
        <div className="relative w-full md:w-96">
          <div className="bg-[#F1D7B7] rounded-3xl shadow-lg flex h-44 md:h-44 relative">
            <div className="w-2/5 relative h-full">
              <Image
                src="/images/—Pngtree—the lab doctor smiles_14602877 1.png"
                alt="Wide Card 1"
                layout="fill"
                objectFit="cover"
                objectPosition="top center"
                className="absolute top-[-50%] left-0 right-0 bottom-0 -mt-[14px]  ml-2 transform scale-[115%] z-10" // Adjust top position and scale the image
              />
            </div>
            <div className="w-3/5 flex justify-center items-center mb-6">
              <h2 className="font-bold text-lg">Consult for free {'>'}</h2>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[15%] bg-black rounded-b-3xl"></div>
          </div>
        </div>

        {/* -------------- */}
        <div className="relative w-full md:w-96">
          <div className="bg-[#F1D7B7] rounded-3xl shadow-lg flex h-44 md:h-44 relative">
            <div className="w-2/5 relative h-full">
              <Image
                src="/images/SeekPng.com_hombre-png_1943212 1.png"
                alt="Wide Card 1"
                layout="fill"
                objectFit="cover"
                objectPosition="top center"
                className="absolute top-[-50%] left-0 right-0 bottom-0 -mt-[14px] ml-8 transform scale-[115%] z-10" // Adjust top position and scale the image
              />
            </div>
            <div className="w-3/5 flex justify-center items-center mb-6">
              <h2 className="font-bold text-lg">Access myself {'>'}</h2>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[15%] bg-black rounded-b-3xl"></div>
          </div>
        </div>
      </div>

      {/* Icons Section */}
      <div className="flex flex-col md:flex-row-reverse md:gap-6 justify-center items-center mb-12">
        <div className="mb-4 md:mb-0 text-center">
          <h2 className="font-bold text-xl">
            TRUSTED BY <br className="hidden md:block" /> 1L+ USERS
          </h2>
        </div>
        <div className="flex flex-row justify-around items-center  md:mx-4 gap-8">
          <div className="flex flex-col items-center bg-[#F1D7B7] rounded-xl p-2">
            <Image
              src="/images/vecteezy_two-users-icon-isolated-on-a-white-background-friends-line_10287608-1-Photoroom.png"
              alt="Icon 1"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col items-center bg-[#F1D7B7] rounded-xl p-2">
            <Image
              src="/images/vecteezy_two-users-icon-isolated-on-a-white-background-friends-line_10287608-1-Photoroom.png"
              alt="Icon 1"
              width={60}
              height={60}
            />
          </div>
          <div className="flex flex-col items-center bg-[#F1D7B7] rounded-xl p-2">
            <Image
              src="/images/vecteezy_two-users-icon-isolated-on-a-white-background-friends-line_10287608-1-Photoroom.png"
              alt="Icon 1"
              width={60}
              height={60}
            />
          </div>
        </div>
      </div>

      {/* Other Cards Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
        {/* card1 */}
        <div className="bg-[#0A0A06] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-72 md:w-52 overflow-hidden">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%]">
            <Image
              src="/images/happy couple in love lying in bed in the bedroom with a christmas tree and gifts near th-Photoroom 3.png" // dummy image
              alt="Card Image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Text Section */}
          <div className="p-4 md:p-6 w-[55%] md:w-full flex flex-col gap-4 justify-center text-white h-full md:h-[45%]">
            <h2 className="text-xl font-semibold mb-2 md:mb-0">
              Performance {'>'}
            </h2>
            <p className="text-sm">Sexual Health Vitality Stamina</p>
          </div>
        </div>

        {/* card2 */}
        <div className="bg-[#0A0A06] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-72 md:w-52 overflow-hidden">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%]">
            <Image
              src="/images/happy couple in love lying in bed in the bedroom with a christmas tree and gifts near th-Photoroom 3.png" // dummy image
              alt="Card Image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Text Section */}
          <div className="p-4 md:p-6 w-[55%] md:w-full flex flex-col gap-4 justify-center text-white h-full md:h-[45%]">
            <h2 className="text-xl font-semibold mb-2 md:mb-0">
              Nutrition {'>'}
            </h2>
            <p className="text-sm">Nutrition Metabolism Immunity</p>
          </div>
        </div>
        {/* card3 */}
        <div className="bg-[#0A0A06] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-72 md:w-52 overflow-hidden">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%]">
            <Image
              src="/images/happy couple in love lying in bed in the bedroom with a christmas tree and gifts near th-Photoroom 3.png" // dummy image
              alt="Card Image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Text Section */}
          <div className="p-4 md:p-6 w-[55%] md:w-full flex flex-col gap-4 justify-center text-white h-full md:h-[45%]">
            <h2 className="text-xl font-semibold mb-2 md:mb-0">
              Hygiene {'>'}
            </h2>
            <p className="text-sm">Sexual Health Vitality Stamina</p>
          </div>
        </div>
        {/* card4 */}
        <div className="bg-[#0A0A06] rounded-3xl shadow-lg flex flex-row md:flex-col h-44 md:h-72 md:w-52 overflow-hidden">
          {/* Image Section */}
          <div className="relative w-[45%] md:w-full h-full md:h-[55%]">
            <Image
              src="/images/happy couple in love lying in bed in the bedroom with a christmas tree and gifts near th-Photoroom 3.png" // dummy image
              alt="Card Image"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Text Section */}
          <div className="p-4 md:p-6 w-[55%] md:w-full flex flex-col gap-4 justify-center text-white h-full md:h-[45%]">
            <h2 className="text-xl font-semibold mb-2 md:mb-0">
              Wellness {'>'}
            </h2>
            <p className="text-sm">Sexual Health Vitality Stamina</p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="flex justify-center mb-2 relative mx-auto max-w-4xl mt-12">
        {/* Step 1 */}
        <div className="relative flex flex-col items-center w-1/3">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#EDC800] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/happy couple in love lying in bed in the bedroom with a christmas tree and gifts near th-Photoroom 3.png"
              alt="Step 1"
              width={50}
              height={50}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <div className="block absolute top-1/2 left-1/2 w-full h-0.5 bg-black -translate-y-1/2 -z-10"></div>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center w-1/3">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#EDC800] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/happy couple in love lying in bed in the bedroom with a christmas tree and gifts near th-Photoroom 3.png"
              alt="Step 1"
              width={50}
              height={50}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <div className="block absolute top-1/2 left-1/2 w-full h-0.5 bg-black -translate-y-1/2 -z-10"></div>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center w-1/3">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#EDC800] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/happy couple in love lying in bed in the bedroom with a christmas tree and gifts near th-Photoroom 3.png"
              alt="Step 1"
              width={50}
              height={50}
              className="w-16 h-16 md:w-20 md:h-20"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center relative mx-auto max-w-4xl mb-12">
        <div className="relative flex flex-col items-center w-1/3 justify-center text-center">
          <p className="text-sm font-semibold">
            Assess <br /> Yourself
          </p>
        </div>
        <div className="relative flex flex-col items-center w-1/3 justify-center text-center">
          <p className="text-sm font-semibold">
            Consult For <br /> Free
          </p>
        </div>
        <div className="relative flex flex-col items-center w-1/3 justify-center text-center">
          <p className="text-sm font-semibold">
            {' '}
            Be <br /> Consistent
          </p>
        </div>
      </div>
    </div>
  )
}

export default Consult
