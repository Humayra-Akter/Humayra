// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { client, urlFor } from "../../sanityClient";
// import ScrollToTop from "../Shared/ScrollToTop";

// const Certificate = () => {
//   const [certificates, setCertificates] = useState([]);

//   useEffect(() => {
//     Aos.init({ duration: 1000 });

//     // Fetch all certificates from Sanity
//     client
//       .fetch(
//         `*[_type == "certificate"] | order(year desc) {
//     title,
//     image1,
//     image2,
//     category,
//     year
//   }`
//       )
//       .then((data) => {
//         console.log("Fetched from Sanity:", data); // 👈 ADD THIS
//         setCertificates(data);
//       })
//       .catch(console.error);
//   }, []);

//   return (
//     <div
//       className="max-w-7xl mx-auto px-6 py-16 relative"
//       style={{ fontFamily: "'Poetsen One', sans-serif" }}
//     >
//       <div className="relative">
//         <div
//           aria-hidden="true"
//           className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40"
//         >
//           <div className="blur-[106px] lg:h-56 h-44 bg-gradient-to-br from-slate-200 to-purple-400"></div>
//           <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-white"></div>
//         </div>
//       </div>

//       <h3 className="text-4xl text-center text-primary mb-14">Certificates</h3>

//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {certificates?.map((certificate, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             className="group relative rounded-2xl border border-slate-600/40 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-primary/40 transition-all overflow-hidden"
//           >
//             {/* Image Swap on Hover */}
//             <div className="relative h-64 overflow-hidden">
//               <img
//                 src={urlFor(certificate.image1).url()}
//                 alt={certificate.title}
//                 className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-110"
//               />
//               {certificate.image2 && (
//                 <img
//                   src={urlFor(certificate.image2).url()}
//                   alt={certificate.title}
//                   className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"
//                 />
//               )}
//             </div>

//             {/* Title and Category */}
//             <div className="p-4 text-center">
//               <p
//                 style={{ fontFamily: "'Esteban'" }}
//                 className="text-slate-200 text-sm leading-relaxed"
//               >
//                 {certificate.title}
//               </p>
//               {certificate.year && (
//                 <p className="text-xs text-slate-400 mt-1">
//                   {certificate.year}
//                 </p>
//               )}
//               {certificate.category && (
//                 <p className="text-xs text-primary mt-1 font-semibold uppercase tracking-wide">
//                   {certificate.category}
//                 </p>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       <ScrollToTop />
//     </div>
//   );
// };

// export default Certificate;
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { client, urlFor } from "../../sanityClient";
import ScrollToTop from "../Shared/ScrollToTop";

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });

    client
      .fetch(
        `*[_type == "certificate"] | order(year desc) {
          title,
          image1,
          image2,
          category,
          year
        }`
      )
      .then((data) => setCertificates(data))
      .catch(console.error);
  }, []);

  // Unique categories and years from dataset
  const categories = [
    "All",
    ...new Set(certificates.map((c) => c.category).filter(Boolean)),
  ];
  const years = [
    "All",
    ...Array.from(
      new Set(certificates.map((c) => c.year).filter(Boolean))
    ).sort((a, b) => b - a),
  ];

  // Filtering logic
  const filteredCertificates = certificates.filter((c) => {
    const matchYear =
      selectedYear === "All" || c.year?.toString() === selectedYear;
    const matchCategory =
      selectedCategory === "All" || c.category === selectedCategory;
    return matchYear && matchCategory;
  });

  return (
    <div
      className="max-w-7xl mx-auto px-6 py-16 relative"
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40">
          <div className="blur-[106px] bg-gradient-to-br from-slate-200 to-purple-400"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-white"></div>
        </div>
      </div>

      <h3 className="text-4xl text-center text-primary mb-14">Certificates</h3>

      {/* Certificate Grid */}
      <motion.div
        layout
        className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
      >
        {filteredCertificates.length > 0 ? (
          filteredCertificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-slate-600/40 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-primary/40 transition-all overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={urlFor(certificate.image1).url()}
                  alt={certificate.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-110"
                />
                {certificate.image2 && (
                  <img
                    src={urlFor(certificate.image2).url()}
                    alt={certificate.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-110"
                  />
                )}
              </div>

              <div className="p-4 text-center">
                <p
                  style={{ fontFamily: "'Esteban'" }}
                  className="text-slate-200 text-sm leading-relaxed"
                >
                  {certificate.title}
                </p>
                {certificate.year && (
                  <p className="text-xs text-slate-400 mt-1">
                    {certificate.year}
                  </p>
                )}
                {certificate.category && (
                  <p className="text-xs text-primary mt-1 font-semibold uppercase tracking-wide">
                    {certificate.category}
                  </p>
                )}
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-slate-400 text-lg col-span-full">
            No certificates found.
          </p>
        )}
      </motion.div>

      {/* Floating Filter Button (middle-right) */}
      <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex flex-col items-center">
        {/* Simple clean filter button */}
        <motion.button
          onClick={() => setIsFilterOpen((prev) => !prev)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 bg-gradient-to-r from-primary to-green-800 rounded-full shadow-md text-black backdrop-blur-md hover:shadow-primary transition-all"
        >
          <i className="fas fa-filter text-xl"></i>
        </motion.button>

        {/* Slide-out Filter Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              className="absolute right-14 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl p-5 w-60 mt-2"
            >
              {/* Year Filter */}
              <div className="mb-4">
                <label
                  className="block text-slate-300 text-sm mb-1"
                  style={{ fontFamily: "'Esteban'" }}
                >
                  Year
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 text-white focus:ring-2 focus:ring-primary"
                >
                  {years.map((year, i) => (
                    <option key={i} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label
                  className="block text-slate-300 text-sm mb-1"
                  style={{ fontFamily: "'Esteban'" }}
                >
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900/60 border border-slate-700 text-white focus:ring-2 focus:ring-primary"
                >
                  {categories.map((cat, i) => (
                    <option key={i} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Certificate;

