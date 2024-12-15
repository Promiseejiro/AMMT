import React from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-6 md:px-16 text-center">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Association of Accredited Management
          Trainers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
