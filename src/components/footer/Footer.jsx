import Image from 'next/image'
import React from 'react'
import {
  FaChevronRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[var(--dark-bg)] text-gray-100 py-8">
      <div className="container px-4 text-center max-w-screen-xl mx-auto">
        {/* Social Media Links Section */}
        <div className="mb-8 max-w-md mx-auto">
          <ul className="flex justify-center space-x-4 md:space-x-12">
            <li>
              <a href="#" className="hover:underline">
                <FaFacebookF className="text-gray-100 w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <FaTwitter className="text-gray-100 w-6 h-6" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yesnmoreofficial/"
                className="hover:underline"
              >
                <FaInstagram className="text-gray-100 w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <FaLinkedinIn className="text-gray-100 w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>

        {/* Text Section */}
        <div className="my-4 max-w-md mx-auto">
          <p className="text-gray-300">
            From superior ingredients to next-level formulation, our purposeful
            and multifunctional solutions have you covered. Welcome to the start
            of something happy.
          </p>
        </div>

        {/* Images and Text Section */}
        <div className="my-8 flex justify-center items-center space-x-4 max-w-md mx-auto">
          <Image
            src="/images/logo.png"
            width={1000}
            height={1000}
            alt="Image 1"
            className="w-32 h-24"
          />
          <p className="text-xl font-semibold">by</p>
          <a href="https://www.apcomedicare.com/">
            <Image
              src="/images/apco-logo.png"
              width={1000}
              height={1000}
              alt="Image 1"
              className="w-20 h-10"
            />
          </a>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 my-8" />

        {/* Links Section */}
        <div className="my-8 flex flex-row justify-between  max-w-md mx-auto">
          <div>
            <ul>
              <li className="my-2">
                <a href="#" className="hover:underline flex items-center">
                  <FaChevronRight className="mr-2 w-2" /> About Us
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline flex items-center">
                  <FaChevronRight className="mr-2 w-2" /> FAQ&apos;s
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline flex items-center">
                  <FaChevronRight className="mr-2 w-2" /> Contacts
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline flex items-center">
                  <FaChevronRight className="mr-2 w-2" /> Support Services
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="my-2">
                <a href="#" className="hover:underline flex items-center">
                  <FaChevronRight className="mr-2 w-2" /> Terms and Conditions
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline flex items-center">
                  <FaChevronRight className="mr-2 w-2" /> Shipping Policy
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline flex items-center">
                  <FaChevronRight className="mr-2 w-2" /> Privacy Policy
                </a>
              </li>
              <li className="my-2">
                <a href="#" className="hover:underline flex items-center">
                  <FaChevronRight className="mr-2 w-2" /> Cancellation Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8">
          <p>&copy; 2024 yesnmore.com | All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
