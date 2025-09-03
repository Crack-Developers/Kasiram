import React from 'react';

const Headder = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg">
                Study in France
        </h1>
        <p className="text-lg md:text-xl font-medium leading-relaxed text-white/90">
        France is a top destination for international education, especially known for its arts, fashion, business, engineering, and culinary programs. It offers world-class education, low tuition costs, rich cultural exposure, and access to EU job markets.
        </p>
      </div>
      <div className="absolute -bottom-4 -right-4 opacity-30 text-9xl select-none pointer-events-none rotate-12">
        🎓
      </div>
    </section>
  );
};

export default Headder;
