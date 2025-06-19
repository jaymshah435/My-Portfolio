import { useState } from 'react';
import { Link } from 'react-scroll';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          Jay Shah
        </div>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-blue-600 transition"
                activeClass="text-blue-600 font-semibold"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="text-white bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-inner space-y-4 px-6 py-4 text-gray-700 font-medium">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block cursor-pointer hover:text-blue-600 transition"
                activeClass="text-blue-600 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="block text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}