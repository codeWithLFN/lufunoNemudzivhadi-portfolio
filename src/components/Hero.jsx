import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-r from-indigo-500 to-blue-500">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center space-y-4">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Lufuno Nemudzivhadi
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Software Developer & Cybersecurity Enthusiast | Crafting innovative
          solutions for tomorrow's tech challenges.
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transform transition duration-300 ease-in-out"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <FaArrowDown className="inline-block mr-2" />
          Scroll Down
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
