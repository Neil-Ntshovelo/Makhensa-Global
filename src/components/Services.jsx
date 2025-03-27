import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import StartUP from '../assets/startUP.webp';
import TeamWork from '../assets/teamwork.webp';
import student from '../assets/student.webp';
import Business from '../assets/business.webp';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import backGround from '../assets/a.avif';


const ServiceCard = ({ title, imgSrc, description, onReadMore, id }) => (
    <div className='bg-blue-900 shadow-lg rounded-lg p-4 m-2 w-lg sm:w-full md:w-full lg:w-full transition-transform duration-700 transform hover:scale-100 ease-in-out'>
        <h3 className='text-yellow-400 text-2xl font-semibold mb-2'>{title}</h3>
        <img src={imgSrc} alt={`${title} illustration`} className='w-full h-20 object-contain rounded-md mb-5' loading="lazy" />
        <p className='text-gray-200 text-lg mb-4'>{description}</p>
        <button 
            className='bg-yellow-400 text-gray-500 py-2 px-4 rounded hover:bg-yellow-500 transition duration-300' 
            onClick={() => onReadMore(id)} 
            aria-label={`Read more about ${title}`}
        >
            Read more...
        </button>
    </div>
);

const Services = () => {
    const navigate = useNavigate();

    const handleReadMore = useCallback((id) => {
        navigate(`/services-items/${id}`);
    }, [navigate]);

    const services = [
        {
            id: 1,
            title: 'Makhensa Global Tech Solutions',
            imgSrc: TeamWork,
            description: 'We provide outstanding customer experiences through our wide range of services, focusing on customer satisfaction and engagement.',
        },
        {
            id: 2,
            title: 'Makhensa Global Internships And Learnerships',
            imgSrc: student,
            description: 'Work-based learning experience at a company where you perform entry-level tasks. It resembles a job because you engage in real work that professionals do, but the main goal is to learn about the workplace and develop skills.',
        },
        {
            id: 3,
            title: 'Makhensa Global Training Course',
            imgSrc: Business,
            description: 'Principles and processes that help identify and evaluate a person\'s existing knowledge and skills. The goal is to ensure these are clearly recognized and assessed for alternative access, admission, or opportunities for further learning and development.',
        },
    ];

    return (
        <div className='relative bg-zinc-100 min-h-screen'>
            <div className='mt-6'>
                <div className='flex flex-col md:flex-row items-center'>
                    <motion.div 
                        variants={fadeIn("right", 0.01)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.01 }}
                        className='m-10 flex-1'
                    >
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-semibold text-slate-600 mb-3'>
                            With small <br /> Beginnings, <br /> Comes Greater <br />
                            <em className='text-yellow-600'>Things.</em>
                        </h1>
                        <img src={StartUP} alt='Start-up illustration' className='rounded-3xl w-full md:w-2/3' />
                    </motion.div>
                    <div className='m-5 flex-1'>
                        <h2 className='flex justify-center items-center text-gray-700 text-2xl bg-yellow-300 
                        max-w-sm px-5 py-2 rounded-tl-full rounded-tr-full'>
                            Explore Our Services
                        </h2>
                        <div className='flex flex-wrap justify-center p-6 bg-gray-100 rounded-b-lg'>
                            {services.map(service => (
                                <ServiceCard 
                                    key={service.id} 
                                    {...service}
                                    onReadMore={handleReadMore}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${backGround})` }}
                    className="bg-contain bg-center min-h-36"
                >
                    <div className='flex flex-col md:flex-row justify-between items-center mt-20 flex-grow'>
                        <motion.div
                            variants={fadeIn("right", 0.01)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.1 }}
                            className='bg-gray-200 rounded-2xl m-5 p-6 flex-1 shadow-lg bg-transparent '
                        >
                            <h2 className='text-blue-700 text-4xl md:text-3xl font-bold mb-4'>
                                Elevating Business Performance <br /> with Unmatched ICT Services
                            </h2>
                            <p className='text-gray-600 text-lg mb-6'>
                                We pride ourselves on delivering exceptional speed and unwavering reliability in our ICT solutions. 
                                With over 10 years of industry experience, our dedicated team is committed to providing valuable insights and high-quality services that enable your business to succeed. 
                                We understand the unique challenges faced by businesses today and tailor our solutions to meet your specific needs. 
                                Our expertise spans various sectors, 
                                ensuring that we can support your growth and innovation in an ever-evolving digital landscape.  
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div className="fixed bottom-5 right-5 z-50">
                    <a 
                        href="https://wa.me/YourPhoneNumber?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow -lg hover:bg-green-600 transition duration-500 flex items-center"
                        aria-label="Contact us on WhatsApp"
                    >
                        Contact Us on WhatsApp
                        <FaWhatsapp className="mr-2 m-2" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;