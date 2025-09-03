import React from 'react';
import { motion } from 'framer-motion';
import { FaLanguage, FaBriefcase, FaMapMarkedAlt, FaShieldAlt, FaRegCheckCircle } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaLanguage className="text-green-600 text-3xl" />,
    title: 'English-Speaking, Safe & Welcoming Environment',
    desc: 'Ireland offers an English-speaking environment that is safe and welcoming, making it an ideal destination for international students.',
  },
  {
    icon: <FaBriefcase className="text-green-600 text-3xl" />,
    title: 'Strong Presence of Multinational Companies',
    desc: 'Ireland is home to many global companies, providing students with significant opportunities for internships and employment.',
  },
  {
    icon: <FaMapMarkedAlt className="text-green-600 text-3xl" />,
    title: 'High Employability for STEM & Business Graduates',
    desc: 'Ireland’s education system provides strong employability options, especially for STEM and business graduates, due to its growing tech and business industries.',
  },
  {
    icon: <FaShieldAlt className="text-green-600 text-3xl" />,
    title: 'Part of the EU – Access to Schengen Countries',
    desc: 'Studying in Ireland gives you the added benefit of being part of the EU, providing access to Schengen countries for travel and exploration.',
  },
  {
    icon: <FaRegCheckCircle className="text-green-600 text-3xl" />,
    title: 'Post-Study Work Visas & Permanent Residency Options',
    desc: 'Ireland offers post-study work visas and opportunities for permanent residency, allowing graduates to continue their career in Ireland.',
  },
];

const WhyIreland = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Why Study in Ireland?
        </h2>
        <p className="text-lg text-gray-600">
          Discover what makes Ireland an attractive destination for international students.
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
            className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-green-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
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

export default WhyIreland;
