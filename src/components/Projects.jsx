import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa"; // Icons for GitHub and Demo Links

const Projects = () => {
  // Array of projects with their details
  const projectData = [
    {
      title: "Bantu Health - Virtual Health Healthcare App",
      description:
        "A virtual health assistant app offering instant medical diagnosis powered by AI and telemedicine. Features telemedicine integration, AI symptom analysis, and an emergency feature.",
      techStack: ["React Native", "Expo", "Gemini API", "Google Maps API", "Jitsi Meet", "Node.js"],
      githubLink: "https://github.com/codeWithLFN/Bantu_Health",
      demoLink: "https://your-demo-link.com", // Replace with actual demo URL
    },
    {
      title: "Vitality Health API - Medical AI Assistant",
      description:
        "An API that assists users in understanding symptoms and receiving health insights. It includes critical condition detection and easy integration with other applications.",
      techStack: ["Node.js", "Express.js", "Google Generative AI", "dotenv"],
      githubLink: "https://github.com/codewithlfn/vitality-health-api",
      demoLink: "https://your-demo-link.com", // Replace with actual demo URL
    },
    {
      title: "AviaryQuest - Bird Enthusiast Android Application",
      description:
        "An Android app that enhances the bird-watching experience by integrating Google Maps and the eBird API. Features bird identification using TensorFlow Lite.",
      techStack: ["Kotlin", "TensorFlow Lite", "eBird API", "Google Maps API"],
      githubLink: "https://github.com/codeWithLFN/AviaryQuest",
      demoLink: "https://your-demo-link.com", // Replace with actual demo URL
    },
    {
      title: "Disaster Alleviation Foundation Web Application",
      description:
        "A web app for managing donations and disaster tracking. Includes secure user authentication with Microsoft Identity and database integration using Azure SQL.",
      techStack: ["ASP.NET Core MVC", "Microsoft Identity", "Azure SQL"],
      githubLink: "https://github.com/codeWithLFN/Disaster-Alleviation-Foundation",
      demoLink: "https://your-demo-link.com", // Replace with actual demo URL
    },
    {
      title: "Medical Suite - Doctor's Appointment System",
      description:
        "A doctor appointment system that simplifies the booking process, with Firebase integration for authentication and data storage.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Firebase", "Kotlin"],
      githubLink: "https://github.com/codeWithLFN/MedicalSuite--Doctor_Appointment_System",
      demoLink: "https://your-demo-link.com", // Replace with actual demo URL
    },
    {
      title: "Sneaker Snap - Sneaker Collection Tracking App",
      description:
        "An app that helps users track their sneaker collection. Features include a robust achievement system and Firebase integration for seamless data management.",
      techStack: ["Kotlin", "Firebase"],
      githubLink: "https://github.com/codeWithLFN/SneakerSnap",
      demoLink: "https://your-demo-link.com", // Replace with actual demo URL
    },
    {
      title: "Time Management for Students Web Application",
      description:
        "A web app designed to boost student productivity by providing calendar and task management features, with SQL database integration for data storage.",
      techStack: ["C#", "ASP.NET", "SQL"],
      githubLink: "https://github.com/codeWithLFN/WPF-Student-Self-study-Program",
      demoLink: "https://your-demo-link.com", // Replace with actual demo URL
    },
    {
      title: "Real-time Network Traffic Dashboard",
      description:
        "A real-time network traffic dashboard built using Python and Streamlit. Provides live traffic updates and visualization for monitoring network activity.",
      techStack: ["Python", "Streamlit"],
      githubLink: "https://github.com/codeWithLFN/real-time-network-traffic-dashboard",
      demoLink: "https://your-demo-link.com", // Replace with actual demo URL
    },
    {
      title: "Honeypot in Python: A Practical Guide to Security Deception",
      description:
        "A honeypot system in Python designed to detect and divert cyber-attacks. Demonstrates the effectiveness of security deception strategies.",
      techStack: ["Python", "Security Deception"],
      githubLink: "https://github.com/codeWithLFN/honeypot-in-python",
      demoLink: "https://your-demo-link.com", // Replace with actual demo URL
    },
    {
      title: "Simple Web Application Security Scanner",
      description:
        "A simple web application security scanner built with Python to identify potential vulnerabilities in web applications.",
      techStack: ["Python", "Security", "Web Application"],
      githubLink: "https://github.com/codeWithLFN/web-application-security-scanner",
      demoLink: "https://your-demo-link.com", // Replace with actual demo URL
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      {/* Title Section with Fade-in Animation */}
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      {/* Projects List with Hover and Animation Effects */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4">
                <h4 className="font-medium text-gray-700">Tech Stack:</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, idx) => (
                    <li key={idx} className="text-sm text-blue-500">{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 flex items-center"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 flex items-center"
                  >
                    <FaLink className="mr-2" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
