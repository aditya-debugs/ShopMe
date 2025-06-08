import React from "react";
import { FaStar, FaStarHalfAlt, FaRegHeart, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6"; // Changed to import from fa6
import Img1 from "../assets/shirt/shirt.png";
import Img2 from "../assets/shirt/shirt2.png";
import Img3 from "../assets/shirt/shirt3.png";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe"; // Added Subscribe import

const mensCategories = [
  "All",
  "T-Shirts",
  "Shirts",
  "Jeans",
  "Trousers",
  "Jackets",
  "Activewear",
  "Formal",
  "Accessories",
];

const mensProducts = [
  {
    id: 1,
    title: "Classic Cotton Shirt",
    image: Img1,
    category: "Shirts",
    rating: 4.8,
    price: 49.99,
    discount: "20% OFF",
    isNew: true,
    colors: ["white", "blue", "black"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    title: "Printed Designer Tee",
    image: Img2,
    category: "T-Shirts",
    rating: 4.5,
    price: 29.99,
    discount: null,
    isNew: false,
    colors: ["gray", "black", "red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    title: "Slim Fit Oxford Shirt",
    image: Img3,
    category: "Shirts",
    rating: 4.7,
    price: 59.99,
    discount: "15% OFF",
    isNew: true,
    colors: ["white", "light-blue", "pink"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 4,
    title: "Casual Denim Jeans",
    image: "https://placeimg.com/400/500/fashion",
    category: "Jeans",
    rating: 4.6,
    price: 69.99,
    discount: null,
    isNew: false,
    colors: ["blue", "black", "gray"],
    sizes: ["30", "32", "34", "36"],
  },
  {
    id: 5,
    title: "Sports Performance Tee",
    image: "https://placeimg.com/401/500/fashion",
    category: "Activewear",
    rating: 4.9,
    price: 34.99,
    discount: null,
    isNew: true,
    colors: ["black", "blue", "red", "green"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    title: "Formal Business Suit",
    image: "https://placeimg.com/402/500/fashion",
    category: "Formal",
    rating: 4.8,
    price: 249.99,
    discount: "10% OFF",
    isNew: false,
    colors: ["navy", "black", "grey"],
    sizes: ["40", "42", "44", "46"],
  },
  {
    id: 7,
    title: "Winter Leather Jacket",
    image: "https://placeimg.com/403/500/fashion",
    category: "Jackets",
    rating: 4.7,
    price: 129.99,
    discount: null,
    isNew: false,
    colors: ["brown", "black"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: 8,
    title: "Casual Chino Trousers",
    image: "https://placeimg.com/404/500/fashion",
    category: "Trousers",
    rating: 4.5,
    price: 59.99,
    discount: null,
    isNew: false,
    colors: ["khaki", "navy", "olive", "gray"],
    sizes: ["30", "32", "34", "36", "38"],
  },
];

const MensWear = ({ handleOrderPopup }) => {
  const [products, setProducts] = React.useState(mensProducts);
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [favorites, setFavorites] = React.useState([]);

  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setProducts(mensProducts);
    } else {
      const filtered = mensProducts.filter(
        (product) => product.category === category
      );
      setProducts(filtered);
    }
  };

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="pt-16 pb-10 dark:bg-slate-900 dark:text-white duration-200">
      {/* Banner */}

      <div className="container mx-auto py-10">
        {/* Hero section */}
        <div
          className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8 mb-10"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Men's Fashion Collection
              </h1>
              <p className="mb-6">
                Discover the latest trends in men's fashion with our premium
                quality clothing line. From casual wear to formal attire, we
                have everything you need to upgrade your wardrobe.
              </p>
              <button
                onClick={() =>
                  window.scrollTo({
                    top: document.querySelector("#products").offsetTop - 100,
                    behavior: "smooth",
                  })
                }
                className="bg-white text-primary font-medium px-6 py-2 rounded-full hover:scale-105 transition duration-300"
              >
                Shop Now
              </button>
            </div>
            <div className="hidden md:flex justify-end">
              <img
                src={Img1}
                alt="Men's Fashion"
                className="max-h-[400px] object-contain transform rotate-12 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Categories navigation */}
        <div className="mb-8" data-aos="fade-up">
          <h2 className="text-xl font-bold mb-4">Shop By Category</h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {mensCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => filterByCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 dark:bg-gray-700 hover:bg-primary/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div id="products" className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{activeCategory} Products</h2>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  data-aos="fade-up"
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <div className="h-[250px] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-2">
                      {product.isNew && (
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          NEW
                        </span>
                      )}
                      {product.discount && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          {product.discount}
                        </span>
                      )}
                    </div>
                    {/* Favorite button */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      {favorites.includes(product.id) ? (
                        <FaHeart className="text-red-500" />
                      ) : (
                        <FaRegHeart className="text-gray-400 dark:text-gray-300" />
                      )}
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold line-clamp-1">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {product.category}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </div>

                    {/* Color options */}
                    <div className="mt-3">
                      <div className="flex items-center gap-1">
                        {product.colors.map((color) => (
                          <div
                            key={color}
                            className="h-4 w-4 rounded-full border cursor-pointer hover:scale-125 transition-transform"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Size options */}
                    <div className="mt-2">
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.map((size) => (
                          <span
                            key={size}
                            className="text-xs border px-2 py-1 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <p className="font-bold text-lg">${product.price}</p>
                      <button
                        onClick={handleOrderPopup}
                        className="bg-gradient-to-r from-primary to-secondary hover:bg-primary/90 text-white px-3 py-1 rounded-full flex items-center gap-1 hover:scale-105 transition duration-300"
                      >
                        <FaCartShopping size={14} /> Buy
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
                onClick={() => filterByCategory("All")}
              >
                View All Products
              </button>
            </div>
          )}
        </div>
        <Banner title="Men's Wear Collection" />

        {/* Subscribe Section */}
        <Subscribe />
      </div>
    </div>
  );
};

export default MensWear;
