import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaBookReader, FaGlobe, FaMoneyCheckAlt, FaLaptopCode, FaIndustry } from "react-icons/fa";
import { FaPassport } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import Navbar from "../../Components/New folder/Navbar/Navbar";
import Headder from "../../Components/Spain/Headder"
import Why from "../../Components/Spain/Why"
import Education from "../../Components/Spain/EducationSystem"
import Top from "../../Components/Spain/TopUniversities"
import Intake from "../../Components/Spain/IntakeAdmission"
import Eligibility from "../../Components/Spain/EligibilityRequirement"
import Cost from "../../Components/Spain/CostOfStudying"
import Scolership from "../../Components/Spain/Scholarships"
import Work from "../../Components/Spain/WorkPr"
import Job from "../../Components/Spain/JobMarket"
import Footer from "../../Components/Footer/Footer";

const StudyInSpain = () => {
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

export default StudyInSpain;
