import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10 ">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center md:justify-between space-y-6 md:space-y-0">
        {/* Image Section */}
        <div className="flex-shrink-0 ml-8 md:ml-[160px]">
          <Image
            src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
            alt="Footer Image"
            width={300}
            height={200}
            className="rounded-md w-full sm:w-[320px] sm:h-[160px] md:w-[360px] lg:w-[430px] lg:h-[190px]"
          />
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block h-[10rem] border-l border-black mx-4"></div>

        {/* Text Section */}
        <div className="text-center md:text-left flex-grow md:pl-6">
          <h1 className="font-bold text-lg md:text-[16px] lg:text-[17px] text-[#002f34]">
            GET YOUR APP TODAY
          </h1>
          {/* App Download Section */}
          <div className="flex justify-center md:justify-start space-x-2 mt-4">
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

      <hr className="border-gray-300" />

      {/* Bottom Section */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-sm">
        {/* Popular Categories */}
        <div>
          <h3 className="font-bold mb-3 text-[#002f34]">POPULAR CATEGORIES</h3>
          <ul className="space-y-2">
            {["Cars", "Flats for rent", "Mobile Phones", "Jobs"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:underline text-[12.04px]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Trending Searches */}
        <div>
          <h3 className="font-bold mb-3 text-[#002f34]">TRENDING SEARCHES</h3>
          <ul className="space-y-2">
            {["Bikes", "Watches", "Books", "Dogs"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:underline text-[12.04px]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold mb-3 text-[#002f34]">ABOUT US</h3>
          <ul className="space-y-2">
            {["OLX Blog", "Contact Us", "OLX for Businesses", "Careers"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:underline text-[12.04px]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold mb-3 text-[#002f34]">CONTACT US</h3>
          <ul className="space-y-2">
            {["OLX Blog", "Contact Us", "OLX for Businesses", "Careers"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:underline text-[12.04px]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div className="text-center sm:text-left">
          <h3 className="font-bold mb-3 text-[#002f34]">FOLLOW US</h3>
          <div className="flex justify-center sm:justify-start gap-3 mb-4">
            {[
              ["Twitter", "iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg"],
              ["Facebook", "iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg"],
              ["YouTube", "iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg"],
              ["Instagram", "iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg"],
            ].map(([name, src], index) => (
              <a key={index} href="#" className="text-gray-500 hover:text-gray-900">
                <img
                  src={`https://www.olx.com.pk/assets/${src}`}
                  className="h-6 w-6"
                  alt={name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#002f34] text-white py-4 px-4 sm:px-28">
        <p className="font-bold text-[12.04px] text-center sm:text-right">
          <span>Free Classifieds in Pakistan</span>&nbsp;&nbsp;&nbsp;
          <span className="font-light">. © 2006-2025 OLX</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
