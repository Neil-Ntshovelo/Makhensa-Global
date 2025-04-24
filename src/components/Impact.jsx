import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Impact = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
          <div className='mt-8 bg-gray-100 py-10 rounded-2xl m-2'>
              <motion.h3 
                  variants={fadeIn("up", 0.01)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.5 }}
                  className='text-3xl text-yellow-600 font-semibold text-center mb-5'>Our Impact</motion.h3>
              <div className='flex flex-col md:flex-row justify-evenly items-center'>
                  {counterOn && (
                      <>
                          <div className='flex flex-col items-center mb-8 md:mb-0'>
                              <div className='flex items-center'>
                                  <CountUp start={0} end={10} duration={3} delay={0.5} className='text-blue-400 font-bold text-4xl animate-pulse' />
                                  <FaPlus className='ml-2 text-blue-400 animate-pulse' />
                              </div>
                              <p className='mt-2 text-gray-700 font-semibold text-center'>Years of Industry Experience</p>
                          </div>
                          <div className='flex flex-col items-center mb-8 md:mb-0'>
                              <div className='flex items-center'>
                                  <CountUp start={0} end={50} duration={3} delay={0.5} className='text-blue-400 font-bold text-4xl animate-pulse' />
                                  <FaPlus className='ml-2 text-blue-400 animate-pulse' />
                              </div>
                              <p className='mt-2 text-gray-700 font-semibold text-center'>Successful Projects Completed</p>
                          </div>
                          <div className='flex flex-col items-center mb-8 md:mb-0'>
                              <div className='flex items-center'>
                                  <CountUp start={0} end={100} duration={3} delay={0.5} className='text-blue-400 font-bold text-4xl animate-pulse' />
                                  <FaPlus className='ml-2 text-blue-400 animate-pulse' />
                              </div>
                              <p className='mt-2 text-gray-700 font-semibold text-center'>Satisfied Clients</p>
                          </div>
                          <div className='flex flex-col items-center'>
                              <div className='flex items-center'>
                                  <CountUp start={0} end={9} duration={3} delay={0.5} className='text-blue-400 font-bold text-4xl animate-pulse' />
                              </div>
                              <p className='mt-2 text-gray-700 font-semibold text-center'>South African Provinces Recognition</p>
                          </div>
                      </>
                  )}
              </div>
          </div>
      </ScrollTrigger>
  );
};

export default Impact;