import React, { useEffect } from 'react';
import Navbar from '../../Components/New folder/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Ireland = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      {/* Section 1: Country Overview */}
      <section className="bg-emerald-50 py-12 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-emerald-900 mb-4">Study in Ireland</h1>
          <p className="text-lg text-gray-700 mb-6">Ireland is a growing destination for international students offering globally recognized universities, post-study work opportunities, and a rich cultural heritage.</p>
          <img src="https://i.ytimg.com/vi/DbZALsDfLuU/maxresdefault.jpg" alt="Ireland Overview" className="rounded-xl shadow-md mx-auto w-full max-w-2xl" />
        </div>
      </section>

      {/* Section 2: Top Courses */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-right">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-emerald-800">Popular Courses</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <li>• Data Science & Analytics</li>
            <li>• Software Engineering</li>
            <li>• Pharmaceutical Sciences</li>
            <li>• Business & Finance</li>
            <li>• Artificial Intelligence</li>
            <li>• Cybersecurity</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Top Universities */}
      <section className="bg-gray-100 py-12 px-6 text-center" data-aos="fade-left">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-emerald-800">Top Universities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {[
              { name: 'Trinity College Dublin', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNzrMUMxdbPvB9cj-SDRPWr0JIeUedNN7VDA&s' },
              { name: 'University College Dublin', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQas15fr1zlRWjdS5CF7iWgQOIivx7yAFVY5g&s' },
              { name: 'National University of Ireland Galway', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZbkem8ZYx55xRWrCVhqn2vJS1v-zjevvkg&s' }
            ].map((uni, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-4 w-full max-w-sm">
                <img src={uni.img} alt={uni.name} className="rounded-md mb-3 w-full h-48 object-cover" />
                <h3 className="font-bold text-lg text-emerald-700">{uni.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Visa Process */}
      <section className="bg-emerald-100 py-12 px-6 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-emerald-900">Ireland Student Visa Process</h2>
          <ol className="list-decimal list-inside text-left sm:text-center space-y-3 text-gray-800">
            <li>Apply to a recognized Irish institution and get an offer letter.</li>
            <li>Gather required documents including financial proof and medical insurance.</li>
            <li>Apply for a Type D Long Stay Student Visa online.</li>
            <li>Book biometrics appointment (if required).</li>
            <li>Visa decision usually takes 4–8 weeks.</li>
          </ol>
        </div>
      </section>

      {/* Section 5: Tuition Fees & Cost of Living */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-right">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-4">Tuition & Living Costs</h2>
          <p className="text-gray-700 mb-2">• Tuition: €10,000 - €25,000 per year</p>
          <p className="text-gray-700">• Living: €800 - €1,200 per month</p>
        </div>
      </section>

      {/* Section 6: Scholarships */}
      <section className="bg-yellow-50 py-12 px-6 text-center" data-aos="fade-left">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-emerald-900 mb-4">Scholarships for Indian Students</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-left sm:text-center">
            <li>Government of Ireland International Education Scholarships</li>
            <li>University-specific merit scholarships</li>
            <li>Centenary Scholarship Program</li>
            <li>Global Excellence Scholarships</li>
          </ul>
        </div>
      </section>

      {/* Section 7: Accommodation */}
      <section className="bg-gray-50 py-12 px-6 text-center" data-aos="zoom-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-4">Accommodation Options</h2>
          <p className="text-gray-700 mb-2">• On-campus residences</p>
          <p className="text-gray-700">• Off-campus rentals, hostels & homestays</p>
        </div>
      </section>

      {/* Section 8: Part-time & Job Opportunities */}
      <section className="bg-white py-12 px-6 text-center" data-aos="zoom-in-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-emerald-900 mb-4">Work Opportunities</h2>
          <p className="text-gray-700">Students can work up to 20 hours/week during term and 40 hours during holidays. Ireland offers a 1–2 year post-study work visa depending on course level.</p>
        </div>
      </section>

      {/* Section 9: Student Life & Culture */}
      <section className="bg-emerald-50 py-12 px-6 text-center" data-aos="fade-up-right">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-emerald-900 mb-4">Student Life & Culture</h2>
          <p className="text-gray-700 mb-4">Ireland is known for its friendly locals, historical landmarks, and vibrant cities. Students enjoy a lively mix of academics, music, sports, and nature.</p>
          <img src="https://ychef.files.bbci.co.uk/1280x720/p0j2splt.jpg" alt="Student Life Ireland" className="rounded-xl shadow-lg mx-auto w-full max-w-2xl" />
        </div>
      </section>

      {/* Section 10: Intakes */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-down">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-emerald-800 mb-4">Intakes & Deadlines</h2>
          <p className="text-gray-700">• September (main intake)</p>
          <p className="text-gray-700">• January (limited programs)</p>
        </div>
      </section>

      {/* Section 11: Our Services */}
      <section className="bg-emerald-900 text-white py-12 px-6 text-center" data-aos="zoom-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">How We Help</h2>
          <p className="mb-2">• Course & University Selection</p>
          <p className="mb-2">• SOP & Application Help</p>
          <p className="mb-2">• Visa Assistance & Document Support</p>
          <p className="mb-2">• Post-arrival Guidance</p>
        </div>
      </section>

      {/* Section 12: CTA */}
      <section className="bg-yellow-100 py-12 px-6 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Start Your Journey to Ireland!</h2>
          <p className="text-gray-800 mb-6">Connect with us for expert advice and end-to-end support in your Ireland study plan.</p>
          <button className="bg-emerald-800 text-white px-6 py-3 rounded-full shadow hover:bg-emerald-700 transition">Book Your Free Consultation</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Ireland;
