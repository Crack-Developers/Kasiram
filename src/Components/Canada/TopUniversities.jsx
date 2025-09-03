import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity } from 'react-icons/fa';

const universities = [
  'University of Toronto (UofT)',
  'University of British Columbia (UBC)',
  'McGill University',
  'University of Alberta',
  'McMaster University',
  'University of Waterloo',
  'Western University',
  'Simon Fraser University',
  'Queen’s University',
  'University of Ottawa'
];

const TopUniversitiesCanada = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Top Universities in Canada 
        </h2>
        <p className="text-lg text-gray-600">
          Explore the top Canadian universities known for excellence in education and research.
        </p>
        <p className="text-md text-gray-500 mt-2 max-w-2xl mx-auto">
          Canada is especially strong in Computer Science, Engineering, Business, Health Sciences, Artificial Intelligence, and Environmental Studies.
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
            <div className="flex flex-col items-center justify-center text-center">
              <FaUniversity className="text-4xl text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{university}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopUniversitiesCanada;
