import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h1 className="text-lg font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                        Makhensa Global ICT Services
                    </h1>
                    <p className="text-sm">&copy; {new Date().getFullYear()} Makhensa Global ICT Services. All rights reserved.</p>
                </div>
                <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-8 text-center md:text-left">
                    <Link to="/about" className="text-sm hover:underline transition duration-200 hover:text-yellow-400 active:text-yellow-500" aria-label="About Us">
                        About
                    </Link>
                    <Link to="/services-items" className="text-sm hover:underline transition duration-200 hover:text-yellow-400 active:text-yellow-500" aria-label="Our Services">
                        Services
                    </Link>
                    <Link to="/contact" className="text-sm hover:underline transition duration-200 hover:text-yellow-400 active:text-yellow-500" aria-label="Contact Us">
                        Contact
                    </Link>
                </nav>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
                {/* Social Media Links */}
                <a href="https://www.facebook.com/profile.php?id=61572482734254" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook className="text-white hover:text-yellow-400 transition duration-200" />
                </a>
                <a href="https://wa.me/0818331003?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <FaWhatsapp className="text-white hover:text-yellow-400 transition duration-200" />
                </a>
                
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="text-white hover:text-yellow-400 transition duration-200" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;