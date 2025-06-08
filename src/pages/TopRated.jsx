import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6"; // Correct import from fa6
import TopProducts from "../components/TopProducts/TopProducts";

const products = [
  {
    id: 1,
    title: "Premium Cotton T-Shirt",
    image: "/src/assets/shirt/shirt.png",
    rating: 5.0,
    price: 29.99,
    description:
      "Premium quality cotton t-shirt with comfortable fit and stylish design.",
  },
  {
    id: 2,
    title: "Designer Print Shirt",
    image: "/src/assets/shirt/shirt2.png",
    rating: 4.9,
    price: 39.99,
    description:
      "Unique designer prints on high-quality fabric for a standout look.",
  },
  {
    id: 3,
    title: "Casual Summer Top",
    image: "/src/assets/shirt/shirt3.png",
    rating: 4.8,
    price: 24.99,
    description: "Light and breathable fabric perfect for summer days.",
  },
  {
    id: 4,
    title: "Women's Fashion Blouse",
    image: "/src/assets/women/women.png",
    rating: 4.7,
    price: 34.99,
    description:
      "Trendy blouse with modern cut and pattern for a fashionable look.",
  },
  {
    id: 5,
    title: "Elegant Evening Dress",
    image: "/src/assets/women/women2.jpg",
    rating: 4.9,
    price: 89.99,
    description:
      "Elegant evening dress perfect for special occasions and formal events.",
  },
  {
    id: 6,
    title: "Casual Denim Collection",
    image: "/src/assets/women/women3.jpg",
    rating: 4.8,
    price: 59.99,
    description:
      "Premium denim collection with perfect fit and lasting quality.",
  },
];

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
      <span className="ml-2">{rating.toFixed(1)}</span>
    </div>
  );
};

const TopRated = ({ handleOrderPopup }) => {
  return (
    <div className="py-10">
      <div className="container">
        {/* Header section */}
        <div
          data-aos="fade-up"
          className="text-center mb-10 max-w-[600px] mx-auto"
        >
          <p className="text-sm text-primary">Customer Favorites</p>
          <h1 className="text-3xl font-bold">Top Rated Products</h1>
          <p className="text-xs text-gray-400 mt-2">
            Our highest-rated items loved by customers worldwide. Quality,
            style, and satisfaction guaranteed.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              data-aos="fade-up"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-[350px]"
            >
              <div className="bg-gray-100 dark:bg-gray-700 p-6 flex justify-center items-center h-[250px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain h-full transition-all duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="font-bold text-lg">{product.title}</h2>
                  <p className="font-bold text-lg text-primary">
                    ${product.price}
                  </p>
                </div>
                <RatingStars rating={product.rating} />
                <p className="text-gray-500 dark:text-gray-300 my-3 text-sm line-clamp-2">
                  {product.description}
                </p>
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full w-full mt-2 flex items-center justify-center gap-2 hover:scale-105 transition duration-300"
                >
                  <FaCartShopping /> Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Top Products section */}
        <div className="mt-20">
          <TopProducts handleOrderPopup={handleOrderPopup} />
        </div>
      </div>
    </div>
  );
};

export default TopRated;
