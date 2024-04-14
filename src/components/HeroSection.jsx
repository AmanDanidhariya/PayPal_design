import React from "react";
import img_1 from "../assets/img_1.avif";
import img_2 from "../assets/img_2.avif";
import img_3 from "../assets/img_3.avif";

const HeroSection = () => {
  return (
    <div className="main h-screen sm:px-32">
      <div className="info h-[50%] flex flex-col items-center pt-4 sm:gap-y-4  gap-y-3 sm:pt-10 sm:mb-2">
        <p className=" text-2xl sm:text-3xl md:text-5xl">Global payment</p>
        <p className="sm:text-5xl text-2xl">processing solutions</p>
        <div className="text-justify mx-2 md:text-xl md:mx-10 sm:mx-14  text-sm">
          Grow and optimize your business with a flexible,end-to-end payments
          platform powered by Braintree technology
        </div>
        <button className="bg-pantone text-white hover:text-pantone hover:bg-gray-200 text-md rounded-full py-3 px-6 font-medium">
          Connects with a payment expert
        </button>
      </div>
      <div className="img h-[50%] p-2 bg-slate-100 relative flex sm:overflow-hidden overflow-x-auto ">
        <img src={img_1} alt="employer" className="h-full bg-cover" />
        <img
          src={img_2}
          alt="code"
          className="absolute rounded-[15px] h-full bg-cover left-40 sm:left-1/3"
        />
        <img
          src={img_3}
          alt="mobile_device"
          className="absolute rounded-[15px] h-full bg-cover left-60 sm:left-2/4"
        />
      </div>
    </div>
  );
};

export default HeroSection;
