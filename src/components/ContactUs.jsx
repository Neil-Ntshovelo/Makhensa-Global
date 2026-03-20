import React, { useState, useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Contact from "../assets/contact.avif";
import { useLocation } from "react-router-dom";

const ContactUs = () => {
  const buttonRef = useRef(null);
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

    if (!formData.name) newErrors.name = "Name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.message) newErrors.message = "Message is required";

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

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

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

  // Prefill message for "Apply / Enquire" actions from Opportunities/Jobs pages
  useEffect(() => {
    const prefillMessage = location?.state?.prefillMessage;
    if (!prefillMessage || submitted) return;

    setFormData((prev) => {
      if (prev.message) return prev;
      return { ...prev, message: prefillMessage };
    });
  }, [location?.state, submitted]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center justify-center">

        <img
          src={Contact}
          alt="Contact Us"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center max-w-3xl px-6">

          <motion.h1
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Get In Touch With Us
          </motion.h1>

          <p className="text-gray-200 mt-6 text-lg">
            Our team is ready to assist you with any inquiries about our
            services, training programs and technology solutions.
          </p>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>

            <p className="text-gray-600 mb-8">
              Whether you have questions about our services or need assistance,
              our team is here to help.
            </p>

            <div className="space-y-4 text-gray-700">

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                Admin@makhensaglobalictservices.com
              </p>

              <p className="flex items-center gap-3">
                <FaPhone className="text-green-600" />
                010 023 4034
              </p>

              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-600 mt-1" />
                Office 04 Makhensa Global ICT Services, Malamulele, South Africa
              </p>

              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-600 mt-1" />
                Uni Park Building, Nobel St, Brandwag, Bloemfontein
              </p>

              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-600 mt-1" />
                58-60 Landros Mare Street, Thabakgolo Building, Polokwane
              </p>

            </div>

            {/* SOCIAL MEDIA */}
            <div className="flex gap-6 mt-8 text-xl">

              <a href="https://www.facebook.com/profile.php?id=61572482734254">
                <FaFacebook className="text-blue-600 hover:scale-125 transition" />
              </a>

              <a href="https://wa.me/0818331003">
                <FaWhatsapp className="text-green-600 hover:scale-125 transition" />
              </a>

              <a href="https://www.linkedin.com">
                <FaLinkedin className="text-blue-700 hover:scale-125 transition" />
              </a>

            </div>

          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="clay-card p-8 rounded-xl"
          >

            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Us A Message
            </h3>

            {submitted && (
              <p className="text-green-600 mb-4">
                Thank you! Your message has been sent.
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-600"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-600"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-600"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </motion.div>

        </div>

      </section>

      {/* GOOGLE MAP */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <iframe
          width="100%"
          height="400"
          src="https://maps.google.com/maps?width=100%&height=400&hl=en&q=Makhensa%20Global%20&ll=-23.0004206,30.6912809&z=14&ie=UTF8&iwloc=B&output=embed"
          className="rounded-xl shadow-xl"
          title="Google Map"
        />

      </section>

      {/* WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          ref={buttonRef}
          href="https://wa.me/0818331003"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2"
        >
          Chat With Us
          <FaWhatsapp />
        </a>
      </div>
    </>
  );
};

export default ContactUs;