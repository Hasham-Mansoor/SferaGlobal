

const Certifications = () => {
  const certifications = [
    "Pakistan Customs Registration (PSW Enabled) – For import/export clearances",
    "ISO 9001:2015 – Certified for Quality Management Systems",
    "Halal Certification – For edible salt products",
    "Health & Safety Certificate – For salt product processing",
    "Certificate of Origin Authorization – For exporting to key international markets",
    "Member, Pakistan Salt Manufacturers Association (PSMA) – For Trade Association",
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-20 py-10 bg-gray-50">
      <h2 className="text-2xl font-semibold text-[#1e5d8a] text-center mb-6">Certifications & Compliance</h2>
      <p className="text-[#17374f] mb-10 text-center max-w-full text-xs">
        We are fully compliant with national and international standards governing import/export activities.
        Our certifications include:
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((item, index) => {
          const [title, description] = item.split("–");
          return (
            <div
              key={index}
              className="bg-white border-l-4 border-gray-200 rounded-md shadow-md p-4 transition hover:shadow-lg"
            >
              <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-800">{title.trim()}</span>
                {description && (
                  <span className="text-xs text-gray-600"> – {description.trim()}</span>
                )}
              </p>
            </div>
          );
        })}
      </div>
        <p className="text-[#17374f] mb-6 text-center max-w-full mt-10 text-xs">
       We continuously seek and maintain industry-specific certifications to ensure our clients receive only 
 <strong> verified, legally compliant, and high-quality</strong> products.
      </p>
    </div>
  );
};

export default Certifications;
