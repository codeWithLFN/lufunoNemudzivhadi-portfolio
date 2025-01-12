import { Link } from "react-scroll"; // Import scroll library

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Lufuno Nemudzivhadi</h1>
      <nav className="flex gap-5">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="experience" smooth={true} duration={500}>
          Experience
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
