import { motion } from "framer-motion";
import { useState } from "react";

// Experience Data
const experienceData = [
  {
    title: "Cybersecurity Candidate",
    company: "CAPACITI (Internship)",
    date: "September 2024 – Present",
    description:
      "Gaining hands-on experience in cybersecurity practices including threat detection, vulnerability assessments, and security protocols.",
    skills: ["Cybersecurity", "Vulnerability Assessment", "Security Protocols", "Threat Detection"],
  },
];

// Certifications Data
const certificationsData = [
  {
    title: "GitHub Foundation",
    issuer: "GitHub",
    year: "2024",
    pdf: "/certificates/github-certificate.pdf",
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp",
    year: "2023",
    pdf: "/certificates/csharp-certificate.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: "2023",
    pdf: "/certificates/cybersecurity-certificate.pdf",
  },
];

const Experience = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="experience" className="py-20 px-8 md:px-16 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        className="container mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Professional <span className="text-teal-500 relative">
            Experience
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-1 bg-teal-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </span>
        </motion.h2>

        {/* Work Experience Section */}
        <div className="mb-20 grid md:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl p-8 shadow-xl transform transition-all duration-300 
                ${activeCard === index ? 'scale-105 border-2 border-teal-500' : 'hover:shadow-2xl'}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="flex items-center mb-4">
                <div className="w-2 h-12 bg-teal-500 rounded-full mr-4" />
                <div>
                  <h4 className="text-2xl font-bold text-gray-800">{exp.title}</h4>
                  <p className="text-teal-600 font-medium">{exp.company}</p>
                </div>
              </div>
              <p className="text-gray-500 font-medium mb-4">{exp.date}</p>
              <p className="text-gray-700 leading-relaxed mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificationsData.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
              >
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h4>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-teal-600 font-medium">{cert.issuer}</p>
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                      {cert.year}
                    </span>
                  </div>
                  <div className="relative h-48 mb-4">
                    <iframe
                      src={cert.pdf}
                      className="absolute inset-0 w-full h-full rounded-lg border border-gray-200"
                      title={`${cert.title} Preview`}
                    />
                  </div>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                  >
                    View Certificate
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;