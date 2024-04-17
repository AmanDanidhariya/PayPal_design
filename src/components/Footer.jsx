import React from "react";
import paypal from "../assets/paypal.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    "help",
    "contact",
    "fees",
    "security",
    "apps",
    "shop",
    "enterprise",
    "partners",
    "feedback",
  ];
  const footerLinks = [
    "about",
    "newsroom",
    "jobs",
    "investor relations",
    "values in action",
    "public policy",
    "sitemap",
  ];
  return (
    <div className="p-4 sm:px-32 sm:py-8">
      <div className="first_div flex flex-col gap-y-4 text-justify text-sm text-gray-600 ">
        <p>
          <sup>1</sup>Kelton Research: 2018 Digital Trends Impacting Commerce
          Study (Among Total Sample who trust PayPal over any other payment
          method) n=459 Q19. “Why do you trust PayPal the most?”.
        </p>
        <p>
          <sup>2</sup>Ipsos MORI Conjoint Research: Conjoint Simulation Base:
          (1500) Respondents presented with a variety of transaction scenarios
          (different variables such as vertical, value, device, familiarity of
          brand, domesticity of merchant, available payment providers) and asked
          whether they would be willing to buy, 2018.
        </p>
        <p>
          <sup>3</sup>Ipsos MORI Conjoint Research (US respondents).
          Methodology: Online survey conducted across seven markets (UK,
          Germany, Italy, Spain, US, Australia, Brazil) with 1,500 respondents
          per market/10,500 total respondents (boost in Brazil to ensure 500
          PayPal users), including 6,930 PayPal users. Respondents were online
          shoppers who have made a purchase in the last month, 2018.
        </p>
      </div>
      <div className="second_div flex flex-col">
        <div className="">
          <img src={paypal} alt="paypal_logo" className="h-16 block w-auto" />
        </div>
        <div className="flex flex-col  gap-y-1 sm:flex-row sm:justify-between">
          <ul className="flex flex-col gap-y-1 sm:flex-row sm:gap-x-4">
            {links.map((link, index) => (
              <span
                className="hover:text-gray-400 text-indigo-950 text-sm font-semibold capitalize"
                key={index}
              >
                <Link>{link}</Link>
              </span>
            ))}
          </ul>
          <div>🇮🇳</div>
        </div>
        <div className=" border-t border-gray-300 mt-2 w-[100%] mx-auto sm:mt-3"></div>
        {/* border */}
        <div className="flex flex-col gap-y-6 mt-4 sm:flex-row sm:justify-between ">
          <ul className="flex flex-col gap-y-1 sm:gap-x-4 sm:flex-row">
            {footerLinks.map((link, index) => (
              <span
                className="hover:text-gray-400 text-indigo-950 text-sm font-semibold capitalize"
                key={index}
              >
                <Link>{link}</Link>
              </span>
            ))}
          </ul>
          <div className="flex gap-x-4 items-center  ">
            <span className="text-sm text-gray-800 font-thin">@1999-2024</span>
            <ul className="flex gap-x-4 text-sm hover:text-gray-400 text-indigo-950 font-semibold">
              <li>privacy</li>
              <li>cookies</li>
              <li>leagal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
