import React from "react";
import Navbar from "../../Components/New folder/Navbar/Navbar";
import Headder from "../../Components/Australia/Headder";
import Why from "../../Components/Australia/Why"
import EducationSystem from "../../Components/Australia/EducationSystem";
import TopUniversities from "../../Components/Australia/TopUniversities";
import IntakeAdmission from "../../Components/Australia/IntakeAdmission";
import EligibilityRequirement from "../../Components/Australia/EligibilityRequirement";
import CostOfStudying from "../../Components/Australia/CostOfStudying";
import Scholarships from "../../Components/Australia/Scholarships";
import WorkPr from "../../Components/Australia/WorkPr";
import JobMarket from "../../Components/Australia/JobMarket";
import Footer from "../../Components/Footer/Footer";

const StudyInAustralia = () => {
  return (
    <>
      <Navbar />
      <Headder />
      <Why />
      <EducationSystem />
      <TopUniversities />
      <IntakeAdmission />
      <EligibilityRequirement />
      <CostOfStudying />
      <Scholarships />
      <WorkPr />
      <JobMarket />
      <Footer />
    </>
  );
};

export default StudyInAustralia;
