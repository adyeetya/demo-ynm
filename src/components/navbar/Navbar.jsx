'use client'
import { useState, useRef, useEffect, useContext, useCallback } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCartOutline } from 'react-icons/io5'
import { GlobalStateContext } from '../../context/navbarContext'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../../context/cartContext' // Import useCart context
import { products } from '../../data/Products'

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(GlobalStateContext)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const { cart } = useCart() // Destructure cart from useCart context
  const [cartCount, setCartCount] = useState(0)
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
    if (searchQuery.trim() === '') {
      setFilteredProducts([])
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredProducts(filtered)
    }
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

  const handleLinkClick = () => {
    setFilteredProducts([])
    setIsSearchOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  useEffect(() => {
    handleSearch()
  }, [searchQuery])

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = cart || [] // Handle null or undefined case
      setCartCount(cartItems.length)
    }

    // Update cart count initially
    updateCartCount()

    // Listen for changes in cart (handled by context)
    // No need for window.localStorage event listener here

    return () => {
      // Cleanup function
    }
  }, [cart])

  return (
    <nav className="bg-[#080808] shadow-lg text-[#FFF5EA] sticky inset-x-0 top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex justify-center items-center">
              <Image
                src="/images/LOGO YES N MORE.png"
                alt="logo"
                width={1000}
                height={1000}
                className="w-16 md:w-20 h-14 md:h-16 "
              />
            </a>
          </div>
          <div className="flex justify-end items-center flex-1 space-x-6 md:space-x-12">
            <div className="hidden md:flex space-x-12">
              <a href="#" className="hover:text-gray-300">
                Login
              </a>
              <a href="/products" className="hover:text-gray-300">
                Products
              </a>
              <a href="#" className="hover:text-gray-300">
                Education
              </a>
              <a href="#" className="hover:text-gray-300">
                Talk
              </a>
            </div>
            <Link href="/cart">
              <div className="relative">
                <IoCartOutline className="h-6 w-6 text-[#FFF5EA]" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
            </Link>
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
      {filteredProducts.length > 0 && (
        <div className="absolute top-[130px] left-0 right-0 bg-[#080808] shadow-lg p-4 z-10">
          <ul>
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="p-2 hover:bg-gray-700"
                onClick={() => setFilteredProducts([])}
              >
                <Link onClick={handleLinkClick} href={`/product/${product.id}`}>
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
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
              href="/products"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Products
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
    </nav>
  )
}

export default Navbar
