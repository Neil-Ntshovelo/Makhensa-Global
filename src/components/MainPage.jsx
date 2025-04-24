import React from 'react';
import { motion } from 'framer-motion'; // Add this line
import { fadeIn } from '../variants'; // Ensure this is also imported if used

const MainPage = () => {
  return (
    <section className="mt-8 sm:mt-20 px-4">
      <h2 className="flex justify-center text-blue-700 font-bold text-4xl sm:text-7xl mb-4 sm:mb-12">
        Makhensa Global
      </h2>
      <article className="flex justify-center items-center text-center max-w-2xl mx-auto mt-2 p-8 rounded-[80px] shadow-lg">
        <motion.p
          variants={fadeIn("up", 0.01)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
          className="text-gray-600 text-md sm:text-4xl md:text-lg mb-3 sm:mb-8"
        >
          Makhensa Global ICT Services is dedicated to providing top-notch ICT solutions tailored to 
          elevate your business operations. Our Data Science acceleration, 
          various IT programs, and full customer experience services are designed to propel your
          business to new heights.
        </motion.p>
      </article>
    </section>
  );
}

export default MainPage;