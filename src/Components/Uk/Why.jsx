import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaClock, FaBriefcase, FaGlobe, FaMapMarkedAlt } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaUniversity className="text-indigo-600 text-3xl" />,
    title: 'Globally Recognized Education',
    desc: 'Prestigious universities & research focus.'
  },
  {
    icon: <FaClock className="text-indigo-600 text-3xl" />,
    title: 'Shorter Course Duration',
    desc: '1-year Master’s programs save time & costs.'
  },
  {
    icon: <FaBriefcase className="text-indigo-600 text-3xl" />,
    title: 'Post-Study Work Opportunities',
    desc: '2-3 years stay after graduation.'
  },
  {
    icon: <FaGlobe className="text-indigo-600 text-3xl" />,
    title: 'Diverse & Multicultural Society',
    desc: 'Large international student population.'
  },
  {
    icon: <FaMapMarkedAlt className="text-indigo-600 text-3xl" />,
    title: 'Gateway to Europe',
    desc: 'Travel & internship opportunities across Europe.'
  }
];

const WhyUk = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Why Study in the UK?
        </h2>
        <p className="text-lg text-gray-600">
          Discover what makes the UK one of the top choices for international students.
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

export default WhyUk;
