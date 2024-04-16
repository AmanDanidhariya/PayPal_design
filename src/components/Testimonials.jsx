import { BiSolidQuoteLeft } from "react-icons/bi";

import bag from "../assets/bag_2.avif";

const Testimonials = () => {
  return (
    <div className="h-max w-full bg-darkBlue text-white flex flex-col gap-y-8 px-4  sm:h-[70vh] sm:flex-row sm:px-32 sm:gap-x-14">
      <div className="flex flex-col justify-center gap-y-4 text-justify ">
        <p className="text-2xl sm:text-5xl">
          <BiSolidQuoteLeft />
        </p>
        <p className="sm:w-[70%]">
          The user experience in terms of usability,trust, and flexibility
          everything, especially for the digitally native consumer. The
          experience PayPal helps us provide is beating all consumer
          expectations.
        </p>
        <p className="text-sm flex flex-col">
          <span>David oksman</span>
          <span>Chief Marketing officer</span>
        </p>
        <p className="text-sm">Samsonite</p>
      </div>
      <div className="w-full sm:h-full sm:relative">
        <img
          src={bag}
          alt="bag_with _clothes"
          className="object-cover sm:absolute sm:h-full sm:transform sm:-translate-y-10 sm:left-8"
        />
      </div>
    </div>
  );
};

export default Testimonials;
