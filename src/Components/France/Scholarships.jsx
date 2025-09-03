import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaMoneyBillWave, FaGlobe, FaGraduationCap } from 'react-icons/fa';

const scholarships = [
  {
    icon: <FaGlobe className="text-4xl text-blue-500" />,
    title: 'Eiffel Excellence Scholarship',
    description: 'For Master’s & PhD students, covering tuition + monthly stipend.',
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
    title: 'Charpak Scholarship',
    description: 'Offered by the French Embassy for Indian students.',
  },
  {
    icon: <FaUniversity className="text-4xl text-green-600" />,
    title: 'Emile Boutmy Scholarship',
    description: 'Offered by Sciences Po for international students.',
  },
  {
    icon: <FaGraduationCap className="text-4xl text-red-500" />,
    title: 'Erasmus+ Scholarships',
    description: 'For exchange and joint degree programs across Europe.',
  },
  {
    icon: <FaUniversity className="text-4xl text-green-600" />,
    title: 'University-specific Scholarships',
    description: 'Offered at most public & private institutions across France.',
  },
];

const Scholarships = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Scholarships for International Students in France 🎓💰
        </h2>
        <p className="text-lg text-gray-600">
          Explore scholarship opportunities to make your education affordable.
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
