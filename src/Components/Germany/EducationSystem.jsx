import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaTools, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';

const educationTypes = [
  {
    icon: <FaUniversity className="text-4xl text-purple-600" />,
    title: 'Universities (Universitäten)',
    duration: 'Bachelor’s, Master’s, Doctoral (PhD)',
    degrees: 'Research-oriented programs'
  },
  {
    icon: <FaTools className="text-4xl text-indigo-600" />,
    title: 'Universities of Applied Sciences (Fachhochschulen)',
    duration: 'Bachelor’s, Master’s',
    degrees: 'Practice-based programs focusing on engineering, business, design, etc.'
  },
  {
    icon: <FaChalkboardTeacher className="text-4xl text-pink-600" />,
    title: 'Colleges of Art/Music',
    duration: 'Bachelor’s, Master’s, Diploma',
    degrees: 'Programs in fine arts, design, music'
  }
];

const programDurations = [
  {
    title: 'Bachelor’s Degree',
    duration: '3–4 years'
  },
  {
    title: 'Master’s Degree',
    duration: '1.5–2 years'
  },
  {
    title: 'PhD',
    duration: '3–5 years'
  }
];

const EducationSystemGermany = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Education System in Germany
        </h2>
        <p className="text-lg text-gray-600">
          Germany’s higher education system offers a range of academic programs across different types of institutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {educationTypes.map((type, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-600 hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">{type.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{type.title}</h3>
            <p className="text-sm text-gray-600 font-medium mb-1">
              Programs: <span className="font-semibold">{type.duration}</span>
            </p>
            <p className="text-sm text-gray-600">
              Focus: <span className="font-semibold">{type.degrees}</span>
            </p>
          </motion.div>
        ))}
      </div>

      {/* Program Duration Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-20">
        {programDurations.map((prog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-5 text-center border-l-4 border-indigo-600 hover:shadow-xl transition duration-300"
          >
            <h4 className="text-lg font-bold text-gray-800 mb-2">{prog.title}</h4>
            <p className="text-sm text-gray-600 font-medium">
              Duration: <span className="font-semibold">{prog.duration}</span>
            </p>
          </motion.div>
        ))}
      </div>

      {/* AQF Note Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto flex items-center gap-4"
      >
        <FaCalendarAlt className="text-5xl" />
        <div>
          <h4 className="text-2xl font-bold mb-2">Higher Education in Germany</h4>
          <p className="text-md font-medium">
            Many programs, especially at the postgraduate level, are taught in English, although German-taught programs are also widely available.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSystemGermany;
