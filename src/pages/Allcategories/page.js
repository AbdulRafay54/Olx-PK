import React from "react";

const Categories = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-36">
      <div className="mb-8">
        <h2 className="text-[#002f34] text-xl sm:text-2xl font-bold">
          All Categories
        </h2>
      </div>

      {/* Categories Section */}
      <div>
        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-7 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px] object-contain"
              />
              <p className="text-xs sm:text-sm md:text-base font-bold leading-6 mt-2 text-[#002f34]">
                {category.title}
              </p>
            </div>
          ))}
        </div>

        <div className="sm:hidden overflow-x-auto">
          <div className="flex gap-4 w-max">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center text-center transition-transform transform hover:scale-105"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[80px] md:w-[80px] object-contain"
                />
                <p className="text-xs sm:text-sm md:text-base font-bold leading-6 mt-2 text-[#002f34]">
                  {category.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const categories = [
  {
    image:
      "https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png",
    title: "Mobile Phone",
  },
  {
    image:
      "https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png",
    title: "Vehicles",
  },
  {
    image:
      "https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png",
    title: "Property For Sale",
  },
  {
    image:
      "https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png",
    title: "Property For Rent",
  },
  {
    image:
      "https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png",
    title: "Electronics & Home Appliances",
  },
  {
    image:
      "https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png",
    title: "Bikes",
  },
  {
    image:
      "https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png",
    title: "Business, Industrial & Agriculture",
  },
  {
    image:
      "https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png",
    title: "Services",
  },
  {
    image:
      "https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png",
    title: "Jobs",
  },
  {
    image:
      "https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png",
    title: "Animals",
  },
  {
    image:
      "https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png",
    title: "Furniture & Home Decor",
  },
  {
    image:
      "https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png",
    title: "Fashion & Beauty",
  },
  {
    image:
      "https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png",
    title: "Books, Sports & Hobbies",
  },
  {
    image:
      "https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png",
    title: "Kids",
  },
];

export default Categories;
