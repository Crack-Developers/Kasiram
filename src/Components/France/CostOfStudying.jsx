import React from 'react';

const CostOfStudying = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Cost of Studying in France</h2>
        <p className="text-xl mb-12 text-gray-700">
          Here's a breakdown of the tuition fees, living costs, and other expenses to help you plan your journey to study in France.
        </p>

        {/* Tuition Fees Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Tuition Fees (Annual Estimates)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h4 className="text-2xl font-semibold mb-2">Public Universities (Undergraduate)</h4>
              <p className="text-lg text-gray-600">€2,770/year (Subsidized by the French government)</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h4 className="text-2xl font-semibold mb-2">Public Universities (Postgraduate)</h4>
              <p className="text-lg text-gray-600">€3,770/year (Subsidized by the French government)</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h4 className="text-2xl font-semibold mb-2">Private Institutions/Grandes Écoles</h4>
              <p className="text-lg text-gray-600">€10,000 – €30,000/year depending on the course</p>
            </div>
          </div>
        </div>

        {/* Living Costs Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Living Costs</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto transform transition duration-500 hover:scale-105">
            <p className="text-lg text-gray-600 mb-2">Paris: €1,200 – €1,600/month</p>
            <p className="text-lg text-gray-600 mb-2">Other cities: €800 – €1,200/month</p>
            <p className="text-lg text-gray-600">Students must show €7,380/year in a French bank account or equivalent financial proof.</p>
          </div>
        </div>

        {/* Total Yearly Cost Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Total Estimated Yearly Cost</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto transform transition duration-500 hover:scale-105">
            <p className="text-lg text-gray-600">€10,000 – €30,000+ (including tuition & living costs)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfStudying;
