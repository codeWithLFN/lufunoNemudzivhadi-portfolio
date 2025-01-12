import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaUserTie, FaProjectDiagram, FaShieldAlt } from "react-icons/fa";

const skillsData = [
  {
    category: "Core",
    skills: [
      { name: "C#", percentage: 90 },
      { name: "Kotlin", percentage: 85 },
      { name: "Java", percentage: 80 },
      { name: "SQL", percentage: 95 },
      { name: "HTML5", percentage: 90 },
      { name: "CSS3", percentage: 85 },
      { name: "JavaScript", percentage: 80 },
      { name: "Git", percentage: 90 },
    ],
    icon: <FaCode className="text-teal-500 text-3xl" />,
  },
  {
    category: "Databases",
    skills: [
      { name: "Azure SQL", percentage: 80 },
      { name: "Firebase", percentage: 85 },
    ],
    icon: <FaDatabase className="text-teal-500 text-3xl" />,
  },
  {
    category: "Frameworks/Tools",
    skills: [
      { name: "ASP.NET (MVC)", percentage: 90 },
      { name: ".NET Stack", percentage: 85 },
      { name: ".Net Web API", percentage: 80 },
      { name: "Entity Framework", percentage: 80 },
      { name: "Bootstrap", percentage: 85 },
      { name: "Visual Studio", percentage: 90 },
      { name: "Visual Studio Code", percentage: 95 },
      { name: "Android Studio", percentage: 85 },
      { name: "IntelliJ", percentage: 80 },
    ],
    icon: <FaTools className="text-teal-500 text-3xl" />,
  },
  {
    category: "Cybersecurity",
    skills: [
      { name: "Network Traffic Analysis", percentage: 75 },
      { name: "Security Deception (Honeypots)", percentage: 80 },
      { name: "Web Application Security Scanning", percentage: 70 },
      { name: "Threat Modeling", percentage: 65 },
      { name: "Vulnerability Assessment", percentage: 80 },
    ],
    icon: <FaShieldAlt className="text-teal-500 text-3xl" />,
  },
  {
    category: "Personal Skills",
    skills: [
      { name: "Problem Solving", percentage: 95 },
      { name: "Communication", percentage: 90 },
      { name: "Adaptability", percentage: 90 },
      { name: "Teamwork", percentage: 85 },
      { name: "Time Management", percentage: 80 },
    ],
    icon: <FaUserTie className="text-teal-500 text-3xl" />,
  },
  {
    category: "Other",
    skills: [
      { name: "SDLC", percentage: 85 },
      { name: "Agile Methodologies", percentage: 90 },
    ],
    icon: <FaProjectDiagram className="text-teal-500 text-3xl" />,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-16 px-8 md:px-16 text-gray-800">
      <motion.div
        className="container mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          My <span className="text-teal-500">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {skillCategory.icon}
                <h3 className="text-2xl font-semibold text-gray-800">{skillCategory.category}</h3>
              </div>
              <ul className="space-y-4">
                {skillCategory.skills.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between items-center">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className="bg-teal-500 h-2 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
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
