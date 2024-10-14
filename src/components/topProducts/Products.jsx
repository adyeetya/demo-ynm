"use client";
import React from "react";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";
import { products } from "../../data/Products";
import { useCart } from "../../context/cartContext";
import { useProducts } from "../../context/productContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./Product.css";

const Products = () => {
  const { addToCart } = useCart();
  const { products, isLoading, isError } = useProducts();
  const router = useRouter();
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const handleBuyNow = (product) => {
    addToCart(product);
    router.push("/cart");
  };
  return (
    <div className="bg-[#3a472e] py-4 relative">
      <div className="absolute inset-0 bg-[url('/images/noiseEffect-bg.webp')] opacity-40 bg-cover bg-center z-0"></div>
      <div className="p-4 mb-24 md:py-6 max-w-screen-xl mx-auto z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-100">Best Sellers</h2>
          <Link href="/products" className="text-gray-100">
            Explore All Products
          </Link>
        </div>

        <div className="grid gap-16 sm:gap-20 md:gap-24">
          {products.map((product, index) => (
            <div
              key={product._id}
              className={`w-full p-2 md:p-2 flex text-gray-100 justify-center items-center gap-4 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } `}
            >
              <Link
                href={`/product/${product._id}`}
                className="relative w-1/2 md:w-1/3 flex justify-center items-center"
              >
                <div className="">
                  <Image
                    src={
                      product.productImages[product.productImages.length - 1]
                    }
                    alt={product.name}
                    width={1000}
                    height={1000}
                    className="product-image rounded-xl md:rounded-2xl object-cover w-full h-full max-w-sm max-h-[400px]"
                  />
                  <span id="shadow"></span>
                </div>
              </Link>
              <div
                className={`w-[50%] flex ${
                  index % 2 === 0
                    ? "justify-center"
                    : "justify-center text-right"
                } `}
              >
                <div
                  className={`flex max-w-[400px] flex-col gap-2 md:gap-4 
                     `}
                >
                  <div>
                    <Link href={`/product/${product._id}`}>
                      <h3 className="text-sm font-semibold md:text-2xl tracking-widest">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-[10px] md:text-sm text-gray-200">
                      {product.category}
                    </p>
                  </div>
                  <p className="text-[12px] md:text-sm text-gray-300">
                    {product.description}
                  </p>
                  <div
                    className={`flex flex-col w-full  justify-between gap-2 ${
                      index % 2 === 0 ? "items-start" : "items-end text-right"
                    }`}
                  >
                    <div className="text-[12px] md:text-sm flex items-center justify-center gap-1 md:gap-2">
                      {product.rating}{" "}
                      <IoMdStar className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 mb-[2px]" />
                    </div>
                    <div className={`flex  gap-2 `}>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="text-sm md:text-base text-white glass-effect-button hover:hover-button active:scale-95"
                      >
                        <FiShoppingBag />
                      </button>
                      <button
                        onClick={() => handleBuyNow(product)}
                        className="text-sm md:text-base text-white glass-effect-button hover:hover-button active:scale-95"
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
    </div>
  );
};

export default Products;
