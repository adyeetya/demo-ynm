import React from "react";
import ScrollAnimation from "./scrollAnimation";
import {
  TextAnimation1,
  TextAnimation2,
  TextAnimation3,
  TextAnimation4,
  TextAnimation5,
} from "./textAnimation";
import Carousel from "./blogSlider";
import DialNumberAnimation from "./dialAnimation";
const page = () => {
  return (
    <div>
      <DialNumberAnimation from="xxxxxx" to="aditya" duration={2} />
    </div>
  );
};

export default page;
