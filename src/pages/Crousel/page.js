import React, { useState, useEffect } from "react";

const CarouselWithMenu = () => {
  const slides = [
    {
      id: 1,
      image: "/images/crousel.png",
      alt: "Slide 1",
    },
    {
      id: 2,
      image: "/images/crousel.png",
      alt: "Slide 2",
    },
    {
      id: 3,
      image: "/images/crousel.png",
      alt: "Slide 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 
    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-[1220px] mx-auto">
      {/* Top Menu */}
      {/* <div className="flex justify-around  bg-gray-100 py-3  border-b border-gray-200 text-sm font-medium text-gray-600">
        <span className=" cursor-pointer hover:text-blue-600">All Categories</span>
        <span className="mr-28 cursor-pointer hover:text-blue-600">Mobile Phones</span>
        <span className="mr-10 cursor-pointer hover:text-blue-600">Cars</span>
        <span className="ml-40 cursor-pointer hover:text-blue-600">Motorcycles</span>
        <span className=" cursor-pointer hover:text-blue-600">Houses</span>
        <span className=" cursor-pointer hover:text-blue-600">Video-Audios</span>
        <span className=" cursor-pointer hover:text-blue-600">Tablets</span>
        <span className=" cursor-pointer hover:text-blue-600">Land & Plots</span>
      </div> */}

      {/* Carousel */}
      <div className="relative w-full h-64 overflow-hidden mx-auto hidden lg:block">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="flex-shrink-0 w-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute mt-[-12px] left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-6 h-[2px] ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              } transition-all`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselWithMenu;
