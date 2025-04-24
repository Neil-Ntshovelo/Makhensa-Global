import React from 'react';
import { Link } from 'react-router-dom';

const ServiceOverview = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">Our Services</h2>
      <p className="text-lg text-gray-700 mb-6 text-center">
        At Makhensa Global ICT & Business College, we offer a range of services designed to empower individuals and businesses. Our focus is on providing quality education, practical training, and support to help you succeed in the competitive business landscape.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Makhensa Global Tech Solutions</h3>
          <p className="text-gray-600 mb-4">
            We provide outstanding customer experiences through our wide range of services, focusing on customer satisfaction and engagement.
          </p>
          <Link to="/services/1" className="text-blue-600 hover:underline">Learn More</Link>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Makhensa Global Internships and Learnerships</h3>
          <p className="text-gray-600 mb-4">
            Gain work-based learning experience at a company where you perform entry-level tasks while developing essential skills.
          </p>
          <Link to="/services-items" className="text-blue-600 hover:underline">Learn More</Link>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-800 mb-2">Makhensa Global Training Courses</h3>
          <p className="text-gray-600 mb-4">
            Our training courses help identify and evaluate your existing knowledge and skills, ensuring you are prepared for further learning and development.
          </p>
          <Link to="/services/3" className="text-blue-600 hover:underline">Learn More</Link>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Contact Us for More Information
        </Link>
      </div>
    </div>
  );
};

export default ServiceOverview;