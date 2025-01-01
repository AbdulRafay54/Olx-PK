import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row items-center lg:justify-between">
        {/* Image Section */}
        <div className="flex-shrink-0 ml-0 lg:ml-16 mb-4 lg:mb-0">
          <Image
            src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
            alt="Footer Image"
            width={300}
            height={200}
            className="rounded-md w-[260px] h-[140px] sm:w-[320px] sm:h-[160px] lg:w-[430px] lg:h-[190px]"
          />
        </div>

        {/* Vertical Line */}
        <div className="hidden lg:block h-[12rem] border-l border-black mx-4"></div>

        {/* Text Section */}
        <div className="text-center lg:text-left flex-grow lg:pl-6">
          <h1 className="font-bold text-lg lg:text-[17px] text-[#002f34]">
            GET YOUR APP TODAY
          </h1>
          {/* App Download Section */}
          <div className="flex justify-center lg:justify-start space-x-2 mt-4">
            <img
              src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg"
              alt="App Store"
              className="h-8 w-auto"
            />
            <img
              src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg"
              alt="Google Play"
              className="h-8 w-auto"
            />
            <img
              src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg"
              alt="App Gallery"
              className="h-8 w-auto"
            />
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mt-[-23px]" />

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm">
        {/* Popular Categories */}
        <div>
          <h3 className="font-bold mb-3 text-[#002f34]">POPULAR CATEGORIES</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Cars
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Flats for rent
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Mobile Phones
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
          </ul>
        </div>

        {/* Trending Searches */}
        <div>
          <h3 className="font-bold mb-3 text-[#002f34]">TRENDING SEARCHES</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Bikes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Watches
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Books
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dogs
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold mb-3 text-[#002f34]">ABOUT US</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Dubizzle Group
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                OLX Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                OLX for Businesses
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-3 text-[#002f34]">FOLLOW US</h3>
          <div className="flex justify-center sm:justify-start gap-3 mb-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <img
                src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg"
                className="h-6 w-6"
                alt="Twitter"
              />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <img
                src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg"
                className="h-6 w-6"
                alt="Facebook"
              />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <img
                src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg"
                className="h-6 w-6"
                alt="YouTube"
              />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <img
                src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg"
                className="h-6 w-6"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#002f34] text-white text-center py-4 text-sm">
        <p className="font-bold text-[12px]">
          Free Classifieds in Pakistan © 2006-2025 OLX
        </p>
      </div>
    </footer>
  );
};

export default Footer;
