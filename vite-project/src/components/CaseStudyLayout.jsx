import React, { useState } from "react";
import BackButton from "./BackButton";
import DiagonalBackgroundShapes from "./DiagonalBGShapes";
import { FaGithub, FaLinkedin, FaEnvelope, FaBehance } from "react-icons/fa";

export default function CaseStudyLayout({
  title = "Case Study",
  subtitle = "",
  headerVariant = "divider",
  info = null,
  actions = null,
  headerCta = null,
  bgClass = "bg-[#252422]",
  textClass = "text-[#E3D5CA]",
  backButtonClass,
  dividerClass = "h-[2px] bg-current/30",
  children,
}) {
  const [emailCopied, setEmailCopied] = useState(false);

  const backBtnClass = backButtonClass || textClass;
  const iconClass = `w-5 h-5 ${textClass} hover:opacity-80 transition`;
  const contentWidth = "w-11/12 md:w-5/6";

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("taniaboterman@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 1500);
  };

  return (
    <main className="relative">
      <DiagonalBackgroundShapes variant="bw" />

      <div className="w-full flex justify-center px-4">
        <article
          className={`relative z-10 w-full max-w-[1200px] rounded-xl p-8 min-h-[clamp(400px,60vh,900px)] ${bgClass} ${textClass}`}
          aria-labelledby="case-title"
        >
          {/* Back • Title • Actions */}
          <div className="grid grid-cols-[auto,1fr,auto] items-center gap-0">
            {/* Back button + Social icons */}
            <div className="mb-4 flex items-center justify-between">
              <BackButton className={backBtnClass} />

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/TeeAtlas"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                >
                  <FaGithub className={iconClass} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tania-boterman/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className={iconClass} />
                </a>
                <a
                  href="https://www.behance.net/taniaboterman"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Behance"
                >
                  <FaBehance className={iconClass} />
                </a>

                {/* Email with tooltip & popup */}
                <div className="relative group">
                  <a
                    href="#"
                    onClick={handleEmailClick}
                    aria-label="Email"

                  >
                    <FaEnvelope className={iconClass} />
                  </a>

                  {/* Tooltip on hover */}
                  {!emailCopied && (
                    <span
                      className="absolute mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap
                      bg-[#333] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                      transition-opacity duration-200 pointer-events-none"
                    >
                      taniaboterman@gmail.com
                    </span>
                  )}

                  {/* White popup when clicked */}
                  {emailCopied && (
                    <div
                      className="absolute inset-0 flex items-center justify-center
                      bg-white text-black text-xs font-medium rounded shadow 
                      animate-fadeInOut"
                    >
                      Email copied!
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Center: Title & subtitle */}
            {headerVariant === "divider" ? (
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
            ) : (
              <div />
            )}
          </div>

          {headerVariant === "divider" ? (
            <div
              className={`mt-3 mb-6 ${contentWidth} mx-auto ${dividerClass}`}
            />
          ) : (
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
