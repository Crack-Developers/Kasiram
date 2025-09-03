import React from 'react';

const CostOfStudying = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Cost of Studying in Ireland</h2>
        <p className="text-xl mb-12 text-gray-700">
          Here's a breakdown of the tuition fees, living costs, and other expenses to help you plan your journey to study in Ireland.
        </p>

        {/* Tuition Fees Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Tuition Fees (Annual Estimates)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h4 className="text-2xl font-semibold mb-2">Undergraduate (UG)</h4>
              <p className="text-lg text-gray-600">€10,000 – €25,000/year</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h4 className="text-2xl font-semibold mb-2">Postgraduate (PG)</h4>
              <p className="text-lg text-gray-600">€12,000 – €35,000/year (MBA: €30,000+)</p>
            </div>
          </div>
        </div>

        {/* Living Costs Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Living Costs</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto transform transition duration-500 hover:scale-105">
            <p className="text-lg text-gray-600 mb-2">Approx. €10,000 – €12,000/year (depends on city)</p>
            <p className="text-lg text-gray-600 mb-2">Dublin is more expensive than cities like Cork or Galway.</p>
            <p className="text-lg text-gray-600">Students need to show €10,000 in a bank account as financial proof for visa.</p>
          </div>
        </div>

        {/* Total Yearly Cost Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Total Estimated Yearly Cost</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto transform transition duration-500 hover:scale-105">
            <p className="text-lg text-gray-600">€22,000 – €47,000+ (including tuition & living costs)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfStudying;
