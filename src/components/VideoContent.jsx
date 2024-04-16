import React from "react";
import { FiPlayCircle } from "react-icons/fi";
import oatsMeal from "../assets/oats.avif";
import { FaArrowRightLong } from "react-icons/fa6";

const VideoContent = () => {
  return (
    <div className="w-full h-max flex flex-col gap-y-6 my-20 px-4 sm:h-[70vh] sm:w-[100vw] sm:flex-row gap-8 sm:px-32">
      <div className="self-center relative sm:w-[60%]">
        <img
          src={oatsMeal}
          alt="oats_bowl"
          className="rounded-xl brightness-75 sm:h-[60vh] sm:w-[80vw]"
        ></img>
        <FiPlayCircle className="text-6xl text-white hover:text-slate-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
      </div>
      <div className="flex flex-col gap-y-6 sm:w-[40%] mt-7">
        <p className="text-2xl font-medium sm:text-4xl">
          Your partner for innovation
        </p>
        <p className="font-medium">
          See how Pressed partnered with PayPal to help their development team
          build innovative solutions with limited resources--all powered by
          Braintree technology
        </p>
        <div className="flex text-[#106db0] text-sm font-semibold">
          Play the video
          <button className="bg-[#8ecde6] hover:text-black rounded-full pr-2 ml-3">
            <FaArrowRightLong className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
