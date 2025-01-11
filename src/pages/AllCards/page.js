import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Cards/page";

const Allcards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products?limit=100`);
        setData(res.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleViewMore = (category) => {};

  const categories = [...new Set(data.map((item) => item.category))];

  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle the liked status for this product
    }));
  };

  return (
    <div className="bg-white">
      {loading ? (
        <p className="text-center text-xl">Loading...</p>
      ) : (
        categories.map((category) => (
          <div key={category} className="ml-10 mt-10">
            <div className="flex justify-between items-center mt-8">
              <h2 className="text-[#002f34] text-[2rem] capitalize font-bold">
                {category}
              </h2>
              <button
                onClick={() => handleViewMore(category)}
                className="text-blue-500 font-semibold text-sm hover:underline mr-10"
              >
                View more
              </button>
            </div>
            <div className="mr-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
              {data
                .filter((item) => item.category === category)
                .slice(0, 4) // Display only 4 cards per category
                .map((item) => (
                  <div
                    key={item.id}
                    className="w-full h-[380px] sm:h-[400px] md:h-[420px] bg-white rounded-lg shadow-md flex flex-col items-center p-4"
                  >
                    {/* Card Image */}
                    <div className="h-2/3 w-full mb-4">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="h-full w-full object-cover rounded-t-lg"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="h-1/3 w-full flex flex-col justify-between items-center text-center">
                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-800 truncate mb-2">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-600 mb-3">
                        {item.description.length > 50 ? (
                          <span>
                            {item.description.slice(0, 50)}...
                            <button className="text-blue-500 hover:underline">
                              Read More
                            </button>
                          </span>
                        ) : (
                          item.description
                        )}
                      </p>

                      {/* Price and Heart */}
                      <div className="flex justify-between items-center w-full">
                        <p className="text-md font-semibold text-blue-500">
                          ${item.price}
                        </p>
                        <button
                          onClick={() => toggleLike(item.id)} 
                          className={`${likedItems[item.id] ? "text-red-500" : "text-white-500"}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.42 3.42 5 5.5 5c1.74 0 3.41.81 4.5 2.09C11.09 5.81 12.76 5 14.5 5 16.58 5 18 6.42 18 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Allcards;
