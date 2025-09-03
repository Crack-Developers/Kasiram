import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaDollarSign, FaUsers, FaBriefcase, FaBalanceScale, FaPlaneDeparture } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaUniversity className="text-indigo-600 text-3xl" />,
    title: 'Globally Ranked Universities',
    desc: 'Career-focused programs with international recognition.'
  },
  {
    icon: <FaDollarSign className="text-indigo-600 text-3xl" />,
    title: 'Affordable Education & Scholarships',
    desc: 'Budget-friendly tuition and plenty of funding options.'
  },
  {
    icon: <FaUsers className="text-indigo-600 text-3xl" />,
    title: 'Safe & Inclusive Environment',
    desc: 'Multicultural society with a warm welcome for all.'
  },
  {
    icon: <FaBriefcase className="text-indigo-600 text-3xl" />,
    title: 'Post-Study Work & PR Opportunities',
    desc: 'Work permits and easy pathways to permanent residency.'
  },
  {
    icon: <FaBalanceScale className="text-indigo-600 text-3xl" />,
    title: 'High Quality of Life',
    desc: 'Great healthcare, education, and work-life balance.'
  },
  {
    icon: <FaPlaneDeparture className="text-indigo-600 text-3xl" />,
    title: 'Access to U.S. Job Market',
    desc: 'Mobility and experience that opens cross-border careers.'
  }
];

const WhyCanada = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Why Study in Canada?
        </h2>
        <p className="text-lg text-gray-600">
          Discover what makes Canada a top destination for international students.
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

export default WhyCanada;
