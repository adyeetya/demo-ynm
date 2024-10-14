"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { products } from '../../data/Products'
import { useCart } from "../../context/cartContext";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { LuArrowUpDown } from "react-icons/lu";
import { IoFilter } from "react-icons/io5";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 >= 0.1; // Check if we need a half-star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining stars

  return (
    <div className="text-gray-600 flex justify-center items-center">
      {/* Full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <IoMdStar
            key={index}
            className="w-4 h-4 md:w-5 md:h-5 text-[#debb02]"
          />
        ))}
      {/* Half star */}
      {hasHalfStar && (
        <IoMdStarHalf className="w-4 h-4 md:w-5 md:h-5 text-[#debb02]" />
      )}
      {/* Empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <IoMdStarOutline
            key={index}
            className="w-4 h-4 md:w-5 md:h-5 text-gray-400"
          />
        ))}
    </div>
  );
};

const ProductsPage = () => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const { addToCart } = useCart();
  const [sortOrder, setSortOrder] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const sortRef = useRef(null);
  const filterRef = useRef(null);

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
        // console.log(data)
        setProducts(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [serverUrl]);

  // useEffect(() => {
  //   console.log('products on the product page', products)
  // }, [])

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const calculatePercentageOff = (mrp, price) => {
    return ((mrp - price) / mrp) * 100;
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
    setOpenDropdown(null);
  };

  const handleFilterChange = (value) => {
    setFilterCategory(value);
    setOpenDropdown(null);
  };

  const handleOutsideClick = (e) => {
    if (
      sortRef.current &&
      !sortRef.current.contains(e.target) &&
      openDropdown === "sort"
    ) {
      setOpenDropdown(null);
    }
    if (
      filterRef.current &&
      !filterRef.current.contains(e.target) &&
      openDropdown === "filter"
    ) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openDropdown]);

  const sortedProducts = products
    ? [...products].sort((a, b) => {
        if (sortOrder === "price-low-to-high") {
          return a.price - b.price;
        } else if (sortOrder === "price-high-to-low") {
          return b.price - a.price;
        } else if (sortOrder === "rating") {
          return b.rating - a.rating;
        } else {
          return 0;
        }
      })
    : [];

  const filteredProducts = sortedProducts.filter((product) => {
    if (filterCategory) {
      return product.category === filterCategory;
    }
    return true;
  });

  const uniqueCategories = products
    ? [...new Set(products.map((product) => product.category))]
    : [];

  if (isLoading)
    return (
      <div className="flex justify-center items-center w-full text-xl min-h-screen">
        <AiOutlineLoading3Quarters className="animate-spin w-8 h-8" />
      </div>
    );

  if (!products) {
    return (
      <p className="text-red-500 flex justify-center items-center w-full text-xl min-h-screen">
        Products not found
      </p>
    );
  }
  if (isError)
    return (
      <div className="text-red-500 flex justify-center items-center w-full text-xl min-h-screen">
        Error loading products
      </div>
    );

  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <div className="mb-4 md:mb-8 hidden md:flex">
        <Link
          href="/"
          className="text-[12px] md:text-sm px-2 py-1 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-gray-100"
        >
          Home{" "}
        </Link>
      </div>
      <h1 className="text-xl md:text-3xl font-bold mb-6">Our Products</h1>

      <div className="flex flex-row justify-between items-center mb-6">
        <div className="mb-4 md:mb-0 flex flex-col gap-2 w-1/2 md:w-fit relative text-sm md:text-md">
          <div className="relative w-full" ref={sortRef}>
            <label
              onClick={() =>
                setOpenDropdown(openDropdown === "sort" ? null : "sort")
              }
              className="cursor-pointer flex items-center w-full capitalize"
            >
              <LuArrowUpDown className="mr-2" /> Sort by{" "}
              {openDropdown === "sort" ? (
                <BsChevronUp className="ml-2" />
              ) : (
                <BsChevronDown className="ml-2" />
              )}
            </label>
            <p>
              {sortOrder && (
                <span className="font-semibold capitalize text-blue-600">
                  {sortOrder.replace(/-/g, " ")}
                </span>
              )}
            </p>
            {openDropdown === "sort" && (
              <div className="absolute top-8 left-0 w-full md:w-56 bg-white border border-gray-300 rounded-lg shadow-md p-1 z-10">
                <div
                  onClick={() => handleSortChange("price-low-to-high")}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md"
                >
                  Price: Low to High
                </div>
                <div
                  onClick={() => handleSortChange("price-high-to-low")}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md"
                >
                  Price: High to Low
                </div>
                <div
                  onClick={() => handleSortChange("rating")}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md"
                >
                  Rating
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mb-4 md:mb-0 flex flex-col gap-2 w-1/2 md:w-fit relative text-sm md:text-md justify-end">
          <div className="relative w-full md:w-auto" ref={filterRef}>
            <div className="flex justify-end w-full ">
              <label
                onClick={() =>
                  setOpenDropdown(openDropdown === "filter" ? null : "filter")
                }
                className="cursor-pointer text-right flex items-center md:justify-end w-fit"
              >
                <IoFilter className="mr-2" /> Filters
                {openDropdown === "filter" ? (
                  <BsChevronUp className="ml-2" />
                ) : (
                  <BsChevronDown className="ml-2" />
                )}
              </label>
            </div>
            <p className="text-right">
              {filterCategory && (
                <span className="font-semibold text-blue-600">
                  {filterCategory}
                </span>
              )}
            </p>
            {openDropdown === "filter" && (
              <div className="absolute top-8 right-0 w-full md:w-60 bg-white border border-gray-300 rounded-lg shadow-md p-1 z-10">
                <div
                  onClick={() => handleFilterChange("")}
                  className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md"
                >
                  All
                </div>
                {uniqueCategories.map((category) => (
                  <div
                    key={category}
                    onClick={() => handleFilterChange(category)}
                    className="cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md"
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-4 lg:gap-6">
        {filteredProducts.map((product) => {
          const percentageOff = calculatePercentageOff(
            product.mrp,
            product.price
          );
          return (
            <div
              key={product._id}
              className="relative max-h-96 w-full text-gray-900 rounded-2xl md:rounded-3xl flex flex-col lg:flex-row justify-between p-2"
            >
              {/* <div className="absolute -top-12 left-1/4  h-80 w-80 rounded-full bg-red-100 -z-10"></div> */}
              <div className="relative">
                <Link href={`/product/${product._id}`}>
                  <Image
                    src={product.productImages[0]}
                    alt={product.name}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </Link>
                <p className="absolute top-2 right-2 w-fit text-xs md:text-sm whitespace-nowrap bg-green-100 font-semibold text-green-600 border border-green-500 rounded-full px-1 py-">
                  {percentageOff.toFixed(0)}% off
                </p>
              </div>
              <div className="md:p-4 md:py-8 w-full h-full lg:w-1/2 md:h-full flex flex-col justify-between">
                <Link href={`/product/${product._id}`}>
                  <div>
                    <div className="flex flex-col md:flex-row justify-between md:items-center my-2">
                      <h1 className="md:text-lg font-semibold md:font-bold mb-1">
                        {product.name} | {product.category}{" "}
                      </h1>
                    </div>
                    {/* <p className="text-gray-600 text-sm mb-2">
                      {product.category}
                    </p> */}
                  </div>
                </Link>
                <p className="text-gray-600  truncate md:hidden text-xs">
                  {product.description}
                </p>
                <p className="text-gray-600 md:mt-2 hidden md:block text-sm">
                  {product.description}
                </p>
                <div className="flex flex-col justify-between items-start mt-2">
                  <div className="text-gray-600 flex justify-center items-center gap-2">
                    <StarRating rating={product.rating} />
                    <p>{product.rating}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-bold">
                      ₹{product.price.toFixed(2)}
                    </p>
                    <p className="text-sm ">
                      MRP ₹
                      <span className="line-through">
                        {product.mrp.toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 bg-black w-full hover:bg-white text-gray-100 hover:text-black border border-black py-2 px-4 rounded-full hover:shadow-xl transition-colors duration-300 text-sm md:text-base"
                >
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
