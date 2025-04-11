import React, { useEffect } from 'react';
import Navbar from '../../Components/New folder/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Australia = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      {/* Section 1: Country Overview */}
      <section className="bg-blue-50 py-12 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Study in Australia</h1>
          <p className="text-lg text-gray-700 mb-6">Australia is a top destination for international students offering world-class education, a high quality of life, and excellent post-study work opportunities.</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25MR3aOs2q3Y6fWXhYsNIWI1okDL69u6I8w&s" alt="Australia Overview" className="rounded-xl shadow-md mx-auto w-full max-w-2xl" />
        </div>
      </section>

      {/* Section 2: Top Courses */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-right">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">Popular Courses</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <li>• Engineering & IT</li>
            <li>• Business & Management</li>
            <li>• Nursing & Healthcare</li>
            <li>• Environmental Science</li>
            <li>• Hospitality & Tourism</li>
            <li>• Creative Arts & Design</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Top Universities */}
      <section className="bg-gray-100 py-12 px-6 text-center" data-aos="fade-left">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">Top Universities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {[
              { name: 'University of Melbourne', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm0qcixbc_xgHVPXTt4NoLU-0Jrci5dUAIbg&s' },
              { name: 'University of Sydney', img: 'https://media.istockphoto.com/id/185102253/photo/main-quadrangle-of-the-university-of-sydney-australia.jpg?s=612x612&w=0&k=20&c=CVdP3A2Dwvuyz1mSBucDN-c0fGHbBA0m5LWHyXA9EHk=' },
              { name: 'Australian National University (ANU)', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp0PDg-A3k_07Su2UxPHaSRWQwoNTRG-ysYA&s' }
            ].map((uni, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-4 w-full max-w-sm">
                <img src={uni.img} alt={uni.name} className="rounded-md mb-3 w-full h-48 object-cover" />
                <h3 className="font-bold text-lg text-blue-700">{uni.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Visa Process */}
      <section className="bg-blue-100 py-12 px-6 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">Australia Student Visa Process</h2>
          <ol className="list-decimal list-inside text-left sm:text-center space-y-3 text-gray-800">
            <li>Get Confirmation of Enrolment (CoE) from an Australian university.</li>
            <li>Apply online for Student Visa (Subclass 500).</li>
            <li>Provide academic, financial, and health documents.</li>
            <li>Attend health check-up and biometrics (if required).</li>
            <li>Receive visa approval (usually 4–8 weeks).</li>
          </ol>
        </div>
      </section>

      {/* Section 5: Tuition Fees & Cost of Living */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-right">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Tuition & Living Costs</h2>
          <p className="text-gray-700 mb-2">• Tuition: AUD 20,000 - AUD 45,000 per year</p>
          <p className="text-gray-700">• Living: AUD 1,400 - AUD 2,500 per month</p>
        </div>
      </section>

      {/* Section 6: Scholarships */}
      <section className="bg-yellow-50 py-12 px-6 text-center" data-aos="fade-left">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Scholarships for Indian Students</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-left sm:text-center">
            <li>Australia Awards Scholarships</li>
            <li>Destination Australia Scholarships</li>
            <li>University of Sydney International Scholarships</li>
            <li>Monash International Merit Scholarships</li>
          </ul>
        </div>
      </section>

      {/* Section 7: Accommodation */}
      <section className="bg-gray-50 py-12 px-6 text-center" data-aos="zoom-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Accommodation Options</h2>
          <p className="text-gray-700 mb-2">• On-campus accommodation</p>
          <p className="text-gray-700">• Off-campus housing, shared apartments</p>
        </div>
      </section>

      {/* Section 8: Part-time & Job Opportunities */}
      <section className="bg-white py-12 px-6 text-center" data-aos="zoom-in-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Work Opportunities</h2>
          <p className="text-gray-700">Students can work up to 48 hours per fortnight during sessions and full-time during breaks. Post-study work rights range from 2–4 years based on your course level.</p>
        </div>
      </section>

      {/* Section 9: Student Life & Culture */}
      <section className="bg-blue-50 py-12 px-6 text-center" data-aos="fade-up-right">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Student Life & Culture</h2>
          <p className="text-gray-700 mb-4">Australia is known for its beaches, diverse communities, relaxed lifestyle, and friendly locals, offering a unique experience for international students.</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6v_KZoMWzV_UK9WI41iKlVzCx3ZnAkJ61Hg&s" alt="Student Life Australia" className="rounded-xl shadow-lg mx-auto w-full max-w-2xl" />
        </div>
      </section>

      {/* Section 10: Intakes */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-down">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Intakes & Deadlines</h2>
          <p className="text-gray-700">• February (Primary intake)</p>
          <p className="text-gray-700">• July</p>
          <p className="text-gray-700">• November (limited courses)</p>
        </div>
      </section>

      {/* Section 11: Our Services */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center" data-aos="zoom-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">How We Help</h2>
          <p className="mb-2">• University & Course Guidance</p>
          <p className="mb-2">• SOP, LOR, and Resume Support</p>
          <p className="mb-2">• Visa Filing & Interview Prep</p>
          <p className="mb-2">• Pre-departure Guidance</p>
        </div>
      </section>

      {/* Section 12: CTA */}
      <section className="bg-yellow-100 py-12 px-6 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Dreaming of Studying in Australia?</h2>
          <p className="text-gray-800 mb-6">Connect with our expert counsellors and make your dream come true.</p>
          <button className="bg-blue-800 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">Schedule a Free Consultation</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Australia;
