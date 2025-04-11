import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from "./Pages/AboutUs"
import Blogs from './Pages/Blogs';
import Services from './Pages/Services';
import Contact from './Pages/ContactUs';
import Uk from './Pages/Countries/Uk';
import Canada from './Pages/Countries/Canada';
import Australia from './Pages/Countries/Australia';
import NewZealand from './Pages/Countries/NewZealand';
import Ireland from './Pages/Countries/Ireland';
import Usa from './Pages/Countries/Usa';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/uk" element={<Uk />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/newzealand" element={<NewZealand />} />
        <Route path="/ireland" element={<Ireland />} />
        <Route path="/usa" element={<Usa />} />
      </Routes>
    </div>
  )
}

export default App