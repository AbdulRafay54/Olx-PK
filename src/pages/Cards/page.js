import Image from "next/image";
import React, { useState } from "react";

const Cards = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="olx-card relative">
        <Image
          src={props.image} // Dynamic image source
          alt={props.title} // Alt text for accessibility
          width={500} // Width in pixels
          height={200} // Height in pixels
          className="olx-card-image w-full h-48 object-cover" // Custom styling
          priority={true} // Prioritize this image for faster loading
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="olx-card-details p-4">
        <h3 className="olx-card-title text-lg font-semibold text-gray-800 mb-2">
          {props.title}
        </h3>
        <p className="olx-card-price text-lg font-bold text-green-500 mb-2">
          {props.price}
        </p>
        <p className="olx-card-location text-sm text-gray-600 mb-4">
          {props.location}
        </p>
        <div className="flex items-center justify-between">
          <button
            className={`rounded-full p-2 transition-colors ${
              isFavourite ? "bg-red-500 text-white" : "bg-gray-200 text-red-500"
            }`}
            onClick={toggleFavourite}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
