import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import logo from "../assets/logo.png"; // Update path if needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* COMPANY BRANDING + LOGO */}
        <div className="space-y-4">

          <img
            src={logo}
            alt="Makhensa Global ICT Services Logo"
            className="w-36 object-contain hover:scale-105 transition duration-500"
          />

          <h2 className="text-xl font-bold text-white">
            Makhensa Global ICT Services
          </h2>

          <p className="text-sm leading-relaxed text-gray-400">
            Empowering individuals and businesses with modern technology
            solutions, digital skills training, and innovative ICT services
            designed to prepare professionals for the digital future.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">

            <li>
              <Link to="/about" className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/services-items" className="hover:text-yellow-400 transition">
                Our Services
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Services
          </h3>

          <ul className="space-y-3 text-sm">

            <li className="hover:text-yellow-400 transition cursor-pointer">
              ICT Training
            </li>

            <li className="hover:text-yellow-400 transition cursor-pointer">
              Software Development
            </li>

            <li className="hover:text-yellow-400 transition cursor-pointer">
              IT Consulting
            </li>

            <li className="hover:text-yellow-400 transition cursor-pointer">
              Technology Solutions
            </li>

          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              South Africa
            </li>

            <li className="flex items-center gap-2">
              <FaPhone className="text-yellow-400" />
              081 833 1003
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              info@makhensaict.co.za
            </li>

          </ul>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700" />

      {/* BOTTOM FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Makhensa Global ICT Services. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex space-x-6 text-xl">

          <a href="https://www.facebook.com/profile.php?id=61572482734254"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaFacebook />
          </a>

          <a href="https://wa.me/0818331003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaWhatsapp />
          </a>

          <a href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;