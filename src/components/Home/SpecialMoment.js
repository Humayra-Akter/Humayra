import { motion } from "framer-motion";
import mccWeb from "../../images/mccWeb.jpg";
import mccWeb1 from "../../images/mccWeb1.png";
import mccWeb2 from "../../images/mccWeb2.jpg";
import mccWeb3 from "../../images/mccWeb3.jpg";
import mccWeb4 from "../../images/mccWeb4.png";

const SpecialMoment = () => {
  const images = [mccWeb, mccWeb1, mccWeb2, mccWeb3, mccWeb4];

  return (
    <section
      style={{ fontFamily: "'Poetsen One', sans-serif" }}
      className="relative mt-10 py-10 px-6 md:px-12"
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-50"
        >
          <div className="blur-[106px] lg:h-56 h-44 bg-gradient-to-br to-purple-400 from-slate-100"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-white"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#00e6e6] to-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Milestone to Remember
        </motion.h2>
        <p className="text-white md:text-lg mt-3 leading-relaxed">
          Launching the{" "}
          <span className="text-purple-300">MIST Career Club</span> website was
          more than just a project—it was a journey of passion, dedication, and
          innovation.
        </p>

        {/* Grid Layout */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-lg bg-[#151515] ${
                index === 0 ? "col-span-2 row-span-1" : "col-span-1 row-span-1"
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <img
                src={img}
                alt={`MCC Moment ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {[
            {
              value: "1st",
              label: "Inaugrated Club Website",
              color: "text-purple-500",
            },
            {
              value: "100+",
              label: "Hours of Dedication",
              color: "text-[#ff00ff]",
            },
            { value: "1", label: "Proud Moment", color: "text-pink-700" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glassmorphism bg-slate-900 bg-slate-200 p-4 rounded-xl shadow-lg w-32 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-white">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-wrap justify-center lg:gap-6">
          <motion.a
            href="https://career-club.mist.ac.bd/"
            target="_blank"
            className="hover:bg-primary hover:text-secondary py-2 px-4 rounded-md bg-secondary text-primary border-2 flex gap-2 hover:border-secondary transition-colors mt-8 hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Visit MCC Website
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/18DeOJnv5WVp_237qmynpp9OFjbxxR_X-/view?usp=sharing"
            target="_blank"
            className="hover:bg-primary hover:text-secondary py-2 px-4 rounded-md bg-secondary text-primary border-2 flex gap-2 hover:border-secondary transition-colors mt-8 hover:scale-105 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Enjoy the Moment
          </motion.a>
        </div>
      </div>{" "}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-50"
        >
          <div className="blur-[106px] lg:h-56 h-44 bg-gradient-to-br to-purple-400 from-slate-100"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-white"></div>
        </div>
      </div>
    </section>
  );
};

export default SpecialMoment;
