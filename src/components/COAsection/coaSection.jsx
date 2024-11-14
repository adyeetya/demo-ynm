import React from "react";
import Link from "next/link";
function CoaSection() {
  return (
    <div className=" p-4 md:px-12 mt-36 mb-12 lg:px-24 max-w-screen-2xl mx-auto  h-64 flex justify-center items-center">
      {/* Base rectangle */}
      <div className="relative w-full h-full">
        <div className="w-full h-60 bg-[#f1c232] rounded-md absolute"></div>

        {/* Overlapping rectangle */}
        <div className="w-full h-60 bg-[#3a472e] opacity-90 shadow-xl rounded-md absolute -top-8 left-8 p-4 flex flex-col  justify-between">
          <h2 className="text-3xl text-white font-semibold ">
            Certificate of Analysis (COA)
          </h2>
          <p className="text-justify text-lg text-white">
            We Provide Certificate of Analysis for every batch with every order.
            So you can be sure that your product is safe and actually contains
            what it claims to contain.
          </p>
          <Link
            href="/products"
            className="text-xl bg-[#fff] px-6 py-2 rounded-full border border-[#fff] text-[#3a472e] w-fit"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CoaSection;
