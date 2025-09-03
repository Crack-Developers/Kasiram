import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaShieldAlt, FaBriefcase, FaMapMarkedAlt, FaBalanceScale, FaLanguage } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaUniversity className="text-indigo-600 text-3xl" />,
    title: 'Affordable Tuition at Public Universities',
    desc: 'Spain offers affordable tuition at public universities, making it a great destination for international students looking for quality education at a lower cost.',
  },
  {
    icon: <FaShieldAlt className="text-indigo-600 text-3xl" />,
    title: 'Culturally Rich & Student-Friendly Cities',
    desc: 'Spain is home to culturally rich cities with a welcoming and student-friendly environment, perfect for international students.',
  },
  {
    icon: <FaBriefcase className="text-indigo-600 text-3xl" />,
    title: 'Study in English with Immersion in Spanish Culture',
    desc: 'Many universities in Spain offer programs in English, while still allowing you to immerse yourself in the local Spanish culture.',
  },
  {
    icon: <FaMapMarkedAlt className="text-indigo-600 text-3xl" />,
    title: 'Access to Schengen Travel & Erasmus+ Opportunities',
    desc: 'Studying in Spain grants access to Schengen Area travel and participation in Erasmus+ programs, enhancing global mobility.',
  },
  {
    icon: <FaBalanceScale className="text-indigo-600 text-3xl" />,
    title: 'Warm Climate, Relaxed Lifestyle, & Excellent Cuisine',
    desc: 'Spain is known for its warm climate, relaxed lifestyle, and world-class cuisine, providing an excellent balance between study and leisure.',
  },
  {
    icon: <FaLanguage className="text-indigo-600 text-3xl" />,
    title: 'Opportunities to Work, Intern, and Settle in the EU',
    desc: 'Spain offers great opportunities for international students to work, intern, and even settle in the EU after graduation.',
  },
];

const WhySpain = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Why Study in Spain?
        </h2>
        <p className="text-lg text-gray-600">
          Discover why Spain is one of the most attractive destinations for international students.
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

export default WhySpain;
