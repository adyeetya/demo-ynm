import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaChevronRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#3a472e] pt-8 pb-4 relative">
      {/* Background image with noise */}
      <div className="absolute inset-0 bg-[url('/images/noiseEffect-bg.webp')] opacity-40 bg-cover bg-center z-0"></div>
      <div className="flex flex-col md:flex-row text-center max-w-screen-xl mx-auto">
        <div className="w-full md:w-1/2 flex flex-row md:flex-col items-start justify-between px-4 mb-4 gap-4">
          <div className="flex flex-col gap-4 md:w-3/4">
            {/* Images and Text Section */}
            <div className="flex flex-col justify-center items-start gap-2 z-10">
              <Image
                src="/images/ynm-logo-wide.webp"
                width={1000}
                height={1000}
                alt="Image 1"
                className="h-4 w-auto md:h-8 md:w-auto"
              />
              <div className="flex justify-center items-center gap-2">
                <p className="text-sm font-semibold text-white">by</p>
                <a href="https://www.apcomedicare.com/" target="_blank">
                  <Image
                    src="/images/apco-logo.png"
                    width={1000}
                    height={1000}
                    alt="Image 1"
                    className="w-16 h-auto"
                  />
                </a>
              </div>
            </div>
            {/* social links */}
            <div className="z-10">
              <ul className="flex justify-start space-x-4 md:space-x-8">
                <li className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
                  <a href="#" className=" ">
                    <FaFacebookF className="text-gray-900 w-6 h-6" />
                  </a>
                </li>
                <li className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
                  <a href="#" className="hover:underline">
                    <FaTwitter className="text-gray-900 w-6 h-6" />
                  </a>
                </li>
                <li className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
                  <a
                    href="https://www.instagram.com/yesnmoreofficial/"
                    className="hover:underline"
                    target="_blank"
                  >
                    <FaInstagram className="text-gray-900 w-6 h-6" />
                  </a>
                </li>
                <li className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
                  <a href="#" className="hover:underline">
                    <FaLinkedinIn className="text-gray-900 w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* address */}
          <div className="text-white text-left text-xs md:text-sm md:w-1/3">
            <h2>
              Innov8 Ras Vilas, Lower Ground Floor, <br /> Salcon Rasvilas, D-1,{" "}
              <br />
              Saket District Center, <br /> Saket, New Delhi 110017
            </h2>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col w-full md:w-1/2 md:px-4 text-white items-center justify-center gap-8 z-10">
          <div className="w-full px-4 flex flex-row justify-between md:justify-center my-8  gap-2 md:gap-8 text-right">
            <div>
              <ul>
                <li className="my-2">
                  <Link
                    href="/our-science"
                    className="hover:underline flex items-center text-sm md:text-lg"
                  >
                    <FaChevronRight className="mr-2 w-2 text-sm md:text-lg" />{" "}
                    Our Science
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    href="/about"
                    className="hover:underline flex items-center text-sm md:text-lg"
                  >
                    <FaChevronRight className="mr-2 w-2 text-sm md:text-lg" />{" "}
                    Our Story
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    href="/contactus"
                    className="hover:underline flex items-center text-sm md:text-lg"
                  >
                    <FaChevronRight className="mr-2 w-2 text-sm md:text-lg" />{" "}
                    Contact Us
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    href="/faqs"
                    className="hover:underline flex items-center text-sm md:text-lg"
                  >
                    <FaChevronRight className="mr-2 w-2 text-sm md:text-lg" />{" "}
                    FAQ&apos;s
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="my-2">
                  <Link
                    href="/terms-and-conditions"
                    className="hover:underline flex items-center text-sm md:text-lg"
                  >
                    <FaChevronRight className="mr-2 w-2 text-sm md:text-lg" />{" "}
                    Terms & Conditions
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    href="/shipping-policy"
                    className="hover:underline flex items-center text-sm md:text-lg"
                  >
                    <FaChevronRight className="mr-2 w-2 text-sm md:text-lg" />{" "}
                    Shipping Policy
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    href="/privacy-policy"
                    className="hover:underline flex items-center text-sm md:text-lg"
                  >
                    <FaChevronRight className="mr-2 w-2 text-sm md:text-lg" />{" "}
                    Privacy Policy
                  </Link>
                </li>
                <li className="my-2">
                  <Link
                    href="/refunds-policy"
                    className="hover:underline flex items-center text-sm md:text-lg"
                  >
                    <FaChevronRight className="mr-2 w-2 text-sm md:text-lg" />{" "}
                    Cancellation & Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-auto">
            <p className="text-sm mb-2 text-right">Accepted Payments</p>
            <div className="flex flex-row gap-4">
              <div className="h-4 w-8 bg-white"></div>
              <div className="h-4 w-8 bg-white"></div>
              <div className="h-4 w-8 bg-white"></div>
              <div className="h-4 w-8 bg-white"></div>
              <div className="h-4 w-8 bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-100 my-4" />
      {/* Social Media Links Section */}

      {/* Copyright Section */}
      <div className="text-center mt-4 text-white">
        <p>&copy; 2024 yesnmore.com | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
