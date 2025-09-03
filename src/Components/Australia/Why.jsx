import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaShieldAlt, FaBriefcase, FaMapMarkedAlt, FaBalanceScale, FaLanguage } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaUniversity className="text-indigo-600 text-3xl" />,
    title: 'Top-Ranked Universities & Research Focus',
    desc: 'Australia is home to globally recognized universities with a strong emphasis on research and innovation.',
  },
  {
    icon: <FaShieldAlt className="text-indigo-600 text-3xl" />,
    title: 'Safe & Multicultural Society',
    desc: 'A welcoming, English-speaking environment that embraces cultural diversity and student safety.',
  },
  {
    icon: <FaBriefcase className="text-indigo-600 text-3xl" />,
    title: 'Work While Studying',
    desc: 'Students can work part-time during studies and access strong post-study work visa options.',
  },
  {
    icon: <FaMapMarkedAlt className="text-indigo-600 text-3xl" />,
    title: 'Pathway to PR',
    desc: 'Australia offers skilled graduates various options to transition to Permanent Residency (PR).',
  },
  {
    icon: <FaBalanceScale className="text-indigo-600 text-3xl" />,
    title: 'High Quality of Life',
    desc: 'Benefit from excellent healthcare, infrastructure, and overall student well-being.',
  },
  {
    icon: <FaLanguage className="text-indigo-600 text-3xl" />,
    title: 'Strong Student Support',
    desc: 'Universities offer extensive academic and career support for international students.',
  },
];

const WhyAustralia = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Why Study in Australia?
        </h2>
        <p className="text-lg text-gray-600">
          Discover what makes Australia a top destination for international students.
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

export default WhyAustralia;
