import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaMoneyBillWave, FaGlobe, FaGraduationCap } from 'react-icons/fa';

const scholarships = [
  {
    icon: <FaGlobe className="text-4xl text-blue-500" />,
    title: 'Fulbright Foreign Student Program',
    description: 'For master’s and PhD students, providing funding for tuition, living expenses, and travel.',
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
    title: 'Hubert Humphrey Fellowship Program',
    description: 'Provides funding for professionals to undertake non-degree programs in the U.S.',
  },
  {
    icon: <FaUniversity className="text-4xl text-green-600" />,
    title: 'Joint Japan/World Bank Graduate Scholarship Program (JJ/WBGSP)',
    description: 'Provides full tuition support for students from developing countries for graduate study in the U.S.',
  },
  {
    icon: <FaGraduationCap className="text-4xl text-red-500" />,
    title: 'Harvard University – Harvard Financial Aid Initiative',
    description: 'Need-based financial aid program covering full tuition and living expenses for eligible students.',
  },
  {
    icon: <FaUniversity className="text-4xl text-green-600" />,
    title: 'Stanford University – Knight-Hennessy Scholars Program',
    description: 'Provides full funding for graduate students from any discipline at Stanford University.',
  },
  {
    icon: <FaUniversity className="text-4xl text-green-600" />,
    title: 'Yale University – Yale University Scholarships USA',
    description: 'Need-based financial aid program covering full tuition and living expenses.',
  },
  {
    icon: <FaUniversity className="text-4xl text-green-600" />,
    title: 'MIT – MIT Scholarships (Need-based Aid)',
    description: 'Provides need-based scholarships for undergraduate and graduate students.',
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
    title: 'AAUW International Fellowships',
    description: 'Women-only funding for postgraduate students, supporting tuition and living costs.',
  },
  {
    icon: <FaGlobe className="text-4xl text-blue-500" />,
    title: 'Global UGRAD Scholarship',
    description: 'Provides funding for undergraduates from around the world to study in the USA for one semester.',
  },
];

const Scholarships = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Scholarships for International Students in the USA 🎓💰
        </h2>
        <p className="text-lg text-gray-600">
          Explore scholarship opportunities to reduce tuition fees and cover living expenses while studying in the USA.
        </p>
      </div>

      {/* Scholarships List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {scholarships.map((scholarship, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-start gap-4 mb-6">
              {scholarship.icon}
              <h3 className="text-xl font-semibold text-gray-800">{scholarship.title}</h3>
            </div>
            <p className="text-gray-600">{scholarship.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Scholarships;
