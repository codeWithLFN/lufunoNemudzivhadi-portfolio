import { motion } from "framer-motion";
import ProfilePic from "../assets/react.svg"; // Replace with actual profile image path

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-16 bg-gray-100">
      <motion.div
        className="w-48 h-48 rounded-full overflow-hidden"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={ProfilePic} alt="Lufuno Nemudzivhadi" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div
        className="text-center md:text-left md:ml-10 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I am a recent IT graduate specializing in Software Development with hands-on experience in full-stack development,
          database management, and software analysis. I have a strong foundation in C#, Java, Kotlin, and SQL. Passionate
          about building user-friendly applications and continuously growing my technical skills in the field of cybersecurity.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
