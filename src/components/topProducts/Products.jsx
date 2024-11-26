"use client";
import React from "react";
import Image from "next/image";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

import { useCart } from "../../context/cartContext";
import { useProducts } from "../../context/productContext";

import { FiShoppingBag } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./Product.css";

const floatImages = [
  {
    name: "Testosterone Booster",
    img: "/images/productimages/daa_mockup.png",
  },
  {
    name: "Long Lasting Spray",
    img: "/images/productimages/lls_mockup.png",
  },
  {
    name: "Sleep Booster",
    img: "/images/productimages/sleep_mockup.png",
  },
  {
    name: "Immunity Booster",
    img: "/images/productimages/immunity_mockup.png",
  },
];

const Products = () => {
  const { addToCart } = useCart();
  const { products, isLoading, isError } = useProducts();
  console.log(isError);
  const router = useRouter();
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const handleBuyNow = (product) => {
    addToCart(product);
    router.push("/cart");
  };
  if (!products) {
    return <div>No Products Found</div>;
  }

  return (
    <div className="bg- py-4 relative">
      <div className="absolute inset-0 opacity-40 bg-cover bg-center z-0"></div>
      <div className="p-4 mb-24 md:py-6 max-w-screen-xl mx-auto z-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-[#3a472e]">Best Sellers</h2>
        </div>

        {/* Grid layout that switches to two columns on large screens */}
        <div className="grid gap-24 md:gap-16 lg:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={product._id}
              className={`w-full p-2 md:p-2 flex justify-center items-center gap-4 md:gap-4 my-12 ${
                index % 2 === 0
                  ? "flex-row md:flex-row"
                  : "flex-row-reverse md:flex-row"
              } `}
            >
              <Link
                href={`/product/${product._id}`}
                className="relative w-1/2  flex justify-center items-center"
              >
                <div className="">
                  <Image
                    src={
                      floatImages.find((img) => img.name === product.name)
                        ?.img ||
                      product.productImages[product.productImages.length - 1]
                    }
                    alt={product.name}
                    width={1000}
                    height={1000}
                    className="product-image rounded-xl md:rounded-2xl object-contain h-[250px] md:h-[350px] w-auto z-50"
                  />
                  <span id="shadow"></span>
                </div>
              </Link>

              <div className="w-[50%] flex justify-center">
                <div className="flex max-w-[400px] flex-col gap-2 md:gap-4 z-10">
                  <div>
                    <Link href={`/product/${product._id}`}>
                      <h3 className="text-xl font-semibold md:text-2xl tracking-widest">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-[10px] md:text-sm text-gray-700">
                      {product.category}
                    </p>
                  </div>
                  <p className="text-[12px] md:text-sm text-gray-900">
                    {product.description}
                  </p>
                  <div className="flex flex-col w-full justify-between gap-2 items-start">
                    <div className="text-[12px] md:text-sm flex items-center gap-1 mb-2">
                      {[...Array(Math.floor(product.rating))].map((_, i) => (
                        <IoMdStar key={i} className="w-4 h-4 text-yellow-500" />
                      ))}
                      {product.rating % 1 !== 0 && (
                        <IoMdStarHalf className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="text-sm md:text-base border border-black px-4 md:px-6 py-1 md:py-2 rounded-full active:scale-95"
                      >
                        <FiShoppingBag />
                      </button>
                      <button
                        onClick={() => handleBuyNow(product)}
                        className="text-sm md:text-base border border-black px-4 md:px-6 py-1 md:py-2 rounded-full active:scale-95"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/products"
          className="z-10 text-xl border border-black px-6 py-2 rounded-full text-[#fff] bg-[#3a472e] text-center"
        >
          For More Pleasure {">"}
        </Link>
      </div>
    </div>
  );
};

export default Products;
