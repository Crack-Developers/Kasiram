import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaFileAlt, FaCreditCard, FaHandshake, FaCalendarCheck } from 'react-icons/fa';

const visaSteps = [
  {
    icon: <FaFileAlt className="text-4xl text-blue-500" />,
    title: 'Get CAS (Confirmation of Acceptance for Studies)',
    description: 'Get your CAS letter from the university to begin your visa application.',
  },
  {
    icon: <FaCreditCard className="text-4xl text-green-500" />,
    title: 'Pay Visa & IHS Fee',
    description: 'Pay £490 for the visa and £776/year for the IHS fee.',
  },
  {
    icon: <FaHandshake className="text-4xl text-yellow-500" />,
    title: 'Apply Online for Tier 4 Student Visa',
    description: 'Complete your online application for the Tier 4 Student Visa.',
  },
  {
    icon: <FaCalendarCheck className="text-4xl text-orange-500" />,
    title: 'Biometric Appointment at VFS Centre',
    description: 'Book and attend your biometric appointment at the nearest VFS Centre.',
  },
  {
    icon: <FaCheckCircle className="text-4xl text-red-500" />,
    title: 'Submit Documents',
    description: 'Submit CAS, offer letter, funds, English scores, and academic documents.',
  },
  {
    icon: <FaCalendarCheck className="text-4xl text-purple-500" />,
    title: 'Attend Interview (if required)',
    description: 'Attend an interview if the visa office requests one.',
  },
  {
    icon: <FaCheckCircle className="text-4xl text-teal-500" />,
    title: 'Visa Decision',
    description: 'Wait for your visa decision, typically in 3–4 weeks (Priority: 5–10 days).',
  },
];

const VisaProcess = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          UK Student Visa Process 📝
        </h2>
        <p className="text-lg text-gray-600">
          A step-by-step guide to help you navigate the UK student visa process.
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
          <p className="text-xl md:text-2xl">Visa Fee: £490 | IHS Fee: £776/year</p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisaProcess;
