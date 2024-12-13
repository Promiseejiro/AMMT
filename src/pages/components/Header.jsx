import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header class="bg-black text-white">
        <div class="container mx-auto flex justify-between items-center py-4 px-6">
            <a href="#" class="text-2xl font-bold text-yellow-500">
                <img src={Logo} alt="logo" width={50}/>
            </a>

            <nav class="hidden md:flex space-x-8">
            <a href="#" class="text-gray-300 hover:text-yellow-500 transition">Home</a>
            <a href="#" class="text-gray-300 hover:text-yellow-500 transition">About</a>
            {/* <a href="#" class="text-gray-300 hover:text-yellow-500 transition">Services</a> */}
            <a href="#" class="text-gray-300 hover:text-yellow-500 transition">Contact</a>
            </nav>

            <Link
            to="/apply"
            class="hidden md:inline-block bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded transition"
            >
            Join Us
            </Link>

            <button
            class="md:hidden text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
            >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                fill-rule="evenodd"
                d="M3 5h14a1 1 0 110 2H3a1 1 0 010-2zm0 5h14a1 1 0 110 2H3a1 1 0 010-2zm0 5h14a1 1 0 110 2H3a1 1 0 010-2z"
                clip-rule="evenodd"
                ></path>
            </svg>
            </button>
        </div>
    </header>
  )
}

export default Header