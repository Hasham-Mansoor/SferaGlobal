import React from "react";
import { FaStar, FaShippingFast, FaHeadset, FaDollarSign } from "react-icons/fa";

const features = [
  {
    icon: <FaStar className="text-yellow-500 text-3xl mb-2" />,
    title: "Premium Quality",
    description: "We offer top-notch industrial and specialty salts with guaranteed purity.",
  },
  {
    icon: <FaShippingFast className="text-blue-500 text-3xl mb-2" />,
    title: "Fast & Reliable Delivery",
    description: "Timely global shipping to ensure your business runs smoothly.",
  },
  {
    icon: <FaHeadset className="text-green-500 text-3xl mb-2" />,
    title: "24/7 Customer Support",
    description: "Our dedicated team is here to help around the clock.",
  },
  {
    icon: <FaDollarSign className="text-red-500 text-3xl mb-2" />,
    title: "Competitive Pricing",
    description: "High-quality products at the most affordable prices.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10 text-[#1e5d8a]">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="text-lg font-medium mt-3 mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
