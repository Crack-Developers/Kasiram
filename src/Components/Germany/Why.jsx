import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaShieldAlt, FaBriefcase, FaMapMarkedAlt, FaBalanceScale, FaLanguage } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaUniversity className="text-indigo-600 text-3xl" />,
    title: 'Tuition-Free Education at Public Universities',
    desc: 'Germany offers tuition-free education at most public universities, making it an affordable destination for international students.',
  },
  {
    icon: <FaShieldAlt className="text-indigo-600 text-3xl" />,
    title: 'Globally Recognized Degrees',
    desc: 'German universities offer high-quality education with degrees that are recognized worldwide, enhancing employability.',
  },
  {
    icon: <FaBriefcase className="text-indigo-600 text-3xl" />,
    title: 'Affordable Living Costs',
    desc: 'Germany offers relatively low living costs compared to other EU countries, making it more accessible for students.',
  },
  {
    icon: <FaMapMarkedAlt className="text-indigo-600 text-3xl" />,
    title: 'Industry-Academia Collaboration',
    desc: 'Germany has strong collaboration between universities and industries, providing excellent opportunities for research and internships.',
  },
  {
    icon: <FaBalanceScale className="text-indigo-600 text-3xl" />,
    title: 'Post-Study Work & PR Pathway',
    desc: 'Germany offers generous post-study work options and a clear pathway to Permanent Residency (PR) for skilled graduates.',
  },
  {
    icon: <FaLanguage className="text-indigo-600 text-3xl" />,
    title: 'Safe & Culturally Rich Environment',
    desc: 'Germany provides a safe, modern, and culturally rich environment for international students to live and study.',
  },
];

const WhyGermany = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Why Study in Germany?
        </h2>
        <p className="text-lg text-gray-600">
          Discover why Germany is one of the most attractive destinations for international students.
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
            className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-indigo-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
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

export default WhyGermany;
