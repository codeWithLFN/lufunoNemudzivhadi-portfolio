import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaUserTie, FaProjectDiagram, FaShieldAlt } from "react-icons/fa";

const skillsData = [
  {
    category: "Core",
    skills: ["C#", "Kotlin", "Java", "SQL", "HTML5", "CSS3", "JavaScript", "Git"],
    icon: <FaCode className="text-teal-500 text-3xl" />,
  },
  {
    category: "Databases",
    skills: ["Azure SQL", "Firebase"],
    icon: <FaDatabase className="text-teal-500 text-3xl" />,
  },
  {
    category: "Frameworks/Tools",
    skills: [
      "ASP.NET (MVC)",
      ".NET Stack",
      ".Net Web API",
      "Entity Framework",
      "Bootstrap",
      "Visual Studio",
      "Visual Studio Code",
      "Android Studio",
      "IntelliJ",
    ],
    icon: <FaTools className="text-teal-500 text-3xl" />,
  },
  {
    category: "Cybersecurity",
    skills: [
      "Network Traffic Analysis",
      "Security Deception (Honeypots)",
      "Web Application Security Scanning",
      "Threat Modeling",
      "Vulnerability Assessment",
    ],
    icon: <FaShieldAlt className="text-teal-500 text-3xl" />,
  },
  {
    category: "Personal Skills",
    skills: ["Problem Solving", "Communication", "Adaptability", "Teamwork", "Time Management"],
    icon: <FaUserTie className="text-teal-500 text-3xl" />,
  },
  {
    category: "Other",
    skills: ["SDLC", "Agile Methodologies"],
    icon: <FaProjectDiagram className="text-teal-500 text-3xl" />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white py-16 px-8 md:px-16 text-gray-800"
    >
      <motion.div
        className="container mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          My <span className="text-teal-500">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {skillCategory.icon}
                <h3 className="text-xl font-semibold text-gray-700">
                  {skillCategory.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skillCategory.skills.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    • {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
