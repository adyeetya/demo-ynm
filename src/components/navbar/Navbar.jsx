'use client'
import { useState, useRef, useEffect, useContext, useCallback } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { GlobalStateContext } from '../../context/navbarContext'
import Image from 'next/image'

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(GlobalStateContext)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      setIsSearchOpen(false)
    }
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setIsMenuOpen(false)
    }
  }

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`)
  }

  const handleClickOutside = useCallback((event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.closest('.menu-button')
    ) {
      setIsMenuOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <nav className="bg-[#080808] shadow-lg text-[#FFF5EA] sticky inset-x-0 top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex justify-center items-center">
              <Image
                src="/images/yes n more logo 4@3x 1.png"
                alt="logo"
                width={1000}
                height={1000}
                className="w-14 md:w-20 h-14 md:h-20 md:ml-2 mt-4"
              />
            </a>
          </div>
          <div className="flex justify-end items-center flex-1 space-x-6 md:space-x-12">
            <div className="hidden md:flex space-x-12">
              <a href="#" className="hover:text-gray-300">
                Login
              </a>
              <a href="#" className="hover:text-gray-300">
                Product
              </a>
              <a href="#" className="hover:text-gray-300">
                Education
              </a>
              <a href="#" className="hover:text-gray-300">
                Talk
              </a>
            </div>
            <button
              onClick={toggleSearch}
              className="focus:outline-none md:mr-4 search-button"
            >
              <IoIosSearch className="h-6 w-6 text-[#FFF5EA]" />
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none menu-button"
            >
              <RxHamburgerMenu className="h-6 w-6 text-[#FFF5EA]" />
            </button>
          </div>
        </div>
      </div>
      {isSearchOpen && (
        <div className="absolute top-[62px] left-0 right-0 bg-[#080808] shadow-lg p-4 flex z-10">
          <div className="w-full md:w-1/2 flex flex-row mx-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-3 py-2 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            />
            <button
              onClick={handleSearch}
              className="ml-2 px-3 py-2 bg-blue-900 text-[#FFF5EA] rounded-full hover:bg-blue-700 focus:outline-none"
            >
              Search
            </button>
          </div>
        </div>
      )}
      {isMenuOpen && (
        <div
          className="z-50 md:hidden absolute top-16 right-0 mt-2 mr-2 bg-[#11130C] shadow-lg rounded-xl w-48"
          ref={menuRef}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Product
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Education
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              FAQ
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
      {isSearchOpen && (
        <div className="hidden md:flex justify-center absolute top-16 left-0 right-0 bg-[#080808] shadow-lg py-4 z-10">
          <div className="w-1/2 flex">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-3 py-2 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            />
            <button
              onClick={handleSearch}
              className="ml-2 px-3 py-2 bg-blue-900 text-[#FFF5EA] rounded-full hover:bg-blue-700 focus:outline-none"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
