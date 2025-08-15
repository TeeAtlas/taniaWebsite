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

export default function Seabody() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [modalImage, setModalImage] = useState(null);

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

  const openModal = (src, alt) => setModalImage({ src, alt });
  const closeModal = () => setModalImage(null);

  return (
    <CaseStudyLayout
      title="Seabody"
      subtitle="Legacy ecommerce WordPress build."
      backButtonClass="text-[#333]"
      bgClass="bg-[#DAD7CD]"
      textClass="text-[#333]"
    >
      {/* Sticky scrollable menu — match Seedling/Dishi styling; no content text changed */}
      <nav className="sticky top-0 z-30 mx-auto w-11/12 md:w-5/6 hidden sm:block">
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

      {/* Section 1 (hero image) — now pops up on click */}
      <figure
        id="hero-section"
        className="group w-3/4 mx-auto cursor-pointer"
        onClick={() =>
          openModal("/images/s_bodyHomepage_1.jpg", "Seabody homepage")
        }
      >
        <img
          src="/images/s_bodyHomepage_1.jpg"
          alt="Seabody homepage"
          className="rounded-lg w-full h-auto mb-2 transition-transform duration-300 ease-out group-hover:scale-[1.01]"
        />
      </figure>

      {/* Modal for hero image */}
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

      {/* Divider below hero to match Seedling */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />

      {/* Content block (unaltered text) */}
      <aside id="my-role" className="scroll-mt-40 md:scroll-mt-48">
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

        <p
          id="tools"
          className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]"
        >
          Tools & Technologies
        </p>

        <div className="mx-auto w-3/4 mb-6">
          <div className="flex flex-wrap gap-3">
            {["Figma", "Adobe Photoshop", "Adobe Illustrator"].map((tag) => (
              <ToolBadge key={tag} label={tag} />
            ))}
          </div>
        </div>

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
