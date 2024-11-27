import Image from "next/image";
export const Badges = () => {
  return (
    <div className="flex justify-around mt-12 items-center overflow-hidden">
      <div className="flex flex-col justify-between items-center w-24 md:w-32">
        <Image
          src="/images/product_page_img/medical-globe.png"
          alt="WHO Certified"
          width={1000}
          height={1000}
          className="w-12 h-12 md:w-20 md:h-20"
        />
        <p className="mt-2 text-[10px] md:text-sm text-center">
          WHO <br className="hidden md:block" /> Certified
        </p>
      </div>
      <div className="flex flex-col justify-between items-center w-24">
        <div className="rounded-full border-2 border-gray-800 w-12 h-12 flex justify-center items-center">
          <Image
            src="/images/product_page_img/rabit.png"
            alt="Cruelty Free"
            width={100}
            height={100}
            className="w-12 h-12"
          />
        </div>
        <p className="mt-2 text-[10px] md:text-sm text-center">
          Cruelty <br className="hidden md:block" /> Free
        </p>
      </div>
      <div className="flex flex-col justify-between items-center w-24">
        <div className="rounded-full border-2 border-gray-800 w-12 h-12 flex justify-center items-center">
          <Image
            src="/images/product_page_img/test.png"
            alt="Lab Tested"
            width={100}
            height={100}
            className="w-8 h-8"
          />
        </div>
        <p className="mt-2 text-[10px] md:text-sm text-center">
          Lab <br className="hidden md:block" /> Tested
        </p>
      </div>
      <div className="flex flex-col justify-between items-center w-28">
        <div className="rounded-full border-2 border-gray-800 w-12 h-12 flex justify-center items-center">
          <Image
            src="/images/product_page_img/atom.png"
            alt="Scientifically Proven"
            width={100}
            height={100}
            className="w-8 h-8"
          />
        </div>
        <p className="mt-2 text-[10px] md:text-sm text-center">
          Scientifically <br className="hidden md:block" /> Proven
        </p>
      </div>
    </div>
  );
};

export const DiscreetSection = () => {
  return (
    <section className=" w-full">
      <div className="w-full">
        <div className="relative z-10 text-center ">
          <h1 className="text-4xl font-semibold text-[#3a472e] my-8">
            Privacy Guaranteed, Quality Assured
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
                    Your comfort and privacy are our priority. With Yes N More,
                    every interaction is confidential, and all products are
                    shipped discreetly, ensuring a private experience from start
                    to finish.
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
            </div>
          </div>
          <h2 className="mt-24 mb-8 text-left mx-4 text-lg font-semibold text-[#3a472e]">
            Certified by Renowned Authorities
          </h2>
          {/* <div className="grid grid-cols-3 lg:grid-cols-5 p-4 justify-center gap-4 md:gap-8 w-full">
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
          </div> */}
          <div className="w-full p-4 max-w-screen-xl mx-auto mb-12">
            <Image
              src="/images/hero/badges_web.webp"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-auto hidden md:block"
            />
            <Image
              src="/images/hero/badges_phone.webp"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-auto md:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
