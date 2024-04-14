import React from "react";

const Business = () => {
  return (
    <div className="h-screen flex flex-col py-20 sm:px-32 sm:flex-row sm:items-center">
      {/* first section */}
      <div className="first h-[40%] flex flex-col items-center  sm:w-[50%]">
        <p className="text-pantone text-7xl font-semibold sm:text-6xl md:text-8xl">
          401%
        </p>
        <p className="text-xl text-justify p-4">
          ROI for the composite merchant<sup>1</sup>, estimated by Forrester
          with PayPal enterprise payment solutions<sup>2</sup>
        </p>
      </div>
      {/* first section end */}

      <div className=" border-t border-gray-300 mt-10 w-[90%] mx-auto sm:hidden"></div>
      {/* second section start */}
      <div className="second flex py-16 sm:w-[50%] sm:flex-col sm:py-0 sm:gap-y-4 sm:border-l sm:border-gray-300">
        <div className="w-[50%] px-4 sm:w-full">
          <p className="text-3xl text-pantone font-medium sm:text-5xl">86%</p>
          <p className="text-justify sm:text-xl sm:mt-4">
            of our enterprise users indicate that we had a positive impact on
            authorization rates since adoption<sup>3</sup>
          </p>
        </div>
        <div className="border border-gray-300 sm:hidden"></div>
        <div className="w-[50%] px-4 sm:w-full">
          <p className="text-3xl text-pantone font-medium sm:text-5xl">4 bps</p>
          <p className="text-justify sm:text-xl sm:mt-4">
            In the US, Braintree can help reduce chargeback rate by 4 bps
            <sup>4</sup>
          </p>
        </div>
      </div>
      {/* seconf section end */}
    </div>
  );
};

export default Business;
