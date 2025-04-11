import React, { useEffect } from 'react';
import Navbar from '../../Components/New folder/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Usa = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      {/* Section 1: Country Overview */}
      <section className="bg-blue-50 py-12 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Study in the United States</h1>
          <p className="text-lg text-gray-700 mb-6">The USA offers unmatched academic flexibility, global recognition, and top-ranked universities, making it a dream destination for international students.</p>
          <img src="https://www.studyabroadudaipur.com/wp-content/uploads/2016/12/usa-city.jpg" alt="USA Overview" className="rounded-xl shadow-md mx-auto w-full max-w-2xl" />
        </div>
      </section>

      {/* Section 2: Top Courses */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-right">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">Popular Courses</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <li>• Business Administration</li>
            <li>• Computer Science & IT</li>
            <li>• Engineering</li>
            <li>• Law</li>
            <li>• Healthcare & Nursing</li>
            <li>• Media & Communication</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Top Universities */}
      <section className="bg-gray-100 py-12 px-6 text-center" data-aos="fade-left">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">Top Universities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {[
              { name: 'Harvard University', img: 'https://www.harvard.edu/wp-content/uploads/2023/11/110823_Features_KS_713-scaled.jpg' },
              { name: 'Stanford University', img: 'https://images.shiksha.com/mediadata/images/1533535408phpRuopAS.jpeg' },
              { name: 'Massachusetts Institute of Technology (MIT)', img: 'https://images.shiksha.com/mediadata/images/1533214461phpBhEKbO.jpeg' }
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
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">USA Student Visa Process</h2>
          <ol className="list-decimal list-inside text-left sm:text-center space-y-3 text-gray-800">
            <li>Receive I-20 form from a SEVP-approved university.</li>
            <li>Pay the SEVIS I-901 fee.</li>
            <li>Complete the DS-160 form online.</li>
            <li>Schedule and attend the visa interview.</li>
            <li>Receive F-1 Student Visa upon approval.</li>
          </ol>
        </div>
      </section>

      {/* Section 5: Tuition Fees & Cost of Living */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-right">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Tuition & Living Costs</h2>
          <p className="text-gray-700 mb-2">• Tuition: $20,000 - $50,000 per year</p>
          <p className="text-gray-700">• Living: $800 - $1,500 per month</p>
        </div>
      </section>

      {/* Section 6: Scholarships */}
      <section className="bg-yellow-50 py-12 px-6 text-center" data-aos="fade-left">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Scholarships for Indian Students</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-left sm:text-center">
            <li>Fulbright-Nehru Scholarships</li>
            <li>Stanford Reliance Dhirubhai Fellowship</li>
            <li>AAUW International Fellowships</li>
            <li>University-specific scholarships</li>
          </ul>
        </div>
      </section>

      {/* Section 7: Accommodation */}
      <section className="bg-gray-50 py-12 px-6 text-center" data-aos="zoom-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Accommodation Options</h2>
          <p className="text-gray-700 mb-2">• On-campus dormitories</p>
          <p className="text-gray-700">• Off-campus shared apartments</p>
        </div>
      </section>

      {/* Section 8: Part-time & Job Opportunities */}
      <section className="bg-white py-12 px-6 text-center" data-aos="zoom-in-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Work Opportunities</h2>
          <p className="text-gray-700">Students can work up to 20 hours/week on-campus during term and full-time during breaks. OPT and CPT provide post-study work opportunities.</p>
        </div>
      </section>

      {/* Section 9: Student Life & Culture */}
      <section className="bg-blue-50 py-12 px-6 text-center" data-aos="fade-up-right">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Student Life & Culture</h2>
          <p className="text-gray-700 mb-4">The USA is diverse and vibrant, offering students a wide range of cultural experiences, travel opportunities, and extracurriculars.</p>
          <img src="https://w0.peakpx.com/wallpaper/344/610/HD-wallpaper-times-square-york-new-times-square.jpg" alt="Student Life USA" className="rounded-xl shadow-lg mx-auto w-full max-w-2xl" />
        </div>
      </section>

      {/* Section 10: Intakes */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-down">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Intakes & Deadlines</h2>
          <p className="text-gray-700">• Fall (August/September) - Primary Intake</p>
          <p className="text-gray-700">• Spring (January) - Secondary Intake</p>
          <p className="text-gray-700">• Summer (May) - Limited Programs</p>
        </div>
      </section>

      {/* Section 11: Our Services */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center" data-aos="zoom-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">How We Help</h2>
          <p className="mb-2">• University Shortlisting</p>
          <p className="mb-2">• SOP/LOR & Application Support</p>
          <p className="mb-2">• Visa Interview Preparation</p>
          <p className="mb-2">• Pre-departure & Forex Assistance</p>
        </div>
      </section>

      {/* Section 12: CTA */}
      <section className="bg-yellow-100 py-12 px-6 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Study in the USA?</h2>
          <p className="text-gray-800 mb-6">Get in touch with us for expert guidance and free counseling.</p>
          <button className="bg-blue-800 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">Book a Free Call</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Usa;
