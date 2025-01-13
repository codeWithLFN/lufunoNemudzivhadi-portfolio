import React from 'react';
import { motion } from 'framer-motion';
import Typing from 'react-typing-effect';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <ParticlesBackground />
      
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-4xl w-full space-y-8 text-center z-10">
          <motion.h1
            className="text-6xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
              Hi, I'm Lufuno Nemudzivhadi
            </span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Typing
              text={[
                "Software Developer",
                "Cybersecurity Specialist",
                "Problem Solver"
              ]}
              speed={50}
              eraseSpeed={50}
              typingDelay={1000}
            />
          </motion.div>

          <motion.div
            className="flex justify-center gap-8 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { icon: '💻', text: 'Development' },
              { icon: '🔐', text: 'Security' },
              { icon: '⚡', text: 'Performance' },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="group relative p-4 bg-gray-800/30 rounded-xl backdrop-blur-sm"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl">{skill.icon}</div>
                <p className="text-sm text-gray-300 mt-2">{skill.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <button
              onClick={() => window.location.href = '/resume/lufuno-nemudzivhadi-resume.pdf'}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full
                       hover:from-blue-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300
                       shadow-lg hover:shadow-xl"
            >
              Download CV
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full
                       hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { Icon: FaGithub, link: "https://github.com/yourusername" },
              { Icon: FaLinkedin, link: "https://linkedin.com/in/yourusername" },
              { Icon: FaTwitter, link: "https://twitter.com/yourusername" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 text-2xl transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
              >
                <social.Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;