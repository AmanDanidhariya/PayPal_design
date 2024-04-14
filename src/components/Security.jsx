import React from "react";
import person from "../assets/person.avif";

const Security = () => {
  return (
    <div className=" bg-gray-200 h-max w-full mt-10 px-4 py-4">
      <div className="flex flex-col gap-y-4 sm:flex-row justify-between sm:px-28">
        <div className="sm:w-[60%]">
          <img src={person} alt="person_with_tea_cup" className="rounded-lg " />
        </div>
        <div className="sm:w-[40%] sm:self-center sm:flex sm:flex-col sm:gap-y-3">
          <p className="text-2xl font-semibold sm:text-4xl">
            Boost approval rates
          </p>
          <p>
            Optimize your backend payments setup with granular, clean messaging
            and the right payment rails, so you can help boost approval chances
            and capture more of your hard- earned revenue.
          </p>
        </div>
      </div>

      <div className=" 4-column h-[50%] mt-10 flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-3 sm:px-28 sm:mt-28 sm:items-start">
        <div className="w-[60%] flex flex-col gap-y-2">
          <h5 className="font-semibold text-justify ">Keep data fresh</h5>
          <p>
            Use Account Update to security make batch and real-time updates for
            Visa,Mastercard, and Discover.
          </p>
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

export default Security;
