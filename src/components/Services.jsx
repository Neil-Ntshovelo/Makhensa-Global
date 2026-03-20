import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaGraduationCap, FaServer, FaWhatsapp } from "react-icons/fa";
import { fadeIn } from "../variants";
import ServiceCard from "./ServiceCard";



const Services = () => {
  const navigate = useNavigate();

  const handleReadMore = useCallback(
    (id) => {
      navigate(`/services-items/${id}`);
    },
    [navigate]
  );


  // Memoized services data
  const services = useMemo(
    () => [
      {
        id: 1,
        title: "Makhensa Global Tech Solutions",
        icon: FaServer,
        description:
          "We provide advanced ICT services designed to enhance operational efficiency, improve customer experiences, and support digital transformation for modern businesses.",
      },
      {
        id: 2,
        title: "Internships & Learnerships",
        icon: FaGraduationCap,
        description:
          "Our work-based learning programs provide students with real industry experience while developing professional and technical skills required in today's workplace.",
      },
      {
        id: 3,
        title: "Professional Training Courses",
        icon: FaChalkboardTeacher,
        description:
          "We offer structured training programs that assess, develop, and certify professional competencies to support career advancement and business growth.",
      },
    ],
    []
  );


  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-blue-900">

        <div className="relative text-center max-w-4xl px-6">

          <motion.h1
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Transforming Ideas Into
            <span className="text-cyan-400"> Digital Solutions</span>
          </motion.h1>

          <p className="text-white/80 mt-6 text-lg">
            Delivering innovative ICT services, professional training,
            and business solutions that empower organizations and
            individuals to succeed in the digital economy.
          </p>

        </div>

      </section>


      {/* INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Small Beginnings Lead to
            <span className="text-cyan-500"> Great Achievements</span>
          </h2>

          <p className="text-blue-900/70 mb-6 text-lg">
            At Makhensa Global ICT Services, we believe in empowering
            businesses and individuals through innovative technology,
            professional development, and strategic support.
          </p>

          <p className="text-blue-900/70 text-lg">
            With over a decade of experience, we provide high-quality
            ICT solutions, training programs, and industry-focused
            services that drive growth and long-term success.
          </p>
        </motion.div>


        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="clay-card rounded-2xl p-12 shadow-xl text-center"
        >
          <FaServer className="text-cyan-500 text-7xl mx-auto" />
          <p className="text-blue-900/70 mt-4">Reliable delivery. Clear outcomes.</p>
        </motion.div>

      </section>



      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>

          <p className="text-blue-900/70 max-w-2xl mx-auto">
            We provide a comprehensive range of ICT services,
            professional training, and business support solutions
            designed to help organizations succeed in a digital world.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onReadMore={handleReadMore}
            />
          ))}

        </div>

      </section>



      {/* BUSINESS SECTION */}
      <section className="bg-blue-900 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Elevating Business Performance With ICT
          </h2>

          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our dedicated team delivers reliable ICT solutions that
            help businesses adapt, innovate, and grow in an evolving
            digital landscape. We combine industry expertise with
            cutting-edge technology to ensure measurable results.
          </p>

        </div>

      </section>



      {/* WHATSAPP CTA */}
      <div className="fixed bottom-6 right-6 z-50">

        <a
          href="https://wa.me/0818331003"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 transition"
        >
          Chat With Us
          <FaWhatsapp />
        </a>

      </div>

    </div>
  );
};

export default Services;