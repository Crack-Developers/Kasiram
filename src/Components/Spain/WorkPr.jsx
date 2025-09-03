import React from 'react';

const WorkPr = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Part-Time Work & Post-Study Options</h2>
        <p className="text-lg text-gray-700 mb-12">Explore your options for part-time work while studying and post-study opportunities in Spain.</p>

        {/* Part-Time Work Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 flex items-center justify-center gap-2">
            <span>🎓</span> Part-Time Work
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
              <h4 className="text-xl font-medium text-blue-600 mb-2">Work Hours</h4>
              <p className="text-gray-600">You are allowed to work up to <strong>20 hours per week</strong> while studying in Spain.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
              <h4 className="text-xl font-medium text-blue-600 mb-2">Work Permit</h4>
              <p className="text-gray-600">A <strong>work permit</strong> is needed, typically sponsored by an employer and should align with your course schedule.</p>
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
              After graduation, students can apply for a <strong>1-year stay back permit</strong> to search for jobs.
              <br />
              If employed in a relevant job, they can switch to a <strong>residence or work permit</strong> to continue working in Spain.
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
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Legal Stay</h4>
              <p className="text-gray-600">You must have legally resided in Spain for <strong>5 years</strong> to apply for permanent residency.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Eligibility Criteria</h4>
              <p className="text-gray-600">Applicants must show <strong>income stability, clean criminal record</strong>, and integration into Spanish society.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Language Requirement</h4>
              <p className="text-gray-600">Basic Spanish language proficiency of <strong>A2 to B1</strong> level is required for PR eligibility.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkPr;
