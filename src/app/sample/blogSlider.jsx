"use client";

import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Gym Benefits 1",
      description: "Stay fit and healthy with regular exercise.",
    },
    {
      id: 2,
      title: "Gym Benefits 2",
      description: "Boost your energy levels with daily workouts.",
    },
    {
      id: 3,
      title: "Gym Benefits 3",
      description: "Improve mental health through physical activity.",
    },
    {
      id: 4,
      title: "Gym Benefits 4",
      description: "Improve mental health through physical activity.",
    },
    {
      id: 5,
      title: "Gym Benefits 5",
      description: "Improve mental health through physical activity.",
    },
  ];

  const totalSlides = slides.length;
  const slideWidth = 33.33; // Each slide takes 33.33% of the width
  const offset = 50; // Offset for partial visibility of neighboring slides

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Slide changes every 5 seconds

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 0.5 : 0)); // Progress bar fills up over 5 seconds
    }, 25); // Update progress every 25ms for smoother bar movement

    return () => {
      clearInterval(slideInterval);
      clearInterval(progressInterval);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0); // Reset progress when slide changes
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0); // Reset progress when slide changes
  };

  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <h2 className="text-xl font-semibold mb-4">Helpful Blogs</h2>

      <div className="relative overflow-hidden">
        {/* Progress Bar */}
        <div
          className="h-1 rounded-full bg-blue-500"
          style={{ width: `${progress}%` }}
        ></div>
        <div className="flex my-4">
          <div className="w-full md:w-1/2"></div>
          <div className="w-full md:w-1/2 relative">
            <div className="flex w-full justify-center items-center overflow-hidden">
              <div
                className="flex w-full transition-transform  duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`, // Adjust the slide translation
                  // Set width based on total slides
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`flex-shrink-0 w-full flex justify-center items-center bg--300  transition-transform duration-700 ease-in-out`}
                    style={{
                      transform: `scale(${index === currentSlide ? 1 : 0.8})`,
                      opacity: index === currentSlide ? 1 : 0.5,
                      // Offset for partial visibility
                    }}
                  >
                    <div className="h-80 w-60 p-4 rounded-3xl bg-gray-400">
                      <h3 className="text-2xl font-bold">{slide.title}</h3>
                      <p className="text-gray-700 mt-2">{slide.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center w-full gap-4 my-4">
              {/* Manual navigation */}
              <div className="">
                <div className="flex w-28 md:w-32 justify-between items-center">
                  <button
                    className=" w-10 h-10 flex justify-center items-center text-xl rounded-full border border-gray-200 hover:bg-gray-200"
                    onClick={prevSlide}
                  >
                    {"<"}
                  </button>
                  <button
                    className=" w-10 h-10 flex justify-center items-center text-xl rounded-full border border-gray-200 hover:bg-gray-200"
                    onClick={nextSlide}
                  >
                    {">"}
                  </button>
                </div>
              </div>
              {/* Indicator */}
              <div className="flex items-center justify-center space-x-2 w-full">
                <div className="h-1 rounded-full bg-gray-300 w-full max-w-sm">
                  <div
                    className="h-1 rounded-full bg-yellow-400 transition-all duration-1000 ease-in-out"
                    style={{
                      width: `${((currentSlide + 1) * 100) / totalSlides}%`,
                    }}
                  ></div>
                </div>

                <div className="text-blue-500 text-lg inline">
                  0{currentSlide + 1}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
