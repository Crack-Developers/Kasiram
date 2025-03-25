import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
//import AboutUs from "./Pages/AboutUs"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/aboutus" element={<AboutUs />} />*/}
      </Routes>
    </div>
  )
}

export default App