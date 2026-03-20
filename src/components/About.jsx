import React, { useEffect, useRef } from "react";
import AboutImage from "../assets/aboutImage.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Testimony from "./Testimony";

const About = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.classList.add("animate-bounce");
      const timeout = setTimeout(() => {
        button.classList.remove("animate-bounce");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center">

        <img
          src={AboutImage}
          alt="Business Education"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

        <div className="relative text-center max-w-4xl px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Building Future Leaders Through
            <span className="text-cyan-400"> Technology & Business</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            At Makhensa Global ICT & Business College we equip individuals
            with practical skills, entrepreneurial knowledge and innovative
            technology solutions to succeed in today's digital economy.
          </p>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            Empowering individuals and businesses to thrive through education,
            entrepreneurship and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visionData.map((vision, index) => (
            <VisionCard key={index} content={vision.content} />
          ))}
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-gray-50 py-16">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-600 mt-4">
              Our mission is to empower individuals with the skills,
              resources and confidence needed to succeed in business
              and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {missionData.map((mission, index) => (
              <div
                key={index}
                className="clay-card p-6 rounded-xl hover:transform hover:-translate-y-0.5 transition"
              >
                <h3 className="font-semibold text-blue-700 mb-2">
                  {mission.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-blue-900 text-white text-center">

        <h2 className="text-3xl font-bold mb-4">
          Discover Our Programs & Services
        </h2>

        <p className="max-w-2xl mx-auto text-blue-100 mb-8">
          Explore the wide range of ICT training, consulting services and
          innovative technology solutions we provide to help individuals
          and businesses grow.
        </p>

        <Link
          to="/services-items"
          className="bg-cyan-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 transition"
        >
          View Our Services
        </Link>

      </section>

      {/* TESTIMONIALS */}
      <Testimony />

      {/* WHATSAPP FLOATING BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          ref={buttonRef}
          href="https://wa.me/0818331003?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 transition"
        >
          Chat With Us
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
};

const VisionCard = ({ content }) => (
  <div className="clay-card p-6 rounded-xl hover:transform hover:-translate-y-0.5 transition">
    <p className="text-gray-600 leading-relaxed">{content}</p>
  </div>
);

const visionData = [
  {
    content:
      "Makhensa Global ICT & Business College bridges the gap between established businesses and emerging enterprises, ensuring that all businesses can participate in South Africa’s growing economy."
  },
  {
    content:
      "We empower individuals to create their own businesses, promoting independence, innovation and entrepreneurial thinking."
  },
  {
    content:
      "We provide tools, resources and mentorship to help aspiring entrepreneurs overcome challenges and successfully launch their businesses."
  },
  {
    content:
      "Through entrepreneurship and digital skills development, we aim to strengthen communities, create jobs and contribute to sustainable economic growth."
  }
];

const missionData = [
  {
    title: "Fostering Entrepreneurship",
    description:
      "We cultivate an entrepreneurial mindset that encourages innovation, creativity and self-reliance."
  },
  {
    title: "Bridging the Gap",
    description:
      "We connect emerging entrepreneurs with established businesses to encourage mentorship and collaboration."
  },
  {
    title: "Providing Resources",
    description:
      "Our programs include workshops, networking opportunities and expert guidance to help students succeed."
  },
  {
    title: "Promoting Inclusivity",
    description:
      "We ensure individuals from diverse backgrounds have equal access to quality education and opportunities."
  },
  {
    title: "Driving Economic Growth",
    description:
      "By empowering entrepreneurs, we help create jobs and build stronger communities across South Africa."
  }
];

export default About;