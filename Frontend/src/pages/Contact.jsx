import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-16 py-16 px-60  bg-gradient-to-b from-green-100 to-white dark:from-green-900/20 dark:to-dark-bg-primary"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Have questions or need assistance? Get in touch with us!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="bg-white dark:bg-dark-bg-secondary shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Mail className="w-8 h-8 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
              Email
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Reach out via email for any inquiries.
          </p>
          <a
            href="mailto:support@example.com"
            className="block mt-2 text-green-600 hover:underline"
          >
            support@example.com
          </a>
        </div>

        <div className="bg-white dark:bg-dark-bg-secondary shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Phone className="w-8 h-8 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
              Phone
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Call us during working hours.
          </p>
          <a
            href="tel:+123456789"
            className="block mt-2 text-green-600 hover:underline"
          >
            +1 234 567 89
          </a>
        </div>

        <div className="bg-white dark:bg-dark-bg-secondary shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <MapPin className="w-8 h-8 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
              Address
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Visit us at our office.
          </p>
          <p className="mt-2 text-gray-800 dark:text-gray-400">
            123 Innovation Street, Tech City
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 bg-white dark:bg-dark-bg-secondary shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Send Us a Message
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-dark-bg-primary text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-dark-bg-primary text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                       bg-white dark:bg-dark-bg-primary text-gray-900 dark:text-white"
            ></textarea>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="reset"
              className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 
                       hover:text-gray-800 dark:hover:text-gray-200"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white 
                       rounded-lg transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
