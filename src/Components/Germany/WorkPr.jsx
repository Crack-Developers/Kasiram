import React from 'react';

const WorkPr = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Part-Time Work & Post-Study Options</h2>
        <p className="text-lg text-gray-700 mb-12">Explore your options for part-time work while studying and post-study work opportunities in Germany.</p>

        {/* Part-Time Work Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center justify-center gap-2">
            <span>🎓</span> Part-Time Work
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
              <h4 className="text-xl font-medium text-blue-600 mb-2">Work Hours</h4>
              <p className="text-gray-600">You are allowed to work up to <strong>120 full days or 240 half days</strong> per year while studying.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
              <h4 className="text-xl font-medium text-blue-600 mb-2">Common Job Roles</h4>
              <p className="text-gray-600">Opportunities in <strong>research assistant, café work, delivery, and admin support</strong> roles.</p>
            </div>
          </div>
        </div>

        {/* Post-Study Work Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center justify-center gap-2">
            <span>🧳</span> Post-Study Work
          </h3>
          <div className="bg-white max-w-2xl mx-auto p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
            <p className="text-gray-700 text-lg">
              After graduation, apply for an <strong>18-month job-seeking visa</strong>. If you get a relevant job offer, you can apply for:
              <br />
              - <strong>EU Blue Card</strong> or a <strong>German work permit</strong>
              <br />
              Once you hold the Blue Card, you may apply for <strong>Permanent Residency (PR)</strong> after:
              <br />
              - <strong>33 months</strong> or <strong>21 months</strong> with B1 German proficiency.
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
              <h4 className="text-lg font-semibold text-blue-600 mb-2">EU Blue Card</h4>
              <p className="text-gray-600">For highly skilled workers with a job offer in Germany. Provides fast access to Permanent Residency.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">German Work Permit</h4>
              <p className="text-gray-600">For workers with a job offer, allowing you to stay and work in Germany while applying for PR.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Permanent Residency</h4>
              <p className="text-gray-600">Apply for PR after meeting eligibility requirements such as working for a specified duration or holding an EU Blue Card.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPr;
