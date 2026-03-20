import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimony = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
          What Our Students Say
        </h2>

        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Hear from students and professionals who have experienced the
          transformative education and mentorship at Makhensa Global ICT &
          Business College.
        </p>

        {/* SLIDER */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="clay-card rounded-2xl p-10 mx-4 transition duration-500 hover:transform hover:-translate-y-0.5">

                {/* QUOTE ICON */}
                <FaQuoteLeft className="text-yellow-400 text-3xl mb-4 mx-auto" />

                {/* QUOTE */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {testimonial.quote}
                </p>

                {/* AUTHOR */}
                <div className="flex flex-col items-center">

                  {/* AVATAR */}
                  <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold mb-2">
                    {testimonial.name.charAt(0)}
                  </div>

                  <p className="text-blue-900 font-semibold">
                    {testimonial.name}
                  </p>

                </div>

              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
};

const testimonials = [
  {
    quote:
      "Makhensa Global IT & Business College has transformed my career. The support and resources provided were invaluable!",
    name: "Nhlalala M",
  },
  {
    quote:
      "The entrepreneurial mindset I developed here has helped me launch my own successful business.",
    name: "H. Maluleke",
  },
  {
    quote:
      "The practical training and mentorship I received were key to my success in the business world.",
    name: "K.T Hanyani",
  },
  {
    quote:
      "I am grateful for the opportunities and connections I made during my time at Makhensa Global.",
    name: "M Mabyeni",
  },
  {
    quote:
      "The college provided me with the tools I needed to excel in my career. Highly recommend!",
    name: "V Mashaba",
  },
  {
    quote:
      "I learned so much about business management and entrepreneurship. The instructors were fantastic!",
    name: "N.H Mashaba",
  },
  {
    quote:
      "The networking opportunities were invaluable. I made connections that helped me launch my startup.",
    name: "N Mkhize",
  },
  {
    quote:
      "Makhensa Global has a great community of students and alumni. I felt supported throughout my journey.",
    name: "S.J Maswanganyi",
  },
];

export default Testimony;