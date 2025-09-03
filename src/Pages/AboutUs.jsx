import React from 'react';
import Navbar from '../Components/New folder/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import backgroundImage from '../assets/kabg.jpg'; // Ensure this image is placed correctly

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section
        className="relative bg-cover bg-center h-60 flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg w-3/4">
          <h1 className="text-4xl font-bold">About Kasiram Overseas</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Kasiram Overseas Education is one of the most trusted & reputed overseas education consulting firms in India with rich industry experience specializing in assisting students and parents comprehensively and providing them a seamless experience for studying abroad.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-blue-800">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
              <li>To provide honest, transparent, and expert guidance for students seeking education abroad.</li>
              <li>To simplify the admission and visa process, making international education accessible to students from diverse backgrounds.</li>
              <li>To collaborate with top universities worldwide, ensuring the best academic opportunities for our students.</li>
              <li>To help students secure scholarships and financial aid, making quality education affordable.</li>
              <li>To support students beyond admissions, offering career guidance, pre-departure training, and post-arrival assistance.</li>
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-blue-800">Our Vision</h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
          To be a trusted global leader in overseas education consulting by empowering students with the right knowledge, opportunities, and guidance to excel in their academic and professional careers.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-800">Why Choose Us?</h3>
            <ul className="mt-4 text-lg text-gray-700 list-disc pl-6">
              <li>Expert Guidance – A team of experienced counselors with in-depth knowledge of global education trends.</li>
              <li>100% Visa Success Rate – Dedicated visa assistance, mock interviews, and error-free documentation.</li>
              <li>Scholarship & Financial Aid Support – Helping students secure scholarships, grants, and education loans to ease financial burdens.</li>
              <li>University Partnerships – Strong connections with leading universities for direct admissions and priority applications.</li>
              <li>Personalized Career Counseling – Tailored advice based on students’ academic background, goals, and financial constraints.</li>
              <li>Comprehensive Support – From course selection to post-arrival assistance, we stand by students at every step.</li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-800">Our Services</h3>
            <ul className="mt-4 text-lg text-gray-700 list-disc pl-6">
              <li><strong>Free Career Counselling</strong></li>
              <li><strong>University Selection</strong></li>
              <li><strong>Country Selection</strong></li>
              <li><strong>Course Selection</strong></li>
              <li><strong>Application Assistance</strong></li>
              <li><strong>Documentation Guidance</strong></li>
              <li><strong>Visa Processing</strong></li>
              <li><strong>Mock Interviews</strong></li>
              <li><strong>Pre-departure Briefing</strong></li>
              <li><strong>Post-Arrival Assistance</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
