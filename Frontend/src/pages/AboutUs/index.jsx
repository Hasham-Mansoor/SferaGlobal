// AboutUs.jsx
import React from "react";
import CompanyIntro from "./CompanyIntro";
import LegalInfo from "./LegalInfo";
import Certifications from "./Certifications";
import Services from "./Services";
import VisionMission from "./VisionMission";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <CompanyIntro />
      <LegalInfo />
      <Certifications />
      <Services />
      <VisionMission />
    </div>
  );
};

export default AboutUs;
