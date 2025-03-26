import React from "react";
import NavLink from "./NavLink";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons

export default function Header({ onAboutClick }) {
  return (
    <>
      <div className="flex space-x-4 mb-4">
        <NavLink href="#about" text="About" onClick={onAboutClick} />
        <NavLink href="#contact" text="Contact" />
      </div>
      
      <div className="flex gap-4">
        <a href="https://github.com" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <FaGithub className="h-6 w-6" />
        </a>
        <a href="https://linkedin.com" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <FaLinkedin className="h-6 w-6" />
        </a>
        <a href="mailto:your@email.com" className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
          <FaEnvelope className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}