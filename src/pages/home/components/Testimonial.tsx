import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-yellow-500 text-black py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Our Members Say
        </h2>
        <p className="italic text-lg md:text-xl mb-4">
          "Joining the Association of Accredited Management Trainers was a
          life-changing decision. The workshops helped me refine my skills, and
          the network I built here led to incredible career opportunities."
        </p>
        <p className="font-bold">
          - Jordan Smith, Certified Management Trainer
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
