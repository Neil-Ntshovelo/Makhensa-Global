import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Seta from '../assets/th.jpeg';
import MictSeta from '../assets/mictseta.jpeg';
import Cisco from '../assets/cisco.jpeg';


const Partners = () => {
  const slideImages = [
    { url: Seta, caption: 'Seta Partnership' },
    { url: MictSeta, caption: 'Mict Setas Partnership' },
    { url: Cisco, caption: 'Cisco Partnership' },
  ];

  return (
    <div className='py-10 bg-white'>
      <div className='text-center'>
        <h3 className='text-2xl font-bold mb-6 text-yellow-600'>
          Our <br /> Collaborative <br /> Partnerships
        </h3>
        <div className='max-w-2xl mx-auto relative'>
          <Slide 
            autoplay={true}
            duration={750} 
            transitionDuration={1000} 
            arrows={false} 
            
          >
            {slideImages.map((slideImage, index) => (
              <div className='flex flex-col items-center' key={index}>
                <img 
                  src={slideImage.url} 
                  alt={slideImage.caption} 
                  className='w-20 h-auto object-fill sm:w-32 md:w-32 lg:w-32 transition-transform duration-300 hover:scale-105' 
                />
               
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default Partners;