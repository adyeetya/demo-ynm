"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// Helper function to interpolate between two strings
const interpolateStrings = (fromStr, toStr, progress) => {
  let interpolated = "";
  for (let i = 0; i < fromStr.length; i++) {
    const fromChar = fromStr[i];
    const toChar = toStr[i];

    const charCode = Math.round(
      fromChar.charCodeAt(0) +
        (toChar.charCodeAt(0) - fromChar.charCodeAt(0)) * progress
    );

    interpolated += String.fromCharCode(charCode);
  }
  return interpolated;
};

const DialNumberAnimation = ({ from, to, duration }) => {
  const [display, setDisplay] = useState(from);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      progress: 1, // Animate a dummy "progress" value from 0 to 1
      transition: { duration: duration, ease: "easeInOut" },
    });
  }, [controls, duration]);

  return (
    <div className="w-full min-h-screen">
      <motion.div
        animate={controls}
        initial={{ progress: 0 }}
        onUpdate={(latest) => {
          const progress = latest.progress;
          if (
            typeof from === "string" &&
            typeof to === "string" &&
            from.length === to.length
          ) {
            // If strings, interpolate between them
            setDisplay(interpolateStrings(from, to, progress));
          } else if (typeof from === "number" && typeof to === "number") {
            // If numbers, round and display the number
            setDisplay(Math.round(from + (to - from) * progress));
          }
        }}
      >
        <h1>{display}</h1>
      </motion.div>
    </div>
  );
};

export default DialNumberAnimation;
