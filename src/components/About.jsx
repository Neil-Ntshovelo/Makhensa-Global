import React, { useEffect, useRef } from 'react';
import AboutImage from '../assets/aboutImage.jpg'; 
import { FaWhatsapp } from 'react-icons/fa';
import Testimony from './Testimony'; 
import { Link } from 'react-router-dom'; 

const About = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.classList.add('animate-bounce');
      const timeout = setTimeout(() => {
        button.classList.remove('animate-bounce');
      }, 3000); 
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <>
      <section className="relative h-64 sm:h-96">
        <img 
          src={AboutImage} 
          alt="A representation of excellence in business education" 
          className='w-full h-full object-cover'
        /> 
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-500 opacity-50"></div> 
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-white to-zinc-300 mb-4">
            Enroll Into Excellency
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-100 mb-4">
            To lead in business excellence with an aim to put South Africa
            <br />
            <span className='text-blue-200 font-semibold'>
              First in the map of property business and to make South Africa Second to none
            </span>
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-4 sm:p-6">
        <h2 className="text-blue-800 text-2xl sm:text-3xl font-bold text-center mb-4">Our Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visionData.map((vision, index) => (
            <VisionCard 
              key={index}
              bgColor={vision.bgColor} 
              textColor={vision.textColor} 
              content={vision.content}
            />
          ))}
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto mt-6 mb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 text-center">
          Our Mission
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 text-center">
          At Makhensa Global ICT & Business College, our mission is to empower individuals through education and practical training, equipping them with the skills and knowledge necessary to thrive in the competitive business landscape. We are dedicated to:
        </p>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 mb-4 space-y-2">
          {missionData.map((mission, index) => (
            <li key={index}>
              <strong className="text-blue-600">{mission.title}</strong> {mission.description}
            </li>
          ))}
        </ul>
        <p className="text-base sm:text-lg text-gray-700 text-center">
          Together, we envision a future where every aspiring entrepreneur has the tools and support needed to turn their dreams into reality, ultimately transforming the economic landscape of our nation.
        </p>
      </section>

      <div className="text-center mt-6">
        <Link to="/services-items" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 text-lg">
          Discover More About Our Services
        </Link>
      </div>

      <div className="fixed bottom-5 right-5 z-50">
        <a 
          ref={buttonRef}
          href="https://wa.me/1234567890?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-500 flex items-center"
          aria-label="Contact us on WhatsApp"
        >
          Contact Us on WhatsApp
          <FaWhatsapp className="ml-2" />
        </a>
      </div>

      <Testimony />
    </>
  );
};

const VisionCard = ({ bgColor, textColor, content }) => (
  <div className={`${bgColor} col-span-1 m-2 rounded-lg transition-shadow duration-300 hover:shadow-2xl`}>
    <p className={`text-base sm:text-lg ${textColor} mb-4 p-4`}>
      {content}
    </p>
  </div>
);

// Sample data for vision and mission
const visionData = [
  {
    bgColor: "bg-yellow-600",
    textColor: "text-gray-50",
    content: "Makhensa Global IT & BUSINESS COLLEGE is dedicated to bridging the gap between long-established businesses and emerging enterprises. We believe that every business deserves the opportunity to be integrated into the mainstream economy of our country."
  },
  {
    bgColor: "bg-zinc-200",
    textColor: "text-gray-600",
    content: "At Makhensa Global, we are committed to empowering individuals to establish their own businesses, fostering a mindset of self-reliance rather than dependency. We believe that cultivating an entrepreneurial spirit is essential for personal and economic growth, particularly in the context of the South African economy."
  },
  {
    bgColor: "bg-zinc-200",
    textColor: "text-gray-600",
    content: "In a landscape where many face challenges and uncertainties, we strive to provide the necessary tools, resources, and support to help aspiring entrepreneurs navigate the complexities of starting and running a business. Our mission is to inspire confidence and resilience, enabling individuals to take charge of their financial futures and contribute positively to their communities."
  },
  {
    bgColor: "bg-blue-500",
    textColor: "text-zinc-200",
    content: "By promoting entrepreneurship, we aim to create a ripple effect that not only uplifts individuals but also strengthens the economy as a whole. We envision a future where self-sufficient businesses thrive, creating jobs and opportunities that empower others to follow suit. Together, we can transform the narrative of dependency into one of innovation, growth, and sustainable success."
  }
];

const missionData = [
  {
    title: "Fostering Entrepreneurship:",
    description: " We aim to cultivate an entrepreneurial mindset among our students, encouraging innovation and self-reliance as they embark on their business journeys."
  },
  {
    title: "Bridging the Gap:",
    description: " We strive to connect emerging entrepreneurs with established businesses, facilitating mentorship and collaboration that enriches the local economy."
  },
  {
    title: "Providing Resources:",
    description: " We are committed to offering comprehensive resources, including workshops, networking opportunities, and access to industry experts, to support our students in overcoming challenges and achieving their goals."
  },
  {
    title: "Promoting Inclusivity:",
    description: " We believe in creating an inclusive environment where individuals from diverse backgrounds can access quality education and resources, ensuring that everyone has the opportunity to succeed."
  },
  {
    title: "Driving Economic Growth:",
    description: " By empowering individuals to start and grow their own businesses, we contribute to the economic development of South Africa, creating jobs and fostering sustainable communities."
  }
];

export default About;