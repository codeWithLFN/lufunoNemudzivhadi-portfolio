import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-4 text-sm">© 2025 Lufuno Nemudzivhadi. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/codeWithLFN"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-blue-400 transition duration-300 ease-in-out"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/lufuno-nemudzivhadi026"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-blue-400 transition duration-300 ease-in-out"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="mailto:lufuno.nemudzivhadi26@outlook.com"
            aria-label="Email"
            className="text-white hover:text-blue-400 transition duration-300 ease-in-out"
          >
            <FaEnvelope className="text-3xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
