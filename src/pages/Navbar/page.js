"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaMapMarkerAlt,
  FaPlus,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Pakistan");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileSearch = () => setIsMobileSearchOpen(!isMobileSearchOpen);
  const [showAlert, setShowAlert] = useState(true);


  return (
    <>
      {showAlert && (
        <div className="fixed top-[-48px] left-1/2 transform -translate-x-1/2 bg-white w-96 shadow-lg p-4 z-50 border border-gray-300">
          <div className="flex items-center mb-3">
            <Image
              src="/images/olx.png"
              width={50}
              height={50}
              alt="logo"
              className="flex-shrink-0 h-20 w-[68px] mt-12 mr-2"
            />

            <p className="allow text-sm font-medium">
              Click 'Allow' to know about amazing discounts & offers!
            </p>
          </div>
          <p className=" text-xs ml-[76px] mt-[-40px] text-black mb-2">
            You can turn the notifications off anytime in the browser settings.
          </p>

          <div className="flex ml-[140px] mt-1">
            <button
              onClick={() => setShowAlert(false)}
              className="px-3 py-1 border rounded text-gray-600 h-8 hover:bg-gray-100"
            >
              Don't Allow
            </button>
            &nbsp;
            <button
              onClick={() => setShowAlert(false)}
              className="px-3 w-24 py-1 bg-[#23bd9f] h-8 text-white rounded "
            >
              Allow
            </button>
          </div>
        </div>
      )}
      {/* Top Bar */}
      <div className="  border-[#d8dfe0]">
        <div className="max-w-[1280px] mx-auto px-4 h-full flex items-center space-x-6 ml-28 mt-4 gap-3">
          <div className="hidden md:flex items-center space-x-6 gap-3">
            <Link href="/" className="flex-shrink-0 ">
              <svg
                height="35"
                width="68"
                viewBox="0 0 36.289 20.768"
                className="fill-current text-black h-26 "
                alt="Logo"
              >
                <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-sm hover:text-blue-600"
            >
              <Image
                src="/images/motors.png"
                alt="Motors"
                width={100}
                height={100}
              />
            </Link>

            <Link
              href="#"
              className="flex items-center space-x-2 text-sm hover:text-blue-600"
            >
              <Image
                src="/images/property.png"
                alt="Property"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="bg-white py-2 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Button */}
            <Link href="/" className="flex-shrink-0 lg:hidden md:hidden">
              <svg
                height="35"
                width="68"
                viewBox="0 0 36.289 20.768"
                className="fill-current text-black h-26"
                alt="Logo"
              >
                <path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path>
              </svg>
            </Link>
            <button
              className="md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <FaBars className="h-6 w-6" />
            </button>

            {/* Desktop Search Section */}
            <div className="hidden md:flex items-center flex-1 gap-4 ml-28">
              <div className="relative w-full md:w-[280px] lg:w-[300px]">
                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black" />
                <select
                  className="w-full h-12 pl-10 pr-8 py-2 border-2 rounded-md text-sm"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative w-full lg:w-[500px] md:w-[240px] sm:w-full">
                <input
                  type="text"
                  placeholder="Find Cars, Mobile Phones and more..."
                  className="w-full h-12 pl-4 pr-14 border-2 rounded-md text-sm border-gray-300 focus:border-blue-500 focus:outline-none"
                />

                <button className="absolute right-0 top-0 h-12 w-12 bg-[#002f34] flex items-center justify-center rounded-r-md">
                  <FaSearch className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>

            {/* Sell Buttons */}
            <div className="hidden md:flex items-center gap-3 mr-20">
              <Link href="Login">
                <button className="loginbtn text-sm px-4 py-2 font-semibold">
                  Login
                </button>
              </Link>
              <button className="sellbutton flex items-center gap-2 px-4 py-2 border-2 rounded-md text-sm font-semibold bg-[#f1f1f1]">
                <FaPlus />
                <span>SELL</span>
              </button>
            </div>
          </div>
          <hr className="mt-4" />

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-100 p-4 absolute top-0 left-0 w-full h-full z-50">
              <button
                className="p-2"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <FaTimes className="h-8 w-6 ml-72 text-gray-700" />
              </button>
              <div className="mt-4">
                <label className="block text-sm font-semibold mb-2">
                  Select Country:
                </label>
                <select
                  className="w-full p-3 border rounded-md"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-3 border rounded-md"
                />
                <button className="mt-2 w-full bg-[#002f34] text-white py-2 rounded-md">
                  <FaSearch className="inline mr-2" />
                  Search
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
