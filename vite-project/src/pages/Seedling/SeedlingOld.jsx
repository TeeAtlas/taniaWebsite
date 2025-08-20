// src/pages/case-studies/Seedling.jsx
import React, { useState, useEffect, useRef } from "react";
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

/* =========================
   Icons & Badges (Reusable)
========================= */
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
  <span className="inline-flex items-center gap-2 rounded-lg bg-stone-50 px-3 py-2 text-sm font-medium text-[#333]">
    <ToolIcon name={label} className="w-5 h-5" />
    {label}
  </span>
);

/* =========================
   Component
========================= */
export default function Seedling() {
  // Modal — index-based so we can swipe/arrow between images
  const [modalIndex, setModalIndex] = useState(null);
  const hasModal = modalIndex !== null;
  const openModalAt = (i) => setModalIndex(i);
  const closeModal = () => setModalIndex(null);
  const prevModal = () =>
    setModalIndex((i) => (i + images.length - 1) % images.length);
  const nextModal = () => setModalIndex((i) => (i + 1) % images.length);

  // Back-to-top visibility on scroll (kept for parity if used elsewhere)
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = document
        .getElementById("hero-section")
        ?.getBoundingClientRect().bottom;
      setShowBackToTop(heroBottom !== undefined && heroBottom < 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock horizontal scroll & sideways pan on touch (match MainContent behavior expectations)
  useEffect(() => {
    const prevBodyOverflowX = document.body.style.overflowX;
    const prevHtmlOverflowX = document.documentElement.style.overflowX;
    const prevTouchActionBody = document.body.style.touchAction;
    const prevTouchActionHtml = document.documentElement.style.touchAction;

    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    document.body.style.touchAction = "pan-y";
    document.documentElement.style.touchAction = "pan-y";

    return () => {
      document.body.style.overflowX = prevBodyOverflowX;
      document.documentElement.style.overflowX = prevHtmlOverflowX;
      document.body.style.touchAction = prevTouchActionBody;
      document.documentElement.style.touchAction = prevTouchActionHtml;
    };
  }, []);

  // Carousel images
  const images = [
    { src: "/images/seedlingIntro.jpg", alt: "Seedling homepage" }, // first defines aspect ratio
    { src: "/images/seedling-low-fi.jpg", alt: "Seedling low fi frames" },
    { src: "/images/seedling-user-flow.jpg", alt: "Seedling user flow" },
    { src: "/images/seedling-style-guide.jpg", alt: "Seedling style guide" },
    {
      src: "/images/seedling-onboarding-flow-1.jpg",
      alt: "Seedling onboarding flow 1",
    },
    {
      src: "/images/seedling-onboarding-flow-2.jpg",
      alt: "Seedling onboarding flow 2",
    },
  ];

  // Carousel state/handlers
  const [index, setIndex] = useState(0);
  const clampIndex = (i) => (i + images.length) % images.length;
  const prev = () => setIndex((i) => clampIndex(i - 1));
  const next = () => setIndex((i) => clampIndex(i + 1));

  // Swipe support (carousel)
  const touchStartX = useRef(null);
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx > 0 ? prev() : next();
    touchStartX.current = null;
  };

  // Swipe support (modal)
  const modalStartX = useRef(null);
  const onModalTouchStart = (e) => (modalStartX.current = e.touches[0].clientX);
  const onModalTouchEnd = (e) => {
    if (modalStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - modalStartX.current;
    modalStartX.current = null;
    if (Math.abs(dx) > 40) {
      if (dx > 0) prevModal();
      else nextModal();
    }
  };

  // Keep carousel height equal to first image’s natural aspect ratio (no cropping)
  const trackWrapRef = useRef(null);
  const [firstAR, setFirstAR] = useState(null); // aspect ratio = width / height
  const [wrapWidth, setWrapWidth] = useState(null);

  const onFirstLoad = (e) => {
    const w = e.target.naturalWidth || e.target.width;
    const h = e.target.naturalHeight || e.target.height;
    if (w && h) setFirstAR(w / h);
  };

  useEffect(() => {
    if (!trackWrapRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const cr = entries[0]?.contentRect;
      if (cr?.width) setWrapWidth(cr.width);
    });
    ro.observe(trackWrapRef.current);
    return () => ro.disconnect();
  }, []);

  const lockedHeight =
    firstAR && wrapWidth ? Math.round(wrapWidth / firstAR) : null;

  return (
    <CaseStudyLayout
      title="Seedling"
      subtitle="The fun and engaging way for parents to teach kids about money."
      backButtonClass="text-[#333]"
      bgClass=""
      textClass="text-[#333]"
    >
      {/* Content wrapper to match MainContent gutters */}
      <div className="px-4 md:px-8">
        {/* Hero / Gallery */}
        <section
          id="hero-section"
          aria-labelledby="gallery-heading"
          className="mb-6 md:mb-8"
        >
          <h2
            id="gallery-heading"
            className="text-xl md:text-3xl font-bold text-[#333] mb-3 md:mb-6 tracking-tight"
          >
            Gallery
          </h2>

          <div
            ref={trackWrapRef}
            data-edge-swipe-exempt="true"
            className="relative overflow-hidden rounded-lg select-none bg-white"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{
              height: lockedHeight ?? undefined,
              aspectRatio: lockedHeight ? "auto" : "16 / 9",
            }}
          >
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((img, i) => (
                <figure
                  key={img.src}
                  className="min-w-full h-full grid place-items-center bg-white group cursor-pointer"
                  onClick={() => openModalAt(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.01]"
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchpriority={i === 0 ? "high" : "auto"}
                    onLoad={i === 0 ? onFirstLoad : undefined}
                  />
                  <figcaption className="sr-only">{img.alt}</figcaption>
                </figure>
              ))}
            </div>

            {/* Controls */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm shadow hover:bg-white"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm shadow hover:bg-white"
                  aria-label="Next image"
                >
                  ›
                </button>

                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 w-2 rounded-full ${
                        i === index ? "bg-white" : "bg-white/50"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Divider */}
        <div className="h-[2px] bg-[#333]/30 my-6" />

        {/* My Role */}
        <section
          id="my-role"
          aria-labelledby="my-role-heading"
          className="mb-6 md:mb-8 scroll-mt-40 md:scroll-mt-48"
        >
          <h2
            id="my-role-heading"
            className="text-xl md:text-3xl font-bold text-[#333] mb-3 md:mb-6 tracking-tight"
          >
            My Role
          </h2>
          <ul className="list-disc list-inside leading-relaxed space-y-2 mb-4">
            <li>Designed and built a complete concept app, end-to-end.</li>
            <li>
              Led user research, competitive analysis, and persona development.
            </li>
            <li>
              Created wireframes, high-fidelity UI, and interactive prototypes
              in <strong>Figma</strong>.
            </li>
            <li>
              Produced branding and visual assets in{" "}
              <strong>Adobe Creative Suite</strong> for a cohesive design
              system.
            </li>
            <li>
              Developed responsive layouts, navigation, and interactions —
              applying IA and UX best practices.
            </li>
            <li>
              Demonstrates ability to own the full UI/UX process from research
              to polished product.
            </li>
          </ul>
        </section>

        {/* Divider */}
        <div className="h-[2px] bg-[#333]/30 my-6" />

        {/* What I Learned */}
        <section
          id="what-i-learned"
          aria-labelledby="what-i-learned-heading"
          className="mb-6 md:mb-8 scroll-mt-40 md:scroll-mt-48"
        >
          <h2
            id="what-i-learned-heading"
            className="text-xl md:text-3xl font-bold text-[#333] mb-3 md:mb-6 tracking-tight"
          >
            What I Learned
          </h2>
          <ul className="list-disc list-inside leading-relaxed space-y-2">
            <li>
              <strong>Test first, design later</strong> — the value of
              validating assumptions early.
            </li>
            <li>
              How structured <strong>wireframes</strong> speed up iteration and
              reduce rework.
            </li>
            <li>
              The importance of <strong>user testing</strong> for uncovering
              usability gaps, not just visual polish.
            </li>
            <li>
              How to scope a UX/UI project from{" "}
              <strong>concept to deliverable</strong> without full development.
            </li>
            <li>
              The need to design with <strong>usability in mind</strong>,
              prioritizing clarity over decoration.
            </li>
            <li>
              Why consistent systems (typography, color, components) make
              products feel professional.
            </li>
          </ul>

          {/* GitHub */}
          <div className="mt-7 mb-7">
            <a
              href="https://www.behance.net/taniaboterman"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-stone-50 px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              <FaGithub className="h-5 w-5" />
              View on Behance
            </a>
          </div>
        </section>

        {/* Tools & Technology */}
        <section
          id="tools"
          aria-labelledby="tools-heading"
          className="mb-6 md:mb-10 scroll-mt-40 md:scroll-mt-48"
        >
          <h2
            id="tools-heading"
            className="text-xl md:text-3xl font-bold text-[#333] mb-3 md:mb-6 tracking-tight"
          >
            Tools & Technology
          </h2>
          <div className="flex flex-wrap gap-3">
            {"Figma,Adobe Photoshop,Adobe Illustrator".split(",").map((tag) => (
              <ToolBadge key={tag} label={tag} />
            ))}
          </div>
        </section>
      </div>

      {/* Image modal — swipe + arrows */}
      {hasModal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          data-edge-swipe-exempt="true"
          onClick={closeModal}
          onTouchStart={onModalTouchStart}
          onTouchEnd={onModalTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div
            className="bg-white p-3 rounded-lg shadow-lg max-w-[95vw] max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[modalIndex].src}
              alt={images[modalIndex].alt}
              className="rounded max-w-full max-h-[85vh] object-contain select-none"
              draggable="false"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevModal}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm shadow hover:bg-white"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={nextModal}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-sm shadow hover:bg-white"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </CaseStudyLayout>
  );
}
