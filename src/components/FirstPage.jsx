import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cover from "../assets/cover.jpg";

import MainPage from "./MainPage";
import Services from "./Services";
import Impact from "./Impact";
import Partners from "./Partners";

const FirstPage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <img
          src={cover}
          alt="Corporate Technology Training"
          className="absolute w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Empower Your Future Through{" "}
            <span className="text-yellow-400">
              Technology & Innovation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Develop industry-ready digital skills, grow your professional
            confidence, and access innovative technology solutions designed
            for modern businesses and future leaders.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/services"
              className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-lg transition"
            >
              Explore Programs
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <section className="bg-gray-50">
        <MainPage />
        <Services />
        <Impact />
        <Partners />
      </section>
    </>
  );
};

export default FirstPage;