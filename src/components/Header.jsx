import { Link } from "react-scroll"; // Import scroll library

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-900 text-white fixed top-0 left-0 right-0 z-10 shadow-lg">
      <h1 className="text-2xl font-bold tracking-wide">
        Lufuno Nemudzivhadi
      </h1>
      <nav className="flex gap-8 text-lg">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hover:text-gray-400 transition-colors"
        >
          About
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="hover:text-gray-400 transition-colors"
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="hover:text-gray-400 transition-colors"
        >
          Projects
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="hover:text-gray-400 transition-colors"
        >
          Experience
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hover:text-gray-400 transition-colors"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
