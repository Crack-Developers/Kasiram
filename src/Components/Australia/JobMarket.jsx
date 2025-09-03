import React from 'react';
import {
  Cpu,
  Stethoscope,
  Building2,
  BarChart,
  BookOpen,
  Hammer,
  Briefcase,
} from 'lucide-react'; // lucide icons

const sectors = [
  { icon: <Cpu className="w-6 h-6 text-blue-600" />, title: 'Information Technology (Cloud, Cybersecurity, AI)' },
  { icon: <Stethoscope className="w-6 h-6 text-pink-600" />, title: 'Nursing & Allied Health' },
  { icon: <Building2 className="w-6 h-6 text-orange-600" />, title: 'Civil, Electrical, Mechanical Engineering' },
  { icon: <BarChart className="w-6 h-6 text-green-600" />, title: 'Accounting & Financial Services' },
  { icon: <BookOpen className="w-6 h-6 text-purple-600" />, title: 'Teaching & Early Childhood Education' },
  { icon: <Hammer className="w-6 h-6 text-yellow-600" />, title: 'Construction & Project Management' },
];

const recruiters = [
  'Telstra', 'Deloitte', 'BHP', 'Commonwealth Bank',
  'Infosys', 'Accenture', 'IBM Australia',
];

const JobMarket = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Job Opportunities in Australia</h2>
        <p className="text-gray-700 text-lg mb-12">
          High-demand sectors for international graduates and top recruiters in Australia.
        </p>

        {/* Sectors Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center items-center mb-4">{sector.icon}</div>
              <h4 className="text-blue-700 font-medium text-lg">{sector.title}</h4>
            </div>
          ))}
        </div>

        {/* Recruiters Carousel */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center justify-center gap-2">
            <Briefcase className="w-6 h-6" /> Major Recruiters
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {recruiters.map((name, index) => (
              <div
                key={index}
                className="bg-white border border-blue-100 px-4 py-2 rounded-full shadow-sm hover:shadow-lg transition duration-300"
              >
                <span className="text-gray-700 font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobMarket;
