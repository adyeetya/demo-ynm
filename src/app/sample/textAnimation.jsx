'use client'
import React from 'react'
import { motion } from 'framer-motion'

// Stiffness: This controls the "force" or "tension" in the spring.
// The higher the stiffness, the faster and stronger the animation tries to complete.
// A lower stiffness makes the movement slower and less intense.

// Damping: This controls how much the spring’s motion is reduced over time,
// essentially controlling the bounciness. Higher damping means the motion will stop more quickly,
// reducing the bounce. Lower damping will make it more elastic and bouncy.

export const TextAnimation1 = () => {
  // Paragraph text
  const paragraph =
    'This is an animated paragraph with words flying in from different directions'

  // Split the paragraph into words
  const words = paragraph.split(' ')

  // Define motion variants
  const wordVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 4 === 0 ? -100 : i % 4 === 1 ? 100 : 0, // alternating x directions
      y: i % 4 === 2 ? -50 : i % 4 === 3 ? 50 : 0, // alternating y directions
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="text-2xl font-semibold text-center space-x-1"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }} // Delay between each word
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export const TextAnimation2 = () => {
  const paragraph =
    'This is an animated paragraph with words flying in from outside the screen'
  const words = paragraph.split(' ')

  const wordVariants = {
    hidden: {
      opacity: 0,
      x: '-100vw', // Start from outside the left side of the screen
    },
    visible: {
      opacity: 1,
      x: 0, // Slide to original position
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12,
      },
    },
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <motion.div
        className="text-3xl font-bold text-center space-x-2"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export const TextAnimation3 = () => {
  const paragraph =
    'This is a bouncing text animation where words fall from above'
  const words = paragraph.split(' ')

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: '-100vh', // Start above the screen
    },
    visible: {
      opacity: 1,
      y: 0, // Drop to position
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10,
      },
    },
  }

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <motion.div
        className="text-4xl font-bold text-center space-x-2"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export const TextAnimation4 = () => {
  const paragraph =
    'Wave animation where each letter fades in with a wave effect'
  const letters = paragraph.split('') // Split paragraph into letters

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Each letter starts below its position
    },
    visible: {
      opacity: 1,
      y: 0, // Moves to its correct position
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 10,
      },
    },
  }

  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <motion.div
        className="text-3xl font-bold text-center"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.05 }} // Faster stagger for wave effect
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter} {/* Preserve spaces */}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export const TextAnimation5 = () => {
  const paragraph =
    'This is a much longer paragraph designed to showcase how text can flow in different chunks from various directions. Each chunk contains multiple words and the animation is intended to create a flowing, dynamic feel as if the text is sliding in from outside the screen. This effect is perfect for storytelling or to create an impactful entrance of content.'

  // Split paragraph into chunks of 5-6 words
  const chunkedParagraph = paragraph
    .split(' ')
    .reduce((acc, word, i) => {
      if (i % 6 === 0) acc.push([word])
      else acc[acc.length - 1].push(word)
      return acc
    }, [])
    .map((chunk) => chunk.join(' '))

  // Define motion variants for different directions
  const chunkVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? '-100vw' : '100vw', // Alternate chunks from left and right
      y: i % 3 === 0 ? '-100vh' : i % 3 === 1 ? '100vh' : 0, // Randomly alternate up/down
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 10,
        damping: 10,
      },
    },
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200 p-8">
      <motion.div
        className="text-md font-medium text-left max-w-4xl"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }} // Delay between each chunk
      >
        {chunkedParagraph.map((chunk, index) => (
          <motion.p
            key={index}
            custom={index}
            variants={chunkVariants}
            className="inline-block ml-1"
          >
            {chunk}
          </motion.p>
        ))}
      </motion.div>
    </div>
  )
}
