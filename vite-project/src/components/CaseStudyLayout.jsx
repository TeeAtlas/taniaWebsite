import React, { useState } from "react";
import BackButton from "./BackButton";
import DiagonalBackgroundShapes from "./DiagonalBGShapes";
import { FaGithub, FaLinkedin, FaEnvelope, FaBehance } from "react-icons/fa";

/**
 * CaseStudyLayout (Updated to match Dishi layout)
 * -------------------------------------------------
 * - Keeps the same public API so existing pages don't break.
 * - Matches Dishi.jsx visual scaffolding: light divider header, centered title/subtitle,
 *   back button on the left, socials on the right, consistent max-width and content widths.
 * - Uses inline Tailwind only (no external CSS), and subtle motion on BackButton by default.
 * - Email icon copies address to clipboard with hover tooltip and temporary "copied" toast.
 */
export default function CaseStudyLayout({
  title = "Case Study",
  subtitle = "",
  headerVariant = "divider", // kept for backward compatibility
  info = null,
  actions = null, // reserved (not rendered in Dishi variant but kept for API)
  headerCta = null,
  bgClass = "bg-[#252422]",
  textClass = "text-[#E3D5CA]",
  backButtonClass,
  dividerClass = "h-[2px] bg-current/30",
  children,
}) {
  const [emailCopied, setEmailCopied] = useState(false);

  // BackButton grows slightly on hover by default; caller can still pass extra classes.
  const backBtnClass = `${
    backButtonClass ?? textClass
  } transition-transform duration-200 hover:scale-150`;
  const iconBase = `w-5 h-5 ${textClass} hover:opacity-80 transition-opacity`;
  const contentWidth = "w-11/12 md:w-5/6";

  const handleEmailClick = (e) => {
    e.preventDefault();
    try {
      navigator.clipboard.writeText("taniaboterman@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1400);
    } catch (_) {
      // no-op: clipboard may be blocked in non-secure contexts
    }
  };

  return (
    <main className="relative">
      {/* Background visuals */}
      <DiagonalBackgroundShapes />

      {/* Page container */}
      <div className="w-full flex justify-center px-4">
        <article
          className={`relative z-10 w-full max-w-[1200px] rounded-xl p-8 min-h-[clamp(480px,60vh,1000px)] ${bgClass} ${textClass}`}
          aria-labelledby="case-title"
        >
          {/* Row 1: Back on left, socials on right (matches Dishi) */}
          <div className="mb-4 flex items-center justify-between">
            <BackButton className={backBtnClass} />

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/TeeAtlas"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
                <FaGithub className={iconBase} />
              </a>
              <a
                href="https://www.linkedin.com/in/tania-boterman/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <FaLinkedin className={iconBase} />
              </a>
              <a
                href="https://www.behance.net/taniaboterman"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Behance"
              >
                <FaBehance className={iconBase} />
              </a>

              {/* Email with hover tooltip & quick toast */}
              <div className="relative group flex items-center">
                <button
                  onClick={handleEmailClick}
                  aria-label="Copy email"
                  className="outline-none"
                >
                  <FaEnvelope className={iconBase} />
                </button>

                {/* Tooltip (hover) */}
                {!emailCopied && (
                  <span
                    className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                    bg-white text-black text-s px-2 py-1 rounded opacity-0 group-hover:opacity-100
                    transition-opacity duration-200 pointer-events-none"
                  >
                    taniaboterman@gmail.com
                  </span>
                )}

                {/* Tiny toast on click */}
                {emailCopied && (
                  <div
                    className="absolute -top-9 left-1/2 -translate-x-1/2 bg-white text-black text-s font-medium
                    px-2 py-1 rounded shadow"
                  >
                    Copied!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Header (Dishi divider variant) */}
          {headerVariant === "divider" ? (
            <>
              <div className="justify-self-center text-center">
                <h1
                  id="case-title"
                  className="text-[2rem] md:text-[2.5rem] font-semibold tracking-tight"
                >
                  {title}
                </h1>
                {subtitle ? (
                  <p className="mt-1 text-base md:text-[1.1rem] opacity-90">
                    {subtitle}
                  </p>
                ) : null}
              </div>
              <div
                className={`mt-3 mb-6 ${contentWidth} mx-auto ${dividerClass}`}
              />
            </>
          ) : (
            // Non-divider variant (kept for compatibility)
            <>
              <div className="mb-4 w-full md:max-w-3xl mx-auto rounded-lg border border-current/15 p-4 text-center">
                <h1
                  id="case-title"
                  className="text-[2rem] md:text-[2.5rem] font-semibold tracking-tight"
                >
                  {title}
                </h1>
                {subtitle ? (
                  <p className="mt-2 text-base md:text-[1.1rem] opacity-90">
                    {subtitle}
                  </p>
                ) : null}
                {headerCta ? (
                  <div className="mt-3 flex justify-center">{headerCta}</div>
                ) : null}
              </div>
              {info ? (
                <div className="mb-6 w-full md:max-w-3xl mx-auto rounded-lg border border-current/15 p-4">
                  {info}
                </div>
              ) : null}
            </>
          )}

          {/* CONTENT */}
          <section
            className={`
              flex flex-col gap-6 leading-relaxed
              [&_img]:rounded-lg
              [&_img]:w-11/12 md:[&_img]:w-5/6 [&_img]:mx-auto
              [&_p]:w-11/12 md:[&_p]:w-5/6 [&_p]:mx-auto
              [&_.case-study-description]:w-11/12 md:[&_.case-study-description]:w-5/6 [&_.case-study-description]:mx-auto
              [&_ul]:w-11/12 md:[&_ul]:w-5/6 [&_ul]:mx-auto
              [&_ol]:w-11/12 md:[&_ol]:w-5/6 [&_ol]:mx-auto
              [&_blockquote]:w-11/12 md:[&_blockquote]:w-5/6 [&_blockquote]:mx-auto
            `}
          >
            {children}
          </section>
        </article>
      </div>
    </main>
  );
}
