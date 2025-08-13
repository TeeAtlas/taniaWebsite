// src/pages/case-studies/Seedling.jsx
import React, { useState, useEffect } from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import {
  FaGithub,
  FaFigma,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGit,
} from "react-icons/si";

const ToolIcon = ({ name, className = "w-7 h-7" }) => {
  switch (name.trim()) {
    case "Figma":
      return <FaFigma className={className} />;
    case "React":
      return <FaReact className={className} />;
    case "Node.js":
      return <FaNodeJs className={className} />;
    case "MongoDB":
      return <SiMongodb className={className} />;
    case "Git":
      return <SiGit className={className} />;
    case "Adobe Photoshop":
      return <SiAdobephotoshop className={className} />;
    case "Adobe Illustrator":
      return <SiAdobeillustrator className={className} />;
    default:
      return <FaDatabase className={className} />; // fallback generic icon
  }
};

const ToolBadge = ({ label }) => (
  <span className="inline-flex items-center gap-2 rounded-lg border-0 bg-stone-50 px-3 py-2 text-sm font-medium text-[#333]">
    <ToolIcon name={label} className="w-5 h-5" />
    {label}
  </span>
);

export default function Seedling() {
  const [modalImage, setModalImage] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const openModal = (src, alt) => setModalImage({ src, alt });
  const closeModal = () => setModalImage(null);

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
      title="Seedling"
      subtitle="The fun and engaging way for parents to teach kids about money."
      backButtonClass="text-[#333]"
      bgClass="bg-[#F3ECE7]"
      textClass="text-[#333]"
    >
      {/* Sticky scrollable menu — original placement retained; sticks to top on scroll */}
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
              href="#gallery"
              className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90"
            >
              Gallery
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
              href="#what-i-learned"
              className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90"
            >
              What I Learned
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

      {/* Hero image */}
      <figure
        id="hero-section"
        className="group cursor-pointer w-3/4 mx-auto"
        onClick={() =>
          openModal("/images/seedlingIntro.jpg", "Seedling homepage")
        }
      >
        <img
          src="/images/seedlingIntro.jpg"
          alt="Seedling homepage"
          className="rounded-lg w-full h-auto transition-transform duration-300 ease-out group-hover:scale-[1.01]"
        />
      </figure>

      {/* Divider below hero */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />

      {/* My Gallery heading — anchor lands just below sticky menu */}
      <h2
        id="gallery"
        className="text-lg font-semibold text-[#333] w-11/12 md:w-5/6 mx-auto mb-4 scroll-mt-40 md:scroll-mt-48"
      >
        My Gallery
      </h2>

      {/* Gallery */}
      <section className="w-11/12 md:w-5/6 mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <figure
            className="group cursor-pointer"
            onClick={() =>
              openModal("/images/seedlingUserFlow.jpg", "Seedling user flow")
            }
          >
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src="/images/seedlingUserFlow.jpg"
                alt="Seedling user flow"
                className="block w-full h-auto rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
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
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src="/images/seedlingStyleGuide.jpg"
                alt="Seedling style guide"
                className="block w-full h-auto rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
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

      {/* Gallery row 2 */}
      <section className="w-11/12 md:w-5/6 mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <figure
            className="group cursor-pointer"
            onClick={() =>
              openModal("/images/seedlingFlow3.jpg", "Seedling onboarding flow")
            }
          >
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src="/images/seedlingFlow3.jpg"
                alt="Seedling onboarding flow"
                className="block w-full h-auto rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
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

      {/* Divider before My Role */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />

      {/* Modal */}
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

      {/* My Role */}
      <aside id="my-role" className="scroll-mt-40 md:scroll-mt-48">
        <p className="mb-2 text sm font-semibold uppercase tracking-wide text-[#333]">
          My Role
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
      </aside>

      {/* Divider below My Role */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />

      {/* What I Learned */}
      <section id="what-i-learned" className="scroll-mt-40 md:scroll-mt-48">
        <p className="mb-2 text sm font-semibold uppercase tracking-wide text-[#333]">
          What I Learned
        </p>
        <p className="leading-relaxed mb-6">
          This project reinforced the importance of designing with both the
          child and parent user in mind, ensuring intuitive flows while
          maintaining engagement. I also learned to prioritize{" "}
          <strong> MVP essentials</strong> to deliver a functional, testable
          product quickly without unnecessary complexity.
        </p>

        {/* GitHub */}
        <div className="mx-auto w-3/4 mb-7">
          <a
            href="https://github.com/TeeAtlas/DiSHi__"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border-0 bg-stone-50 px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            <FaGithub className="h-5 w-5" />
            View on GitHub
          </a>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section id="tools" className="scroll-mt-40 md:scroll-mt-48">
        <p className="mb-2 text sm font-semibold uppercase tracking-wide text-[#333]">
          Tools & Technology
        </p>
        <div className="mx-auto w-3/4 mb-6">
          <div className="flex flex-wrap gap-3">
            {"Figma,Adobe Photoshop,Adobe Illustrator".split(",").map((tag) => (
              <ToolBadge key={tag} label={tag} />
            ))}
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
