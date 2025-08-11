// src/pages/case-studies/Seediling.jsx
import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

export default function Seedling() {
  return (
    <CaseStudyLayout
      title="Seedling"
      subtitle="Clean, image-forward site for sustainable beauty."
      backButtonClass="text-[#333]" // dark arrow matching subtitle/text
      bgClass="bg-[#F3ECE7] " // same light card background as Seabody
      textClass="text-[#333]" // same dark text
    >
      {/* Section 1 */}
      <img
        src="/assets/seedlingIntro.jpg" // TODO: replace with your actual image
        alt="Seediling homepage"
        className="rounded-lg w-3/4 mx-auto mb-2"
      />

      {/* Content block: same style as Seabody */}
      <aside>
        {/* MY ROLE */}
        <p className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]">
          MY ROLE
        </p>
        <p className="leading-relaxed mb-2">
          {/* TODO: replace with Seediling-specific copy */}
          Seedling was my final school project - a complete website concept I
          designed and built end-to-end. I led user research, competitive
          analysis, and persona development, then created wireframes,
          high-fidelity UI, and interactive prototypes in Figma. All branding
          and visual assets were produced in Adobe Creative Suite, ensuring a
          cohesive, cross-device design system.
        </p>
        <p className="leading-relaxed mb-6">
          I developed the responsive layouts, navigation, and interactions,
          applying information architecture and UX best practices to make the
          site intuitive and visually engaging. This project showcases my
          ability to own the full UI/UX process - from research to polished,
          functional front-end.
        </p>

        {/* Tools header matches MY ROLE style */}
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]">
          Tools & Technologies
        </p>

        {/* Badges aligned with the image edges */}
        <div className="mx-auto w-3/4">
          <div className="mb-6 flex flex-wrap gap-2">
            {["Figma", "Adobe Photoshop"].map((tag) => (
              <span
                key={tag}
                className="rounded-lg border-0 bg-stone-50 px-3 py-1 text-xs font-medium text-[#333]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Link aligned with badges/paragraph (left-aligned) */}
        <div className="mx-auto w-3/4 mb-7">
          <a
            href="https://www.behance.net/taniaboterman"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border-0 bg-stone-50 px-4 py-2 text-sm font-medium "
          >
            View this &amp; other UI designs on Behance
          </a>
        </div>
      </aside>
    </CaseStudyLayout>
  );
}
