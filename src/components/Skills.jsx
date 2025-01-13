import { motion } from "framer-motion";
import { FaCode, FaGlobe, FaTools, FaShieldAlt, FaCog } from "react-icons/fa";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C#", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Kotlin", level: 80 },
      { name: "SQL", level: 80 },
      { name: "Java", level: 85 }
    ],
    icon: <FaCode className="text-3xl" />
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "HTML5/CSS3", level: 90 },
      { name: "React.js", level: 85 },
      { name: "ASP.NET", level: 85 },
      { name: "Web API", level: 80 }
    ],
    icon: <FaGlobe className="text-3xl" />
  },
  {
    category: "Tools & Frameworks",
    skills: [
      { name: ".NET Core", level: 90 },
      { name: "Entity Framework", level: 85 },
      { name: "Git", level: 90 },
      { name: "Postman", level: 75 },
      { name: "Firebase", level: 80 },
      { name: "Azure", level: 80 }
    ],
    icon: <FaTools className="text-3xl" />
  },
  {
    category: "Cybersecurity",
    skills: [
      { name: "Network Traffic Analysis", level: 85 },
      { name: "Web Application Security Scanning", level: 80 },
      { name: "Threat Analysis", level: 65 },
      { name: "Vulnerability Assessment", level: 70 },
      { name: "Security Tools", level: 69 }
    ],
    icon: <FaShieldAlt className="text-3xl" />
  },
  {
    category: "Development Practices",
    skills: [
      { name: "Agile/Scrum", level: 90 },
      { name: "SDLC", level: 85 }
    ],
    icon: <FaCog className="text-3xl" />
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg text-white">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-teal-500 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
