import React from 'react';

const CostOfStudying = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Cost of Studying in Spain</h2>
        <p className="text-xl mb-12 text-gray-700">
          Here's a breakdown of the tuition fees, living costs, and other expenses to help you plan your journey to study in Spain.
        </p>

        {/* Tuition Fees Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Tuition Fees (Annual Estimates)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h4 className="text-2xl font-semibold mb-2">Public Universities</h4>
              <p className="text-lg text-gray-600">
                €700 – €2,500 for Undergraduate (UG) programs<br />
                €1,500 – €3,500 for Postgraduate (PG) programs
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h4 className="text-2xl font-semibold mb-2">Private Universities</h4>
              <p className="text-lg text-gray-600">€8,000 – €20,000/year</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h4 className="text-2xl font-semibold mb-2">Business Schools (IE, ESADE)</h4>
              <p className="text-lg text-gray-600">€25,000 – €40,000/year</p>
            </div>
          </div>
        </div>

        {/* Living Costs Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Living Costs</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto transform transition duration-500 hover:scale-105">
            <p className="text-lg text-gray-600 mb-2">
              Madrid/Barcelona: €900 – €1,200/month
            </p>
            <p className="text-lg text-gray-600 mb-2">
              Other cities: €700 – €900/month
            </p>
            <p className="text-lg text-gray-600">
              Proof of funds required for visa: €7,000 – €10,000
            </p>
          </div>
        </div>

        {/* Total Yearly Cost Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Total Estimated Yearly Cost</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto transform transition duration-500 hover:scale-105">
            <p className="text-lg text-gray-600">
              €10,000 – €30,000 (depending on university type and city)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfStudying;
