import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLanguage, FaBriefcase, FaClipboardList } from 'react-icons/fa';

const requirements = [
  {
    icon: <FaGraduationCap className="text-4xl text-green-600" />,
    title: 'Undergraduate (UG)',
    description:
      'Indian students require 13 years of education (or Studienkolleg/Foundation Year after 12th). IELTS 6.0–6.5, TestDaF/Goethe-Zertifikat (for German-taught programs). Some may need to take TestAS (aptitude test for UG admission).',
  },
  {
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
    title: 'Postgraduate (PG)',
    description:
      'Bachelor’s degree (min. 70–75% for top universities). IELTS 6.5–7.0, TOEFL 90+. GRE/GMAT: Required for some technical or management courses. Some programs require basic German knowledge (A1/A2 level).',
  },
  {
    icon: <FaClipboardList className="text-4xl text-yellow-500" />,
    title: 'GMAT/GRE',
    description:
      'Required for some technical, management, or MBA programs depending on the university and course requirements.',
  },
  {
    icon: <FaBriefcase className="text-4xl text-red-600" />,
    title: 'Work Experience',
    description:
      'Preferred for MBA programs or certain technical courses. 2+ years of professional experience recommended.',
  },
  {
    icon: <FaLanguage className="text-4xl text-purple-600" />,
    title: 'Language Requirements',
    description:
      'IELTS, TOEFL, or PTE accepted. German language proficiency (A1/A2) may be required for some programs, especially for German-taught courses.',
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
          Understand the eligibility criteria to study in Germany at the undergraduate and postgraduate levels.
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
