import  { useEffect } from "react";
import "../locomotive-scroll.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiCircleCheck } from "react-icons/ci";

const FeatureModule = () => {
  const featureList = [
    "Accept payments in 200 markets",
    "make payouts in 200 markets",
    "Acquiring in 47 markets",
    "wide range of payments methods",
    "Recurring billing capabilities",
    "network tokenization",
    "batch and real-time account updater",
    "advanced predictive risk solutions",
    "PCI-complaint vault",
    "chargeback protection",
    "dispute automation",
    "IC++ pricing available",
    "global support center",
    "24/7monitoring & optimization",
  ];

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("#feature_list"),
  //     smooth: true,
  //   });
  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);
  return (
    <div className="h-max bg-darkBlue text-white  px-4 py-8 w-full sm:flex sm:h-[150vh]">
      <div className="first_half flex flex-col justify-center gap-y-4 sm:p-8">
        <p className="text-2xl pt-2 font-medium sm:text-5xl">
          Our modular solution can grow you
        </p>
        <p className="text-sm sm:text-lg">
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
      <ul id="feature_list" className="feature_list h-96 my-4 py-8 w-full text-black bg-white shadow-xl rounded flex flex-col items-center overflow-y-auto sm:h-max">
        {featureList.map((feature, index) => {
          return (
            <li
              key={index}
              className="py-4 px-6 flex items-center justify-between border-y border-slate-300 w-[90%]"
            >
              <div className="font-medium ">{feature}</div>
              <div className="text-xl rounded-full">
                <CiCircleCheck className=" text-[#134e4a]" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeatureModule;
