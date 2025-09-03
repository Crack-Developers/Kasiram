import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaShieldAlt, FaBriefcase, FaMapMarkedAlt, FaBalanceScale, FaLanguage } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaUniversity className="text-indigo-600 text-3xl" />,
    title: 'Low Tuition & High-Quality Education',
    desc: 'France offers affordable tuition fees while maintaining globally recognized, high-quality education.',
  },
  {
    icon: <FaShieldAlt className="text-indigo-600 text-3xl" />,
    title: 'Globally Ranked Universities & EU Degree Recognition',
    desc: 'Study at top universities with degrees that are recognized across Europe and globally.',
  },
  {
    icon: <FaBriefcase className="text-indigo-600 text-3xl" />,
    title: 'Vibrant Culture, Arts, History & Lifestyle',
    desc: 'Immerse yourself in the rich French culture, art, history, and lifestyle, offering a unique student experience.',
  },
  {
    icon: <FaMapMarkedAlt className="text-indigo-600 text-3xl" />,
    title: 'Affordable Cost of Living (Outside Paris)',
    desc: 'Experience a reasonable cost of living in France, especially in cities outside of Paris, making it an ideal destination for students.',
  },
  {
    icon: <FaBalanceScale className="text-indigo-600 text-3xl" />,
    title: 'Post-Study Work Rights & PR Opportunities',
    desc: 'France provides post-study work rights and pathways to Permanent Residency (PR) for international graduates.',
  },
  {
    icon: <FaLanguage className="text-indigo-600 text-3xl" />,
    title: 'Strategic Location to Explore Europe (Schengen Access)',
    desc: 'France is strategically located, giving you access to the entire Schengen area to explore Europe easily.',
  },
];

const WhyFrance = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Why Study in France?
        </h2>
        <p className="text-lg text-gray-600">
          Discover what makes France an attractive destination for international students.
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

export default WhyFrance;
