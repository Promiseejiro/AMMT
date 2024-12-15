import React from "react";
const Offers = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Do We Offer?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          At the Association of Accredited Management Trainers, we provide
          unparalleled training, certification programs, and professional
          development opportunities. Whether you are an aspiring trainer or a
          seasoned professional, we have resources to elevate your career.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Expert-Led Workshops</h3>
            <p className="text-base">
              Join workshops led by industry experts who share practical
              knowledge and strategies tailored for success.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Comprehensive Resources</h3>
            <p className="text-base">
              Access a wealth of resources, including e-books, case studies, and
              exclusive member-only content.
            </p>{" "}
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Global Network</h3>
            <p className="text-base">
              Become part of a global community of trainers, sharing ideas and
              collaborating on impactful projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
