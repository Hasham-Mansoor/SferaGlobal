

// const LegalInfo = () => {
//   const legalItems = [
//     { label: "Company Name", value: "Sfera Global (Private) Limited" },
//     { label: "Corporate Structure", value: "Private Limited Company" },
//     { label: "Incorporated Under", value: "Companies Act, 2017 – Government of Pakistan" },
//     { label: "SECP Registration No.", value: "0285925" },
//     { label: "NTN (National Tax Number)", value: "G207921-3" },
//     { label: "STRN (Sales Tax Registration Number)", value: "G207921-3" },
//     { label: "Chamber of Commerce Membership", value: "Lahore Chamber of Commerce & Industry (LCCI)" },
//     { label: "Registered Office", value: "133, Block-C, Eden City, Lahore, Pakistan" },
//   ];

//   return (
//     <section className="bg-white px-4 py-10 md:px-16 lg:px-24">
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-2xl font-semibold text-center text-[#1e5d8a] mb-10">
//           Legal & Company Information
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {legalItems.map((item, idx) => (
//             <div
//               key={idx}
//               className="bg-gray-50 border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition duration-300"
//             >
//               <h4 className="text-[#17374f] text-xs uppercase font-medium mb-1 tracking-wider">
//                 {item.label}
//               </h4>
//               <p className="text-[#17374f] text-sm font-semibold">{item.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LegalInfo;
import { FaCheckCircle } from "react-icons/fa";

const LegalInfo = () => {
  const legalItems = [
    { label: "Company Name", value: "Sfera Global (Private) Limited" },
    { label: "Corporate Structure", value: "Private Limited Company" },
    { label: "Incorporated Under", value: "Companies Act, 2017 – Government of Pakistan" },
    { label: "SECP Registration No.", value: "0285925" },
    { label: "NTN (National Tax Number)", value: "G207921-3" },
    { label: "STRN (Sales Tax Registration Number)", value: "G207921-3" },
    { label: "Chamber of Commerce Membership", value: "Lahore Chamber of Commerce & Industry (LCCI)" },
    { label: "Registered Office", value: "133, Block-C, Eden City, Lahore, Pakistan" },
  ];

  return (
    <section className="bg-[#f9fafb] px-4 py-14 md:px-20 lg:px-28">
      <div className="max-w-5xl mx-auto text-[#17374f]">
        <h2 className="text-2xl md:text-2xl font-semibold text-center text-[#1e5d8a] mb-10">
          Legal & Company Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-7 gap-x-16">
          {legalItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-[#abb6be] mt-1 text-sm" />
              <div>
                <p className="text-sm font-semibold text-[#1e5d8a] tracking-wide uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-[#17374f] leading-relaxed">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalInfo;
