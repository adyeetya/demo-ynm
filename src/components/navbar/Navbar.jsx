'use client'
import { useState, useRef, useEffect, useContext, useCallback } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCartOutline } from 'react-icons/io5'
import { IoClose } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx'
import { GlobalStateContext } from '../../context/navbarContext'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../../context/cartContext'
import { useUser } from '../../context/userContext'
import { products } from '../../data/Products'
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(GlobalStateContext)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const { cart } = useCart() // Destructure cart from useCart context
  const [cartCount, setCartCount] = useState(0)
  const menuRef = useRef(null)
  const scrollTimeoutRef = useRef(null)
  const { user } = useUser()
  const pathname = usePathname()
  const isHomePage = pathname === '/'

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

  const handleScroll = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
    clearTimeout(scrollTimeoutRef.current)
    scrollTimeoutRef.current = setTimeout(() => {
      document.removeEventListener('scroll', handleScroll)
    }, 100)
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

    return () => {
      // Cleanup function
    }
  }, [cart])

  useEffect(() => {
    // Attach scroll event listener to the document body
    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      // Cleanup function to remove event listener
      document.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

  // Dynamic navbar background based on scroll position
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScrollChange = () => {
      const scrollTop = window.scrollY
      const scrolled = scrollTop > 0
      setIsScrolled(scrolled)
    }

    document.addEventListener('scroll', handleScrollChange)

    return () => {
      document.removeEventListener('scroll', handleScrollChange)
    }
  }, [])

  return (
    <nav
      className={`${
        !isScrolled > 0 && isHomePage ? 'bg-transparent' : 'bg-[var(--dark-bg)]'
      } text-gray-100 sticky inset-x-0 top-0 z-30 transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex justify-center items-center">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={1000}
                height={1000}
                className="w-20 md:w-24 h-14 md:h-16 "
                priority
              />
            </a>
          </div>
          <div className="flex justify-end items-center flex-1 space-x-6 md:space-x-12">
            <div className="hidden md:flex space-x-12">
              {!user ? (
                <Link href="/login" className="hover:text-gray-300">
                  Login
                </Link>
              ) : (
                <>
                  <Link href="/account" className="hover:text-gray-300">
                    Account
                  </Link>
                </>
              )}
              <a href="/products" className="hover:text-gray-300">
                Products
              </a>
              <a href="#" className="hover:text-gray-300">
                Education
              </a>
              <Link href="/about" className="hover:text-gray-300 whitespace-nowrap">
                Our Story
              </Link>
            </div>
            <Link href="/cart">
              <div className="relative">
                <IoCartOutline className="h-6 w-6 text-gray-100" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-gray-100 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
            </Link>
            <button
              onClick={toggleSearch}
              className="focus:outline-none md:mr-4 search-button"
            >
              <IoIosSearch className="h-6 w-6 text-gray-100" />
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden focus:outline-none menu-button"
            >
              {isMenuOpen ? (
                <IoClose className="h-6 w-6 text-gray-100" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6 text-gray-100" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isSearchOpen && (
        <div className="absolute top-0 left-0 right-0 bg-white shadow-lg p-4 flex z-10">
          <div className="w-full flex flex-row mx-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-3 py-2 text-black border-b border-black focus:outline-none"
            />
            <button
              onClick={toggleSearch}
              className="ml-2 flex justify-center items-center rounded-full text-black "
            >
              <RxCross1 className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
      {filteredProducts.length > 0 && isSearchOpen && (
        <div className="absolute  left-0 right-0 bg-white shadow-lg p-4 z-10">
          <ul>
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                onClick={handleLinkClick}
                href={`/product/${product.id}`}
              >
                <li
                  className="p-2 text-black hover:bg-gray-200"
                  onClick={() => setFilteredProducts([])}
                >
                  {product.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
      {isMenuOpen && (
        <div
          className="z-50 md:hidden absolute top-14 right-0 mt-2 bg-[#080808] text-white shadow-lg  w-full "
          ref={menuRef}
        >
          <div className="px-4 py-4 space-y-2">
            <a
              href="/"
              className="block px-4 py-3 text-lg font-semibold border-b  border-gray-600 "
            >
              Home
            </a>
            {!user ? (
              <Link
                href="/login"
                className="block px-4 py-3 text-lg font-semibold border-b  border-gray-600 "
              >
                Login
              </Link>
            ) : (
              <>
                <Link
                  href="/account"
                  className="block px-4 py-3 text-lg font-semibold border-b  border-gray-600 "
                >
                  Account
                </Link>
              </>
            )}
            <Link
              href="/about"
              className="block px-4 py-3 text-lg font-semibold border-b  border-gray-600 "
            >
              Our Story
            </Link>
            <a
              href="/products"
              className="block px-4 py-3 text-lg font-semibold border-b  border-gray-600 "
            >
              Products
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-lg font-semibold border-b  border-gray-600 "
            >
              Education
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-lg font-semibold border-b  border-gray-600 "
            >
              FAQ
            </a>
            <a
              href="#"
              className="block px-4 py-3 text-lg font-semibold border-b  border-gray-600 "
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
