// src/components/CaseStudyLayout.jsx
import React from "react";
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
  const backBtnClass = backButtonClass || textClass;
  const contentWidth = "w-11/12 md:w-5/6";

  return (
    <main className="relative">
      <DiagonalBackgroundShapes variant="bw" />

      <div className="w-full flex justify-center px-4">
        <article
          className={`relative z-10 w-full max-w-[1200px] rounded-xl p-8 min-h-[clamp(400px,60vh,900px)] ${bgClass} ${textClass}`}
          aria-labelledby="case-title"
        >
          {/* Top row: back arrow left, icons right */}
          <div className="flex items-center justify-between mb-4">
            {/* Back arrow */}
            <BackButton className={backBtnClass} />

            {/* Nav icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/TeeAtlas"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
                <FaGithub className={`w-5 h-5 ${textClass} hover:opacity-80 transition`} />
              </a>
              <a
                href="https://www.linkedin.com/in/tania-boterman/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
              >
                <FaLinkedin className={`w-5 h-5 ${textClass} hover:opacity-80 transition`} />
              </a>
              <a
                href="https://www.behance.net/taniaboterman"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Behance"
              >
                <FaBehance className={`w-5 h-5 ${textClass} hover:opacity-80 transition`} />
              </a>
              <a href="mailto:taniaboterman@gmail.com" aria-label="Email">
                <FaEnvelope className={`w-5 h-5 ${textClass} hover:opacity-80 transition`} />
              </a>
            </div>
          </div>

          {/* Title + subtitle */}
          {headerVariant === "divider" ? (
            <>
              <div className="text-center">
                <h1
                  id="case-title"
                  className="text-[2rem] md:text-[2.5rem] font-semibold tracking-tight"
                >
                  {title}
                </h1>
                {subtitle && (
                  <p className="mt-1 text-base md:text-[1.1rem] opacity-90">{subtitle}</p>
                )}
              </div>
              {/* Divider matches content width */}
              <div className={`mt-3 mb-6 ${contentWidth} mx-auto ${dividerClass}`} />
            </>
          ) : (
            <>
              <div className="mb-4 w-full md:max-w-3xl mx-auto rounded-lg border border-current/15 p-4 text-center">
                <h1
                  id="case-title"
                  className="text-[2rem] md:text-[2.5rem] font-semibold tracking-tight"
                >
                  {title}
                </h1>
                {subtitle && (
                  <p className="mt-2 text-base md:text-[1.1rem] opacity-90">{subtitle}</p>
                )}
                {headerCta && <div className="mt-3 flex justify-center">{headerCta}</div>}
              </div>
              {info && (
                <div className="mb-6 w-full md:max-w-3xl mx-auto rounded-lg border border-current/15 p-4">
                  {info}
                </div>
              )}
            </>
          )}

          {/* Content */}
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
