import { motion } from "framer-motion";

const AboutMe = () => {
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
          {/* Left Side: Image */}
          <motion.div
            className="w-1/3 rounded-full overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/path-to-your-image.jpg"
              alt="Lufuno Nemudzivhadi"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </motion.div>

          {/* Right Side: About Text */}
          <motion.div
            className="w-full md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg text-gray-600 mb-6">
              Hi, I'm Lufuno Nemudzivhadi, a passionate software developer and cybersecurity specialist. 
              I specialize in developing full-stack applications, ensuring secure coding practices, and 
              leveraging cutting-edge tools to build scalable and efficient software systems. With a 
              strong foundation in problem-solving and a commitment to continuous learning, I am always 
              looking for new challenges and opportunities to improve my skills.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              My journey in software development started at a young age, where I fell in love with 
              creating solutions that could positively impact the world. Over time, I expanded my skillset 
              in cybersecurity to ensure the software I create is secure and resilient against the ever-evolving 
              digital threats. I believe that technology should not only solve problems but do so in a way that 
              ensures the safety and privacy of users.
            </p>
            <p className="text-lg text-gray-600">
              I am currently looking for opportunities where I can contribute to innovative projects and 
              collaborate with talented teams to build solutions that make a difference. Let's connect!
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
