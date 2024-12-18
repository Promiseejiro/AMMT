import React from 'react';
import showcaseImage from '../../../assets/showcase.jpeg'; // Adjust path based on file location
import { Link } from 'react-router-dom';

function Showcase() {
  return (
    <>
      <div
        className="flex h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${showcaseImage})`,
        }}
      >
        <div className="bg-black bg-opacity-80 w-full flex flex-col justify-center items-center px-6 md:px-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Association of Accredited Management Trainers in Nigeria-AAMTN          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-6">
            Redefining management consulting and training beyond accreditation and certification.
          </p>
          {/* Become a Member Button */}
          <Link
            to="/apply"
            className="border hover:border-yellow-600 border-yellow-500 hover:bg-yellow-600 text-yellow-500 hover:text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-56"
          >
            Become a Member
          </Link>
        </div>
      </div>
    </>
  );
}

export default Showcase;
