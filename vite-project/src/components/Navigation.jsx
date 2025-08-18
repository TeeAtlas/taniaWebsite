import React, { useState } from "react";
import NavLink from "./NavLink";
import { FaGithub, FaLinkedin, FaEnvelope, FaBehance } from "react-icons/fa";

export default function Navigation({ iconColorClass = "text-[#333]" }) {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "taniaboterman@gmail.com";

  // sizing only – no color utilities here
  const iconSizes = "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 shrink-0";

  return (
    <nav className={`relative ${iconColorClass}`}>
      {/* Desktop */}
      <div className="hidden md:flex lg:items-start gap-3">
        <NavLink
          href="https://github.com/TeeAtlas/"
          _blank
          text={<FaGithub className={iconSizes} />}
        />
        <NavLink
          href="https://www.linkedin.com/in/tania-boterman/"
          _blank
          text={<FaLinkedin className={iconSizes} />}
        />
        <NavLink
          href="https://www.behance.net/taniaboterman"
          _blank
          text={<FaBehance className={iconSizes} />}
        />

        <button
          type="button"
          className="relative bg-transparent border-0 cursor-pointer text-[inherit]"
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => {
            setShowEmail(false);
            setCopied(false);
          }}
          onClick={() => {
            navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          aria-label="Copy email"
          title="Copy email"
        >
          <FaEnvelope className={iconSizes} />

          {/* Tooltips use their own colors so they don’t inherit */}
          {showEmail && !copied && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-neutral-800 text-xs px-2 py-1 rounded shadow whitespace-nowrap">
              {email}
            </div>
          )}
          {copied && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-neutral-800 text-xs font-medium px-2 py-1 rounded shadow">
              Email copied!
            </div>
          )}
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-3 mt-2">
        <NavLink
          href="https://github.com/TeeAtlas/"
          _blank
          text={<FaGithub className={iconSizes} />}
        />
        <NavLink
          href="https://www.linkedin.com/in/tania-boterman/"
          _blank
          text={<FaLinkedin className={iconSizes} />}
        />
        <NavLink
          href="https://www.behance.net/taniaboterman"
          _blank
          text={<FaBehance className={iconSizes} />}
        />

        <button
          type="button"
          className="relative bg-transparent border-0 cursor-pointer text-[inherit]"
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => {
            setShowEmail(false);
            setCopied(false);
          }}
          onClick={() => {
            navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          aria-label="Copy email"
          title="Copy email"
        >
          <FaEnvelope className={iconSizes} />

          {showEmail && !copied && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-neutral-800 text-xs px-2 py-1 rounded shadow whitespace-nowrap">
              {email}
            </div>
          )}
          {copied && (
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-neutral-800 text-xs font-medium px-2 py-1 rounded shadow">
              Copied!
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}
