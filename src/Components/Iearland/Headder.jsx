import React from 'react';

const Headder = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
        Study in Ireland
        </h1>
        <p className="text-lg md:text-xl font-medium leading-relaxed text-white/90">
        Ireland is an emerging destination for quality higher education, known for its research-driven universities, English-taught programs, strong IT and pharmaceutical industries, and generous post-study work rights.
        </p>
      </div>
      <div className="absolute -bottom-4 -right-4 opacity-30 text-9xl select-none pointer-events-none rotate-12">
        🎓
      </div>
    </section>
  );
};

export default Headder;
