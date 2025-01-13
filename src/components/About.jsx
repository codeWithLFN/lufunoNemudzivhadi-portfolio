import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-8 md:px-16 text-gray-800">
      <motion.div
        className="container mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          About <span className="text-teal-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/path-to-your-image.jpg"
              alt="Lufuno Nemudzivhadi"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg text-gray-600 mb-6 leading-relaxed transition-all duration-300 ease-in-out hover:text-teal-500">
              Hi, I'm Lufuno, a software developer and cybersecurity enthusiast focused on building secure, scalable systems.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed transition-all duration-300 ease-in-out hover:text-teal-500">
              I'm passionate about solving real-world problems with technology, ensuring safety through secure practices in every step.
            </p>
            <div className="mt-8 text-center md:text-left">
              <a
                href="#contact"
                className="inline-block bg-teal-500 text-white px-6 py-3 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:bg-teal-600 hover:scale-105"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
