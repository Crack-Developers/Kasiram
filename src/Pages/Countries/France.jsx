import React from "react";
import Navbar from "../../Components/New folder/Navbar/Navbar";
import Headder from "../../Components/France/Headder"
import Why from "../../Components/France/Why"
import Education from "../../Components/France/EducationSystem"
import TopUniversities from "../../Components/France/TopUniversities"
import Intake from "../../Components/France/IntakeAdmission"
import Eliginlity from "../../Components/France/EligibilityRequirement"
import Cost from "../../Components/France/CostOfStudying"
import Scolership from "../../Components/France/Scholarships"
import Work from "../../Components/France/WorkPr"
import Job from "../../Components/France/JobMarket"
import Footer from "../../Components/Footer/Footer";

const StudyInFrance = () => {
  return (
    <>
      <Navbar />
      <Headder />
      <Why />
      <Education />
      <TopUniversities />
      <Intake />
      <Eliginlity />
      <Cost />
      <Scolership />
      <Work />
      <Job />
      <Footer />
    </>
  );
};

export default StudyInFrance;
