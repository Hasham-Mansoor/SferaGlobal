import React from "react";
import { Eye, Target } from "lucide-react";

const VisionMission = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-20 px-4 md:px-20"
      style={{
        backgroundImage: "url('/images/business-bg.jpg')", // Make sure this image exists in public/images
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/90 md:bg-white/85 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-wide">
            Our Vision & Mission
          </h2> */}
          <p className="mt-2 text-gray-600 text-sm md:text-base">
            <strong className="text-[#1e5d8a]">Sfera Global Limited </strong> built on excellence, integrity, and global standards
          </p>
        </div>

        {/* Flex layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Vision */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Eye className="text-[#1e5d8a] w-6 h-6" />
              <h3 className="text-2xl font-semibold text-[#1e5d8a]">Our Vision</h3>
            </div>
            <p className="text-justify text-[12px] text-gray-700 leading-relaxed border-l-4 border-[#1e5d8a] pl-4">
              To be recognized as one of Pakistan’s leading export and sourcing companies, known
              for <span className="font-medium">integrity</span>,{" "}
              <span className="font-medium">reliability</span>, and{" "}
              <span className="font-medium">excellence</span>.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Target className="text-[#1e5d8a] w-6 h-6" />
              <h3 className="text-2xl font-semibold text-[#1e5d8a]">Our Mission</h3>
            </div>
            <p className="text-justify text-[12px] text-gray-700 leading-relaxed border-l-4 border-[#1e5d8a] pl-4">
              To empower global trade by delivering{" "}
              <span className="font-medium">premium quality products</span>,{" "}
              <span className="font-medium">trustworthy representation services</span>, and{" "}
              <span className="font-medium">transparent sourcing solutions</span> to clients
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
