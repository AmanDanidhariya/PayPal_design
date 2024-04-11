import { useState } from "react";
import payPalLogo from "../assets/paypal.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-blue-800 relative">
      <div
        className={`max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 ${
          isOpen && "hidden"
        }`}
      >
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center z-10">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="block h-12 w-auto"
                src={payPalLogo}
                alt="Paypal"
              />
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className=" text-darkBlue px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 "
                >
                  Personal
                </Link>
                <Link
                  to="/"
                  className="text-darkBlue px-3 py-2 rounded-md text-sm font-medium  hover:bg-gray-100"
                >
                  Business
                </Link>
                <Link
                  to="/"
                  className="text-darkBlue hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Developer
                </Link>
                <Link
                  to="/"
                  className="text-darkBlue hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Help
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <div className="ml-4 flex items-center">
              <Link
                to="/login"
                className="text-center border border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white duration-100 px-6 py-1.5 rounded-full text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-center bg-darkBlue text-white hover:bg-white hover:text-darkBlue hover:border hover:border-darkBlue duration-100 px-6 py-2 rounded-full text-sm font-medium ml-2"
              >
                Signup
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="sm:hidden z-50 inset-0 bg-black bg-opacity-50 absolute"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`sm:hidden ${
          isOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        } fixed z-50 inset-y-0 left-0 w-64 bg-white shadow-lg transition-transform duration-500 transform`}
      >
        <div className="flex items-center justify-between px-2 pt-2 pb-3">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img className="block h-12 w-auto" src={payPalLogo} alt="Paypal" />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-center text-darkBlue hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            Personal
          </Link>
          <Link
            to="/"
            className="text-center text-darkBlue hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            Business
          </Link>
          <Link
            to="/"
            className="text-center text-darkBlue hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            Developer
          </Link>
          <Link
            to="/"
            className="text-center text-darkBlue hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
          >
            Help
          </Link>
          <div className="mt-6">
            <Link
              to="/login"
              className="text-center border border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-white duration-100 px-4 py-2 rounded-md text-sm font-medium block"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-center bg-darkBlue text-white hover:bg-white hover:text-darkBlue hover:border hover:border-darkBlue duration-100 px-4 py-2 rounded-md text-sm font-medium mt-2 w-full block"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
