import React from 'react';
import { CalendarDays, School, BookOpen } from 'lucide-react'; // modern icon pack

const intakes = [
  {
    title: 'Primary Intake',
    month: 'September',
    icon: <CalendarDays className="w-8 h-8 text-orange-600" />,
    description: 'Major intake with the most program options and seats across universities.',
  },
  {
    title: 'Limited Intake',
    month: 'January',
    icon: <School className="w-8 h-8 text-blue-600" />,
    description: 'Offered by select universities and mainly for niche or short-term programs.',
  },
];

const IntakeAdmissionAustralia = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Intakes & Admission Process</h2>
        <p className="text-gray-600 text-lg mb-12">
          Know the key intake periods to plan your admission to Australian universities and colleges.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {intakes.map((intake, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 animate-fade-in"
            >
              <div className="flex justify-center mb-4">{intake.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700">{intake.title}</h3>
              <p className="text-sm text-gray-500 italic mb-2">{intake.month}</p>
              <p className="text-gray-700">{intake.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntakeAdmissionAustralia;
