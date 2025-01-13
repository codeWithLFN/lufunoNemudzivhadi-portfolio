import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa";

const experienceData = {
  work: [
    {
      title: "Cybersecurity Candidate",
      company: "CAPACITI (Internship)",
      date: "September 2024 – Present",
      description:
        "Gaining hands-on experience in cybersecurity practices including threat detection, vulnerability assessments, and security protocols.",
      skills: ["Cybersecurity", "Vulnerability Assessment", "Security Protocols", "Threat Detection"],
    }
  ],
  education: [
    {
      Qulification: "Diploma in Information Technology(Software Development)",
      institution: "IIE Rosebank College",
      duration: "2021 - 2023",
      description: "Specialized in software development"
    }
  ],
  certificates: [
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
  ]
};

const Experience = () => {
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
            Experience & Education
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FaBriefcase className="text-2xl text-teal-600" />
              <h3 className="text-2xl font-bold text-gray-800">Work Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experienceData.work.map((job, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-xl font-semibold text-gray-800">{job.title}</h4>
                  <p className="text-teal-600 font-medium mt-1">{job.company}</p>
                  <p className="text-gray-500 text-sm mt-1">{job.duration}</p>
                  <p className="text-gray-600 mt-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {job.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FaGraduationCap className="text-2xl text-teal-600" />
              <h3 className="text-2xl font-bold text-gray-800">Education</h3>
            </div>

            <div className="space-y-8">
              {experienceData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-xl font-semibold text-gray-800">{edu.degree}</h4>
                  <p className="text-teal-600 font-medium mt-1">{edu.institution}</p>
                  <p className="text-gray-500 text-sm mt-1">{edu.duration}</p>
                  <p className="text-gray-600 mt-4">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <FaCertificate className="text-2xl text-teal-600" />
            <h3 className="text-2xl font-bold text-gray-800">Certificates</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experienceData.certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800">{cert.title}</h4>
                  <p className="text-teal-600">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                  
                  <div className="relative w-full h-40">
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
        </div>
      </div>
    </section>
  );
};
export default Experience;