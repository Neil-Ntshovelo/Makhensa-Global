import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import First from '../assets/first.avif';
import Second from '../assets/Second.avif';
import Third from '../assets/three.avif';

const services = [
    {
        id: 1,
        title: 'Makhensa Global Tech Solutions',
        description: 'We provide outstanding customer experiences through our wide range of services, focusing on customer satisfaction and engagement.',
        items: [
            'IT Consulting',
            'Cloud Solutions',
            'Software Development',
            'Network Infrastructure',
            'Managed IT Services',
            'Technical Support and HelpDesk',
            'Data Analytics and Business Intelligence',
        ],
        image: First,
    },
    {
        id: 2,
        title: 'Makhensa Global Internships And Learnerships',
        description: 'Work-based learning experience at a company where you perform entry-level tasks. It resembles a job because you engage in real work that professionals do, but the main goal is to learn about the workplace and develop skills.',
        items: [
            'External Auditor',
            'ICT Systems, Data Designer and Administrator',
            'Financial Account',
            'Organisation Risk Manager',
            'Tax Professional',
            'Software Developer',
            'Financial Investment Advisor',
            'Programme Analyst',
            'Accountant',
            'Forensic Auditor/Investigator',
            'Database Administrator',
            'Tax Analyst',
            'Software Designer',
            'Financial Agent',
            'Educational Systems Coordinator',
        ],
        image: Second,
    },
    {
        id: 3,
        title: 'Makhensa Global Training Course',
        description: 'Principles and processes that help identify and evaluate a person\'s existing knowledge and skills. The goal is to ensure these are clearly recognized and assessed for alternative access, admission, or opportunities for further learning and development.',
        items: [
            'Training Course 1',
            'Training Course 2',
            'Training Course 3',
        ],
        image: Third,
    },
];

const ServicesItems = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = services.find(service => service.id === parseInt(id));

    if (!service) {
        return <div className="p-6 text-center text-red-500">Service not found</div>;
    }

    return (
        <div className="max-w-full h-auto mx-auto p-6 bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex justify-center items-center">
                <img 
                    src={service.image} 
                    alt={`${service.title} illustration`} 
                    className="w-3/5 h-auto object-cover rounded-lg" 
                />
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-blue-900 mb-4">{service.title}</h1>
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">Services Offered:</h3>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    {service.items.map((item, index) => (
                        <li key={index} className="text-yellow-700 text-lg">{item}</li>
                    ))}
                </ul>
                <div className="mt-6">
                    <button 
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                        onClick={() => navigate('/services-items')}
                    >
                        Back to Services
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ServicesItems;