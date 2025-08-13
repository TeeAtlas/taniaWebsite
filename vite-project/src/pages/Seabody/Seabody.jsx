import React, { useState, useEffect } from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import { FaGithub } from "react-icons/fa";

export default function Seabody() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = document
        .getElementById("hero-section")
        ?.getBoundingClientRect().bottom;
      setShowBackToTop(heroBottom !== undefined && heroBottom < 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <CaseStudyLayout
      title="Seabody"
      subtitle="Clean, image-forward site for sustainable beauty."
      backButtonClass="text-[#333]" // dark arrow matching subtitle/text
      bgClass="bg-[#DAD7CD]" // light peach card background (kept exactly)
      textClass="text-[#333]" // dark text everywhere
    >
      {/* Sticky scrollable menu — match Seedling/Dishi styling; no content text changed */}
      <nav className="sticky top-0 z-30 mx-auto w-11/12 md:w-5/6">
        <ul className="flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap overflow-x-auto rounded-xl bg-white/60 backdrop-blur px-2 py-2">
          <li>
            <a
              href="#top"
              className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="#my-role"
              className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90"
            >
              My Role
            </a>
          </li>
          <li>
            <a
              href="#tools"
              className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90"
            >
              Tools & Tech
            </a>
          </li>
          {showBackToTop && (
            <li>
              <a
                href="#top"
                className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90"
              >
                Back to Top
              </a>
            </li>
          )}
        </ul>
      </nav>

      {/* Top anchor for Overview */}
      <div id="top" className="scroll-mt-24" />

      {/* Section 1 (hero image) — image src/alt kept exactly, just added id + hover micro-interaction */}
      <figure id="hero-section" className="group w-3/4 mx-auto">
        <img
          src="/images/s_bodyHomepage_1.jpg"
          alt="Seabody homepage"
          className="rounded-lg w-full h-auto mb-2 transition-transform duration-300 ease-out group-hover:scale-[1.01]"
        />
      </figure>

      {/* Divider below hero to match Seedling */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />

      {/* Content block (unaltered text) */}
      <aside id="my-role" className="scroll-mt-40 md:scroll-mt-48">
        {/* Left column content (if you're using columns elsewhere, keep this inside that grid) */}
        <p className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]">
          MY ROLE
        </p>
        <p className="leading-relaxed mb-6">
          As this was a legacy WordPress build, my role focused on streamlining
          and redesigning the site’s navigation, routing, responsive layouts,
          and menu structures to improve usability and reduce friction for site
          visitors. I consolidated and cleaned the CSS for better
          maintainability and readability, and handled SEO improvements by
          removing duplicate tags, debugging analytics, and writing custom
          JavaScript to enhance performance and search visibility. These updates
          aimed to make the site faster, easier to navigate, and more accessible
          across devices.
        </p>

        {/* Tools header matches MY ROLE style */}
        <p
          id="tools"
          className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]"
        >
          Tools & Technologies
        </p>

        {/* Badges aligned with paragraph (no extra indent) */}
        <div className="mx-auto w-3/4">
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              "WordPress",
              "PHP",
              "Vanilla CSS",
              "JavaScript",
              "Google Analytics",
              "SEO best practices",
              "Responsive design",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-lg border-0 bg-stone-50 px-3 py-1 text-xs font-medium text-[#333]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Link aligned with badges/paragraph (left-aligned, not centered) */}
        <div className="mx-auto w-3/4 mb-7">
          <a
            href="https://seabody.com"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border-0 bg-stone-50 px-4 py-2 text-sm font-medium transition
                   hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            See redesigned navigation & pagination
          </a>
        </div>
      </aside>

      {/* Divider below My Role to match Seedling */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />
    </CaseStudyLayout>
  );
}
