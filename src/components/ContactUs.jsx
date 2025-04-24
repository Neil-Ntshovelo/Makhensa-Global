import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaFacebook, FaWhatsapp, FaTwitter, FaLinkedin, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Contact from '../assets/contact.avif';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setLoading(true);
      console.log('Form submitted:', formData);
      
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleClear = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

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
      <motion.h2 
        variants={fadeIn("down", 0.01)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center text-yellow-600 text-4xl font-bold mb-2 mt-20 font-poppins"
      >
        Contact Us
      </motion.h2>
      <div className='flex justify-center align-center mb-5'>
        <div className='bg-white m-4 rounded-md w-2/3'>
          <img src={Contact} alt="Contact Us" className='w-full h-64 object-contain rounded-lg shadow-lg' />
          <p className='text-gray-600 m-5 text-lg mb-20 font-poppins'>
             
          At Makhensa Global, we’re here to help. Whether you have questions about our services or need assistance,
           please reach out. Our team is ready to support you. 
          Contact us via phone, email, or the form below. Your success is our priority!
          </p>
        </div>
      </div>
      
      <motion.div 
        variants={fadeIn("up", 0.05)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.05 }}
        className='flex flex-col md:flex-row md:justify-center md :items-start mb-10'
      >
        <div className="flex flex-col items-center m-10 mb-8 md:w-1/2 mx-4">
          <h3 className="text-lg text-blue-500 font-semibold mb-4 font-poppins">
            Makhensa Global ICT Services
          </h3>
          <div className="flex flex-col items-center text-gray-600 mb-4 m-2">
            <p className="flex items-center mb-1">
              <FaEnvelope className="mr-2 text-blue-600" aria-label="Email" />
              Admin@makhensaglobalictservices.com
            </p>
            <p className="flex items-center mb-3 mt-3"> 
              <FaPhone className='mr-2 text-green-600' aria-label="Telephone" />
              010 023 4034 
            </p>
            <p className="flex items-center mb-5">
              <FaMapMarkerAlt className="mr-2 text-red-600" aria-label="Location" />
              Office 04 Makhensa Global ICT Services,Malamulele, South Africa
            </p>
            <p className="flex items-center mb-5">
              <FaMapMarkerAlt className="mr-2 text-red-600" aria-label="Location" />
              Uni Park Building, Nobel St, Brandwag, Bloemfontein 9301
            </p>
            <p className="flex items-center mb-5">
              <FaMapMarkerAlt className="mr-2 text-red-600" aria-label="Location" />
              58-60 Landros Mare Street, Thabakgolo Building, 3rd Floor, Polokwane 0700
            </p>
          </div>
          <div className="flex space-x-8 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61572482734254" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 hover:text-blue-800 transform hover:scale-125 transition-transform duration-200" />
            </a>
            <a href="https://chat.whatsapp.com/GfJYfhWRSGl0OzM6GXl0uX " target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-600 hover:text-green-800 transform hover:scale-125 transition-transform duration-200" />
            </a>
           
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 hover:text-blue-900 transform hover:scale-125 transition-transform duration-200" />
            </a>
          </div>
        </div>
        <div className="mb-8 md:w-1/2 mx-4 md:mr-24">
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%&height=400&hl=en&q=Makhensa%20Global%20&ll=-23.0004206,30.6912809&z=14&ie=UTF8&iwloc=B&output=embed"
          title="Google Map"
          className="rounded-xl shadow-2xl"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>
      </motion.div>

      <hr className="border-t border-gray-300 my-12" />
      
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto mb-10">
        {submitted && <p className="text-green-500 mb-4 text-center">Thank you for your message!</p>}
        <form onSubmit={handleSubmit}>
          <h3 className='font-semibold text-2xl text-blue-800 mb-5 text-center font-poppins'>Connect</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full p-3 border-b ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none transition duration-200 hover:border-green-500`}
                aria-invalid ={errors.name ? "true" : "false"}
                aria-describedby="name-error"
                required
              />
            </label>
            {errors.name && <p id="name-error" className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full p-3 border-b ${errors.email ? 
                  'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none transition duration-200 hover:border-green-500`}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby="email-error"
                required
              />
            </label>
            {errors.email && <p id="email-error" className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full p-3 border-b ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none transition duration-200 hover:border-green-500`}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby="message-error"
                required
              />
            </label>
            {errors.message && <p id="message-error" className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          <button 
            type="button" 
            onClick={handleClear}
            className="w-full mt-2 bg-gray-300 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-400 transition duration-200"
          >
            Clear
          </button>
        </form>
      </div>

      {/* Fixed WhatsApp Button with Logo */}
      <div className="fixed bottom-5 right-5 z-50">
        <a 
          ref={buttonRef}
          href="https://wa.me/YourPhoneNumber?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-500 flex items-center"
          aria-label="Contact us on WhatsApp"
        >
          Contact Us on WhatsApp
          <FaWhatsapp className="mr-2 m-2" />
        </a>
      </div>
    </>
  );
};

export default ContactUs;