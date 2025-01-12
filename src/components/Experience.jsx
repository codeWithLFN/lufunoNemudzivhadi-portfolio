import { motion } from "framer-motion";

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

const certificationsData = [
  {
    title: "GitHub Foundation",
    issuer: "GitHub",
    year: "2024",
    link: "https://github.com",
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp",
    year: "2023",
    link: "https://www.freecodecamp.org",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: "2023",
    link: "https://www.cisco.com",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-8 md:px-16 bg-gray-100 text-gray-800">
      <motion.div
        className="container mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          My <span className="text-teal-500">Experience</span>
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Work Experience</h3>
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <h4 className="text-xl font-semibold text-teal-500">{exp.title}</h4>
              <p className="text-gray-600 text-sm mb-2">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.date}</p>
              <p className="text-gray-700">{exp.description}</p>
              <div className="mt-4">
                <h5 className="font-medium text-gray-800">Skills:</h5>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {exp.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Certifications</h3>
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <h4 className="text-xl font-semibold text-teal-500">{cert.title}</h4>
              <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
              <p className="text-gray-500 text-sm mb-4">{cert.year}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 hover:text-teal-600"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
