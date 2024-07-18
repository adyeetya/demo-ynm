import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaShippingFast } from 'react-icons/fa'
import { GoPackageDependencies } from 'react-icons/go'
import { RiSecurePaymentFill } from 'react-icons/ri'
const Footer = () => {
  return (
    <footer className="bg-[var(--dark-bg)] text-gray-100 py-8 ">
      <div className="container  px-4 text-center max-w-screen-xl mx-auto">
        {/* Early Access Section */}
        <div className="mb-6">
          <p className="text-lg font-semibold">Get early access to products</p>
          <div className="flex justify-center mt-4 ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full max-w-xs border-none outline-none rounded-l-full text-gray-800"
            />
            <button className="text-2xl font-extrabold px-4 py-3 bg-[#9f6c32] text-gray-100 rounded-r-full hover:bg-blue-700">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Links Section */}
        <div className="mb-6">
          <ul className="flex flex-wrap justify-center  space-x-2">
            <li>
              <a href="#" className="hover:underline">
                Connect
              </a>
            </li>
            <p>|</p>
            <li>
              <a href="#" className="hover:underline">
                Mail
              </a>
            </li>
            <p>|</p>
            <li>
              <a href="#" className="hover:underline">
                Address
              </a>
            </li>
            <p>|</p>
            <li>
              <a href="#" className="hover:underline">
                Manufacturing
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="my-6 md:my-0">
            <ul className="flex justify-center  space-x-4 md:space-x-12">
              {/* Replace with actual icons */}
              <li>
                <a href="#" className="hover:underline">
                  <FaFacebookF className="text-gray-100 md:w-6 md:h-6" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <FaTwitter className="text-gray-100 md:w-6 md:h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yesnmoreofficial/"
                  className="hover:underline"
                >
                  <FaInstagram className="text-gray-100 md:w-6 md:h-6" />
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  <FaLinkedinIn className="text-gray-100 md:w-6 md:h-6" />
                </a>
              </li>
            </ul>
          </div>

          {/* Additional Icons Section */}
          <div className="my-12">
            <ul className="flex justify-center  space-x-4 md:space-x-12">
              {/* Replace with actual icons */}
              <li className="flex items-center flex-col justify-center">
                <FaShippingFast className="text-gray-100 mb-2 md:w-6 md:h-6" />

                <p className="text-sm">Fast Shipping</p>
              </li>
              <li className="flex items-center flex-col justify-center">
                <GoPackageDependencies className="text-gray-100 mb-2 md:w-6 md:h-6" />
                <p className="text-sm">Hassle-Free Return</p>
              </li>
              <li className="flex items-center flex-col justify-center">
                <RiSecurePaymentFill className="text-gray-100 mb-2 md:w-6 md:h-6" />
                <p className="text-sm">Secure Payments</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center">
          <p>&copy; 2024 yesnmore.com | All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
