import React from "react";
import Navbar from "../../Components/New folder/Navbar/Navbar";
import Headder from "../../Components/Usa/Headder"
import Why from "../../Components/Usa/Why"
import Education from "../../Components/Usa/EducationSystem"
import Top from "../../Components/Usa/TopUniversities"
import Eligiblity from "../../Components/Usa/EligibilityRequirement"
import Scolership from "../../Components/Usa/Scholarships"
import Post from "../../Components/Usa/PostStudy"
import Visa from "../../Components/Usa/VisaProcess"
import Cost from "../../Components/Usa/CostOfStudying"
import Footer from "../../Components/Footer/Footer";

const StudyInUSA = () => {
  return (
    <>
      <Navbar />
      <Headder />
      <Why />
      <Education />
      <Top />
      <Eligiblity />
      <Scolership />
      <Post />
      <Visa />
      <Cost />
      <Footer />
    </>
  );
};

export default StudyInUSA;
