import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaChalkboardTeacher, FaMicroscope, FaCalendarAlt } from 'react-icons/fa';

const educationLevels = [
  {
    icon: <FaUserGraduate className="text-4xl text-purple-600" />,
    title: 'Undergraduate',
    duration: '3–4 years',
    degrees: 'BA, BSc, BEng, LLB'
  },
  {
    icon: <FaChalkboardTeacher className="text-4xl text-indigo-600" />,
    title: 'Postgraduate',
    duration: '1–2 years',
    degrees: 'MSc, MA, MBA, MEng'
  },
  {
    icon: <FaMicroscope className="text-4xl text-pink-600" />,
    title: 'Doctorate',
    duration: '3–4 years',
    degrees: 'PhD with research focus'
  }
];

const EducationSystem = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Education System in the UK 🎓
        </h2>
        <p className="text-lg text-gray-600">
          Understand how education is structured across different levels in the UK.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {educationLevels.map((level, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-purple-600 hover:shadow-2xl transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">{level.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{level.title}</h3>
            <p className="text-sm text-gray-600 font-medium mb-1">
              Duration: <span className="font-semibold">{level.duration}</span>
            </p>
            <p className="text-sm text-gray-600">
              Degrees: <span className="font-semibold">{level.degrees}</span>
            </p>
          </motion.div>
        ))}
      </div>

      {/* Highlighted Major Intakes Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto flex items-center gap-4"
      >
        <FaCalendarAlt className="text-5xl" />
        <div>
          <h4 className="text-2xl font-bold mb-2">Major Intakes</h4>
          <p className="text-md font-medium">September/October, January/February, May (limited)</p>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSystem;
