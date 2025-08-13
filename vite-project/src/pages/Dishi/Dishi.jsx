import React, { useState, useEffect } from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import { FaGithub, FaFigma, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiAdobephotoshop, SiAdobeillustrator, SiGit } from "react-icons/si";

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

export default function Dishi() {
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
      title="DiSHi"
      subtitle="A responsive web app designed and developed from concept to launch."
      backButtonClass="text-[#333]"
      bgClass="bg-[#E3D5CA]"
      textClass="text-[#333]"
    >
      {/* Sticky scrollable menu — same structure/styling as Seedling */}
      <nav className="sticky top-0 z-30 mx-auto w-11/12 md:w-5/6">
        <ul className="flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap overflow-x-auto rounded-xl bg-white/60 backdrop-blur px-2 py-2">
          <li>
            <a href="#top" className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90">Overview</a>
          </li>
          <li>
            <a href="#gallery" className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90">Gallery</a>
          </li>
          <li>
            <a href="#my-role" className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90">My Role</a>
          </li>
          <li>
            <a href="#what-i-learned" className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90">What I Learned</a>
          </li>
          <li>
            <a href="#tools" className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90">Tools & Tech</a>
          </li>
          {showBackToTop && (
            <li>
              <a href="#top" className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90">Back to Top</a>
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
        onClick={() => openModal("/images/dishiHomepage.jpg", "Dishi homepage")}
      >
        <img
          src="/images/dishiHomepage.jpg"
          alt="Dishi homepage"
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
            onClick={() => openModal("/images/dishiReview.jpg", "Dish detail view")}
          >
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src="/images/dishiReview.jpg"
                alt="Detail view A"
                className="block w-full h-auto rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/50">
              <strong>
                The dish detail page lets users like & save, keeping key actions prominent for quick, intuitive interaction.
              </strong>
            </figcaption>
          </figure>

          <figure
            className="group cursor-pointer"
            onClick={() => openModal("/images/dishiSignUp.jpg", "Sign-up flow with custom features")}
          >
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src="/images/dishiSignUp.jpg"
                alt="Detail view B"
                className="block w-full h-auto rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/50">
              <strong>
                The sign-up flow includes password creation, error handling, dietary preference selection, and custom avatar upload for a personalized onboarding experience.
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
       <h2
        id="gallery"
        className="text-lg font-semibold text-[#333] w-11/12 md:w-5/6 mx-auto mb-4 scroll-mt-40 md:scroll-mt-48"
      >
        My Role
      </h2>
        <p className="leading-relaxed mb-2">
          DiSHi was a collaborative school project where I took the lead on <strong>front-end development</strong> and <strong>UI design</strong>. I guided the team from initial moodboards and competitive analysis through user flows, wireframes, and high-fidelity prototypes in <strong>Figma</strong>, focusing on a visually cohesive interface that balanced aesthetics with usability.
        </p>
        <p className="leading-relaxed mb-2">
          Once designs were approved, I implemented the UI using <strong>React</strong> and semantic CSS, collaborating with the back-end team to integrate <strong>Node.js</strong> and <strong>MongoDB</strong>.
        </p>
        <p className="leading-relaxed mb-6">
          I handled <strong>CRUD operations</strong>, built responsive layouts, and implemented <strong>error handling</strong> for a smooth user experience.
        </p>

        {/* What I Learned */}
        <p id="what-i-learned" className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#333] scroll-mt-40 md:scroll-mt-48">What I Learned</p>
        <p className="leading-relaxed mb-6">
          This project reinforced the importance of clear component architecture in React, early integration with the back-end team to avoid blockers, and maintaining consistent visual patterns across all views for user trust and ease-of-use.
        </p>

        {/* GitHub */}
        <div className="mx-auto w-3/4 mb-7">
          <a
            href="https://github.com/your-username/Dishi"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border-0 bg-stone-50 px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            <FaGithub className="h-5 w-5" />
            View on GitHub
          </a>
        </div>
      </aside>

      {/* Divider below My Role */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />

      {/* Tools & Technologies (moved to bottom to match Seedling) */}
      <section id="tools" className="scroll-mt-40 md:scroll-mt-48">
        <h2
        id="gallery"
        className="text-lg font-semibold text-[#333] w-11/12 md:w-5/6 mx-auto mb-4 scroll-mt-40 md:scroll-mt-48"
      >
        Tools & Technology
      </h2>
        <div className="mx-auto w-3/4 mb-6">
          <div className="flex flex-wrap gap-3">
            {[
              "Figma",
              "React",
              "Node.js",
              "MongoDB",
              "Git",
              "Adobe Photoshop",
              "Adobe Illustrator"
            ].map((tag) => (
              <ToolBadge key={tag} label={tag} />
            ))}
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}