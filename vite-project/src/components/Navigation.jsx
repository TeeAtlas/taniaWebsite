import React, { useState } from "react";
import NavLink from "./NavLink";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons
import { HiMenu, HiX } from "react-icons/hi";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative ">
      <div className="flex lg:items-start gap-2">
        <a
          href="https://github.com/TeeAtlas/"
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/tania-boterman/"
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
        <a
          href="mailto:your@email.com"
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaEnvelope className="h-6 w-6" />
        </a>
      </div>

      {/* mobile navigation */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className=" text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          {isOpen ? (
            <HiX className="h-8 w-8" />
          ) : (
            <HiMenu className="h-8 w-8" />
          )}
        </button>
        {isOpen && (
          <div className="asolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 flex flex-col items-start gap-4">
            <a
              href="https://github.com/TeeAtlas/"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tania-boterman/"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:your@email.com"
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaEnvelope className="h-6 w-6" />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

// ** Possible Nav Links **
//          <div className="flex space-x-4">
//             <NavLink href="#about" text="About" />
//             <NavLink href="#contact" text="Contact" />
//           </div>
