import React, { useState } from "react";
import NavLink from "./NavLink";
import { FaGithub, FaLinkedin, FaEnvelope, FaBehance } from "react-icons/fa";

export default function NavigationDark() {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "taniaboterman@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Reusable icon sizing: small on mobile, step up on tablet/desktop
  const iconSizes = "!w-4 !h-4 sm:!w-5 sm:!h-5 md:!w-6 md:!h-6 lg:!w-7 lg:!h-7 shrink-0";

  return (
    <nav className="navigation-wrapper text-[#333]">
      {/* Desktop navigation */}
      <div className="nav-desktop">
        <NavLink
          href="https://github.com/TeeAtlas/"
          text={<FaGithub className={`nav-icon ${iconSizes}`} />}
          _blank
        />
        <NavLink
          href="https://www.linkedin.com/in/tania-boterman/"
          text={<FaLinkedin className={`nav-icon ${iconSizes}`} />}
          _blank
        />
        <NavLink
          href="https://www.behance.net/taniaboterman"
          text={<FaBehance className={`nav-icon ${iconSizes}`} />}
          _blank
        />
        <button
          className="email-button relative"
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => {
            setShowEmail(false);
            setCopied(false);
          }}
          onClick={handleCopy}
        >
          <FaEnvelope className={`nav-icon ${iconSizes}`} />

          {/* Hover tooltip */}
          {showEmail && !copied && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-[#333] text-xs px-2 py-1 rounded shadow whitespace-nowrap">
              {email}
            </div>
          )}

          {/* Clicked popup */}
          {copied && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-[#333] text-xs font-medium px-2 py-1 rounded shadow animate-fadeInOut">
              Email copied!
            </div>
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      <div className="nav-mobile">
        <NavLink
          href="https://github.com/TeeAtlas/"
          text={<FaGithub className={`nav-icon ${iconSizes}`} />}
          _blank
        />
        <NavLink
          href="https://www.linkedin.com/in/tania-boterman/"
          text={<FaLinkedin className={`nav-icon ${iconSizes}`} />}
          _blank
        />
        <NavLink
          href="https://www.behance.net/taniaboterman"
          text={<FaBehance className={`nav-icon ${iconSizes}`} />}
          _blank
        />
        <button
          className="email-button relative"
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => {
            setShowEmail(false);
            setCopied(false);
          }}
          onClick={handleCopy}
        >
          <FaEnvelope className={`nav-icon ${iconSizes}`} />

          {showEmail && !copied && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-[#333] text-xs px-2 py-1 rounded shadow whitespace-nowrap">
              {email}
            </div>
          )}

          {copied && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-[#333] text-xs font-medium px-2 py-1 rounded shadow animate-fadeInOut">
              Copied!
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}
