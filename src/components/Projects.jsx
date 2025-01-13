import { motion } from "framer-motion";
import { FaGithub, FaRocket } from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Bantu Health - Virtual Health Healthcare App",
      description:
        "A virtual health assistant app offering instant medical diagnosis powered by AI and telemedicine. Features telemedicine integration, AI symptom analysis, and an emergency feature.",
      techStack: [
        "React Native",
        "Expo",
        "Gemini API",
        "Google Maps API",
        "Jitsi Meet",
        "Node.js",
      ],
      githubLink: "https://github.com/codeWithLFN/Bantu_Health",
      demoLink: "https://your-demo-link.com",
      category: "Software Development",
    },
    {
            title: "Vitality Health API - Medical AI Assistant",
            description:
              "An API that assists users in understanding symptoms and receiving health insights. It includes critical condition detection and easy integration with other applications.",
            techStack: ["Node.js", "Express.js", "Google Generative AI", "dotenv"],
            githubLink: "https://github.com/codewithlfn/vitality-health-api",
            demoLink: "https://your-demo-link.com", // Replace with actual demo URL
            category: "AI",
          },
          {
            title: "AviaryQuest - Bird Enthusiast Android Application",
            description:
              "An Android app that enhances the bird-watching experience by integrating Google Maps and the eBird API. Features bird identification using TensorFlow Lite.",
            techStack: ["Kotlin", "TensorFlow Lite", "eBird API", "Google Maps API"],
            githubLink: "https://github.com/codeWithLFN/AviaryQuest",
            demoLink: "https://your-demo-link.com", // Replace with actual demo URL
            category: "Software Development",
          },
          {
            title: "Disaster Alleviation Foundation Web Application",
            description:
              "A web app for managing donations and disaster tracking. Includes secure user authentication with Microsoft Identity and database integration using Azure SQL.",
            techStack: ["ASP.NET Core MVC", "Microsoft Identity", "Azure SQL"],
            githubLink: "https://github.com/codeWithLFN/Disaster-Alleviation-Foundation",
            demoLink: "https://your-demo-link.com", // Replace with actual demo URL
            category: "Software Development",
          },
          {
            title: "Medical Suite - Doctor's Appointment System",
            description:
              "A doctor appointment system that simplifies the booking process, with Firebase integration for authentication and data storage.",
            techStack: ["HTML5", "CSS3", "JavaScript", "Firebase", "Kotlin"],
            githubLink: "https://github.com/codeWithLFN/MedicalSuite--Doctor_Appointment_System",
            demoLink: "https://your-demo-link.com", // Replace with actual demo URL
            category: "Software Development",
          },
          {
            title: "Sneaker Snap - Sneaker Collection Tracking App",
            description:
              "An app that helps users track their sneaker collection. Features include a robust achievement system and Firebase integration for seamless data management.",
            techStack: ["Kotlin", "Firebase"],
            githubLink: "https://github.com/codeWithLFN/SneakerSnap",
            demoLink: "https://your-demo-link.com", // Replace with actual demo URL
            category: "Software Development",
          },
          {
            title: "Real-time Network Traffic Dashboard",
            description:
              "A real-time network traffic dashboard built using Python and Streamlit. Provides live traffic updates and visualization for monitoring network activity.",
            techStack: ["Python", "Streamlit"],
            githubLink: "https://github.com/codeWithLFN/real-time-network-traffic-dashboard",
            demoLink: "https://your-demo-link.com", // Replace with actual demo URL
            category: "Cybersecurity",
          },
          {
            title: "Honeypot in Python: A Practical Guide to Security Deception",
            description:
              "A honeypot system in Python designed to detect and divert cyber-attacks. Demonstrates the effectiveness of security deception strategies.",
            techStack: ["Python", "Security Deception"],
            githubLink: "https://github.com/codeWithLFN/honeypot-in-python",
            demoLink: "https://your-demo-link.com", // Replace with actual demo URL
            category: "Cybersecurity",
          },
          {
            title: "Simple Web Application Security Scanner",
            description:
              "A simple web application security scanner built with Python to identify potential vulnerabilities in web applications.",
            techStack: ["Python", "Security", "Web Application"],
            githubLink: "https://github.com/codeWithLFN/web-application-security-scanner",
            demoLink: "https://your-demo-link.com", // Replace with actual demo URL
            category: "Cybersecurity",
          },
          {
            title: "SplitWiseApp ",
            description:
            " a collaborative bill-splitting application built with React. Easily manage shared expenses with friends, add bills, track individual shares, and keep everyone in the loop",
            techStack: ["React", "CSS", "JavaScript"],
            githubLink: "https://github.com/codeWithLFN/SplitWiseApp",
            demoLink: "https://splitwiseapp.vercel.app/", // Replace with actual demo URL
            category: "Web Development",

          }

    // ... rest of your project data
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const categories = ["All", "Software Development", "Cybersecurity", "AI"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my latest work across different domains
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-2.5 rounded-full font-medium transition-all duration-300
                ${
                  selectedCategory === category
                    ? "bg-teal-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="p-6 space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-teal-500 mb-2">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-teal-500 transition-colors"
                    >
                      <FaGithub className="text-lg" />
                      <span>Code</span>
                    </motion.a>
                    {project.demoLink && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-teal-500 transition-colors"
                      >
                        <FaRocket className="text-lg" />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
