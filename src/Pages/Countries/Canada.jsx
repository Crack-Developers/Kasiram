import React from "react";
import Navbar from "../../Components/New folder/Navbar/Navbar";
import Headder from "../../Components/Canada/Headder"
import Why from "../../Components/Canada/Why"
import IntakeAdmission from "../../Components/Canada/IntakeAdmission";
import EducationSystem from "../../Components/Canada/EducationSystem";
import TopUniversities from "../../Components/Canada/TopUniversities";
import EligibilityRequirement from "../../Components/Canada/EligibilityRequirement";
import CostOfStudying from "../../Components/Canada/CostOfStudying";
import Scholarship from "../../Components/Canada/Scholarships";
import WorkPr from "../../Components/Canada/WorkPr";
import JobMarket from "../../Components/Canada/JobMarket";
import Footer from "../../Components/Footer/Footer";

const StudyInCanada = () => {
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
      <Scholarship />
      <WorkPr />
      <JobMarket />
      <Footer />
    </>
  );
};

export default StudyInCanada;
