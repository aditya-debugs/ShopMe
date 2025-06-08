import React, { useState, useEffect } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import Banner from "../components/Banner/Banner";

const Contact = ({ handleOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage(
        "Thank you for your message! We'll get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 pb-10 dark:bg-slate-900 dark:text-white duration-200">
      <Banner title="Contact Us" />

      {/* Contact Section */}
      <div className="container mx-auto py-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
          <p className="max-w-lg mx-auto text-gray-500 dark:text-gray-400">
            Have questions about our products or services? We're here to help
            and would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div
            className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

            {submitMessage && (
              <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 p-4 rounded-md mb-6">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-700 dark:text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-700 dark:text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-700 dark:text-white"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-700 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-3 px-6 rounded-full w-full font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div
              className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg mb-8"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 dark:bg-primary/30 p-3 rounded-full">
                    <FiPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +1 (555) 123-4567
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      +1 (555) 765-4321
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 dark:bg-primary/30 p-3 rounded-full">
                    <FiMail className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      contact@shopme.com
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      support@shopme.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 dark:bg-primary/30 p-3 rounded-full">
                    <FiMapPin className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      123 Shopping Avenue, Fashion District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 dark:bg-primary/30 p-3 rounded-full">
                    <IoLogoWhatsapp className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">WhatsApp</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h2 className="text-2xl font-bold mb-4">Shop Hours</h2>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>12:00 PM - 5:00 PM</span>
                </li>
              </ul>

              <button
                onClick={handleOrderPopup}
                className="mt-6 bg-white text-primary hover:bg-gray-100 py-2 px-6 rounded-full font-medium transition duration-300 hover:scale-105"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div
        className="container mx-auto mt-16"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910506!2d-74.25986873535035!3d40.69714941512199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1654956851384!5m2!1sen!2s"
            className="w-full h-[400px] rounded-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto mt-20">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="max-w-lg mx-auto text-gray-500 dark:text-gray-400">
            Find answers to common questions about our services, shipping, and
            return policies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="font-bold text-xl mb-3">
              How long does shipping take?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Standard domestic shipping typically takes 3-5 business days.
              International shipping may take 7-14 business days depending on
              the destination.
            </p>
          </div>

          <div
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="font-bold text-xl mb-3">
              What is your return policy?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              We offer a 30-day return policy for most items. Products must be
              in original condition with tags attached. Some restrictions apply
              to certain categories.
            </p>
          </div>

          <div
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="font-bold text-xl mb-3">
              Do you offer international shipping?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Yes, we ship to most countries worldwide. International shipping
              rates and delivery times vary by location. Import duties and taxes
              may apply.
            </p>
          </div>

          <div
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="font-bold text-xl mb-3">
              How can I track my order?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Once your order ships, you'll receive a confirmation email with
              tracking information. You can also track your order through your
              account dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
