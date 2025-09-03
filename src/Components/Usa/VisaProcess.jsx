import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaFileAlt, FaCreditCard, FaHandshake, FaCalendarCheck } from 'react-icons/fa';

const visaSteps = [
  {
    icon: <FaFileAlt className="text-4xl text-blue-500" />,
    title: 'Get Admission & Receive I-20 Form',
    description: 'Secure admission to a U.S. university and receive the I-20 form to begin your visa application.',
  },
  {
    icon: <FaCreditCard className="text-4xl text-green-500" />,
    title: 'Pay SEVIS Fee & Complete DS-160 Form',
    description: 'Pay the SEVIS Fee ($350) and complete the DS-160 visa application form online.',
  },
  {
    icon: <FaHandshake className="text-4xl text-yellow-500" />,
    title: 'Schedule Biometrics & Visa Interview',
    description: 'Book your biometrics appointment and schedule the F1 visa interview at your nearest U.S. embassy.',
  },
  {
    icon: <FaCalendarCheck className="text-4xl text-orange-500" />,
    title: 'Attend F1 Visa Interview',
    description: 'Attend the F1 visa interview with all required documents, including I-20, passport, and financial proof.',
  },
  {
    icon: <FaCheckCircle className="text-4xl text-red-500" />,
    title: 'Visa Approval & Travel Preparation',
    description: 'If approved, book your flight and prepare for your journey to the United States.',
  },
];

const VisaProcess = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          USA Student Visa Process 📝
        </h2>
        <p className="text-lg text-gray-600">
          A step-by-step guide to help you navigate the USA student visa process.
        </p>
      </div>

      {/* Visa Process Steps */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visaSteps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-start gap-4 mb-6">
              {step.icon}
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
            </div>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Key Info Section */}
      <div className="mt-16 text-center p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Important Visa Fees 💸</h3>
          <p className="text-xl md:text-2xl">SEVIS Fee: $350 | Visa Fee: Varies by location</p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisaProcess;
