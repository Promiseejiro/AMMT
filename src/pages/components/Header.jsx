import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  return (
    <header className="relative bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold text-yellow-500">
          <img src={Logo} alt="logo" width={50} />
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-yellow-500 transition">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-yellow-500 transition">About</Link>
          {/* <a href="#" className="text-gray-300 hover:text-yellow-500 transition">Services</a> */}
          <Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition">Contact</Link>
        </nav>

        <Link
          to="/apply"
          className="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded transition"
        >
          Join Us
        </Link>

        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 110 2H3a1 1 0 010-2zm0 5h14a1 1 0 110 2H3a1 1 0 010-2zm0 5h14a1 1 0 110 2H3a1 1 0 010-2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileNavOpen && (
        <div className="bg-black md:hidden absolute w-full">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="text-gray-300 hover:text-yellow-500 transition"
              onClick={() => setMobileNavOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-yellow-500 transition"
              onClick={() => setMobileNavOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-yellow-500 transition"
              onClick={() => setMobileNavOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/apply"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded transition"
              onClick={() => setMobileNavOpen(false)}
            >
              Join Us
            </Link>
          </nav>
        </div>
      )}
    </header>

  )
}

export default Header