import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsMinimized(true);
      } else {
        setIsMinimized(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar bg-[#2c3e50] py-7 border-gray-200 uppercase text-white font-bold fixed top-0 start-0 end-0 z-10 ${
          isMinimized ? "minimized" : ""
        }`}
      >
        <div className="container lg:w-[90%] px-4 flex flex-wrap items-center justify-between mx-auto">
          <Link
            to="/Home"
            className="flex text-[calc(1.325rem+.9vw)] items-center space-x-3 rtl:space-x-reverse"
          >
            Start Framework
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/about"
                  className="block text-white py-2 px-3 text-gray-900 rounded"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Protfolio"
                  className="block text-white py-2 px-3 text-gray-900 rounded"
                >
                  Protfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className="block text-white py-2 px-3 text-gray-900 rounded"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
