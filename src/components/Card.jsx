import React from "react";

const Card = ({ img, about, text, buttonText }) => {
  return (
    <>
      <div className=" card_1 w-full flex flex-col gap-y-4 bg-white p-4 my-4 sm:w-[50%] sm:p-8">
        <img src={img} alt="sale_logo" />
        <div className="flex flex-col gap-y-4 sm:gap-y-2">
          <p className="text-2xl font-medium">{about}</p>
          <p className="">{text}</p>
        </div>
        <button className="bg-[#0070ba] text-white hover:text-[#0070ba] hover:bg-gray-200 rounded-full py-2 px-3 sm:py-3 sm:px-3 sm:self-start ">
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Card;
