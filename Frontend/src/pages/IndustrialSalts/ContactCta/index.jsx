// components/IndustrialSalts/ContactCTA.jsx
import React from "react";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <div className="bg-[#f9fbfc] py-12 px-4 sm:px-8 md:px-16 lg:px-24 text-center rounded-2xl shadow-lg mt-12 fade-in">
      <h2 className="text-xl md:text-2xl font-semibold text-[#1e5d8a] mb-4">
        Interested in Industrial or Specialty Salt Solutions?
      </h2>
      <p className="text-sm text-gray-700 mb-6 max-w-2xl mx-auto">
        Contact us today to discuss bulk quantities, custom packaging, or product specifications tailored to your industry needs.
      </p>
      <Link
        to="/contact-us"
        className="inline-block bg-[#1e5d8a] text-white text-sm px-6 py-2 rounded-full hover:bg-[#174b6e] transition duration-300"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default ContactCTA;
