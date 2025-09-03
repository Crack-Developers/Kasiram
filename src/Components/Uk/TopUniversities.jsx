import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity } from 'react-icons/fa';

const universities = [
  'University of Oxford',
  'University of Cambridge',
  'Imperial College London',
  'University College London (UCL)',
  'London School of Economics & Political Science (LSE)',
  'University of Edinburgh',
  'King’s College London (KCL)',
  'University of Manchester',
  'University of Bristol',
  'University of Warwick'
];

const TopUniversities = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Top Universities in the UK 🎓
        </h2>
        <p className="text-lg text-gray-600">
          Explore the top universities in the UK that offer world-class education.
        </p>
      </div>

      {/* University List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {universities.map((university, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl p-6 flex items-center justify-center hover:scale-105 transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center">
              <FaUniversity className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{university}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopUniversities;
