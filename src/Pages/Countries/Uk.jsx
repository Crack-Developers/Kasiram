import React, { useEffect } from 'react';
import Navbar from '../../Components/New folder/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Uk = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      {/* Section 1: Country Overview */}
      <section className="bg-blue-50 py-12 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Study in the United Kingdom</h1>
          <p className="text-lg text-gray-700 mb-6">The UK offers world-renowned education, rich cultural heritage, and a high standard of living, making it a top choice for international students.</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/800px-London_Montage_L.jpg" alt="UK Overview" className="rounded-xl shadow-md mx-auto w-full max-w-2xl" />
        </div>
      </section>

      {/* Section 2: Top Courses */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-right">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">Popular Courses</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <li>• Business & Management</li>
            <li>• Computer Science & IT</li>
            <li>• Engineering</li>
            <li>• Law</li>
            <li>• Medicine & Healthcare</li>
            <li>• Art & Design</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Top Universities */}
      <section className="bg-gray-100 py-12 px-6 text-center" data-aos="fade-left">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">Top Universities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {[
              { name: 'University of Oxford', img: 'https://www.theenglishhome.co.uk/_gatsby/file/e4190c31d46b272255c52a2b95259cdc/ben-seymour-nqBUTBsDQNM-unsplash.jpg' },
              { name: 'University of Cambridge', img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/6a/cd/2f/king-s-college.jpg?w=1200&h=-1&s=1' },
              { name: 'Imperial College London', img: 'https://studyabroadupdates.com/wp-content/uploads/2024/01/Imperial-College-London-1024x640.webp' }
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
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">UK Student Visa Process</h2>
          <ol className="list-decimal list-inside text-left sm:text-center space-y-3 text-gray-800">
            <li>Get a Confirmation of Acceptance for Studies (CAS) from a UK university.</li>
            <li>Apply for the Tier 4 (General) Student Visa.</li>
            <li>Provide financial and academic documents.</li>
            <li>Attend a biometric appointment (if required).</li>
            <li>Receive your visa within 3-6 weeks.</li>
          </ol>
        </div>
      </section>

      {/* Section 5: Tuition Fees & Cost of Living */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-right">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Tuition & Living Costs</h2>
          <p className="text-gray-700 mb-2">• Tuition: £10,000 - £25,000 per year</p>
          <p className="text-gray-700">• Living: £800 - £1,200 per month</p>
        </div>
      </section>

      {/* Section 6: Scholarships */}
      <section className="bg-yellow-50 py-12 px-6 text-center" data-aos="fade-left">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Scholarships for Indian Students</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-left sm:text-center">
            <li>Chevening Scholarships</li>
            <li>Commonwealth Scholarships</li>
            <li>Great Scholarships</li>
            <li>University-specific merit scholarships</li>
          </ul>
        </div>
      </section>

      {/* Section 7: Accommodation */}
      <section className="bg-gray-50 py-12 px-6 text-center" data-aos="zoom-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Accommodation Options</h2>
          <p className="text-gray-700 mb-2">• On-campus dormitories</p>
          <p className="text-gray-700">• Private shared apartments & studios</p>
        </div>
      </section>

      {/* Section 8: Part-time & Job Opportunities */}
      <section className="bg-white py-12 px-6 text-center" data-aos="zoom-in-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Work Opportunities</h2>
          <p className="text-gray-700">Students can work up to 20 hours/week during term and full-time during holidays. Post-study work visa allows 2 years stay after graduation.</p>
        </div>
      </section>

      {/* Section 9: Student Life & Culture */}
      <section className="bg-blue-50 py-12 px-6 text-center" data-aos="fade-up-right">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Student Life & Culture</h2>
          <p className="text-gray-700 mb-4">The UK is diverse and inclusive, with historic landmarks, music, art, and a vibrant student scene.</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tower_bridge_London_Twilight_-_November_2006.jpg/1280px-Tower_bridge_London_Twilight_-_November_2006.jpg" alt="Student Life UK" className="rounded-xl shadow-lg mx-auto w-full max-w-2xl" />
        </div>
      </section>

      {/* Section 10: Intakes */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-down">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Intakes & Deadlines</h2>
          <p className="text-gray-700">• September (Primary)</p>
          <p className="text-gray-700">• January (Secondary)</p>
        </div>
      </section>

      {/* Section 11: Our Services */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center" data-aos="zoom-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">How We Help</h2>
          <p className="mb-2">• University Selection</p>
          <p className="mb-2">• SOP/LOR Assistance</p>
          <p className="mb-2">• Visa Guidance</p>
          <p className="mb-2">• Travel & Forex Support</p>
        </div>
      </section>

      {/* Section 12: CTA */}
      <section className="bg-yellow-100 py-12 px-6 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Study in the UK?</h2>
          <p className="text-gray-800 mb-6">Contact us today for a free counselling session.</p>
          <button className="bg-blue-800 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">Book a Free Call</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Uk;
