'use client'
import React, { useState, useRef, useEffect } from 'react'

const reviewsData = [
  {
    id: 1,
    title: 'Great Product!',
    description: 'This product really helped me a lot. Highly recommend!',
    videoUrl: '/videos/videoplayback.mp4',
  },
  {
    id: 2,
    title: 'Amazing Experience!',
    description: 'I had an amazing experience with this product. Five stars!',
    videoUrl: '/videos/videoplayback.mp4',
  },
  {
    id: 3,
    title: 'Amazing Experience!',
    description: 'I had an amazing experience with this product. Five stars!',
    videoUrl: '/videos/videoplayback.mp4',
  },
  {
    id: 4,
    title: 'Amazing Experience!',
    description: 'I had an amazing experience with this product. Five stars!',
    videoUrl: '/videos/videoplayback.mp4',
  },
  {
    id: 5,
    title: 'Amazing Experience!',
    description: 'I had an amazing experience with this product. Five stars!',
    videoUrl: '/videos/videoplayback.mp4',
  },
  // Add more review objects as needed
]

const Reviews = () => {
  const [playingVideoId, setPlayingVideoId] = useState(null)
  const videoRefs = useRef({})

  const handlePlayPause = (id) => {
    setPlayingVideoId((prev) => (prev === id ? null : id))
  }

  useEffect(() => {
    Object.keys(videoRefs.current).forEach((videoId) => {
      const videoElement = videoRefs.current[videoId]
      if (videoElement) {
        if (parseInt(videoId) === playingVideoId) {
          videoElement.play()
        } else {
          videoElement.pause()
        }
      }
    })
  }, [playingVideoId])

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <p className="text-sm text-gray-600">
          See what our customers have to say about our products.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-md rounded-lg flex flex-col"
          >
            <div className="relative h-0" style={{ paddingBottom: '56.25%' }}>
              <video
                ref={(element) => (videoRefs.current[review.id] = element)}
                src={review.videoUrl}
                controls={false}
                width="100%"
                height="100%"
                className="absolute top-0 left-0"
                loop
              />
              <button
                onClick={() => handlePlayPause(review.id)}
                className="absolute inset-0 flex items-center justify-center bg-transparent"
              >
                <div className="bg-white rounded-full p-2">
                  {playingVideoId === review.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 9v6m4-6v6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-5.197-3.132A1 1 0 008 8.868v6.264a1 1 0 001.555.832l5.197-3.132a1 1 0 000-1.664z"
                      />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
