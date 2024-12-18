"use client";
import { useState, useRef, useEffect, useContext, useCallback } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { GlobalStateContext } from "../../context/navbarContext";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/cartContext";
import { useUser } from "../../context/userContext";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(GlobalStateContext);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cart } = useCart(); // Destructure cart from useCart context
  const [cartCount, setCartCount] = useState(0);
  const menuRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const { user } = useUser();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(`${serverUrl}/api/products`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log('Fetched products:', data)
        setProducts(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsSearchOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
    } else {
      const filtered = products?.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleClickOutside = useCallback((event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.closest(".menu-button")
    ) {
      setIsMenuOpen(false);
    }
  }, []);

  const handleLinkClick = () => {
    setFilteredProducts([]);
    setIsSearchOpen(false);
  };

  const handleScroll = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      document.removeEventListener("scroll", handleScroll);
    }, 100);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    // console.log('Search query:', searchQuery)
    handleSearch();
  }, [searchQuery]);

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = cart || []; // Handle null or undefined case
      setCartCount(cartItems.length);
    };

    // Update cart count initially
    updateCartCount();

    return () => {
      // Cleanup function
    };
  }, [cart]);

  useEffect(() => {
    // Attach scroll event listener to the document body
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // Cleanup function to remove event listener
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  // Dynamic navbar background based on scroll position
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScrollChange = () => {
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 0;
      setIsScrolled(scrolled);
    };

    document.addEventListener("scroll", handleScrollChange);

    return () => {
      document.removeEventListener("scroll", handleScrollChange);
    };
  }, []);

  return (
    <nav
      className={`${
        !isScrolled > 0 && isHomePage ? "bg-[#3a472e]" : "bg-[#3a472e]"
      } text-gray-100 sticky inset-x-0 top-0 transition-all duration-300 ease-in-out z-[100]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex justify-center items-center">
              <Image
                src="/images/ynm-logo-wide.webp"
                alt="logo"
                width={1000}
                height={1000}
                className="h-6 w-auto hidden lg:block"
                priority
              />

              <Image
                src="/images/logo.png"
                alt="logo"
                width={1000}
                height={1000}
                className="h-8 w-auto block lg:hidden"
                priority
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <Link
              href="/products"
              className="glass-effect-button hover:hover-button active:scale-95"
            >
              Products
            </Link>
            <Link
              href="/our-science"
              className="glass-effect-button hover:hover-button active:scale-95"
            >
              Our Science
            </Link>
            <Link
              href="/about"
              className="glass-effect-button hover:hover-button active:scale-95"
            >
              Our Story
            </Link>
          </div>

          <div className="hidden md:flex space-x-4 lg:space-x-8">
            <button
              onClick={toggleSearch}
              className="glass-effect-button hover:hover-button active:scale-95"
            >
              <IoIosSearch className="h-6 w-6 text-gray-100" />
            </button>
            <Link href="/cart">
              <div className="relative glass-effect-button hover:hover-button active:scale-95">
                <IoCartOutline className="h-6 w-6 text-gray-100" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-gray-100 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
            </Link>
            <div className="flex justify-center items-center">
              {!user ? (
                <Link
                  href="/login"
                  className="glass-effect-button hover:hover-button active:scale-95"
                >
                  Login
                </Link>
              ) : (
                <Link
                  href="/account"
                  className="glass-effect-button hover:hover-button active:scale-95"
                >
                  Account
                </Link>
              )}
            </div>
          </div>
          <div className="flex space-x-4 md:hidden">
            <button
              onClick={toggleSearch}
              className="glass-effect-button hover:hover-button active:scale-95"
            >
              <IoIosSearch className="h-6 w-6 text-gray-100" />
            </button>
            <Link href="/cart">
              <div className="relative glass-effect-button hover:hover-button active:scale-95">
                <IoCartOutline className="h-6 w-6 text-gray-100" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-gray-100 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </div>
            </Link>
            <button
              onClick={toggleMenu}
              className=" focus:outline-none menu-button"
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
      {filteredProducts?.length > 0 && isSearchOpen && (
        <div className="absolute  left-0 right-0 bg-white shadow-lg p-4 z-10">
          <ul>
            {filteredProducts.map((product) => (
              <Link
                key={product?._id}
                onClick={handleLinkClick}
                href={`/product/${product?._id}`}
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
              href="/faqs"
              className="block px-4 py-3 text-lg font-semibold border-b  border-gray-600 "
            >
              FAQ
            </a>
            <a
              href="/contactus"
              className="block px-4 py-3 text-lg font-semibold border-b  border-gray-600 "
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
