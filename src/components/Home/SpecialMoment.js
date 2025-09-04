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
        <p
          style={{ fontFamily: "'Esteban'" }}
          className="text-white md:text-lg mt-3 leading-relaxed"
        >
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

        <div className="mt-8 flex flex-wrap gap-6 justify-center">
          {[
            {
              value: "1st",
              label: "Inaugurated Website",
              color: "from-pink-500 to-purple-500",
            },
            {
              value: "100+",
              label: "Hours of Dedication",
              color: "from-cyan-400 to-blue-500",
            },
            {
              value: "1",
              label: "Proud Moment",
              color: "from-yellow-400 to-orange-500",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-xl p-4 w-32 text-center bg-slate-800/40 border border-white/10 backdrop-blur-md shadow-md hover:shadow-lg hover:-translate-y-1 transition"
            >
              <p
                className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                {stat.value}
              </p>
              <p
                style={{ fontFamily: "'Esteban'" }}
                className="text-sm text-gray-300"
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <motion.a
            href="https://career-club.mist.ac.bd/"
            target="_blank"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-cyan-400 text-slate-900 shadow-lg hover:scale-105 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Visit MCC Website
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/18DeOJnv5WVp_237qmynpp9OFjbxxR_X-/view?usp=sharing"
            target="_blank"
            className="px-6 py-2 rounded-full border border-cyan-400/50 text-cyan-300 hover:bg-cyan-400 hover:text-slate-900 shadow-md transition"
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
