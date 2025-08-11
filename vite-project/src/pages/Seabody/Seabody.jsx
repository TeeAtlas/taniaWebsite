import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import { FaGithub } from "react-icons/fa";

export default function Seabody() {
  return (
    <CaseStudyLayout
      title="Seabody"
      subtitle="Clean, image-forward site for sustainable beauty."
      backButtonClass="text-[#333]" // dark arrow matching subtitle/text
      bgClass="bg-[#DAD7CD]" // light peach card background
      textClass="text-[#333]" // dark text everywhere
    >
      {/* Section 1 */}
      <img
        src="/assets/s_bodyHomepage_1.jpg"
        alt="Seabody homepage"
        className="rounded-lg w-3/4 mx-auto mb-2"
      />

      {/* Content block: same width as image, two columns on md+ */}
  <aside>
  {/* Left column content (if you're using columns elsewhere, keep this inside that grid) */}
  <p className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]">
    MY ROLE
  </p>
  <p className="leading-relaxed mb-6">
    As this was a legacy WordPress build, my role focused on streamlining and redesigning
    the site’s navigation, routing, responsive layouts, and menu structures to improve
    usability and reduce friction for site visitors. I consolidated and cleaned the CSS
    for better maintainability and readability, and handled SEO improvements by removing
    duplicate tags, debugging analytics, and writing custom JavaScript to enhance
    performance and search visibility. These updates aimed to make the site faster, easier
    to navigate, and more accessible across devices.
  </p>

  {/* Tools header matches MY ROLE style */}
  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]">
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
    </CaseStudyLayout>
  );
}
