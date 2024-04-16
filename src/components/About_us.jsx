import React from "react";
import analysis from "../assets/analysis.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const About_us = () => {
  return (
    <div className=" flex flex-col gap-y-4 h-max w-full px-4 my-8 sm:px-32 ">
      <div className="flex flex-col gap-y-8 sm:flex-row sm:py-2 sm:w-full sm:border-b sm:border-gray-300 sm:pb-8">
        <div className="flex flex-col gap-y-4 sm:w-1/2 sm:p-10">
          <p className="font-bold ">
            Executive Guide: PayPal enterprise integration
          </p>
          <p>
            Whether you are making a switch or upgrading your tools, learn how
            we make the integration process as flexible and seamless as
            possible.
          </p>
          <div className="flex text-[#106db0] text-sm font-semibold">
            Get the guide
            <button className="bg-[#8ecde6] hover:text-black rounded-full pr-2 ml-3">
              <FaArrowRightLong className="text-xl" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 sm:w-1/2 sm:p-10 sm:border-l sm:border-gray-300">
          <p className="font-bold ">
            eBook:Signs you have outgrown your payment processor
          </p>
          <p>
            payment processor stunting your growth? it might be time to look for
            a new one.
          </p>
          <div className="flex text-[#106db0] text-sm font-semibold">
            read the eBook
            <button className="bg-[#8ecde6] hover:text-black rounded-full pr-2 ml-3">
              <FaArrowRightLong className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className=" border-t border-gray-300 mt-10 w-[100%] mx-auto sm:hidden"></div>
      <div className="flex flex-col gap-y-4 sm:gap-x-10 sm:flex-row sm:w-full sm:py-8">
        <img src={analysis} alt="analysis_image" className="w-[30%] h-full"/>
        <div className="flex flex-col gap-y-6">
          <p className="font-bold mt-4">
            Report: Forrester economic impact analysis
          </p>
          <p>
            Forrester concluded that our enterprise solutions deliver credit
            card and alternative payment processing services fast and at scale,
            while enabling high authorization rates.
          </p>
          <div className="flex text-[#106db0] text-sm font-semibold">
            Get the report
            <button className="bg-[#8ecde6] hover:text-black rounded-full pr-2 ml-3">
              <FaArrowRightLong className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_us;
