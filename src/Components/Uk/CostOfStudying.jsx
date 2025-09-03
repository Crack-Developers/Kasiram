import React from 'react';

const CostOfStudying = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Cost of Studying in the UK</h2>
        <p className="text-xl mb-12 text-gray-700">Here's a breakdown of the tuition fees, living costs, and other expenses to help you plan your journey to study in the UK.</p>

        {/* Tuition Fees Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Tuition Fees</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-11h-2v6h2zm0 8h-2v2h2z" />
                </svg>
                <h4 className="text-2xl font-semibold">Undergraduate</h4>
              </div>
              <p className="text-lg text-gray-600">£12,000 – £30,000/year</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-11h-2v6h2zm0 8h-2v2h2z" />
                </svg>
                <h4 className="text-2xl font-semibold">Postgraduate</h4>
              </div>
              <p className="text-lg text-gray-600">£13,000 – £35,000/year</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-11h-2v6h2zm0 8h-2v2h2z" />
                </svg>
                <h4 className="text-2xl font-semibold">MBA</h4>
              </div>
              <p className="text-lg text-gray-600">£30,000 – £60,000+</p>
            </div>
          </div>
        </div>

        {/* Living Costs Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Living Costs</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h4 className="text-2xl font-semibold text-blue-600 mb-2">London</h4>
              <p className="text-lg text-gray-600">£1,300 – £1,800/month</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <h4 className="text-2xl font-semibold text-blue-600 mb-2">Other Cities</h4>
              <p className="text-lg text-gray-600">£900 – £1,300/month</p>
            </div>
          </div>
        </div>

        {/* Visa Funds Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Visa Funds</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <h4 className="text-2xl font-semibold text-blue-600 mb-2">For London</h4>
            <p className="text-lg text-gray-600">Minimum £12,006 for 9 months</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CostOfStudying;
