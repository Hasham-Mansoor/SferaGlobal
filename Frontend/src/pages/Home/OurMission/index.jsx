import React from "react";
import styles from "./OurMission.module.css";
import missionImg from "../../../assets/images/sglogo.svg"; // Update path as per your project

const OurMission = () => {
  return (
    <section className={styles.ourMission}>
      <div className={styles.textAndImage}>
        <div className={styles.content}>
    
          <p>
            At Sfera Global, We are committed to
            sustainability, ethical sourcing, and long-term partnerships that
            empower our clients.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <img src={missionImg} alt="Our Mission" />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
