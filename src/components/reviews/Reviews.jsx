"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
const reviewsData = [
  {
    id: 1,
    title: "Great Product!",
    description: "This product really helped me a lot. Highly recommend!",
    videoUrl: "/videos/review-vid1.mp4",
    productName: "Testosterone Booster",
    reviewerName: "John Doe",
  },
  {
    id: 2,
    title: "Amazing Experience!",
    description: "I had an amazing experience with this product. Five stars!",
    videoUrl: "/videos/videoplayback.mp4",
    productName: "Immunity Booster",
    reviewerName: "Jane Smith",
  },
  {
    id: 3,
    title: "Great Product!",
    description: "This product really helped me a lot. Highly recommend!",
    videoUrl: "/videos/review-vid1.mp4",
    productName: "Sleep Enhancer",
    reviewerName: "John Doe",
  },
  {
    id: 4,
    title: "Amazing Experience!",
    description: "I had an amazing experience with this product. Five stars!",
    videoUrl: "/videos/videoplayback.mp4",
    productName: "Long Lasting Spray",
    reviewerName: "Jane Smith",
  },
  {
    id: 5,
    title: "Great Product!",
    description: "This product really helped me a lot. Highly recommend!",
    videoUrl: "/videos/review-vid1.mp4",
    productName: "Testosterone Booster",
    reviewerName: "John Doe",
  },
  {
    id: 6,
    title: "Amazing Experience!",
    description: "I had an amazing experience with this product. Five stars!",
    videoUrl: "/videos/videoplayback.mp4",
    productName: "Long Lasting Spray",
    reviewerName: "Jane Smith",
  },

  // Add more review objects as needed
];

const Reviews = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const videoRefs = useRef({});

  const handlePlayPause = (id) => {
    setPlayingVideoId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    Object.keys(videoRefs.current).forEach((videoId) => {
      const videoElement = videoRefs.current[videoId];
      if (videoElement) {
        if (parseInt(videoId) === playingVideoId) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      }
    });
  }, [playingVideoId]);

  return (
    <div className="max-w-[100vw] overflow-x-hidden my-12 mb- pt-12">
      <div className="p-4 md:py-6 max-w-screen-xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center w-fit mx-auto py-2 relative z-10">
          {/* Background-colored container with z-index */}
          <div className="absolute inset-0 bg-[#f7faf0] p-8 rounded-md z-10"></div>

          {/* Yellow arc positioned behind */}
          <div className="absolute top-3 -right-10 md:-right-16 -translate-y-1/3 w-[200px] h-[200px] border-[3px] border-[#fbd354] rounded-full z-0"></div>

          <h2 className="text-3xl font-bold w-fit relative rounded-md z-20">
            Feel-Good{" "}
            <span className="text-[#3a472e] font-bold tracking-wide text-4xl relative inline-flex items-center z-20">
              Feedback
            </span>
          </h2>

          <p className="text-sm mt-4 text-gray-600 z-20">
            See what our customers have to say about our{" "}
            <span className="text-[#3a472e]">products</span>.
          </p>
        </div>
      </div>

      <div className="bg-[] py-12 w-full h-full">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full p-4 px-12 md:py-6 max-w-screen-xl mx-auto"
        >
          <CarouselContent className="-ml-1">
            {reviewsData.map((review) => (
              <CarouselItem
                key={review.id}
                className="rounded-lg md:basis-1/2 lg:basis-1/3 xl:basis-1/4 px-4"
              >
                <div className="relative pb-[160%]">
                  <video
                    ref={(element) => (videoRefs.current[review.id] = element)}
                    src={review.videoUrl}
                    controls={false}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                    loop
                    playsInline
                  />
                  {/* Play/Pause Button */}
                  <button
                    onClick={() => handlePlayPause(review.id)}
                    className="absolute inset-0 flex items-center justify-center bg-transparent"
                  >
                    <div className="border-2  rounded-full p-2">
                      {playingVideoId === review.id ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          className="w-12 h-12"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M10 9v6m4-6v6"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="white"
                          className="w-12 h-12"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M14.752 11.168l-5.197-3.132A1 1 0 008 8.868v6.264a1 1 0 001.555.832l5.197-3.132a1 1 0 000-1.664z"
                          />
                        </svg>
                      )}
                    </div>
                  </button>

                  {/* Product and Reviewer Info */}
                  <div className="absolute top-4 left-4 glass-effect-button rounded-full p-2 px-4 text-sm text-white bg-opacity-75 backdrop-blur-md">
                    {review.productName}
                  </div>
                  {/* <div className="absolute top-4 right-4 glass-effect-button rounded-full p-2 px-4 text-sm text-white bg-opacity-75 backdrop-blur-md">
                    {review.reviewerName}
                  </div> */}

                  {/* Title Button at Bottom */}
                  <div className="absolute bottom-4 left-0 w-[calc(100%-2rem)] mx-4 glass-effect-button text-center rounded-full px-4 py-2 text-sm text-white bg-opacity-75 backdrop-blur-md">
                    {review.title}
                  </div>
                </div>

                {/* Description */}
                <p className="text-center mt-2 text-gray-700">
                  {review.description}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
