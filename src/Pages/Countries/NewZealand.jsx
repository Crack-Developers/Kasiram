import React, { useEffect } from 'react';
import Navbar from '../../Components/New folder/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewZealand = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      {/* Section 1: Country Overview */}
      <section className="bg-green-50 py-12 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-green-900 mb-4">Study in New Zealand</h1>
          <p className="text-lg text-gray-700 mb-6">New Zealand offers a globally recognized education system, stunning landscapes, and a welcoming culture ideal for international students.</p>
          <img src="https://wellingtonnz.bynder.com/transform/25930344-8fbd-4f4f-99b3-1545ddafde74/Mount-Victoria-026?io=transform:fill,width:576,height:450" alt="New Zealand Overview" className="rounded-xl shadow-md mx-auto w-full max-w-2xl" />
        </div>
      </section>

      {/* Section 2: Top Courses */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-right">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-green-800">Popular Courses</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <li>• Information Technology</li>
            <li>• Engineering</li>
            <li>• Business & Management</li>
            <li>• Agriculture & Environmental Studies</li>
            <li>• Tourism & Hospitality</li>
            <li>• Nursing & Health Sciences</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Top Universities */}
      <section className="bg-gray-100 py-12 px-6 text-center" data-aos="fade-left">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-green-800">Top Universities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {[
              { name: 'University of Auckland', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6A2L6zrPjNIQsMN5M4z1UL83U3PbQLIhdg&s' },
              { name: 'University of Otago', img: 'https://images.shiksha.com/mediadata/images/1534392340phpM98iUm.jpeg' },
              { name: 'Victoria University of Wellington', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2EELeTwIx6-JRyojyyI-wGTV2fie9TUvsgw&s' }
            ].map((uni, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-4 w-full max-w-sm">
                <img src={uni.img} alt={uni.name} className="rounded-md mb-3 w-full h-48 object-cover" />
                <h3 className="font-bold text-lg text-green-700">{uni.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Visa Process */}
      <section className="bg-green-100 py-12 px-6 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-green-900">New Zealand Student Visa Process</h2>
          <ol className="list-decimal list-inside text-left sm:text-center space-y-3 text-gray-800">
            <li>Get an Offer of Place from an approved NZ institution.</li>
            <li>Gather academic, financial, and health documents.</li>
            <li>Apply for the student visa online or via paper.</li>
            <li>Submit biometrics and medical (if required).</li>
            <li>Wait for processing (approx. 4–6 weeks).</li>
          </ol>
        </div>
      </section>

      {/* Section 5: Tuition Fees & Cost of Living */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-right">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Tuition & Living Costs</h2>
          <p className="text-gray-700 mb-2">• Tuition: NZD 22,000 - NZD 40,000 per year</p>
          <p className="text-gray-700">• Living: NZD 1,200 - NZD 2,000 per month</p>
        </div>
      </section>

      {/* Section 6: Scholarships */}
      <section className="bg-yellow-50 py-12 px-6 text-center" data-aos="fade-left">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-900 mb-4">Scholarships for Indian Students</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-left sm:text-center">
            <li>New Zealand Excellence Awards (NZEA)</li>
            <li>Commonwealth Scholarships</li>
            <li>University-specific scholarships</li>
            <li>Auckland University International Student Scholarships</li>
          </ul>
        </div>
      </section>

      {/* Section 7: Accommodation */}
      <section className="bg-gray-50 py-12 px-6 text-center" data-aos="zoom-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Accommodation Options</h2>
          <p className="text-gray-700 mb-2">• On-campus halls of residence</p>
          <p className="text-gray-700">• Shared apartments & homestays</p>
        </div>
      </section>

      {/* Section 8: Part-time & Job Opportunities */}
      <section className="bg-white py-12 px-6 text-center" data-aos="zoom-in-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-900 mb-4">Work Opportunities</h2>
          <p className="text-gray-700">Students can work up to 20 hours per week during term and full-time during holidays. Post-study work rights are available for up to 3 years.</p>
        </div>
      </section>

      {/* Section 9: Student Life & Culture */}
      <section className="bg-green-50 py-12 px-6 text-center" data-aos="fade-up-right">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-900 mb-4">Student Life & Culture</h2>
          <p className="text-gray-700 mb-4">New Zealand is famous for its natural beauty, safe environment, and adventure activities, offering a great balance between academics and outdoor lifestyle.</p>
          <img src="https://cdn.downunder-travel.com/wp-content/uploads/2019/03/Dunedin-Railway-Station-Central-Otago.jpg" alt="Student Life NZ" className="rounded-xl shadow-lg mx-auto w-full max-w-2xl" />
        </div>
      </section>

      {/* Section 10: Intakes */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-down">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Intakes & Deadlines</h2>
          <p className="text-gray-700">• February (main intake)</p>
          <p className="text-gray-700">• July</p>
          <p className="text-gray-700">• Rolling intakes for diploma/certificate programs</p>
        </div>
      </section>

      {/* Section 11: Our Services */}
      <section className="bg-green-900 text-white py-12 px-6 text-center" data-aos="zoom-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">How We Help</h2>
          <p className="mb-2">• University Shortlisting & Course Advice</p>
          <p className="mb-2">• SOP, LOR, and CV Guidance</p>
          <p className="mb-2">• Visa Application Assistance</p>
          <p className="mb-2">• Pre-departure Orientation</p>
        </div>
      </section>

      {/* Section 12: CTA */}
      <section className="bg-yellow-100 py-12 px-6 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Start Your Journey to New Zealand!</h2>
          <p className="text-gray-800 mb-6">Let our team help you secure admission and a smooth visa process. Get in touch today.</p>
          <button className="bg-green-800 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition">Book a Free Session</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NewZealand;
