import { Link } from 'react-scroll';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import profilePic from '../assets/JayProfile.png';

export default function Home() {
  return (
      <section
    id="home"
    className="min-h-screen pt-24 flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 text-center md:text-left px-6"
     >

      {/* Left - Text Content */}
      <div className="flex-1 space-y-6 px-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">
          Hi, I'm <span className="text-blue-600">Jay Shah</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
          MERN Stack Developer
        </p>

        <div className='mb-'>
          <a
              href="/resume.pdf"
              download
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-950 transition"
            >
              📄 Download Resume
            </a>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {/* Resume */}
          

          {/* Email Button */}
          <a
            href="mailto:jaymshah435@gmail.com"
            className="flex items-center gap-2 border border-gray-500 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            <FaEnvelope /> Email
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/jayshah20/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>


          {/* GitHub Button */}
          <a
            href="https://github.com/jaymshah435"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      {/* Right - Profile Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src={profilePic}
          alt="Jay Shah"
          className="w-60 h-60 rounded-full object-cover shadow-lg border-4 border-white"
        />
      </div>
    </section>
  );
}
