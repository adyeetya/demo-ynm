import Image from "next/image";
import Link from "next/link";
import React from "react";

const WaveSection = () => {
  return (
    <section
      className="relative w-full min-h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: 'url("/images/hero/discreetbg.png")',
        backgroundSize: "100vw 100%",
      }}
    >
      {/* Content */}
      <div className="w-full">
        <div className="relative z-10 text-center pt-44">
          <h1 className="text-5xl font-semibold text-[#3a472e] my-12">
            Discreet Packaging
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            {/* Image */}
            <div className="w-full md:w-1/2 max-w-md">
              <Image
                src="/images/hero/box_withshadow.png"
                width={1000}
                height={1000}
                alt="discreet package"
                className="w-full max-w-md"
              />
            </div>
            {/* Text */}
            <div className="max-w-lg flex flex-col gap-8 justify-center items-start">
              <p className="text-justify">
                Privacy is guaranteed. Yesnmore products ship in discreet plain
                packaging with Customer Service as the name on the return
                address. Buy now
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
      </div>
    </section>
  );
};

export default WaveSection;
