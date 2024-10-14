"use client";
import React from "react";
import Typed from "typed.js";
const Typography = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Pleasurable", "Stress-Free", "Empowering", "Discreet", "Safe"],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div>
      {" "}
      <span ref={el} className="ml-2 md:ml-4 font-normal" />
    </div>
  );
};

export default Typography;
