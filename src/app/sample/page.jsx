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
import RealTimeBarChart from "./charts";
import DragAndDrop from "./DragDrop";
const page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* <DialNumberAnimation from="xxxxxx" to="aditya" duration={2} /> */}
      {/* <RealTimeBarChart /> */}
      {/* <DragAndDrop /> */}
    </div>
  );
};

export default page;
