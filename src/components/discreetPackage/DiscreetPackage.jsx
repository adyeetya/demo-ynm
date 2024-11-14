import Image from "next/image";
import Link from "next/link";
import React from "react";

const WaveSection = () => {
  return (
    <section
      className="relative w-full min-h-[706px] bg-cover bg-center bg-no-repeat overflow-hidden -mt-32"
      style={{
        backgroundImage: 'url("/images/hero/discreetbg.png")',
        backgroundSize: "100vw 100%",
      }}
    >
      <div className="w-full">
        <div className="relative z-10 text-center pb-20 pt-64 ">
          <h1 className="text-4xl font-semibold text-[#3a472e] my-8">
            Our Promise to You
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mx-6">
            {/* Image */}
            <div className="w-full max-w-md">
              <Image
                src="/images/hero/box_withshadow.png"
                width={1000}
                height={1000}
                alt="discreet package"
                className="w-full max-w-md"
              />
            </div>
            {/* Text Section */}
            <div className="max-w-lg flex flex-col gap-8 justify-center items-start">
              <div className="flex items-start gap-4">
                <div className="bg-[#3a472e] w-8 h-8 shrink-0 rounded-full text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h2 className="text-2xl text-left font-semibold text-[#3a472e]">
                    Discreet Packaging
                  </h2>
                  <p className="text-justify text-sm lg:text-md">
                    Privacy is guaranteed. Yesnmore products ship in discreet
                    plain packaging with Customer Service as the name on the
                    return address.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#3a472e] w-8 h-8 shrink-0 rounded-full text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h2 className="text-2xl text-left font-semibold text-[#3a472e]">
                    Certificate of Analysis (COA)
                  </h2>
                  <p className="text-justify text-sm lg:text-md">
                    We provide a Certificate of Analysis for every batch with
                    every order. This ensures that your product is safe and
                    contains what it claims.
                  </p>
                </div>
              </div>
              <Link
                href="/products"
                className="text-xl bg-[#3a472e] px-6 py-2 rounded-full border border-[#3a472e] text-white w-fit"
              >
                Buy Now
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 p-4 justify-center gap-4 md:gap-8 mt-24 w-full">
            <div className="text-center flex justify-center items-center p-4 border rounded-xl ">
              <Image
                src="/images/hero/FDA.webp"
                height={200}
                width={200}
                alt="FDA"
                className="w-20 h-20 md:w-32 md:h-32"
              />
            </div>
            <div className="text-center flex justify-center items-center p-4 border rounded-xl ">
              <Image
                src="/images/hero/fssai.webp"
                height={200}
                width={200}
                alt="FDA"
                className="w-20 h-20 md:w-32 md:h-32"
              />
            </div>
            <div className="text-center flex justify-center items-center p-4 border rounded-xl ">
              <Image
                src="/images/hero/GMP.webp"
                height={200}
                width={200}
                alt="FDA"
                className="w-20 h-20 md:w-32 md:h-32"
              />
            </div>
            <div className="text-center flex justify-center items-center p-4 border rounded-xl ">
              <Image
                src="/images/hero/clinically_tested.webp"
                height={200}
                width={200}
                alt="FDA"
                className="w-20 h-20 md:w-32 md:h-32"
              />
            </div>
            <div className="text-center flex justify-center items-center p-4 border rounded-xl ">
              <Image
                src="/images/hero/who_badge.webp"
                height={200}
                width={200}
                alt="FDA"
                className="w-20 h-20 md:w-32 md:h-32"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaveSection;
