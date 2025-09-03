import React, { useState } from "react";
import img1 from '../../assets/testrimonials/1.jpeg'
import img2 from '../../assets/testrimonials/2.jpeg'

const testimonials = [
  {
    id: 1,
    name: "Linith jothiyani",
    country: "University of galway,Ireland",
    image: img1,
    review:
      "Kasiram Overseas isn’t like those random consultancies out there. Gowthami ma’am really took the time to guide me properly and helped me find the right course and university that fit me best. The whole process felt super smooth and stress-free because of her support. Truly grateful, and I’d definitely recommend them to anyone planning to study abroad!",
  },
  {
    id: 2,
    name: "V K SANJITH KUMAR",
    country: "Singapore",
    image: img2,
    review:
      "The application process to Singapore was a transformative experience for me. From the initial research phase to final acceptance, every step was guided by the invaluable support of my counselor. They provided clear, strategic advice on choosing the right program and preparing a compelling application. I meticulously crafted my personal statement, highlighting my passion for economics and my academic aspirations. The counselor's insights into the nuances of the application process and their assistance in meeting deadlines were crucial. Once accepted, I felt a profound sense of accomplishment and excitement about beginning my studies at the Singapore Institute of Management. This journey not only demonstrated the importance of professional guidance but also marked the start of an enriching chapter in a city renowned for its dynamic environment and diverse opportunities.",
  },
  
];

const Testrimonial = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-white">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-blue-600">
          Our Success Stories
        </h2>
        <p className="text-gray-600 mt-2 text-lg">
          Dreams turned into reality by our students
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative w-full h-80 cursor-pointer perspective"
            onClick={() => handleFlip(testimonial.id)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedCards[testimonial.id] ? "rotate-y-180" : ""
              }`}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center backface-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-400"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-blue-600 font-semibold">
                  {testimonial.country}
                </p>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full bg-blue-600 text-white rounded-2xl flex items-center justify-center p-4 text-center rotate-y-180 backface-hidden">
                <p className="text-lg italic">{testimonial.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add styles for 3D flip */}
      <style>
        {`
          .perspective {
            perspective: 1000px;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
        `}
      </style>
    </div>
  );
};

export default Testrimonial;
