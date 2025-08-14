import React from "react";
import styles from "./AboutUs.module.css";

const CompanyIntro = () => {
  return (
    <section
      className={`${styles.introSection} px-4 py-10 md:px-16 lg:px-24 bg-white pt-20`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1e5d8a] mb-12 ">
          About Us
        </h2>
        <p className="text-gray-600 leading-7 md:text-xs mb-4">
          <strong>Sfera Global (Private) Limited</strong> is a dynamic and
          diversified trading company based in Pakistan, with a global vision.
          We specialize in the{" "}
          <strong> import and export of a wide range of products</strong>,
          including{" "}
          <strong>
            {" "}
            industrial and consumer goods, natural salt products, raw materials
          </strong>
          , and much more. Whether you're a manufacturer, wholesaler, retailer,
          or end consumer, we aim to be your trusted sourcing and distribution
          partner.
          <br />
          <br />
          Founded with the goal of simplifying international trade and
          delivering premium quality products, Sfera Global is built on the
          principles of{" "}
          <strong>integrity, transparency, and long-term relationships</strong>.
          We work closely with manufacturers, suppliers, and buyers across
          various countries to ensure smooth and secure cross-border
          transactions.
        </p>
      </div>
    </section>
  );
};

export default CompanyIntro;
