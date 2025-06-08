import React, { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6"; // Correct import from fa6
import Banner from "../components/Banner/Banner";

const kidsProducts = [
  {
    id: 1,
    title: "Kids Casual T-Shirt",
    image: "/src/assets/shirt/shirt.png",
    rating: 4.5,
    price: 19.99,
    oldPrice: 24.99,
    discount: "20% OFF",
    category: "T-shirts",
    age: "4-6",
    isNew: true,
    description: "Comfortable cotton t-shirt perfect for everyday wear.",
  },
  {
    id: 2,
    title: "Children's Denim Set",
    image: "/src/assets/shirt/shirt2.png",
    rating: 4.7,
    price: 39.99,
    oldPrice: 49.99,
    discount: "20% OFF",
    category: "Sets",
    age: "7-9",
    isNew: false,
    description: "Stylish denim set with jacket and pants for a complete look.",
  },
  {
    id: 3,
    title: "Colorful Kids Hoodie",
    image: "/src/assets/shirt/shirt3.png",
    rating: 4.8,
    price: 29.99,
    oldPrice: null,
    discount: null,
    category: "Outerwear",
    age: "10-12",
    isNew: true,
    description: "Warm and colorful hoodie perfect for cooler days.",
  },
];

const categories = [
  "All",
  "T-shirts",
  "Sets",
  "Outerwear",
  "Dresses",
  "Shoes",
  "Accessories",
];
const ageGroups = ["All Ages", "0-3", "4-6", "7-9", "10-12", "13+"];

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

const KidsWear = ({ handleOrderPopup }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedAge, setSelectedAge] = useState("All Ages");
  const [filteredProducts, setFilteredProducts] = useState(kidsProducts);

  // Filter products when category or age changes
  useEffect(() => {
    let filtered = [...kidsProducts];

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedAge !== "All Ages") {
      filtered = filtered.filter((product) => product.age === selectedAge);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedAge]);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 pb-10 dark:bg-slate-900 dark:text-white duration-200">
      {/* Banner */}

      <div className="container mx-auto py-16">
        {/* Header section */}
        <div data-aos="fade-up" className="text-center mb-10">
          <p className="text-sm text-primary">Stylish & Comfortable</p>
          <h1 className="text-3xl font-bold">Kids Fashion Collection</h1>
          <p className="text-xs text-gray-400 max-w-[600px] mx-auto mt-2">
            Shop our collection of comfortable, durable, and stylish clothing
            for kids of all ages. Quality materials that can keep up with their
            adventures.
          </p>
        </div>

        {/* Filter options */}
        <div className="mb-8 space-y-4" data-aos="fade-up">
          <div>
            <h3 className="text-lg font-medium mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-primary/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Age Groups</h3>
            <div className="flex flex-wrap gap-2">
              {ageGroups.map((age) => (
                <button
                  key={age}
                  onClick={() => setSelectedAge(age)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedAge === age
                      ? "bg-secondary text-white"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-secondary/20"
                  }`}
                >
                  {age}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              data-aos="fade-up"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative bg-gray-100 dark:bg-gray-700 p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[200px] object-contain transition-all duration-300 hover:scale-105"
                />
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      NEW
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                      {product.discount}
                    </span>
                  )}
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    Age {product.age}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <RatingStars rating={product.rating} />
                <p className="text-gray-500 dark:text-gray-300 my-3 text-sm line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <span className="font-bold text-lg">${product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={handleOrderPopup}
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full flex items-center gap-2"
                  >
                    <FaCartShopping /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Banner title="Kids Wear Collection" />

        {/* No products message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-10" data-aos="fade-up">
            <p className="text-xl mb-4">
              No products found with the selected filters.
            </p>
            <button
              className="bg-primary text-white px-4 py-2 rounded-md"
              onClick={() => {
                setSelectedCategory("All");
                setSelectedAge("All Ages");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default KidsWear;
