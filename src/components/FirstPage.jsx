import React from 'react';
import cover from '../assets/cover.jpg';
import MainPage from './MainPage';
import Services from './Services';
import Impact from './Impact';
import Partners from './Partners';

const FirstPage = () => {
    return (
        <>
            <div className="relative h-screen">
                <img 
                    src={cover} 
                    alt="Cover Image" 
                    className='w-full h-full object-cover rounded-b-xl' 
                /> 
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="text-2xl sm:text-5xl lg:text-4xl 
                    font-extrabold bg-clip-text text-transparent 
                    bg-gradient-to-br from-white to-zinc-300 mb-10 mt-20">
                        Embark on a Life Changing Opportunity
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-zinc-100 mb-10">
                        Build Confidence, Enhance your skills, Learn new Skills and <span className='text-yellow-500 font-semibold'><br /> 
                        Get your Technology solutions</span>
                    </p>
                </div>
            </div>
            <div>
                <MainPage />
                <Services />
                <Impact />
                <Partners />
            </div>
        </>
    );
}

export default FirstPage;