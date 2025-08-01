import styles from "./IndustrialIntro.module.css";

const IndustrialIntro = () => {
  return (
    <section className={`${styles.intro} py-8 pt-20  bg-white px-4 md:px-12`}>
      <div className=" max-w-6xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#1e5d8a] mb-12">
          Industrial & Specialty Salts
        </h1>
        <p className="text-[12px] text-gray-700 leading-relaxed mb-4">
          At <span className="text-[#1e5d8a] font-semibold">Sfera Global</span>, we specialize in supplying a comprehensive range of 
          industrial sea salt products, meticulously engineered to meet the unique requirements 
          of various manufacturing and industrial sectors.
        </p>
        <p className="text-[12px] text-gray-700 leading-relaxed">
          Whether you're in the <span className="text-[#1e5d8a] font-semibold">chemical, textile, oil drilling</span>, or 
          <span className="text-[#1e5d8a] font-semibold"> personal care industry</span>, our premium-grade salts are crafted with 
          precision, quality assurance, and a strong commitment to performance.
        </p>
        <p className="text-[12px] text-gray-700 leading-relaxed mt-4">
          Partner with us to experience <span className="text-[#1e5d8a] font-semibold">reliable supply, consistent quality, and expert technical support</span>.
          <br />
          <span className="font-medium">Contact us today</span> to learn how our industrial sea salt solutions can support your business.
        </p>
      </div>
    </section>
  );
};

export default IndustrialIntro;
