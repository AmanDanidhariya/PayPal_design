import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import mouse from "../assets/mouse_1.avif";

const RiskManagement = () => {
  return (
    <div className=" bg-gray-200 h-max w-full mt-10 px-4 py-10">
      <div className="flex flex-col gap-y-4 sm:flex-row justify-between sm:px-28">
        <div className="sm:w-[60%]">
          <img src={mouse} alt="person_with_tea_cup" className="rounded-lg " />
        </div>
        <div className="sm:w-[40%] sm:self-center sm:flex sm:flex-col sm:gap-y-3">
          <p className="text-2xl font-semibold sm:text-4xl">
            Manage risk and compliance
          </p>
          <p className="text-justify">
            We can help you identity and manage potential security fraud, and
            compliance risk--so you can focus on what matters most growing your
            business.
          </p>
          <div className="flex text-[#106db0] text-sm font-semibold">
            Learn more about managing risk
            <button className="bg-[#8ecde6] hover:text-white rounded-full pr-2 ml-3">
              <FaArrowRightLong className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className=" 4-column h-[50%] mt-10 flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-3 sm:px-28 sm:mt-28 sm:items-start">
        <div className="w-[60%] flex flex-col gap-y-2">
          <h5 className="font-semibold text-justify ">
            Right size your fraud solution
          </h5>
          <p>
            Choose the level of fraud protection you need--from our built-in
            fraud checks to advanced tools.
          </p>
          <div className="flex items-center text-[#106db0] font-semibold">
            About Fraud Protection{" "}
            <button className="ml-2 hover:text-black">
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="w-[60%] flex flex-col gap-y-2">
          <h5 className="font-semibold text-justify ">
            Adopt network tokenization
          </h5>
          <p>
            Boost security and approvals with a partner who has already
            tokenized hundreds of millions of credit cards.
          </p>
        </div>

        <div className="w-[60%] flex flex-col gap-y-2">
          <h5 className="font-bold text-justify">Retry failed transactions</h5>
          <p>
            we strive to optimize approvals right from the start. But if they
            fail, we can retry the transaction on alternative acquiring
            networks.
          </p>
        </div>
        <div className="w-[60%] flex flex-col gap-y-2">
          <h5 className="font-semibold text-justify">Optimize routing</h5>
          <p>
            Route transactions to global acquirers and networks that will yield
            the fastest, most reliable and least expansive transaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskManagement;
