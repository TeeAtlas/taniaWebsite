import React, { useState } from "react";
import NavLink from "./NavLink";
import { FaGithub, FaLinkedin, FaEnvelope, FaBehance } from "react-icons/fa";

export default function Navigation() {
  const [showEmail, setShowEmail] = useState(false);
  const email = "taniaboterman@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    alert("Email address copied!");
    setShowEmail(false);
  };

  return (
    <nav className="navigation-wrapper">
      {/* Desktop navigation */}
      <div className="nav-desktop">
        <NavLink
          href="https://github.com/TeeAtlas/"
          text={<FaGithub className="nav-icon" />}
          _blank
        />
        <NavLink
          href="https://www.linkedin.com/in/tania-boterman/"
          text={<FaLinkedin className="nav-icon" />}
          _blank
        />
        <NavLink
          href="https://www.behance.net/taniaboterman"
          text={<FaBehance className="nav-icon" />}
          _blank
        />

        <button
          className="email-button"
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => setShowEmail(false)}
        >
          <FaEnvelope className="nav-icon" />
          {showEmail && (
            <div className="email-tooltip-desktop">
              <span className="email-text" onClick={handleCopy}>
                {email}
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div className="nav-mobile">
        <NavLink
          href="https://github.com/TeeAtlas/"
          text={<FaGithub className="nav-icon" />}
          _blank
        />
        <NavLink
          href="https://www.linkedin.com/in/tania-boterman/"
          text={<FaLinkedin className="nav-icon" />}
          _blank
        />
        <button
          className="email-button"
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => setShowEmail(false)}
        >
          <FaEnvelope className="nav-icon" />
          {showEmail && (
            <div className="email-tooltip-mobile">
              <span className="email-text" onClick={handleCopy}>
                {email}
              </span>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}
