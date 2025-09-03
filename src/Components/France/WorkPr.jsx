import React from 'react';

const WorkPr = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Work & PR Opportunities in France</h2>
        <p className="text-lg text-gray-700 mb-12">Explore your options to work and settle in France while studying and after graduation.</p>

        {/* While Studying */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center justify-center gap-2">
            <span>🎓</span> While Studying
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
              <h4 className="text-xl font-medium text-blue-600 mb-2">Work Hours</h4>
              <p className="text-gray-600">Work part-time up to <strong>964 hours per year</strong> while studying.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
              <h4 className="text-xl font-medium text-blue-600 mb-2">Minimum Wage</h4>
              <p className="text-gray-600">Earn approximately <strong>€11.65/hour</strong> while working part-time.</p>
            </div>
          </div>
        </div>

        {/* Post-Study Work Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center justify-center gap-2">
            <span>🧳</span> Post-Study Work (APS - Autorisation Provisoire de Séjour)
          </h3>
          <div className="bg-white max-w-2xl mx-auto p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
            <p className="text-gray-700 text-lg">
              Stay back options under the <strong>Temporary Residence Permit (APS)</strong>:
              <br />
              1-year temporary residence permit for job search after completing a Master's.
              <br />
              The permit is extendable if a job offer matches your degree level & salary threshold.
            </p>
          </div>
        </div>

        {/* PR Pathways */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center justify-center gap-2">
            <span>🏡</span> Permanent Residency Pathway (After Graduation)
          </h3>
          <div className="bg-white max-w-2xl mx-auto p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
            <p className="text-gray-700 text-lg">
              Permanent residency options after 5 years of legal stay in France (including studies + work):
              <br />
              French language proficiency (B1) is required.
              <br />
              A stable income and integration into French society will strengthen your application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPr;
