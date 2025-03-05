import { motion } from "framer-motion";
import mccWeb from "../../images/mccWeb.jpg";
import mccWeb1 from "../../images/mccWeb1.png";
import mccWeb2 from "../../images/mccWeb2.jpg";
import mccWeb3 from "../../images/mccWeb3.jpg";
import mccWeb4 from "../../images/mccWeb4.png";

const SpecialMoment = () => {
  const images = [mccWeb, mccWeb1, mccWeb2, mccWeb3, mccWeb4];

  return (
    <section className="relative mt-10 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#00e6e6] to-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Milestone to Remember
        </motion.h2>
        <p className="text-base md:text-lg mt-2 leading-relaxed">
          Launching the{" "}
          <span className="font-semibold text-primary">MIST Career Club</span>{" "}
          website was more than just a project—it was a journey of passion,
          dedication, and innovation.
        </p>


        {/* Call to Action */}
        <div className="mt-8 flex flex-wrap justify-center lg:gap-6">
          <motion.a
            href="https://career-club.mist.ac.bd/"
            target="_blank"
            className="lg:mt-6 mt-3 inline-block px-6 py-3 text-base   font-medium text-white bg-primary dark:hover:text-black hover:text-primary hover:bg-secondary rounded-full shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Visit MCC Website
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/18DeOJnv5WVp_237qmynpp9OFjbxxR_X-/view?usp=sharing"
            target="_blank"
            className="lg:mt-6 mt-3 inline-block px-6 py-3 text-base   font-medium text-white bg-primary dark:hover:text-black hover:bg-secondary hover:text-primary rounded-full shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Enjoy the Moment
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default SpecialMoment;
