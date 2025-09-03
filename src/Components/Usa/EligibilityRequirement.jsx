import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLanguage, FaBriefcase, FaClipboardList } from 'react-icons/fa';

const requirements = [
  {
    icon: <FaGraduationCap className="text-4xl text-green-600" />,
    title: 'Undergraduate',
    description:
      '12 years of education (High School Completion). IELTS: 6.0-7.0, TOEFL: 80-100, PTE: 50+. Standardized Tests: SAT/ACT (some universities waive this). Strong extracurriculars, SOP, and LORs are recommended.',
  },
  {
    icon: <FaGraduationCap className="text-4xl text-blue-600" />,
    title: 'Postgraduate',
    description:
      'A Bachelor’s degree (4 years or equivalent) with a minimum GPA of 3.0 on a 4.0 scale. IELTS: 6.5-7.5, TOEFL: 90-110. GRE/GMAT scores (some universities waive this for specific courses). 2-3 Letters of Recommendation (LORs). SOP explaining career goals and why choosing the specific university.',
  },
  {
    icon: <FaClipboardList className="text-4xl text-yellow-500" />,
    title: 'GMAT',
    description:
      'Required for MBA programs. GMAT score of 600-700 recommended for top universities.',
  },
  {
    icon: <FaBriefcase className="text-4xl text-red-600" />,
    title: 'Work Experience',
    description:
      '2-5 years of work experience for MBA programs at top business schools.',
  },
  {
    icon: <FaLanguage className="text-4xl text-purple-600" />,
    title: 'Language Requirements',
    description:
      'IELTS or TOEFL accepted. French language is not mandatory for English-taught courses but A1–A2 level is preferred for living.',
  },
];

const EligibilityRequirementUSA = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Eligibility Requirements for Studying in the USA
        </h2>
        <p className="text-lg text-gray-600">
          Understand the eligibility criteria to study in the USA at the undergraduate, postgraduate, and MBA levels.
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

export default EligibilityRequirementUSA;
