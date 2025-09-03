import React from "react";
import Navbar from "../../Components/New folder/Navbar/Navbar";
import Headder from "../../Components/Iearland/Headder"
import Why from "../../Components/Iearland/Why"
import Education from "../../Components/Iearland/EducationSystem"
import Top from "../../Components/Iearland/TopUniversities"
import Intake from "../../Components/Iearland/IntakeAdmission"
import Eligiblity from "../../Components/Iearland/EligibilityRequirement"
import Scholarship from "../../Components/Iearland/Scholarships"
import Cost from "../../Components/Iearland/CostOfStudying"
import Post from "../../Components/Iearland/PostStudy"
import Footer from "../../Components/Footer/Footer";

const StudyInIreland = () => {
  return (
    <>
      <Navbar />
      <Headder />
      <Why />
      <Education />
      <Top />
      <Intake />
      <Eligiblity />
      <Scholarship />
      <Cost />
      <Post />
      <Footer />
    </>
  );
};

export default StudyInIreland;
