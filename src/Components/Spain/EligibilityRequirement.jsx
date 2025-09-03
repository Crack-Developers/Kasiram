import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLanguage, FaBriefcase, FaClipboardList } from 'react-icons/fa';

const requirements = [
  {
    icon: <FaGraduationCap className="text-4xl text-green-600" />,
    title: 'Undergraduate (Grado)',
    description:
      '12 years of schooling. IELTS 6.0+ (for English programs). Some universities may ask for entrance tests or “Credencial UNED” (for Indian board equivalency).',
  },
  {
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
    title: 'Postgraduate (Máster)',
    description:
      'Bachelor’s degree with minimum 60–70%. IELTS: 6.5–7.0, TOEFL: 80–100. Spanish proficiency (A2/B1) preferred for local courses.',
  },
  {
    icon: <FaClipboardList className="text-4xl text-yellow-500" />,
    title: 'GMAT/GRE',
    description:
      'Required for some business programs depending on the course and university.',
  },
  {
    icon: <FaLanguage className="text-4xl text-purple-600" />,
    title: 'Language Requirements',
    description:
      'IELTS, TOEFL, or PTE scores accepted. Spanish proficiency (A2/B1) is preferred or required for Spanish-taught programs.',
  },
];

const EligibilityRequirementSpain = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Eligibility Requirements
        </h2>
        <p className="text-lg text-gray-600">
          Understand the eligibility criteria to study in Spain at the undergraduate and postgraduate levels.
        </p>
      </div>

      {/* Eligibility List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {requirements.map((req, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-start gap-4 mb-6">
              {req.icon}
              <h3 className="text-xl font-semibold text-gray-800">{req.title}</h3>
            </div>
            <p className="text-gray-600">{req.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EligibilityRequirementSpain;
