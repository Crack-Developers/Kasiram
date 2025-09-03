import React from 'react';

const WorkPr = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Work & PR Opportunities</h2>
        <p className="text-lg text-gray-700 mb-12">Explore your options to work and settle in Canada while studying and after graduation.</p>

        {/* While Studying */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center justify-center gap-2">
            <span>🎓</span> While Studying
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
              <h4 className="text-xl font-medium text-blue-600 mb-2">Work Hours</h4>
              <p className="text-gray-600">Up to <strong>20 hours/week</strong> during semesters, full-time during breaks.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
              <h4 className="text-xl font-medium text-blue-600 mb-2">Job Types</h4>
              <p className="text-gray-600">Opportunities for <strong>on-campus</strong> and <strong>off-campus</strong> jobs available.</p>
            </div>
          </div>
        </div>

        {/* PGWP Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center justify-center gap-2">
            <span>🧳</span> Post-Graduation Work Permit (PGWP)
          </h3>
          <div className="bg-white max-w-2xl mx-auto p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
            <p className="text-gray-700 text-lg">
              Stay back for up to <strong>3 years</strong> based on your course length.
              Gain <strong>Canadian work experience</strong> that helps in your journey towards Permanent Residency.
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
              <h4 className="text-lg font-semibold text-blue-600 mb-2">CEC via Express Entry</h4>
              <p className="text-gray-600">Apply under the <strong>Canadian Experience Class</strong> based on your work experience.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Provincial Nominee Programs (PNPs)</h4>
              <p className="text-gray-600">Province-specific PR routes for in-demand graduates.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Boost CRS Score</h4>
              <p className="text-gray-600">Post-study work improves your <strong>CRS score</strong> in Express Entry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPr;
