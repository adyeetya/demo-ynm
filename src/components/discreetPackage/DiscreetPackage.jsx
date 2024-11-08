import Image from "next/image";
import Link from "next/link";
import React from "react";

const WaveSection = () => {
  return (
    <section className="relative w-full h-[800px] md:h-[600px] -mt-20 mb-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full bg-cover bg-center h-[750px] md:h-[600px]"
        style={{
          backgroundImage: 'url("/images/hero/discreetbg.png")',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center p-8 pt-44">
        <h1 className="text-5xl font-semibold text-[#3a472e] my-12">
          Discreet Packaging
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          {/* image */}
          <div className="w-full md:w-1/2 max-w-md">
            <Image
              src="/images/hero/box_withshadow.png"
              width={1000}
              height={1000}
              alt="discreet package"
              className="w-full max-w-md"
            />
          </div>
          {/* text */}
          <div className="max-w-lg flex flex-col gap-8 justify-center items-start">
            <p className="text-justify">
              Privacy is guaranteed. Yesnmore products ship in discreet plain
              packaging with Customer Service as the name on the return address.
              Buy now
            </p>
            <Link
              href="/products"
              className="text-xl bg-[#3a472e] px-6 py-2 rounded-full border border-[#3a472e] text-white w-fit"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaveSection;
