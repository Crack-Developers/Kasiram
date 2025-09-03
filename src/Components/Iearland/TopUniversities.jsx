import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaStar, FaBook } from 'react-icons/fa';

const universities = [
  'Trinity College Dublin (TCD)',
  'University College Dublin (UCD)',
  'National University of Ireland, Galway (NUIG)',
  'University College Cork (UCC)',
  'Dublin City University (DCU)',
  'University of Limerick (UL)',
  'Maynooth University'
];

const TopUniversitiesIreland = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Top Universities in Ireland
        </h2>
        <p className="text-lg text-gray-600">
          Explore the leading universities in Ireland known for their academic excellence.
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

      {/* Highlights */}
      <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-indigo-100 border-l-4 border-indigo-500 p-5 rounded-xl shadow-md flex items-start gap-4"
        >
          <FaStar className="text-3xl text-indigo-500 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Global Recognition</h4>
            <p className="text-sm text-gray-700">
              Ireland is home to some of the world’s top universities, including institutions like <strong>Trinity College Dublin</strong> and <strong>University College Dublin</strong>.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-green-100 border-l-4 border-green-500 p-5 rounded-xl shadow-md flex items-start gap-4"
        >
          <FaBook className="text-3xl text-green-500 mt-1" />
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-1">Popular Programs</h4>
            <p className="text-sm text-gray-700">
              Leading fields of study include <strong>Business, Engineering, Computer Science, Law, Medicine, Arts</strong>, and more.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopUniversitiesIreland;
