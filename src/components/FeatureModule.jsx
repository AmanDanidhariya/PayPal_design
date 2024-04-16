import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const FeatureModule = () => {
  return (
    <div className="h-max bg-darkBlue text-white px-4">
      <div className="first_half flex flex-col gap-y-4">
        <p className="text-2xl">Our modular solution can grow you</p>
        <p className="text-sm">
          Turn on the features you want, connect with the partners in your
          payments ecosystem, and keep the rest in your back pocket for whatever
          comes next.
        </p>
        <div className="flex text-[#106db0] text-sm font-semibold">
          Connect with a payments expert
          <button className="bg-[#8ecde6] hover:text-black rounded-full pr-2 ml-3">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="feature_list"></div>
    </div>
  );
};

export default FeatureModule;
