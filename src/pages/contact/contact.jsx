import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import toast from "react-hot-toast";
const Contact = () => {
  const [isLoading, setIsloading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsloading(true)
      const response = await axios.post(`${import.meta.env.VITE_AAMT_BACKEND}contact`, formData)
      if (response.data.success) {
        toast.success("Contact information sent successfully");
        setIsloading(false)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-center mb-12">
          Have questions or need assistance? We'd love to hear from you! Use the
          form below or reach out to us directly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12"></div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg md:max-w-96 mx-auto md:my-4">
        <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              onChange={handleInputChange}
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              onChange={handleInputChange}
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
          >
            {isLoading ? "Submitting..." : "Send Message"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
