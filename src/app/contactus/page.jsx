import React from "react";

import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const ContactUs = () => {
  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      {/* top part */}
      <div className="flex flex-col md:flex-row w-full  justify-between gap-4">
        {/* left img */}
        <div className="w-full md:w-[35%] ">
          <Image
            src="/images/contact/banner.webp"
            width={1000}
            height={1000}
            alt="banner"
            className="w-full h-full object-contain"
          />
        </div>
        {/* right text */}
        <div className="w-full md:w-[65%]">
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold">
              MONDAY. TUESDAY. WEDNESDAY. THURSDAY. FRIDAY. SATURDAY. SUNDAY.
            </h1>
            <div className="w-56 h-[2px] my-4 bg-gray-200"></div>
            <p className="text-sm my-4">
              Hey there, pleasure seeker!🌟 <br /> you’ve just taken the first
              step towards a more confident, pleasure-packed life. Got
              questions? Want to share your triumphs? Need a high-five or just
              want to say “Hello”? We’re all ears (and smiles)!
            </p>
            <div className="w-56 h-[2px] my-4 bg-gray-200"></div>
            <div className="relative h-24 bg-[#fbd354] p-4 flex justify-start items-center  rounded">
              <div>
                <p className="text-sm mb-2 font-semibold">
                  Drop us a line or two at
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Email: </span>{" "}
                  <a
                    href="mailto:support@yesnmore.com"
                    className="hover:underline"
                  >
                    support@yesnmore.com
                  </a>{" "}
                  <br /> <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:+" className="hover:underline">
                    999999999
                  </a>{" "}
                </p>
              </div>
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/images/contact/vector1.webp"
                  width={200}
                  height={200}
                  alt=""
                  className="h-36 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom part */}
      <div className="flex flex-col md:flex-row gap-4 my-8">
        {/* left */}
        <div className="w-full md:w-[60%]">
          <p className="text-lg mb-2 font-semibold">Office Hours </p>
          <p className="mb-2 text-sm">
            Monday - Friday (24x7) <br /> Saturday and Sunday (because pleasure
            knows no weekend!)
          </p>

          <p className="mb-2 text-sm">
            We’re here to support, guide, and make you chuckle. Drop us a text,
            give us a ring, or send a carrier pigeon (just kidding, we’re not
            that old-school).
          </p>
          <p className="mb-6 text-sm">
            Let’s make your day a little more exciting—reach out to us now!
          </p>

          <p className="mb-2 text-sm">Best chuckles with endless enthusiasm,</p>
          <h2 className="mb-2 text-lg font-semibold">TEAM YESNMORE</h2>
        </div>
        {/* right */}
        <div className="w-full md:w-[40%] p-8">
          <Image
            src="/images/contact/quote.webp"
            alt=""
            className="w-full"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
