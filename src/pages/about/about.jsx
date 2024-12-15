import React from "react";
import Header from "../components/Header";
const About = () => {
  return (
    <><Header />
      <div className="bg-gray-100 text-gray-900 py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl mb-8">
            Welcome to the Association of Accredited Management Trainers. We are a
            community dedicated to empowering professionals through top-tier
            management training, development programs, and a global support
            network. Our mission is to foster excellence in the field of
            management training and provide resources that help individuals and
            organizations achieve their full potential.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-base leading-7">
              We envision a world where management trainers are equipped with the
              tools and knowledge to inspire transformational change. Through our
              comprehensive programs and global partnerships, we aim to set the
              standard for professional development and lifelong learning.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-base leading-7">
              Our mission is to create a platform where management trainers can
              thrive, share innovative ideas, and collaborate to drive impact. We
              are committed to providing cutting-edge resources, expert-led
              training, and a community that supports professional growth.
            </p>
          </div>
        </div>
        <div className="bg-yellow-500 text-black py-8 px-6 mt-12 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-lg md:text-xl space-y-4">
            <li>Unmatched expertise in management training and development.</li>
            <li>A robust community of like-minded professionals.</li>
            <li>Access to exclusive resources and certifications.</li>
            <li>Global recognition and networking opportunities.</li>
            <li>Commitment to innovation and excellence.</li>
          </ul>
        </div>

        <div className="mt-12 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Alex Johnson</h3>
              <p className="text-sm text-gray-600 mb-4">Founder & CEO</p>
              <p>
                With over 20 years of experience in management training, Alex has
                been a driving force in shaping the industry and empowering
                professionals worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Samantha Lee</h3>
              <p className="text-sm text-gray-600 mb-4">Director of Training</p>
              <p>
                Samantha brings a wealth of expertise in creating impactful
                training programs and has a passion for helping individuals excel
                in their careers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Michael Carter</h3>
              <p className="text-sm text-gray-600 mb-4">Community Manager</p>
              <p>
                Michael is dedicated to fostering a strong community of trainers
                and facilitating meaningful connections among members.
              </p>
            </div>
          </div>
        </div>
      </div></>

  );
};

export default About;
