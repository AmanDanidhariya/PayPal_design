import React from "react";

const Card = ({ img, about, text, buttonText }) => {
  return (
    <>
      <div className=" card_1 w-full  flex flex-col gap-y-4 bg-white p-4">
        <img src={img} alt="sale_logo" />
        <div className="flex flex-col gap-y-4">
          <p className="text-2xl font-medium">{about}</p>
          <p className="">{text}</p>
        </div>
        <button className="bg-[#0070ba] text-white rounded-full py-2 px-3 ">
          {buttonText}
        </button>
      </div>
    </>
  );
};

export default Card;
