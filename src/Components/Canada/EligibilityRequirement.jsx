import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLanguage, FaBriefcase, FaClipboardList } from 'react-icons/fa';

const requirements = [
  {
    icon: <FaGraduationCap className="text-4xl text-green-600" />,
    title: 'Undergraduate (Bachelor’s)',
    description: '12 years of schooling with 70–80% marks. IELTS 6.0 (no band < 5.5) or TOEFL 80+.',
  },
  {
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
    title: 'Postgraduate (Master’s/PG Diploma)',
    description: 'Recognized Bachelor’s degree (60–75%+). IELTS 6.5 (no band < 6.0) or TOEFL 90+.',
  },
  {
    icon: <FaClipboardList className="text-4xl text-yellow-500" />,
    title: 'GRE/GMAT',
    description: 'Required for select programs (e.g., MBA, research programs).',
  },
  {
    icon: <FaBriefcase className="text-4xl text-red-600" />,
    title: 'Work Experience',
    description: 'Preferred for MBA or PG Diploma programs (2+ years recommended).',
  },
  {
    icon: <FaLanguage className="text-4xl text-purple-600" />,
    title: 'Language Tests',
    description: 'IELTS or TOEFL accepted. Some programs may accept Duolingo or PTE.',
  },
];

const EligibilityRequirementCanada = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Eligibility Requirements 
        </h2>
        <p className="text-lg text-gray-600">
          Understand the eligibility criteria to study in Canada at the undergraduate and postgraduate levels.
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

export default EligibilityRequirementCanada;
