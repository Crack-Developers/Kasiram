import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import TopCountries from '../Components/TopCountries/TopCountries'
import Blogs from '../Components/Blogs/Blogs'
import Newsletter from '../Components/Notify me/NewsLetter'
import WhyKasiram from "../Components/WhyKasiram/WhyKasiram"
import Testimonials from '../Components/Countries/Countries'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TopCountries />
      <Blogs />
      <Newsletter />
      <WhyKasiram />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home