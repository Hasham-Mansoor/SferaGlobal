import React from "react";
import IndustrialIntro from "./IndustrialIntro";
import SaltCategoryCard from "./SaltCategoryCard";
import ContactCTA from "./ContactCta";

const saltData = [
  {
    title: "Chlor-Alkaline Grade Salt",
    description:
      "Used in the production of chlorine and caustic soda through the electrolysis of brine, Chlor-Alkaline Grade Salt requires high purity levels to ensure maximum efficiency and minimal contamination in electrochemical processes. Our salt meets the stringent standards for this application, ensuring optimum yield and process safety.",
  },
  {
    title: "Dyes Grade Salt",
    description:
      "This salt is specially purified for use in the dye and pigment manufacturing industries. It helps in stabilizing dye compounds and enhancing color fixation. Our Dyes Grade Salt ensures uniform particle size and minimal impurities, critical for maintaining color consistency and quality.",
  },
  {
    title: "Textile Dyeing Grade Salt",
    description:
      "Ideal for salt-intensive dyeing operations, reducing patchiness and Essential in the textile dyeing process, this salt facilitates even dye penetration and bonding with fabric fibers. Our Textile Dyeing Grade Salt is widely used in reactive and direct dyeing processes, offering excellent solubility and purity to ensure uniform coloration and vibrant results.",
  },
  {
    title: "Oil Drilling Grade Salt",
    description:
      "UOil Drilling Grade Salt is used in drilling fluids to increase the density of the mud, stabilize boreholes, and prevent well collapse. Our product is formulated to meet the demanding conditions of onshore and offshore drilling operations, offering exceptional performance and flow characteristics.",
  },
  {
    title: "Refinery - Grade Salt",
    description:
      "Used in various refining processes, especially in the petroleum industry, Refinery Grade Salt aids in water treatment, separation processes, and chemical reactions. Our salt is processed to meet refinery-specific needs with low moisture content and controlled granulation.",
  },
  {
    title: "Water Softening Grade Salt",
    description:
      "Our Water Softening Salt is designed to regenerate ion-exchange resins in water softeners, effectively removing calcium and magnesium ions from hard water. The high-purity, low-insoluble formula extends the life of softening systems and ensures efficient regeneration cycles.",
  },
  {
    title: "Salt Tablets for Water Softeners",
    description:
      "Engineered for high performance, these compressed salt tablets dissolve evenly and slowly, minimizing mushing and bridging in water softening systems. Ideal for both domestic and industrial use, our tablets are made from high-purity vacuum salt for consistent performance.",
  },
  {
    title: "Soap & Glycerin Grade",
    description:
      "This grade is used in the saponification process of soap production and in separating glycerin from soap. It ensures consistent batch quality and high yield, with low moisture and impurity levels to maintain process efficiency and product integrity.",
  },
  {
    title: "Detergent Grade Salt",
    description:
      "An essential ingredient in powdered detergent formulations, Detergent Grade Salt acts as a filler and processing aid. Our salt helps control viscosity, improves flow, and supports consistent mixing for high-quality detergent production.",
  },
  {
    title: "De-icing / Snow Melting Salt",
    description:
      "Specially graded for efficient snow and ice removal, our De-icing Salt provides fast and effective melting even in sub-zero temperatures. Available in various grain sizes, it offers reliable performance for roads, walkways, and industrial premises during winter.",
  },
  {
    title: "Toothpaste Grade",
    description:
      "Used as an abrasive and thickening agent in oral care products, Toothpaste Grade Salt meets stringent purity standards and is free from harmful contaminants. It offers controlled granulation and consistency, suitable for formulation in both gel and paste-based toothpastes.",
  },
];

function index() {
  return (
    <div>
      <IndustrialIntro />
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-1">
        {saltData.map((salt, index) => (
          <SaltCategoryCard
            key={index}
            title={salt.title}
            description={salt.description}
          />
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center px-4">
  {saltData.map((salt, index) => (
    <SaltCategoryCard
      key={index}
      title={salt.title}
      description={salt.description}
      index={index}
    />
  ))}
</div>

      <ContactCTA />
    </div>
  );
}

export default index;
