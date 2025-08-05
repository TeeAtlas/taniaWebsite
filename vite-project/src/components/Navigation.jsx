import React, { useState } from "react";
import NavLink from "./NavLink";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const email = "taniaboterman@gmail.com";

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    alert("Email address copied!");
    setShowEmail(false);
  };

  return (
    <nav className="relative ">
      <div className="hidden md:flex lg:items-start gap-2">
        <NavLink
          href="https://github.com/TeeAtlas/"
          text={<FaGithub className="text-white h-6 w-6" />}
          _blank
        />
        <NavLink
          href="https://www.linkedin.com/in/tania-boterman/"
          text={<FaLinkedin className="text-white h-6 w-6" />}
          _blank
        />
        <button
          style={{ background: "none", border: "none", cursor: "pointer" }}
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => setShowEmail(false)}
        >
          <FaEnvelope className="text-white h-6 w-6" />
          {showEmail && (
            <div className="absolute -top-0.5 -right-2.5 bg-white border rounded p-2 z-10 flex flex-col items-start">
              <span
                className="mb-0.5 text-sm cursor-pointer hover:underline"
                onClick={handleCopy}
              >
                {email}
              </span>
            </div>
          )}
        </button>
      </div>

      {/* mobile navigation */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className=" text-white cursor-pointer focus:outline-none"
        >
          {isOpen ? (
            <HiX className="h-8 w-8" />
          ) : (
            <HiMenu className="h-8 w-8" />
          )}
        </button>
        {isOpen && (
          <div className="absolute top-12 right-0 bg-white rounded-lg p-4 flex flex-col items-start gap-4">
            <NavLink
              href="https://github.com/TeeAtlas/"
              text={<FaGithub className="h-6 w-6" />}
              _blank
            />
            <NavLink
              href="https://www.linkedin.com/in/tania-boterman/"
              text={<FaLinkedin className="h-6 w-6" />}
              _blank
            />
            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
              onMouseEnter={() => setShowEmail(true)}
              onMouseLeave={() => setShowEmail(false)}
            >
              <FaEnvelope className="h-6 w-6" />
              {showEmail && (
                <div className="absolute right-4 top-24 bg-white rounded p-2 z-10 flex flex-col items-start">
                  <span
                    className="mb-1 text-sm cursor-pointer hover:underline"
                    onClick={handleCopy}
                  >
                    {email}
                  </span>
                </div>
              )}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
