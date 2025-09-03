import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaMoneyBillWave, FaGlobe, FaGraduationCap } from 'react-icons/fa';

const scholarships = [
  {
    icon: <FaGlobe className="text-4xl text-blue-500" />,
    title: 'Erasmus+ Scholarships',
    description: 'Supports exchange & joint master’s programs with funding for travel and living expenses.',
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
    title: 'Spanish Government MAEC-AECID Scholarships',
    description: 'Offers aid for international students, covering tuition and living allowance.',
  },
  {
    icon: <FaUniversity className="text-4xl text-green-600" />,
    title: 'La Caixa Foundation Scholarships',
    description: 'Highly competitive scholarships for postgraduate studies in Spain or abroad.',
  },
  {
    icon: <FaGraduationCap className="text-4xl text-red-600" />,
    title: 'Universidad Autónoma de Madrid – Excellence Scholarships',
    description: 'Merit-based scholarships for outstanding academic achievers at UAM.',
  },
  {
    icon: <FaGraduationCap className="text-4xl text-purple-600" />,
    title: 'IE & ESADE – MBA Scholarships',
    description: 'Merit-based scholarships for top-performing MBA candidates at IE and ESADE business schools.',
  },
];

const Scholarships = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Scholarships in Spain 🎓💰
        </h2>
        <p className="text-lg text-gray-600">
          Explore scholarship opportunities to make your education in Spain affordable. Many cover tuition, living expenses, and travel, and are merit- or need-based.
        </p>
      </div>

      {/* Scholarships List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {scholarships.map((scholarship, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-start gap-4 mb-6">
              {scholarship.icon}
              <h3 className="text-xl font-semibold text-gray-800">{scholarship.title}</h3>
            </div>
            <p className="text-gray-600">{scholarship.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Scholarships;
