import { motion } from "framer-motion";
import { FaCode, FaShieldAlt, FaDatabase } from "react-icons/fa";
import pic from "../assets/pic.jpg";

const About = () => {
  const skills = [
    { icon: FaCode, name: "Software Development", level: 90 },
    { icon: FaShieldAlt, name: "Cybersecurity", level: 85 },
    { icon: FaDatabase, name: "Database Management", level: 80 }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <motion.div
        className="container mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-5xl font-bold text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
            About Me
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative group"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-64 h-64 mx-auto relative z-10">
              <img
                src={pic}
                alt="Lufuno Nemudzivhadi"
                className="w-full h-full object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl group-hover:opacity-0 transition-opacity duration-500" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-gray-700 leading-relaxed">
            Hi, I'm Lufuno, a software developer and cybersecurity enthusiast focused on building secure, scalable systems.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
            I'm passionate about solving real-world problems with technology, ensuring safety through secure practices in every step.
            </p>

            </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
