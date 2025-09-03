import React from 'react';
import { motion } from 'framer-motion';
import { FaMoneyBillWave, FaLaptop, FaHeartbeat, FaBuilding } from 'react-icons/fa';

const postStudyData = [
  {
    icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
    title: 'Graduate Route Visa',
    description: '2 years (UG/PG), 3 years (PhD)',
  },
  {
    icon: <FaLaptop className="text-4xl text-blue-500" />,
    title: 'Popular Sectors',
    description: 'Finance, IT, Healthcare, Engineering, Business',
  },
  {
    icon: <FaBuilding className="text-4xl text-green-600" />,
    title: 'High Salary Opportunities',
    description: 'Especially in London, with top salary prospects',
  },
];

const PostStudy = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-200">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Post-Study Work & Jobs 💼🎓
        </h2>
        <p className="text-lg text-gray-600">
          Unlock amazing career opportunities after your studies in the UK.
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
          <p className="text-xl md:text-2xl">Work in high-demand sectors like Finance and IT with great pay, especially in London!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PostStudy;
