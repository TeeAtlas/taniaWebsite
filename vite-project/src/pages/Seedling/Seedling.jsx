// src/pages/case-studies/Seedling.jsx
import React, { useState } from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

const ToolIcon = ({ name, className = "w-7 h-7" }) => {
  switch (name) {
    case "Figma":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path fill="#F24E1E" d="M5 2h4v8H5a4 4 0 0 1 0-8z" />
          <path fill="#FF7262" d="M9 2h4a4 4 0 0 1 0 8H9V2z" />
          <path fill="#A259FF" d="M13 10h-4v8h4a4 4 0 0 0 0-8z" />
          <path fill="#1ABCFE" d="M9 10H5a4 4 0 0 0 0 8h4v-8z" />
          <path fill="#0ACF83" d="M9 18H5a4 4 0 0 0 0 8h4v-8z" />
        </svg>
      );
    case "Adobe Photoshop":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#001E36" />
          <text
            x="5"
            y="17"
            fontSize="11"
            fontFamily="Arial Black, sans-serif"
            fill="#31A8FF"
          >
            Ps
          </text>
        </svg>
      );
    case "Adobe Illustrator":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#300" />
          <text
            x="5"
            y="17"
            fontSize="11"
            fontFamily="Arial Black, sans-serif"
            fill="#FF9A00"
          >
            Ai
          </text>
        </svg>
      );
    case "Behance":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#1769FF" />
          <text
            x="3.5"
            y="16"
            fontSize="10"
            fontFamily="Arial Black, sans-serif"
            fill="#fff"
          >
            Be
          </text>
        </svg>
      );
    default:
      return null;
  }
};

const ToolBadge = ({ label }) => (
  <span className="inline-flex items-center gap-2 rounded-lg border-0 bg-stone-50 px-3 py-2 text-sm font-medium text-[#333]">
    <ToolIcon name={label} />
    {label}
  </span>
);

export default function Seedling() {
  const [modalImage, setModalImage] = useState(null);
  const openModal = (src, alt) => setModalImage({ src, alt });
  const closeModal = () => setModalImage(null);

  return (
    <CaseStudyLayout
      title="Seedling"
      subtitle="The fun and engaging way for parents to teach kids about money."
      backButtonClass="text-[#333]"
      bgClass="bg-[#F3ECE7]"
      textClass="text-[#333]"
    >
      <img
        src="/images/seedlingIntro.jpg"
        alt="Seedling homepage"
        className="rounded-lg w-3/4 mx-auto"
      />
      <img
        src="/images/seedlingLowFiFrames.jpg"
        alt="Seedling low-fidelity frames"
        className="rounded-lg w-3/4 mx-auto mt-6"
        loading="lazy"
      />

      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />

      <section className="w-11/12 md:w-5/6 mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <figure
            className="group cursor-pointer"
            onClick={() =>
              openModal("/images/seedlingUserFlow.jpg", "Seedling user flow")
            }
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img
                src="/images/seedlingUserFlow.jpg"
                alt="Seedling user flow"
                className="block !w-full h-auto rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/50">
              <strong>
                Designed a simple user flow focused on MVP essentials — clear
                interactions for sign-up, adding funds, and deleting accounts,
                avoiding non-essential features.
              </strong>
            </figcaption>
          </figure>

          <figure
            className="group cursor-pointer"
            onClick={() =>
              openModal(
                "/images/seedlingStyleGuide.jpg",
                "Seedling style guide"
              )
            }
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img
                src="/images/seedlingStyleGuide.jpg"
                alt="Seedling style guide"
                className="block !w-full h-auto rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/50">
              <strong>
                Created a playful moodboard to keep the design fun and engaging
                for kids while remaining intuitive for all users.
              </strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="w-11/12 md:w-5/6 mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <figure
            className="group cursor-pointer"
            onClick={() =>
              openModal("/images/seedlingFlow3.jpg", "Seedling onboarding flow")
            }
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img
                src="/images/seedlingFlow3.jpg"
                alt="Seedling onboarding flow"
                className="block !w-full h-auto rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/50">
              <strong>
                Developed a streamlined onboarding flow with smooth login and
                robust error handling for a frictionless first-time user
                experience.
              </strong>
            </figcaption>
          </figure>
        </div>
      </section>

      {modalImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:opacity-80"
            aria-label="Close image"
          >
            ×
          </button>
          <div className="bg-white p-3 rounded-lg shadow-lg">
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="rounded max-w-full max-h-[90vh]"
            />
          </div>
        </div>
      )}

      <aside>
        <p className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]">
          MY ROLE
        </p>
        <p className="leading-relaxed mb-2">
          Seedling is a complete concept app I designed end-to-end.
        </p>
        <p className="leading-relaxed mb-2">
          I led user research, competitive analysis, and persona development,
          then created wireframes, high-fidelity UI, and interactive prototypes
          in <strong>Figma</strong>.
        </p>
        <p className="leading-relaxed mb-2">
          All branding and visual assets were produced in{" "}
          <strong>Adobe Creative Suite</strong>, ensuring a cohesive,
          cross-device design system.
        </p>
        <p className="leading-relaxed mb-2">
          The development includes responsive layouts, navigation, and
          interactions, applying information architecture and UX best practices
          to make the product intuitive and visually engaging.
        </p>
        <p className="leading-relaxed mb-6">
          This project demonstrates my ability to own the full UI/UX process —
          from research to a polished product design.
        </p>

        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]">
          Tools & Technologies
        </p>
        <div className="mx-auto w-3/4">
          <div className="mb-6 flex flex-wrap gap-3">
            {["Figma", "Adobe Photoshop", "Adobe Illustrator"].map((tag) => (
              <ToolBadge key={tag} label={tag} />
            ))}
          </div>
        </div>

        <div className="mx-auto w-3/4 mb-7">
          <a
            href="https://www.behance.net/taniaboterman"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border-0 bg-stone-50 px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            <ToolIcon name="Behance" />
            View this &amp; my other UX/UI work on Behance
          </a>
        </div>
      </aside>
    </CaseStudyLayout>
  );
}
