import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-gray-100 p-8 rounded-xl shadow-lg max-w-4xl mx-auto mt-10 mb-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6 text-center">
        What Our Students Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <p className="text-lg text-gray-700 mb-4">{testimonial.quote}</p>
            <p className="text-right text-blue-600 font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const testimonials = [
  { quote: "Makhensa Global IT & Business College has transformed my career. The support and resources provided were invaluable!", name: "Student Name 1" },
  { quote: "The entrepreneurial mindset I developed here has helped me launch my own successful business.", name: "Student Name 2" },
  { quote: "The practical training and mentorship I received were key to my success in the business world.", name: "Student Name 3" },
  { quote: "I am grateful for the opportunities and connections I made during my time at Makhensa Global.", name: "Student Name 4" },
  { quote: "The college provided me with the tools I needed to excel in my career. Highly recommend!", name: "Student Name 5" },
  { quote: "I learned so much about business management and entrepreneurship. The instructors were fantastic!", name: "Student Name 6" },
  { quote: "The networking opportunities were invaluable. I made connections that helped me launch my startup.", name: "Student Name 7" },
  { quote: "Makhensa Global has a great community of students and alumni. I felt supported throughout my journey.", name: "Student Name 8" },
];

export default Testimony;