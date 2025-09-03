import React from 'react';
import { Briefcase, Cpu, BarChart, Stethoscope, Truck, Building2 } from 'lucide-react'; // lucide icons

const sectors = [
  { icon: <Cpu className="w-6 h-6 text-blue-600" />, title: 'IT & Software Development' },
  { icon: <BarChart className="w-6 h-6 text-green-600" />, title: 'Business Analytics & Finance' },
  { icon: <Building2 className="w-6 h-6 text-orange-600" />, title: 'Engineering (Civil, Mech, Elec)' },
  { icon: <Cpu className="w-6 h-6 text-purple-600" />, title: 'AI, Data Science, Cybersecurity' },
  { icon: <Stethoscope className="w-6 h-6 text-pink-600" />, title: 'Healthcare & Biotechnology' },
  { icon: <Truck className="w-6 h-6 text-yellow-600" />, title: 'Logistics & Supply Chain' },
];

const recruiters = [
  'Amazon', 'RBC', 'Scotiabank', 'Deloitte',
  'Shopify', 'Google', 'Bombardier', 'Microsoft Canada',
];

const JobMarket = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Job Market in Canada</h2>
        <p className="text-gray-700 text-lg mb-12">
          Discover the booming sectors for international graduates and top recruiters in Canada.
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
            <Briefcase className="w-6 h-6" /> Top Recruiters
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
