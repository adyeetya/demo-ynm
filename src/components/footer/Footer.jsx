import Image from 'next/image'
import Link from 'next/link'
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
      <div className="flex flex-col md:flex-row text-center max-w-screen-xl mx-auto">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-8">
          {/* Images and Text Section */}
          <div className="flex justify-center items-center max-w-md mx-auto gap-8 p-4">
            <Image
              src="/images/logo.png"
              width={1000}
              height={1000}
              alt="Image 1"
              className="h-14 w-24 md:h-20 md:w-32"
            />
            <p className="text-xl font-semibold">by</p>
            <a href="https://www.apcomedicare.com/" target="_blank">
              <Image
                src="/images/apco-logo.png"
                width={1000}
                height={1000}
                alt="Image 1"
                className="w-20 h-10"
              />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/2 flex flex-row justify-center gap-8 mx-auto">
          <div>
            <ul>
              <li className="my-2">
                <Link
                  href="/our-science"
                  className="hover:underline flex items-center"
                >
                  <FaChevronRight className="mr-2 w-2" /> Our Science
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="/about"
                  className="hover:underline flex items-center"
                >
                  <FaChevronRight className="mr-2 w-2" /> Our Story
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="/contactus"
                  className="hover:underline flex items-center"
                >
                  <FaChevronRight className="mr-2 w-2" /> Contact Us
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="/faqs"
                  className="hover:underline flex items-center"
                >
                  <FaChevronRight className="mr-2 w-2" /> FAQ&apos;s
                </Link>
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

        {/* Divider */}
      </div>
      <hr className="border-gray-600 my-8" />
      {/* Social Media Links Section */}
      <div className="max-w-md mx-auto">
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
              target="_blank"
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
      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p>&copy; 2024 yesnmore.com | All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
