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

  // Lock horizontal scroll & sideways pan on touch
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

  // Back-to-top visibility on scroll
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

  // Carousel images (hero + gallery combined)
  const images = [
    { src: "/images/seedlingIntro.jpg", alt: "Seedling homepage" }, // first defines aspect ratio
    { src: "/images/seedlingUserFlow.jpg", alt: "Seedling user flow" },
    { src: "/images/seedlingStyleGuide.jpg", alt: "Seedling style guide" },
    { src: "/images/seedlingFlow3.jpg", alt: "Seedling onboarding flow" },
  ];

  // Carousel state/handlers
  const [index, setIndex] = useState(0);
  const clampIndex = (i) => (i + images.length) % images.length;
  const prev = () => setIndex((i) => clampIndex(i - 1));
  const next = () => setIndex((i) => clampIndex(i + 1));

  // Swipe support
  const touchStartX = useRef(null);
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) dx > 0 ? prev() : next();
    touchStartX.current = null;
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
      bgClass="" // remove background/card
      textClass="text-[#333]"
    >
      {/* IMAGE CAROUSEL with fixed height from first image ratio (no cropping) */}
      <section id="hero-section" className="w-11/12 md:w-5/6 mx-auto">
        <h2
          id="gallery"
          className="text-lg font-semibold text-[#333] mb-4 scroll-mt-40 md:scroll-mt-48"
        >
          Gallery
        </h2>

        <div
          ref={trackWrapRef}
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
                onClick={() => openModal(img.src, img.alt)}
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

      {/* Divider below carousel */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />

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

      {/* Image modal — tap anywhere to close (no X needed) */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white p-3 rounded-lg shadow-lg max-w-[95vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="rounded max-w-full max-h-[85vh] cursor-pointer object-contain"
              onClick={closeModal}
            />
          </div>
        </div>
      )}
    </CaseStudyLayout>
  );
}
