import React from "react";
import styles from "./OurMission.module.css";
import missionImg from "../../../assets/images/sglogo.svg"; // Update path as per your project
import ProductGrid from "../../../Products/ProductsList";
import { useNavigate } from "react-router-dom";



const OurMission = () => {
 const navigate = useNavigate();
const handleAllProducts = () => {
  navigate("/products")
};
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto py-2 px-2 ">
          <div className="mt-8">
            <h1
              className="text-[#1e5d8a] text-2xl font-bold cursor-pointer"
              onClick={handleAllProducts} 
            >
              Featured Products
            </h1>
          </div>
          <ProductGrid randomize={true} limit={12} />
        </div>
      </section>
      <section className={styles.ourMission}>
        <div className={styles.textAndImage}>
          <div className={styles.imageWrapper}>
            <img src={missionImg} alt="Our Mission" />
          </div>
        </div>
        <div className={styles.text}>
          <div className={styles.content}>
            <p>
              At Sfera Global, We are committed to sustainability, ethical
              sourcing, and long-term partnerships that empower our clients.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;
