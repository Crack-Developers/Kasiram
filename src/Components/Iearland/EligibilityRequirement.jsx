import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLanguage, FaBriefcase, FaClipboardList } from 'react-icons/fa';

const requirements = [
  {
    icon: <FaGraduationCap className="text-4xl text-green-600" />,
    title: 'Undergraduate',
    description:
      '12 years of schooling. IELTS: 6.0–6.5, TOEFL: 80–90, PTE: 50–60. Academic %: 70%+ preferred for top universities.',
  },
  {
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
    title: 'Postgraduate',
    description:
      'Recognized Bachelor’s degree with 60–70%+. IELTS: 6.5–7.0, TOEFL: 90–100, PTE: 58–65. GMAT required for some MBA programs.',
  },
  {
    icon: <FaClipboardList className="text-4xl text-yellow-500" />,
    title: 'GMAT',
    description:
      'Required for some MBA programs.',
  },
  {
    icon: <FaBriefcase className="text-4xl text-red-600" />,
    title: 'Work Experience',
    description:
      'Preferred for management courses, especially MBA programs.',
  },
  {
    icon: <FaLanguage className="text-4xl text-purple-600" />,
    title: 'Language Requirements',
    description:
      'IELTS or TOEFL accepted. French language not mandatory for English-taught courses but A1–A2 level preferred for living.',
  },
];

const EligibilityRequirementAustralia = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Eligibility Requirements
        </h2>
        <p className="text-lg text-gray-600">
          Understand the eligibility criteria to study in Australia at the undergraduate and postgraduate levels.
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

export default EligibilityRequirementAustralia;
