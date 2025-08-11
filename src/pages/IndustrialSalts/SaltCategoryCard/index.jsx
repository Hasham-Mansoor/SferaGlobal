import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./SaltCategoryCard.module.css";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SaltCategoryCard = ({ title, description, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const shortDesc = description.length > 100 ? description.slice(0, 100) + "..." : description;

  return (
    <motion.div
      className={`max-w-md w-[98%] mt-4 bg-white rounded-2xl shadow-lg p-6 mx-auto transition-all duration-500 ${styles.card}`}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3 className="text-xl font-bold text-[#1e5d8a] mb-4">{title}</h3>
      <p className="text-gray-700 text-xs leading-relaxed">
        {isExpanded ? description : shortDesc}
      </p>
      {description.length > 100 && (
        <button
          onClick={toggleExpand}
          className="mt-2 text-sm font-medium text-[#1e5d8a] hover:underline focus:outline-none"
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      )}
    </motion.div>
  );
};

export default SaltCategoryCard;
