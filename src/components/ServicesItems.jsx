import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";

import First from "../assets/first.avif";
import Second from "../assets/Second.avif";
import Third from "../assets/three.avif";

const services = [
  {
    id: 1,
    title: "Makhensa Global Tech Solutions",
    description:
      "We provide enterprise-grade ICT services designed to help organizations scale, innovate, and remain competitive in a rapidly evolving digital landscape.",
    items: [
      "IT Consulting",
      "Cloud Solutions",
      "Software Development",
      "Network Infrastructure",
      "Managed IT Services",
      "Technical Support & HelpDesk",
      "Data Analytics & Business Intelligence",
    ],
    image: First,
  },
  {
    id: 2,
    title: "Makhensa Global Internships & Learnerships",
    description:
      "Our internship and learnership programs empower graduates and professionals with real workplace experience, helping them develop critical industry skills.",
    items: [
      "External Auditor",
      "ICT Systems & Data Administrator",
      "Financial Accountant",
      "Organisation Risk Manager",
      "Tax Professional",
      "Software Developer",
      "Financial Investment Advisor",
      "Programme Analyst",
      "Accountant",
      "Forensic Auditor / Investigator",
      "Database Administrator",
      "Tax Analyst",
      "Software Designer",
      "Financial Agent",
      "Educational Systems Coordinator",
    ],
    image: Second,
  },
  {
    id: 3,
    title: "Makhensa Global Training Courses",
    description:
      "Our professional training programs evaluate and strengthen existing knowledge and skills to support career growth, professional recognition, and lifelong learning.",
    items: [
      "Professional ICT Development",
      "Corporate Skills Development",
      "Leadership & Digital Transformation",
    ],
    image: Third,
  },
];

const ServicesItems = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        Service not found
      </div>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate("/services-items")}
          className="flex items-center gap-2 text-blue-700 mb-10 hover:text-blue-900 transition"
        >
          <FaArrowLeft />
          Back to Services
        </button>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="w-full h-[420px] object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              {service.title}
            </h1>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {service.description}
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-5">
              Services Offered
            </h3>

            <div className="grid sm:grid-cols-2 gap-3">
              {service.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white shadow-sm p-3 rounded-lg hover:shadow-md transition"
                >
                  <FaCheckCircle className="text-yellow-500 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button
                onClick={() => navigate("/contact")}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition"
              >
                Contact Our Team
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesItems;