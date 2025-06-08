import React from "react";
import { FaShoppingBag, FaTruck, FaUsers, FaGlobe } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import Subscribe from "../components/Subscribe/Subscribe";

const About = () => {
  return (
    <div className="py-10">
      {/* Hero Section */}
      <div className="bg-primary/10 dark:bg-primary/30 py-16">
        <div className="container">
          <div className="text-center max-w-[800px] mx-auto" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About ShopMe
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              We're on a mission to provide high-quality products at affordable
              prices, with customer satisfaction as our top priority.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <img
              src="https://placeimg.com/800/600/arch"
              alt="Our Store"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Founded in 2010, ShopMe started as a small family business with a
              passion for providing quality clothing and accessories. What began
              as a modest store has grown into a thriving e-commerce platform
              serving customers worldwide.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We believe in sustainable fashion and ethical business practices.
              All our suppliers are carefully selected to ensure fair working
              conditions and environmentally friendly production methods.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Our team is dedicated to curating the best products and providing
              exceptional customer service, making your shopping experience as
              enjoyable as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl font-bold">Our Growth Journey</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Some numbers that define our success story
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div
              data-aos="zoom-in"
              data-aos-delay="0"
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-300">
                Years Experience
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">
                Happy Customers
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl font-bold text-primary mb-2">5K+</div>
              <div className="text-gray-600 dark:text-gray-300">Products</div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-300">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container py-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Why Choose ShopMe?</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-[600px] mx-auto">
            We strive to provide the best shopping experience with quality
            products and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
          >
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <FaShoppingBag />
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Products</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We carefully select each product to ensure the highest quality
              standards for our customers.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
          >
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <FaTruck />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We partner with reliable shipping services to deliver your orders
              quickly and safely.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300"
          >
            <div className="text-primary text-4xl mb-4 flex justify-center">
              <MdSupportAgent />
            </div>
            <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our customer support team is available around the clock to assist
              you with any queries.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-[600px] mx-auto">
              The dedicated people behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "John Doe",
                position: "Founder & CEO",
                image: "https://placeimg.com/300/300/people",
              },
              {
                name: "Sarah Johnson",
                position: "Head of Design",
                image: "https://placeimg.com/301/301/people",
              },
              {
                name: "Michael Brown",
                position: "Lead Developer",
                image: "https://placeimg.com/302/302/people",
              },
              {
                name: "Emily Wilson",
                position: "Marketing Director",
                image: "https://placeimg.com/303/303/people",
              },
            ].map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Vision */}
      <div className="container py-16">
        <div className="bg-primary/5 dark:bg-primary/20 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center" data-aos="fade-right">
              <div className="h-40 w-40 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <FiShoppingBag className="text-white text-6xl" />
              </div>
            </div>
            <div className="md:w-2/3" data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                At ShopMe, we envision a world where quality fashion is
                accessible to everyone. We're committed to creating a seamless
                shopping experience that connects people with products they'll
                love, while maintaining environmentally sustainable and socially
                responsible business practices.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                We aim to be the preferred destination for fashion enthusiasts
                looking for quality, style, and value, all delivered with
                exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Section */}
      <Subscribe />
    </div>
  );
};

export default About;
