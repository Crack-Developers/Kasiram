import React from "react";
import Navbar from "../../Components/New folder/Navbar/Navbar";
import Headder from "../../Components/Germany/Headder"
import Why from "../../Components/Germany/Why"
import Education from "../../Components/Germany/EducationSystem"
import Top from "../../Components/Germany/TopUniversities"
import Intake from "../../Components/Germany/IntakeAdmission"
import Eligibility from "../../Components/Germany/EligibilityRequirement"
import Cost from "../../Components/Germany/CostOfStudying"
import Scolership from "../../Components/Germany/Scholarships"
import Work from "../../Components/Germany/WorkPr"
import Job from "../../Components/Germany/JobMarket"
import Footer from "../../Components/Footer/Footer";

const StudyInGermany = () => {
  return (
    <>
      <Navbar />
      <Headder />
      <Why />
      <Education />
      <Top />
      <Intake />
      <Eligibility />
      <Cost />
      <Scolership />
      <Work />
      <Job />
      <Footer />
    </>
  );
};

export default StudyInGermany;
