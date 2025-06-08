import React from "react";
import { FaStar, FaRegHeart, FaHeart, FaBolt, FaTv } from "react-icons/fa";
import {
  FaCartShopping,
  FaComputer,
  FaMobileScreen,
  FaHeadphones,
  FaCamera,
  FaGamepad,
} from "react-icons/fa6"; // Correct grouping of fa6 icons
import Subscribe from "../components/Subscribe/Subscribe";
import Testimonials from "../components/Testimonials/Testimonials";

const categories = [
  { id: 1, name: "All", icon: <FaBolt /> },
  { id: 2, name: "Computers", icon: <FaComputer /> },
  { id: 3, name: "Phones", icon: <FaMobileScreen /> },
  { id: 4, name: "Audio", icon: <FaHeadphones /> },
  { id: 5, name: "Cameras", icon: <FaCamera /> },
  { id: 6, name: "Gaming", icon: <FaGamepad /> },
  { id: 7, name: "TVs", icon: <FaTv /> },
];

const electronicsProducts = [
  {
    id: 1,
    name: 'Ultra HD Smart TV 55"',
    category: "TVs",
    price: 699.99,
    oldPrice: 899.99,
    rating: 4.8,
    image: "https://placeimg.com/500/500/tech",
    isNew: true,
    features: ["4K Resolution", "Smart TV", "Voice Control", "HDR"],
  },
  {
    id: 2,
    name: "Premium Wireless Headphones",
    category: "Audio",
    price: 199.99,
    oldPrice: null,
    rating: 4.7,
    image: "https://placeimg.com/501/501/tech",
    isNew: false,
    features: ["Noise Cancellation", "40h Battery", "Bluetooth 5.0"],
  },
  {
    id: 3,
    name: "Professional DSLR Camera",
    category: "Cameras",
    price: 1299.99,
    oldPrice: 1499.99,
    rating: 4.9,
    image: "https://placeimg.com/502/502/tech",
    isNew: true,
    features: ["24MP Sensor", "4K Video", "Wi-Fi", "30x Optical Zoom"],
  },
  {
    id: 4,
    name: "Gaming Laptop Pro",
    category: "Computers",
    price: 1499.99,
    oldPrice: null,
    rating: 4.6,
    image: "https://placeimg.com/503/503/tech",
    isNew: false,
    features: ["RTX Graphics", "16GB RAM", "512GB SSD", "144Hz Display"],
  },
  {
    id: 5,
    name: "Flagship Smartphone",
    category: "Phones",
    price: 999.99,
    oldPrice: 1099.99,
    rating: 4.8,
    image: "https://placeimg.com/504/504/tech",
    isNew: true,
    features: ["Triple Camera", "5G", "128GB Storage", "OLED Display"],
  },
  {
    id: 6,
    name: "Gaming Console",
    category: "Gaming",
    price: 499.99,
    oldPrice: null,
    rating: 4.9,
    image: "https://placeimg.com/505/505/tech",
    isNew: false,
    features: ["8K Support", "1TB Storage", "Ray Tracing", "120FPS"],
  },
  {
    id: 7,
    name: "Wireless Earbuds",
    category: "Audio",
    price: 129.99,
    oldPrice: 159.99,
    rating: 4.5,
    image: "https://placeimg.com/506/506/tech",
    isNew: false,
    features: ["Active Noise Cancellation", "Water Resistant", "24h Battery"],
  },
  {
    id: 8,
    name: "Smart Watch Series 7",
    category: "Wearables",
    price: 349.99,
    oldPrice: 399.99,
    rating: 4.7,
    image: "https://placeimg.com/507/507/tech",
    isNew: true,
    features: ["Health Tracking", "GPS", "Always-on Display", "Waterproof"],
  },
];

const Electronics = ({ handleOrderPopup }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [filteredProducts, setFilteredProducts] =
    React.useState(electronicsProducts);
  const [favorites, setFavorites] = React.useState([]);

  React.useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(electronicsProducts);
    } else {
      const filtered = electronicsProducts.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="py-10">
      {/* Hero Banner */}
      <div
        className="bg-gradient-to-r from-blue-600 to-violet-600 text-white py-16 mb-10"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Electronics & Gadgets
              </h1>
              <p className="text-lg mb-6">
                Discover the latest technology with top brands and exclusive
                deals.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() =>
                    window.scrollTo({
                      top: document.querySelector("#products").offsetTop - 100,
                      behavior: "smooth",
                    })
                  }
                  className="bg-white text-blue-600 font-bold px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300"
                >
                  Shop Now
                </button>
                <button
                  onClick={handleOrderPopup}
                  className="bg-transparent border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Special Offers
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="bg-white/20 w-64 h-64 rounded-full absolute blur-3xl"></div>
                <img
                  src="https://placeimg.com/600/600/tech"
                  alt="Electronics Showcase"
                  className="relative z-10 max-w-xs rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Categories */}
        <div className="mb-10" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 ${
                  selectedCategory === cat.name
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-primary/20"
                }`}
              >
                <div className="text-2xl mb-2">{cat.icon}</div>
                <span className="text-sm font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div id="products" className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{selectedCategory} Products</h2>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">
                {filteredProducts.length} products
              </span>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  data-aos="fade-up"
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="relative bg-gray-100 dark:bg-gray-700 h-48">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                    />
                    {product.isNew && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        NEW
                      </div>
                    )}
                    {product.oldPrice && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        SALE
                      </div>
                    )}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute bottom-2 right-2 h-8 w-8 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center shadow-md"
                    >
                      {favorites.includes(product.id) ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaRegHeart className="text-gray-400" />
                      )}
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 my-1">
                      <FaStar className="text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>

                    {/* Features */}
                    <div className="mt-2">
                      <ul className="text-xs text-gray-600 dark:text-gray-300">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-1 mb-1"
                          >
                            <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and Buy Button */}
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-lg">
                          ${product.price}
                        </span>
                        {product.oldPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">
                            ${product.oldPrice}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={handleOrderPopup}
                        className="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-full hover:scale-105 transition duration-300"
                      >
                        <FaCartShopping />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-10 text-center">
              <p className="text-xl mb-4">
                No products found in this category.
              </p>
              <button
                className="bg-primary text-white px-4 py-2 rounded-md"
                onClick={() => setSelectedCategory("All")}
              >
                View All Electronics
              </button>
            </div>
          )}
        </div>

        {/* Subscribe Section */}
        <Subscribe />

        {/* Testimonials */}
        <div className="mt-16">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Electronics;
