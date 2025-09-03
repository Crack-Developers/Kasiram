import React from 'react';

const WorkPr = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Work & PR Opportunities</h2>
        <p className="text-lg text-gray-700 mb-12">Explore your options to work and settle in Australia while studying and after graduation.</p>

        {/* While Studying */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center justify-center gap-2">
            <span>🎓</span> While Studying
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
              <h4 className="text-xl font-medium text-blue-600 mb-2">Work Hours</h4>
              <p className="text-gray-600">Work up to <strong>48 hours per fortnight</strong> (part-time), and full-time during semester breaks.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
              <h4 className="text-xl font-medium text-blue-600 mb-2">Job Types</h4>
              <p className="text-gray-600">Opportunities in <strong>on-campus</strong> and <strong>off-campus</strong> roles across various sectors.</p>
            </div>
          </div>
        </div>

        {/* Post-Study Work Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center justify-center gap-2">
            <span>🧳</span> Post-Study Work (Subclass 485)
          </h3>
          <div className="bg-white max-w-2xl mx-auto p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
            <p className="text-gray-700 text-lg">
              Stay back options under the <strong>Temporary Graduate Visa</strong> (Subclass 485):
              <br />
              2 years for Bachelor’s or Master’s by coursework
              <br />
              3 years for Master’s by research
              <br />
              4 years for PhD graduates
              <br />
              Additional <strong>1–2 years</strong> for regional campus graduates
            </p>
          </div>
        </div>

        {/* PR Pathways */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center justify-center gap-2">
            <span>🏡</span> PR Pathways (After Graduation)
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Skilled Independent Visa (189)</h4>
              <p className="text-gray-600">Points-based PR pathway with no state sponsorship required.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">State Nomination (190)</h4>
              <p className="text-gray-600">Get nominated by an Australian state or territory based on skills in demand.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Regional Visa (491 → 191)</h4>
              <p className="text-gray-600">Live and work in regional Australia to transition from temporary to permanent residency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPr;
