import React from "react";
import Image from "next/image";
import { expertsData } from "../../data/Experts";
import { GoArrowRight } from "react-icons/go";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
const WelcomeSection = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg mb-8">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Welcome to YESnMORE Clinic
      </h1>
      <button className="bg-orange-400 text-gray-100 px-4 py-2 rounded-lg flex items-center justify-between gap-4">
        Talk Now
        <GoArrowRight className="w-8 h-6 text-gray-100" />
      </button>
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
  );
};

const ExpertCard = ({ expert }) => {
  return (
    <div className="group relative w-full md:w-1/2 h-60 glass-shine-container overflow-hidden rounded-3xl">
      {/* Card with green glass effect */}
      <div className="absolute bottom-0 p-4 rounded-3xl shadow-xl h-60 w-full flex justify-start items-center bg-gradient-to-r from-green-100/50 via-green-100/20 to-transparent backdrop-blur-[4px] border border-green-200 z-10">
        <div className="text-sm h-full w-[70%] flex flex-col justify-between py-4">
          <div>
            <h2 className="font-semibold mb-2">{expert.name}</h2>
            <p>{expert.degree}</p>
            <p>{expert.specialization}</p>
            <p>{expert.experience}</p>
            <p>{expert.languages}</p>
          </div>
          <button className="whitespace-nowrap md:text- w-fit border px-4 py-1 rounded-full bg-white border-green-200">
            Consult for Free
          </button>
        </div>
      </div>

      {/* Doctor Image */}
      <div className="h-52">
        <Image
          src={expert.imageUrl}
          alt="Wide Card 1"
          width={1000}
          height={1000}
          className="absolute top-0 right-2 md:right-4 z-10 h-full w-auto"
        />
      </div>
    </div>
  );
};

const GlassShineEffect = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-h- justify-between items-center bg-yellow-50 p-4 rounded-lg mb-4 relative  overflow-hidden">
      <div>
        <h2 className="text-4xl font-bold">Welcome to YESnMORE Clinic</h2>
      </div>
      <div>
        <p className="mb-2">Find the best expert for your concern</p>
        <div className="flex justify-center space-x-4 w-full">
          <div className="bg-white p-2 max-h-60 rounded-xl flex flex-col gap-2 justify-center items-center shadow-lg text-center w-1/3">
            <Image
              src="/images/DOCTOR.webp"
              alt="Specialist Panel"
              className="w-full h-[90%] object-contain rounded-xl"
              width={500}
              height={500}
            />
            <h3 className="text-sm font-semibold">Urologist Expert</h3>
          </div>
          <div className="bg-white p-2 max-h-60 gap-2 rounded-xl flex flex-col justify-center items-center shadow-lg text-center w-1/3">
            <Image
              src="/images/health-coach.jpg"
              alt="Health Coach"
              className="w-full h-[90%] object-cover rounded-xl"
              width={500}
              height={500}
            />
            <h3 className="text-sm font-semibold">Health Coach</h3>
          </div>
          <div className="bg-white p-2 max-h-60 gap-2 rounded-xl flex flex-col justify-center items-center shadow-lg text-center w-1/3">
            <Image
              src="/images/femdoc.png"
              alt="General Physician"
              className="w-full h-[90%] object-cover rounded-xl"
              width={500}
              height={500}
            />
            <h3 className="text-sm font-semibold">General Physician</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExpertSection = () => {
  const onlineExperts = expertsData.filter(
    (expert) => expert.status === "Online"
  );

  return (
    <div className="p-4">
      <GlassShineEffect />
      <h2 className="text-2xl font-bold my-8">Our Experts</h2>
      {expertsData.map((expert) => (
        <ExpertCard key={expert.id} expert={expert} />
      ))}
      {/* <h2 className="text-2xl font-bold mt-8 mb-4">All Available Experts</h2>
      {expertsData.map((expert) => (
        <ExpertCard key={expert.id} expert={expert} />
      ))} */}
    </div>
  );
};

const Page = () => {
  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <ExpertSection />
    </div>
  );
};

export default Page;
