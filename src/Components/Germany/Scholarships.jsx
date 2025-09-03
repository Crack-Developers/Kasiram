import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaMoneyBillWave, FaGlobe, FaGraduationCap } from 'react-icons/fa';

const scholarships = [
  {
    icon: <FaGlobe className="text-4xl text-blue-500" />,
    title: 'DAAD (German Academic Exchange Service)',
    description: 'For Master’s & PhD students, covering tuition, living expenses, travel, and health insurance.',
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
    title: 'Deutschlandstipendium (Germany Scholarship)',
    description: 'Merit-based scholarship offering €300/month to support talented students.',
  },
  {
    icon: <FaUniversity className="text-4xl text-green-600" />,
    title: 'Erasmus+ Program',
    description: 'For exchange and joint-degree students, providing funding for travel and living expenses.',
  },
  {
    icon: <FaGraduationCap className="text-4xl text-red-600" />,
    title: 'Heinrich Böll Foundation Scholarship',
    description: 'For socially committed students, covering tuition, living expenses, and travel.',
  },
  {
    icon: <FaGraduationCap className="text-4xl text-purple-600" />,
    title: 'Konrad Adenauer Stiftung Scholarship',
    description: 'For future leaders (Postgraduate/PhD), covering tuition, living expenses, and travel.',
  },
];

const Scholarships = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Scholarships in Germany 🎓💰
        </h2>
        <p className="text-lg text-gray-600">
          Explore scholarship opportunities to make your education in Germany affordable.
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
