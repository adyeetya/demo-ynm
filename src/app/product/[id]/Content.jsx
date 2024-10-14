"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../../context/cartContext";
import { useUser } from "../../../context/userContext";
import { IoMdStar } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";

import { useRouter } from "next/navigation";

import { FaTimes } from "react-icons/fa";

import {
  Arkyn,
  DetailsHowToUseArkyn,
} from "@/components/productPageStatic/Arkyn";

import {
  LongLasting,
  DetailsHowToUseLongLasting,
} from "@/components/productPageStatic/LongLasting";

const RatingsReviews = ({
  user,
  product,
  showReviewForm,
  setShowReviewForm,
  setProduct,
  fetchUser,
}) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [token, setToken] = useState(
    typeof window !== "undefined" ? Cookies.get("ynmtoken") : null
  );
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [showOptions, setShowOptions] = useState(null); // State to show/hide options

  if (!product) {
    return <div>Product not found</div>;
  }

  const toggleOptions = (reviewId) => {
    setShowOptions(showOptions === reviewId ? null : reviewId);
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      const response = await axios.delete(
        `${serverUrl}/api/reviews/delete/${reviewId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          data: { userId: user._id },
        }
      );

      if (response.status === 200) {
        toast.success("Review deleted successfully! It will reflect soon.");
        const data = response.data;
        if (data.success) {
          setProduct(data.updatedProduct); // Update the product state with the new data
        }
        fetchUser();
        // Update the product state by removing the deleted review
        // updateProduct(response.data.updatedProduct);
      } else {
        toast.error("Failed to delete review");
      }
    } catch (error) {
      toast.error("An error occurred while deleting your review");
      console.error("Delete review error:", error);
    }
  };

  const handleEditReview = (review) => {
    setEditingReviewId(review._id);
    setRating(review.rating);
    setReviewText(review.reviewText);
    setShowEditForm(true);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    try {
      const url = editingReviewId
        ? `${serverUrl}/api/reviews/edit/${editingReviewId}`
        : `${serverUrl}/api/reviews/add`;

      const method = editingReviewId ? "put" : "post";

      const response = await axios[method](
        url,
        {
          userId: user._id,
          productId: product._id,
          rating,
          reviewText,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success(
          editingReviewId
            ? "Review updated successfully! It will reflect soon."
            : "Thank you for your review! It will reflect soon."
        );
        setShowReviewForm(false);
        setEditingReviewId(null);
        // console.log('Review submitted:', response.data)
        const data = response.data;

        if (data.success) {
          setProduct(data.updatedProduct); // Update the product state with the new data
        }
        fetchUser();
        // Update the product state with the new review and updated rating
        // updateProduct(response.data.updatedProduct);
      } else {
        toast.error(response.data);
      }
    } catch (error) {
      toast.error("An error occurred while submitting your review");
      console.error("Submit review error:", error);
    }
  };

  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold mb-6">Ratings & Reviews</h2>

      <div className="flex items-center mb-6">
        <div className="text-6xl font-bold mr-4">{product.rating}</div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.round(product.rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.691h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.456a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.381-2.457a1 1 0 00-1.175 0l-3.381 2.457c-.784.57-1.84-.197-1.54-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.245 9.403c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.691l1.286-3.975z" />
                </svg>
              ))}
            </div>
            <div className="ml-2 text-xl">{product.rating} out of 5</div>
          </div>
          <div className="text-sm text-gray-600">
            {product.reviews.length} reviews
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Rating Breakdown</h3>
        {Object.keys(product.ratingPercentage)
          .reverse()
          .map((key, index) => {
            const starNumber = key.replace("star", "");
            const displayText = `${starNumber} Star${
              starNumber > 1 ? "s" : ""
            }`;

            return (
              <div key={index} className="flex items-center mb-2">
                <span className="w-20">{displayText}</span>
                <div className="flex items-center w-full">
                  <div className="w-full bg-gray-200 rounded-full h-4 mx-2 relative">
                    <div
                      className="absolute bg-blue-500 h-4 rounded-full"
                      style={{ width: `${product.ratingPercentage[key]}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 w-[17%] md:w-[5%]">
                    {product.ratingPercentage[key]}%
                  </span>
                </div>
              </div>
            );
          })}
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Customer Reviews</h3>
        {product.reviews.length > 0 ? (
          product.reviews.map((review, index) => (
            <div key={index} className="mb-4 p-4 border rounded relative">
              <div className="flex items-center mb-2 justify-between">
                <div className="flex items-center">
                  <div className="font-semibold text-sm">
                    {review.userId.name}
                  </div>
                  <div className="ml-2 mb-1 text-yellow-500">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 inline-block"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.691h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.456a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.381-2.457a1 1 0 00-1.175 0l-3.381 2.457c-.784.57-1.84-.197-1.54-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.245 9.403c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.691l1.286-3.975z" />
                      </svg>
                    ))}
                    {Array.from({ length: 5 - review.rating }, (_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 inline-block text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.691h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.456a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.381-2.457a1 1 0 00-1.175 0l-3.381 2.457c-.784.57-1.84-.197-1.54-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.245 9.403c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.691l1.286-3.975z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-gray-500 text-xs ml-4">
                    {new Date(review.createdAt).toLocaleDateString("en-GB")}{" "}
                    {/* UK format: dd/mm/yyyy */}
                  </div>
                </div>
                {review.userId._id === user?._id && (
                  <div
                    className="relative"
                    onClick={() => toggleOptions(review._id)}
                  >
                    <BiDotsHorizontalRounded />
                    {showOptions === review._id && (
                      <div className="text-sm absolute right-0 mt-2 w-24 bg-white border border-gray-300 rounded shadow-lg">
                        <button
                          className="block w-full text-left px-4 py-1 text-gray-700 hover:bg-gray-200"
                          onClick={() => handleEditReview(review)}
                        >
                          Edit
                        </button>
                        <button
                          className="block w-full text-left px-4 py-1 text-red-600 hover:bg-gray-200"
                          onClick={() => handleDeleteReview(review._id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {editingReviewId === review._id ? (
                <form onSubmit={handleSubmitReview}>
                  <h4 className="font-bold mb-2">Edit your review</h4>
                  <div className="mb-4">
                    <label className="block mb-1 font-semibold">Rating</label>
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg
                          key={i}
                          className={`w-8 h-8 cursor-pointer ${
                            i < rating ? "text-yellow-500" : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          onClick={() => setRating(i + 1)}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.691h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.456a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.381-2.457a1 1 0 00-1.175 0l-3.381 2.457c-.784.57-1.84-.197-1.54-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.245 9.403c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.691l1.286-3.975z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 font-semibold">Review</label>
                    <textarea
                      className="w-full px-3 py-2 border rounded"
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="ml-4 text-gray-600"
                    onClick={() => {
                      setEditingReviewId(null);
                      setShowReviewForm(false);
                    }}
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <div className="text-gray-800 text-sm">
                    {review.reviewText}
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <div className="text-gray-600">No reviews yet. Be the first!</div>
        )}
      </div>

      {/* div for write review */}

      <div className="mt-8" id="review-section">
        {showReviewForm && (
          <form onSubmit={handleSubmitReview}>
            <h4 className="font-bold mb-2">Write your review</h4>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Rating</label>
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-8 h-8 cursor-pointer ${
                      i < rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    onClick={() => setRating(i + 1)}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.691h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.456a1 1 0 00-.364 1.118l1.287 3.975c.3.921-.755 1.688-1.54 1.118l-3.381-2.457a1 1 0 00-1.175 0l-3.381 2.457c-.784.57-1.84-.197-1.54-1.118l1.287-3.975a1 1 0 00-.364-1.118L2.245 9.403c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.691l1.286-3.975z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Review</label>
              <textarea
                className="w-full px-3 py-2 border rounded"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
            <button
              type="button"
              className="ml-4 text-gray-600"
              onClick={() => {
                setEditingReviewId(null);
                setShowReviewForm(false);
              }}
            >
              Cancel
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const ProductPage = ({ product }) => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  // console.log('serverUrl', serverUrl)
  const { addToCart } = useCart();

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [theme, setTheme] = useState("default");
  const [DetailsHowToUse, setDetailsHowToUse] = useState(null);
  const [ProductContent, setProductContent] = useState(null);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [showReviewPrompt, setShowReviewPrompt] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const { user, fetchUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (product?.name === "Arkyn") {
      setTheme("maxt");
      setDetailsHowToUse(() => DetailsHowToUseArkyn);
      setProductContent(() => Arkyn);
    } else if (product?.name === "Long Lasting Spray") {
      setTheme("lls");
      setDetailsHowToUse(() => DetailsHowToUseLongLasting);
      setProductContent(() => LongLasting);
    }
  }, [product]);

  const getConcernClasses = () => {
    if (theme === "lls") {
      return "border-[#0B2251] hover:bg-[#0B2251] hover:text-gray-100";
    } else if (theme === "maxt") {
      return "border-black hover:bg-black hover:text-gray-200";
    } else if (theme === "bstw") {
      return "border-[#16251d] hover:bg-[#16251d] hover:text-gray-100";
    }
    return "";
  };
  const getButtonClasses = () => {
    if (theme === "lls") {
      return "border-[#0B2251] hover:bg-[#0B2251] hover:text-gray-100";
    } else if (theme === "maxt") {
      return "border-black hover:bg-black hover:text-gray-200";
    } else if (theme === "bstw") {
      return "border-[#16251d] hover:bg-[#16251d] hover:text-gray-100";
    }
    return "";
  };

  useEffect(() => {
    setProduct(product);
  }, [product]);

  useEffect(() => {
    if (user && user.orderHistory && product) {
      // Check if the product is in the user's order history
      const purchased = user.orderHistory.some(
        (order) => order.productId.toString() === product._id.toString()
      );
      setHasPurchased(purchased);

      // Check if the user has already reviewed the product
      const hasReviewed = user.reviewHistory.some((review) =>
        product.reviews.some(
          (productReview) =>
            productReview._id.toString() === review.reviewId.toString()
        )
      );
      // console.log('hasReviewed: ', hasReviewed)
      // If the user has already reviewed the product, hide the review prompt
      if (hasReviewed) {
        setShowReviewPrompt(false);
      } else {
        setShowReviewPrompt(true);
      }
    }
  }, [user, product]);

  // useEffect(() => {
  //   console.log('products on the product page', product)
  // }, [product])

  const handleThumbnailClick = (index) => {
    setMainImageIndex(index);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleQuantityChange = (months) => {
    setQuantity(months);
  };

  // const similarProducts = products.filter((p) => p.id !== parseInt(id))

  const calculatePercentageOff = (mrp, price) => {
    return ((mrp - price) / mrp) * 100;
  };

  const percentageOff = product
    ? calculatePercentageOff(product.mrp, product.price)
    : 0;

  const handleWriteReviewClick = () => {
    setShowReviewPrompt(false);
    setShowReviewForm(true);
  };
  useEffect(() => {
    if (showReviewForm) {
      const reviewSection = document.getElementById("review-section");
      if (reviewSection) {
        reviewSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showReviewForm]);

  const handleBuyNow = () => {
    addToCart(product);
    router.push("/cart");
  };

  // const similarProductPercentageOff = (mrp, price) => {
  //   return ((mrp - price) / mrp) * 100
  // }
  //   if (isLoading)
  //     return (
  //       <div className="flex justify-center items-center w-full text-xl min-h-screen">
  //         <AiOutlineLoading3Quarters className="animate-spin w-8 h-8" />
  //       </div>
  //     );

  if (!product) {
    return (
      <p className="text-red-500 flex justify-center items-center w-full text-xl min-h-screen">
        Product not found
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
    <div className={` md:py-8 mx-auto min-h-screen ${poppins.className}`}>
      <div className="hidden md:flex max-w-screen-xl mx-auto p-4">
        <nav className="mb-4 md:mb-8">
          <ul className="flex space-x-2 text-sm md:text-base">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <Link href="/products" className="text-blue-600 hover:underline">
                Products
              </Link>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <span className="text-gray-600">{product.name}</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-4 flex flex-col md:flex-row md:space-x-8 max-w-screen-xl mx-auto">
        {/* this is the left side with the carousel and the image */}
        <div className="h-fit flex flex-col-reverse md:flex-row items-center gap-4 w-full md:w-1/2 relative md:sticky md:top-20 ">
          <div className="hidden md:flex justify-center items-center h-fit">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              orientation="vertical"
              className="bg flex justify-center items-center"
            >
              <CarouselContent className="  h-64">
                {product.productImages.slice(0, 6).map((image, index) => (
                  <CarouselItem key={index} className="basis-1/3  h-16">
                    <div
                      onClick={() => handleThumbnailClick(index)}
                      className={`cursor-pointer w-16 h-16 rounded-lg overflow-hidden ${
                        index === mainImageIndex
                          ? "border-2 border-blue-500"
                          : ""
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Product thumbnail ${index + 1}`}
                        width={1000}
                        height={1000}
                        className="rounded-lg w-16 h-16 object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-none" />
              <CarouselNext className="border-none" />
            </Carousel>
          </div>
          <div className="md:hidden flex justify-center items-center  h-">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="bg flex justify-center items-center"
            >
              <CarouselContent className=" w-60">
                {product.productImages.slice(0, 6).map((image, index) => (
                  <CarouselItem key={index} className="basis-1/3 h-16 w-16">
                    <div
                      onClick={() => handleThumbnailClick(index)}
                      className={`cursor-pointer w-16 h-16 rounded-lg overflow-hidden ${
                        index === mainImageIndex
                          ? "border-2 border-blue-500"
                          : ""
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Product thumbnail ${index + 1}`}
                        width={1000}
                        height={1000}
                        className="rounded-lg w-16 h-16 object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-none" />
              <CarouselNext className="border-none" />
            </Carousel>
          </div>

          <div className="relative w-full shadow-lg overflow-hidden flex ">
            <Zoom>
              <Image
                src={product.productImages[mainImageIndex]} // Displaying the selected main image
                alt={`Product image ${mainImageIndex + 1}`}
                width={1000}
                height={1000}
                className="rounded-lg object-contain"
              />
            </Zoom>
          </div>
        </div>

        {/* this is the right side with the text and details */}
        <div className="mt-4 md:-mt-0 flex flex-col justify- gap-4  w-full md:w-1/2">
          <div>
            <div className="flex justify-between">
              <h1 className="text-md md:text-3xl font-bold  md:mt-0">
                {product.name}
              </h1>
              <div className="flex flex-col justify-between items-end mt-1">
                <div className="flex items-center gap-1">
                  <p className="text-sm md:text-base font-bold">
                    ₹{(product.price * quantity).toFixed(2)}
                  </p>
                  <p className="text-xs md:text-sm line-through">
                    ₹{(product.mrp * quantity).toFixed(2)}
                  </p>

                  <p className="text-[10px] md:text-xs text-green-900 border bg-green-400 rounded px-1">
                    {percentageOff.toFixed(0)}% OFF
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-gray-900 text-sm md:text-base md:mt-0 md:text-md">
                {product.category}
              </p>
              <p className="text-[10px] md:text-xs text-gray-700 text-right">
                MRP Inclusive of all taxes
              </p>
            </div>
            <div className="text-gray-600 flex justify-start items-center mt-2">
              <p className="text-sm md:text-base mr-1">1.2k</p>
              {Array.from(
                { length: Math.floor(product.rating) },
                (_, index) => (
                  <IoMdStar
                    key={index}
                    className="w-4 h-4 md:w-6 md:h-6 text-yellow-400 mb-[2px]"
                  />
                )
              )}

              <Link
                href="#ratings-reviews"
                className="text-sm md:text-base ml-2 underline"
              >
                Ratings
              </Link>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-2 mt-2">
              <p className="font-semibold">Concern</p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="#"
                  className={`flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border px-4 py-2 text-sm ${getConcernClasses()}`}
                >
                  PREMATURE EJACULATION
                </Link>
                <Link
                  href="#"
                  className={`flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border px-4 py-2 text-sm ${getConcernClasses()}`}
                >
                  LOW TESTOSTERONE
                </Link>
                <Link
                  href="/experts"
                  className={`flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border px-4 py-2 text-sm ${getConcernClasses()}`}
                >
                  TALK TO DOCTOR
                </Link>
                <Link
                  href="/self-assessment"
                  className={`flex-grow sm:flex-grow-0 min-w-[100px] md:min-w-[150px] rounded-xl border px-4 py-2 text-sm ${getConcernClasses()}`}
                >
                  ASSESS YOURSELF
                </Link>
              </div>
            </div>

            {/* quantity */}
            {/* <div className="flex flex-col gap-2 mt-2">
              <p className="font-semibold">Quantity</p>
              <div className="flex flex-wrap gap-2">
                <button
                  className={`rounded-xl border px-4 py-2 text-sm ${
                    quantity === 1
                      ? theme === "lls"
                        ? "bg-[#0B2251] text-gray-100"
                        : "bg-black text-gray-200"
                      : ""
                  } ${getButtonClasses()}`}
                  onClick={() => handleQuantityChange(1)}
                >
                  1 Month
                </button>
                <button
                  className={`rounded-xl border px-4 py-2 text-sm ${
                    quantity === 2
                      ? theme === "lls"
                        ? "bg-[#0B2251] text-gray-100"
                        : "bg-black text-gray-200"
                      : ""
                  } ${getButtonClasses()}`}
                  onClick={() => handleQuantityChange(2)}
                >
                  2 Months
                </button>
                <button
                  className={`rounded-xl border px-4 py-2 text-sm ${
                    quantity === 3
                      ? theme === "lls"
                        ? "bg-[#0B2251] text-gray-100"
                        : "bg-black text-gray-200"
                      : ""
                  } ${getButtonClasses()}`}
                  onClick={() => handleQuantityChange(3)}
                >
                  3 Months
                </button>
                <button
                  className={`rounded-xl border px-4 py-2 text-sm ${
                    quantity === 6
                      ? theme === "lls"
                        ? "bg-[#0B2251] text-gray-100"
                        : "bg-black text-gray-200"
                      : ""
                  } ${getButtonClasses()}`}
                  onClick={() => handleQuantityChange(6)}
                >
                  6 Months
                </button>
              </div>
            </div> */}
          </div>

          <div className=" md:mx-0 w-full flex gap-4 ">
            <button
              onClick={handleAddToCart}
              className="rounded w-fit text-xl mt-1 md:mt-4 bg-[var(--lastlonger-light)] font-semibold hover:font-medium hover:scale-105 hover:shadow-lg px-4 py-2 hover:bg-[#0B2251] hover:text-white transition-colors"
            >
              <IoCartOutline />
            </button>
            <button
              onClick={handleBuyNow}
              className="rounded w-full text-xl mt-1 md:mt-4 bg-[var(--lastlonger-light)] font-bold px-4 py-2  hover:bg-[#0B2251] hover:text-white transition-colors"
            >
              Buy Now
            </button>
          </div>

          {/* details */}
          <div>{DetailsHowToUse && <DetailsHowToUse />}</div>
        </div>
      </div>

      {ProductContent && <ProductContent />}

      {/* reviewsrating */}
      <div id="ratings-reviews" className="max-w-screen-xl mx-auto p-4">
        <RatingsReviews
          setShowReviewPrompt={setShowReviewPrompt}
          product={product}
          setProduct={setProduct}
          user={user}
          fetchUser={fetchUser}
          showReviewForm={showReviewForm}
          setShowReviewForm={setShowReviewForm}
        />
      </div>

      <div>
        {hasPurchased && showReviewPrompt && (
          <div className="fixed bottom-4 z-50 right-4 p-4 bg-gray-100 border border-gray-300 rounded-2xl shadow-md">
            <div className="flex justify-between items-center">
              <p className="text-sm">Enjoyed this product? Leave a review!</p>
              <button
                className="ml-2 text-gray-600 hover:text-gray-800"
                onClick={() => setShowReviewPrompt(false)}
              >
                <FaTimes />
              </button>
            </div>
            <button
              className="mt-2 text-sm px-4 py-2 bg-blue-600 text-white w-full rounded-xl"
              onClick={handleWriteReviewClick}
            >
              Write a Review
            </button>
          </div>
        )}
      </div>

      {/* similar products */}
      {/* <div className="mt-12 max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {similarProducts.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="bg-[#0B2251] text-gray-100 rounded-2xl md:rounded-3xl block border overflow-hidden shadow-lg hover:shadow-xl transition-shadow p-2"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full  object-cover rounded-xl"
              />
              <div className="p-4">
                <div>
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-bold mb-1">{product.name}</h1>
                    <div className="text-gray-300 flex justify-center items-center gap-2">
                      <p>{product.rating}</p>
                      <IoMdStar className="w-4 h-4 md:w-5 md:h-5 text-[#debb02]" />
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{product.category}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="w-fit mt- text-sm font-semibold text-green-500 border border-green-500 rounded px-2 py-1">
                    {similarProductPercentageOff(
                      product.mrp,
                      product.price
                    ).toFixed(0)}
                    % off
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="mt- text-sm line-through">
                      ₹{product.mrp.toFixed(2)}
                    </p>
                    <p className="mt- text-lg font-bold">
                      ₹{product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ProductPage;
