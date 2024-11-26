"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  BrandsCarousel,
  BrandsCarouselContent,
  BrandsCarouselItem,
} from "../../components/ui/bannerCarousel";
import { GlobalStateContext } from "../../context/navbarContext";
import { useProducts } from "../../context/productContext";
const banners = [
  {
    id: 1,
    imageUrl: "/images/hero/nutra_bottle_banner_web.webp",
  },
  {
    id: 2,
    imageUrl: "/images/hero/daa_banner_web.webp",
  },

  {
    id: 3,
    imageUrl: "/images/hero/sleep_banner_web1.webp",
  },
  {
    id: 4,
    imageUrl: "/images/hero/boostwave_banner_web.webp",
  },
  {
    id: 5,
    imageUrl: "/images/hero/DAA_banner_web_2.webp",
  },
  {
    id: 6,
    imageUrl: "/images/hero/long_lasting_spray_web_banner.webp",
  },
  {
    id: 7,
    imageUrl: "/images/hero/nutra_bottle_banner_web.webp",
  },
];

const mobilebBanners = [
  {
    id: 1,
    imageUrl: "/images/hero/Nutra_product_phone1.webp",
  },
  {
    id: 2,
    imageUrl: "/images/hero/long_lasting_phone_banner.webp",
  },

  {
    id: 3,
    imageUrl: "/images/hero/all_productbanner_phone2.webp",
  },
];

const Banner = () => {
  const [isInView, setIsInView] = useState(true);
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const { top, bottom } = bannerRef.current.getBoundingClientRect();
        const inView = top < window.innerHeight && bottom >= 0;
        setIsInView(inView);
      }
    };

    // Set up the scroll listener
    window.addEventListener("scroll", handleScroll);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={bannerRef} className="relative w-full">
      <BrandsCarousel
        autoplay={isInView}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <BrandsCarouselContent className="">
          {banners.map((card) => (
            <BrandsCarouselItem key={card.id} className="basis-full">
              <div className="relative w-full">
                <Image
                  src={card.imageUrl}
                  alt="banner"
                  width={2000}
                  height={0}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </BrandsCarouselItem>
          ))}
        </BrandsCarouselContent>
      </BrandsCarousel>
    </div>
  );
};

const PhoneBanner = () => {
  const [isInView, setIsInView] = useState(true);
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const { top, bottom } = bannerRef.current.getBoundingClientRect();
        const inView = top < window.innerHeight && bottom >= 0;
        setIsInView(inView);
      }
    };

    // Set up the scroll listener
    window.addEventListener("scroll", handleScroll);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={bannerRef} className="relative w-full">
      <BrandsCarousel
        autoplay={isInView}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <BrandsCarouselContent className="">
          {mobilebBanners.map((card) => (
            <BrandsCarouselItem key={card.id} className="basis-full">
              <div className="relative w-full">
                <Image
                  src={card.imageUrl}
                  alt="banner"
                  width={2000}
                  height={0}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </BrandsCarouselItem>
          ))}
        </BrandsCarouselContent>
      </BrandsCarousel>
    </div>
  );
};

const Hero = () => {
  const { isMenuOpen } = useContext(GlobalStateContext);

  const { products } = useProducts();
  const product = products[0];
  // console.log(product)

  return (
    <div className="relative z-0 w-full   rounded-br-[2rem] -mt-16 overflow-hidden customCurve">
      {/* Desktop Image */}
      <div className="w-full hidden md:block overflow-hidden">
        <Banner />
      </div>

      <div className="w-full md:hidden overflow-hidden">
        <PhoneBanner />
      </div>

      {/* Mobile Image */}
      {/* <div className="block md:hidden absolute inset-0 rounded-b-3xl">
        <Image
          src="/images/hero/boostewave_banner_phone.png"
          alt="Mobile Background Image"
          width={1000}
          height={1000}
          priority
          className="absolute w-full h-full object-contain rounded-b-3xl"
        />
      </div> */}
      {/* <div className="absolute bottom-4 left-4">
        {" "}
        <Link
          href="/self-assessment"
          className="bg-white  bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white/30 z-50 w-fit text-white py-1 px-6 rounded-full text-lg  hover:bg-black hover:text-gray-100"
        >
          Access Yourself
        </Link>
      </div> */}

      {/* explore products */}

      <div className="absolute bottom-0 left-0 md:ml-auto flex items-center w-full h-16 mx-auto border-none shadow-none">
        <div className="z-50 flex flex-1 w-full md:w-[calc(100vw-4rem)] shadow-none justify-end items-center h-16 bg-[#f7faf0] rounded-bl-none rounded-[2rem] p-2">
          <div className="flex flex-col w-[18rem] md:w-[20rem] gap-1">
            {/* Circles with Background Images */}
            <div className="z-50 flex flex-row justify-between gap-3 items-center w-full">
              <div className="flex -space-x-4">
                <div
                  className="w-12 h-12 bg-cover bg-center border bg-white border-gray-400 rounded-full"
                  style={{
                    backgroundImage:
                      'url("/images/productimages/daa_mockup.png")',
                  }}
                ></div>
                <div
                  className="w-12 h-12 bg-cover bg-center border bg-white border-gray-400 rounded-full"
                  style={{
                    backgroundImage:
                      'url("/images/productimages/immunity_mockup.png")',
                  }}
                ></div>
                <div
                  className="w-12 h-12 bg-cover bg-center bg-white border border-gray-400 rounded-full flex items-center justify-center"
                  style={{
                    backgroundImage:
                      'url("/images/productimages/sleep_mockup.png")',
                  }}
                ></div>
                {/* <span>+2</span> */}
              </div>

              {/* Text */}
              <div className="text-left ">
                <Link
                  href="/products"
                  className="flex items-center space-x-2 font-semibold md:text-lg"
                >
                  <span>Explore products</span>
                </Link>

                <p className="z-50 text-xs">
                  We got the solution for your problem
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* button side */}
        <div className="z-50 flex w-16 h-16 justify-center items-center">
          <div className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white/30 h-12 w-12 rounded-full flex justify-center items-center shadow-lg">
            <Link href="/products" className="text-xl md:text-3xl text-white">
              →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
