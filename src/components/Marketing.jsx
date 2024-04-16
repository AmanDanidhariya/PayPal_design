import React from "react";
import sales from "../assets/sales.jpg";
import developer from "../assets/developer.jpg";
import Card from "./Card";

const Marketing = () => {
  const cardData = [
    {
      id: 1,
      img: sales,
      about: "Contact our sales team",
      text: "Learn how payments can be leveraged as a catalyst for growth.",
      buttonText: "Contact Sales",
    },
    {
      id: 2,
      img: developer,
      about: "Explore developer document",
      text: "See how our flexible and interoperable technology helps to simplify integration",
      buttonText: "Visit Developer Docs",
    },
  ];
  return (
    <div className="bg-[#f5f5f5] px-4 w-full h-max py-4 sm:flex sm:px-32 sm:gap-x-6 sm:py-8">
      {cardData.map((card) => (
        <Card
          key={card.id}
          img={card.img}
          about={card.about}
          text={card.text}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};

export default Marketing;
