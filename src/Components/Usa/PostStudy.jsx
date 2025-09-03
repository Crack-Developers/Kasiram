import React from 'react';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaLaptop, FaHeartbeat, FaBuilding } from 'react-icons/fa';

const postStudyData = [
  {
    icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
    title: 'Post-Study Work Visa (OPT & H1B Visa)',
    description: 'OPT allows 12 months, STEM OPT Extension allows 24 additional months (Total 3 years) for STEM students.',
  },
  {
    icon: <FaLaptop className="text-4xl text-blue-500" />,
    title: 'Technology & IT Job Market',
    description: 'Opportunities for Software Engineers, Data Scientists, AI specialists, and more.',
  },
  {
    icon: <FaHeartbeat className="text-4xl text-red-500" />,
    title: 'Healthcare & Biotechnology Careers',
    description: 'Opportunities for Medical professionals, Researchers, and Biotech specialists.',
  },
  {
    icon: <FaBuilding className="text-4xl text-green-600" />,
    title: 'Finance & Banking Job Market',
    description: 'Investment Banking, Risk Management, and Finance consulting opportunities.',
  },
  {
    icon: <FaBuilding className="text-4xl text-green-600" />,
    title: 'Engineering & Manufacturing Careers',
    description: 'Opportunities for Civil, Mechanical, Electrical Engineers in various industries.',
  },
  {
    icon: <FaBuilding className="text-4xl text-green-600" />,
    title: 'Business & Management Careers',
    description: 'Consultants, Marketing Managers, and other key business roles in top U.S. companies.',
  },
];

const PostStudy = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-200">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Post-Study Work & Job Opportunities in the USA 💼🎓
        </h2>
        <p className="text-lg text-gray-600">
          Discover the incredible work opportunities available after your studies in the USA.
        </p>
      </div>

      {/* Post-Study Work Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {postStudyData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-start gap-4 mb-6">
              {data.icon}
              <h3 className="text-xl font-semibold text-gray-800">{data.title}</h3>
            </div>
            <p className="text-gray-600">{data.description}</p>
          </motion.div>
        ))}
      </div>

      {/* High Salary Section */}
      <div className="mt-16 text-center p-6 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl shadow-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">High Salary Opportunities 💰</h3>
          <p className="text-xl md:text-2xl">Work in high-demand sectors like Technology, Healthcare, and Engineering with great pay in the USA!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PostStudy;
