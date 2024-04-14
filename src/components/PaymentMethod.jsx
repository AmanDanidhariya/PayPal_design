import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import companies from "../assets/companies.jpeg";

const PaymentMethod = () => {
  return (
    <div className="main-div h-max px-4 sm:h-max sm:w-full sm:px-20 md:px-32">
      <div className="first-half h-[50%] flex flex-col sm:w-full sm:flex-row ">
        <div className="details flex flex-col gap-y-4 sm:w-[50%] sm:py-2 ">
          <p className="text-2xl font-medium">
            offer a range of payment method worldwide
          </p>
          <p className="text-md">
            Reach new customer and give them the payment options they prefer so
            you don&apos;t miss a sale
          </p>
          <p className="text-md">
            Accept credit and debit cards, digital wallets, PayPal, and 20+
            local payment methods. All in a single integration.
          </p>
          <div className="flex text-[#106db0] text-sm font-semibold">
            More about payment methods{" "}
            <button className="bg-[#8ecde6] hover:text-white rounded-full pr-2 ml-3">
              <FaArrowRightLong className="text-xl" />
            </button>
          </div>
        </div>
        <div className="img-div bg-cover sm:p-2 sm:w-[50%]">
          <img src={companies} alt="companies_logo" />
        </div>
      </div>
      {/* column div start */}
      <div className="second-half 4-column h-[50%] mt-10 flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-3 sm:mt-28 sm:items-start">
        <div className="w-[60%] flex flex-col gap-y-2">
          <h5 className="font-semibold text-justify">
            Enable multiple commerce scenarios
          </h5>
          <p>
            web. Mobile.App.In store. Get paid in the channels where you sell
            today and tomorrow
          </p>
        </div>
        <div className="w-[60%] flex flex-col gap-y-2">
          <h5 className="font-semibold text-justify ">
            Reach millions of consumers
          </h5>
          <p>
            Connect eith our expansive network of shoppers around the world who
            love to use PayPal, Venmo and pay Later.
          </p>
        </div>

        <div className="w-[60%] flex flex-col gap-y-2">
          <h5 className="font-bold text-justify">
            Vault customer payment info
          </h5>
          <p>
            Help drive conversion and make repeat purchases simple for your
            customers with secure data storage.
          </p>
        </div>
        <div className="w-[60%] flex flex-col gap-y-2">
          <h5 className="font-semibold text-justify">
            Optimize checkout experience
          </h5>
          <p>
            Control the look and feel of your checkout page ith drop-in UI,
            hosted fields, and customizable smart payment buttons.
          </p>
        </div>
      </div>
      {/* column div end */}
    </div>
  );
};

export default PaymentMethod;
