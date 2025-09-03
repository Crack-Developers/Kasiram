import React from 'react';
import { motion } from 'framer-motion';
import { FaLanguage, FaBriefcase, FaMapMarkedAlt, FaShieldAlt, FaRegCheckCircle } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaLanguage className="text-blue-600 text-3xl" />,
    title: 'World-Class Education',
    desc: 'The United States is home to top universities and research opportunities, making it an ideal destination for academic excellence.',
  },
  {
    icon: <FaBriefcase className="text-blue-600 text-3xl" />,
    title: 'Diverse Course Options',
    desc: 'U.S. institutions offer flexible curricula with interdisciplinary studies, allowing students to choose from a wide range of courses.',
  },
  {
    icon: <FaMapMarkedAlt className="text-blue-600 text-3xl" />,
    title: 'Career Prospects',
    desc: 'Studying in the U.S. provides access to global job markets, internships, and career opportunities in various industries.',
  },
  {
    icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
    title: 'Cultural Exposure',
    desc: 'Experience a mix of cultures, with global networking opportunities and exposure to diverse perspectives.',
  },
  {
    icon: <FaRegCheckCircle className="text-blue-600 text-3xl" />,
    title: 'Higher Earning Potential',
    desc: 'U.S. degrees are highly valued worldwide, offering higher earning potential and career advancement opportunities.',
  },
];

const WhyUS = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Why Study in the United States?
        </h2>
        <p className="text-lg text-gray-600">
          Discover why the U.S. is one of the top destinations for international students.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-blue-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="mb-4 flex items-center justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUS;
