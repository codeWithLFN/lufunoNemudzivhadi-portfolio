import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
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
      "Lelapa AI",
      "Node.js",
    ],
    githubLink: "https://github.com/codeWithLFN/Bantu_Health",
    liveLink: "https://your-demo-link.com",
    category: "Software Development",
  },
  {
    title: "Vitality Health API - Medical AI Assistant",
    description:
      "An API that assists users in understanding symptoms and receiving health insights. It includes critical condition detection and easy integration with other applications.",
    techStack: ["Node.js", "Express.js", "Google Generative AI", "dotenv"],
    githubLink: "https://github.com/codewithlfn/vitality-health-api",
    liveLink: "https://your-demo-link.com", // Replace with actual demo URL
    category: "AI",
  },
  {
    title: "AviaryQuest - Bird Enthusiast Android Application",
    description:
      "An Android app that enhances the bird-watching experience by integrating Google Maps and the eBird API. Features bird identification using TensorFlow Lite.",
    techStack: ["Kotlin", "TensorFlow Lite", "eBird API", "Google Maps API"],
    githubLink: "https://github.com/codeWithLFN/AviaryQuest",
    liveLink: "https://your-demo-link.com", // Replace with actual demo URL
    category: "Software Development",
  },
  {
    title: "Disaster Alleviation Foundation Web Application",
    description:
      "A web app for managing donations and disaster tracking. Includes secure user authentication with Microsoft Identity and database integration using Azure SQL.",
    techStack: ["ASP.NET Core MVC", "Microsoft Identity", "Azure SQL"],
    githubLink: "https://github.com/codeWithLFN/Disaster-Alleviation-Foundation",
    liveLink: "https://your-demo-link.com", // Replace with actual demo URL
    category: "Software Development",
  },
  {
    title: "Medical Suite - Doctor's Appointment System",
    description:
      "A doctor appointment system that simplifies the booking process, with Firebase integration for authentication and data storage.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Firebase", "Kotlin"],
    githubLink: "https://github.com/codeWithLFN/MedicalSuite--Doctor_Appointment_System",
    liveLink: "https://your-demo-link.com", // Replace with actual demo URL
    category: "Software Development",
  },
  {
    title: "Sneaker Snap - Sneaker Collection Tracking App",
    description:
      "An app that helps users track their sneaker collection. Features include a robust achievement system and Firebase integration for seamless data management.",
    techStack: ["Kotlin", "Firebase"],
    githubLink: "https://github.com/codeWithLFN/SneakerSnap",
    liveLink: "https://your-demo-link.com", // Replace with actual demo URL
    category: "Software Development",
  },
  {
    title: "Real-time Network Traffic Dashboard",
    description:
      "A real-time network traffic dashboard built using Python and Streamlit. Provides live traffic updates and visualization for monitoring network activity.",
    techStack: ["Python", "Streamlit"],
    githubLink: "https://github.com/codeWithLFN/real-time-network-traffic-dashboard",
    liveLink: "https://your-demo-link.com", // Replace with actual demo URL
    category: "Cybersecurity",
  },
  {
    title: "Honeypot in Python: A Practical Guide to Security Deception",
    description:
      "A honeypot system in Python designed to detect and divert cyber-attacks. Demonstrates the effectiveness of security deception strategies.",
    techStack: ["Python", "Security Deception"],
    githubLink: "https://github.com/codeWithLFN/honeypot-in-python",
    liveLink: "https://your-demo-link.com", // Replace with actual demo URL
    category: "Cybersecurity",
  },
  {
    title: "Simple Web Application Security Scanner",
    description:
      "A simple web application security scanner built with Python to identify potential vulnerabilities in web applications.",
    techStack: ["Python", "Security", "Web Application"],
    githubLink: "https://github.com/codeWithLFN/web-application-security-scanner",
    liveLink: "https://your-demo-link.com", // Replace with actual demo URL
    category: "Cybersecurity",
  },
  {
    title: "SplitWiseApp ",
    description:
      " a collaborative bill-splitting application built with React. Easily manage shared expenses with friends, add bills, track individual shares, and keep everyone in the loop",
    techStack: ["React", "CSS", "JavaScript"],
    githubLink: "https://github.com/codeWithLFN/SplitWiseApp",
    liveLink: "https://splitwiseapp.vercel.app/",
    category: "Web Development",
  },
];

const Projects = () => {
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
            Featured Projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                
                
                <div className="p-6 space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-100 text-teal-500">
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

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-teal-500 transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-teal-500 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
