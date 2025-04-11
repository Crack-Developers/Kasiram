import React, { useEffect } from 'react';
import Navbar from '../../Components/New folder/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Canada = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />

      {/* Section 1: Country Overview */}
      <section className="bg-blue-50 py-12 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Study in Canada</h1>
          <p className="text-lg text-gray-700 mb-6">Canada offers high-quality education, multicultural experiences, and excellent post-study work opportunities for international students.</p>
          <img src="https://media.istockphoto.com/id/1155550865/photo/toronto-canada-aerial-view-of-toronto-skyline-and-lake-ontario.jpg?s=612x612&w=0&k=20&c=Q3vPvSLlMzG7zGW6cGLzABJG9-ztCE3REBibxgNABCA=" alt="Canada Overview" className="rounded-xl shadow-md mx-auto w-full max-w-2xl" />
        </div>
      </section>

      {/* Section 2: Top Courses */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-right">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">Popular Courses</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <li>• Computer Science & IT</li>
            <li>• Business Administration</li>
            <li>• Engineering</li>
            <li>• Health Sciences</li>
            <li>• Hospitality & Tourism</li>
            <li>• Media & Journalism</li>
          </ul>
        </div>
      </section>

      {/* Section 3: Top Universities */}
      <section className="bg-gray-100 py-12 px-6 text-center" data-aos="fade-left">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">Top Universities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {[
              { name: 'University of Toronto', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR822WdFHq0TOZxBNis-oly50WX-0X8-UkXww&s' },
              { name: 'University of British Columbia', img: 'https://applyzones.com/uploads/schools/university-of-british-columbia-ubc/az-university-of-british-columbia-3.jpg' },
              { name: 'McGill University', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIrAgyCzkXgT2PQI-ZQTDZf02gbFHltHy7Pg&s' }
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
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">Canada Student Visa Process</h2>
          <ol className="list-decimal list-inside text-left sm:text-center space-y-3 text-gray-800">
            <li>Receive an acceptance letter from a Designated Learning Institution (DLI).</li>
            <li>Apply for a Canadian Study Permit online or through a visa center.</li>
            <li>Submit financial and academic documents.</li>
            <li>Undergo medical examination and biometrics (if required).</li>
            <li>Get your visa decision in approximately 4-8 weeks.</li>
          </ol>
        </div>
      </section>

      {/* Section 5: Tuition Fees & Cost of Living */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-right">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Tuition & Living Costs</h2>
          <p className="text-gray-700 mb-2">• Tuition: CAD 15,000 - CAD 30,000 per year</p>
          <p className="text-gray-700">• Living: CAD 800 - CAD 1,500 per month</p>
        </div>
      </section>

      {/* Section 6: Scholarships */}
      <section className="bg-yellow-50 py-12 px-6 text-center" data-aos="fade-left">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Scholarships for Indian Students</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-left sm:text-center">
            <li>Vanier Canada Graduate Scholarships</li>
            <li>Ontario Graduate Scholarships</li>
            <li>Lester B. Pearson International Scholarships</li>
            <li>University-specific scholarships</li>
          </ul>
        </div>
      </section>

      {/* Section 7: Accommodation */}
      <section className="bg-gray-50 py-12 px-6 text-center" data-aos="zoom-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Accommodation Options</h2>
          <p className="text-gray-700 mb-2">• On-campus residences</p>
          <p className="text-gray-700">• Off-campus rentals & homestays</p>
        </div>
      </section>

      {/* Section 8: Part-time & Job Opportunities */}
      <section className="bg-white py-12 px-6 text-center" data-aos="zoom-in-up">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Work Opportunities</h2>
          <p className="text-gray-700">Students can work up to 20 hours/week during classes and full-time during breaks. Post-graduation work permit allows up to 3 years stay after graduation.</p>
        </div>
      </section>

      {/* Section 9: Student Life & Culture */}
      <section className="bg-blue-50 py-12 px-6 text-center" data-aos="fade-up-right">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Student Life & Culture</h2>
          <p className="text-gray-700 mb-4">Canada is known for its safety, diversity, and natural beauty, offering a vibrant campus life and welcoming communities.</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Nathan_Philips_Square%2C_2022.jpg/1200px-Nathan_Philips_Square%2C_2022.jpg" alt="Student Life Canada" className="rounded-xl shadow-lg mx-auto w-full max-w-2xl" />
        </div>
      </section>

      {/* Section 10: Intakes */}
      <section className="bg-white py-12 px-6 text-center" data-aos="fade-down">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Intakes & Deadlines</h2>
          <p className="text-gray-700">• Fall (September) – Primary intake</p>
          <p className="text-gray-700">• Winter (January)</p>
          <p className="text-gray-700">• Summer (May) – Limited courses</p>
        </div>
      </section>

      {/* Section 11: Our Services */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center" data-aos="zoom-in">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">How We Help</h2>
          <p className="mb-2">• University Selection</p>
          <p className="mb-2">• SOP/LOR Assistance</p>
          <p className="mb-2">• Visa Documentation & Guidance</p>
          <p className="mb-2">• Pre-departure Briefing</p>
        </div>
      </section>

      {/* Section 12: CTA */}
      <section className="bg-yellow-100 py-12 px-6 text-center" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Dreaming of Studying in Canada?</h2>
          <p className="text-gray-800 mb-6">Get in touch for a free counselling session with our experts.</p>
          <button className="bg-blue-800 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">Book a Free Call</button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Canada;
