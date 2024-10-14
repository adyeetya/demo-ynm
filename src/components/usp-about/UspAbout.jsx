import React from "react";
import Image from "next/image";
import Link from "next/link";
export const Usp = () => {
  return (
    <div className="py-12 p-4 md:py-6 max-w-screen-xl mx-auto  my-12">
      {/* Top SVG Text Image */}
      <div className="text-center mb-10 flex w-full justify-center">
        {/* Replace with your SVG image */}
        <Image
          src="/images/USP_Desktop.svg"
          alt="SVG Text"
          width={300}
          height={100}
          className="w-full md:w-1/2"
        />
      </div>

      {/* Three Columns Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Column 1 */}
        <div className="text-center">
          <Image
            src="/images/indian_partner.webp"
            alt="Column 1 Image"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h2 className="text- font-bold mt-4">PROTECTION</h2>
          <p className="mt-2 text-xs text-gray-600">
            This is some descriptive text about the first column. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Sed, excepturi.
          </p>
        </div>
        {/* Column 2 */}
        <div className="text-center">
          <Image
            src="/images/indian_partner.webp"
            alt="Column 1 Image"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h2 className="text- font-bold mt-4">PERFORMANCE</h2>
          <p className="mt-2 text-xs text-gray-600">
            This is some descriptive text about the first column. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Sed, excepturi.
          </p>
        </div>
        {/* Column 3 */}
        <div className="text-center">
          <Image
            src="/images/indian_partner.webp"
            alt="Column 1 Image"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h2 className="text- font-bold mt-4">PLEASURE</h2>
          <p className="mt-2 text-xs text-gray-600">
            This is some descriptive text about the first column. Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Sed, excepturi.
          </p>
        </div>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div className="bg-[#3a472e] py-4 relative">
      {/* Background image with noise */}
      <div className="absolute inset-0 bg-[url('/images/noiseEffect-bg.webp')] opacity-40 bg-cover bg-center z-0"></div>

      {/* Content Section */}
      <div className="p-4 my-12 md:py-6 max-w-screen-xl mx-auto relative z-10">
        {/* Top Heading */}
        <div className="text-center flex flex-col gap-4 w-full justify-center">
          {/* Replace with your SVG image */}
          <Image
            src="/images/FROM_INCEPTIONDesktop.svg"
            alt="SVG Text"
            width={300}
            height={100}
            className="md:h-20 w-[90%] md:w-auto ml-auto md:mx-auto"
          />
          <Image
            src="/images/TO_REALITYDesktop.svg"
            alt="SVG Text"
            width={300}
            height={100}
            className="md:h-20 w-[75%] md:w-auto  ml-auto md:mr-4"
          />
        </div>
        <div className="absolute inset-0 top-20 -left-8 md:left-20 -z-10">
          <div className="rounded-full w-[60vw] h-[60vw] sm:w-[50vw] sm:h-[50vw] md:w-80 md:h-80 flex items-center justify-center overflow-hidden">
            {/* <Image
                src="/images/your-image.jpg"
                alt="About Us Image"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-full"
              /> */}
            <video
              src="/images/reality.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full rounded-full"
            ></video>
          </div>
        </div>

        {/* Image and Text Container */}
        <div className="mt-40 md:mt-28 lg:mt-10 flex flex-col md:flex-row items-center md:items-end justify-center relative">
          {/* Text Content Beside Image */}
          <div className="mt-8  text-white max-w-lg">
            <p className="text-lg leading-relaxed">
              We empower Indian men to take control of their sexual health with
              confidence. We understand the silent struggles and offer a
              discreet, judgment-free space for personalized guidance and
              solutions. Explore your pleasure, optimize your performance, and
              embrace inner well-being with us.
            </p>
            <div className="mt-10 ml-auto md:ml-0 text-white">
              <Link
                href="/about"
                className="glass-effect-button hover:hover-button"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
