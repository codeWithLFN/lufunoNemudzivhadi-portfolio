import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Typing from 'react-typing-effect';

const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white flex justify-center items-center overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col justify-center items-center text-center w-full px-12 z-10">
        {/* Name */}
        <motion.h1
          className="text-5xl font-semibold text-white mb-4 font-poppins"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Lufuno Nemudzivhadi
        </motion.h1>

        {/* Role with Typing Effect */}
        <motion.div
          className="text-3xl text-white mb-6 font-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typing
            text="A Software Developer & Cybersecurity Specialist"
            speed={100}
            eraseDelay={2000}
            typingDelay={500}
            className="font-light"
          />
        </motion.div>

        {/* Skills */}
        <motion.div
          className="flex justify-center gap-12 text-4xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="group relative">
            <div className="hover:text-gray-400 transition-all">💻</div>
            <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm text-gray-400">Software Development</span>
          </div>
          <div className="group relative">
            <div className="hover:text-gray-400 transition-all">🔐</div>
            <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm text-gray-400">Cybersecurity</span>
          </div>
          <div className="group relative">
            <div className="hover:text-gray-400 transition-all">⚙️</div>
            <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm text-gray-400">Problem Solving</span>
          </div>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <button
            className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-gray-500 hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = '/path-to-resume.pdf'}
          >
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
