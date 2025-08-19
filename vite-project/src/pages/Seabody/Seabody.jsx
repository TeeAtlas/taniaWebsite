// src/pages/case-studies/Seabody.jsx
import React, { useState, useEffect, useRef } from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import { FaFigma, FaDatabase } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

/* =========================
   Icons & Badges (Reusable)
========================= */
const ToolIcon = ({ name, className = "w-7 h-7" }) => {
  switch (name.trim()) {
    case "Figma":
      return <FaFigma className={className} />;
    case "Adobe Photoshop":
      return <SiAdobephotoshop className={className} />;
    case "Adobe Illustrator":
      return <SiAdobeillustrator className={className} />;
    default:
      return <FaDatabase className={className} />; // fallback
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
export default function Seabody() {
  // Modal — index-based so we can swipe between images
  const [modalIndex, setModalIndex] = useState(null);
  const hasModal = modalIndex !== null;
  const openModalAt = (i) => setModalIndex(i);
  const closeModal = () => setModalIndex(null);
  const prevModal = () => setModalIndex((i) => (i + images.length - 1) % images.length);
  const nextModal = () => setModalIndex((i) => (i + 1) % images.length);

  // Keyboard support while modal is open
  useEffect(() => {
    if (!hasModal) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prevModal();
      else if (e.key === "ArrowRight") nextModal();
      else if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hasModal]);

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

  // Carousel images
  const images = [
    { src: "/images/sea-home-header.jpg", alt: "Seabody desktop homepage" },
    { src: "/images/sea-mobile-header.jpg", alt: "Seabody mobile homepage" },
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

  // Keep carousel height equal to first image’s natural aspect ratio
  const trackWrapRef = useRef(null);
  const [firstAR, setFirstAR] = useState(null);
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

  const lockedHeight = firstAR && wrapWidth ? Math.round(wrapWidth / firstAR) : null;

  return (
    <CaseStudyLayout
      title="Seabody"
      subtitle="Legacy ecommerce WordPress build."
      backButtonClass="text-[#333]"
      bgClass=""
      textClass="text-[#333]"
    >
      {/* Content wrapper to match MainContent gutters */}
      <div className="px-4 md:px-8">
        {/* Gallery */}
        <section id="hero-section" aria-labelledby="gallery-heading" className="mb-6 md:mb-8">
          <h2 id="gallery-heading" className="text-xl md:text-3xl font-bold text-[#333] mb-3 md:mb-6 tracking-tight">
            Gallery
          </h2>

          <div
            ref={trackWrapRef}
            data-edge-swipe-exempt="true"
            className="relative overflow-hidden rounded-lg select-none bg-white"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{ height: lockedHeight ?? undefined, aspectRatio: lockedHeight ? "auto" : "16 / 9" }}
          >
            {/* Track */}
            <div className="flex transition-transform duration-500 ease-out h-full" style={{ transform: `translateX(-${index * 100}%)` }}>
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

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
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
        <section id="my-role" aria-labelledby="my-role-heading" className="mb-6 md:mb-8 scroll-mt-40 md:scroll-mt-48">
          <h2 id="my-role-heading" className="text-xl md:text-3xl font-bold text-[#333] mb-3 md:mb-6 tracking-tight">
            My Role
          </h2>
          <p className="leading-relaxed">
            On this legacy WordPress build I streamlined navigation and routing, consolidated CSS, improved responsive layouts, and cleaned up menus to reduce friction. I also addressed SEO issues (duplicate tags, analytics debugging) and added targeted JavaScript to improve performance and search visibility.
          </p>
        </section>

        {/* Divider */}
        <div className="h-[2px] bg-[#333]/30 my-6" />

        {/* What I Learned */}
        <section id="what-i-learned" aria-labelledby="what-i-learned-heading" className="mb-6 md:mb-8 scroll-mt-40 md:scroll-mt-48">
          <h2 id="what-i-learned-heading" className="text-xl md:text-3xl font-bold text-[#333] mb-3 md:mb-6 tracking-tight">
            What I Learned
          </h2>
          <p className="leading-relaxed mb-6">
            Working within a legacy stack sharpened my attention to regression risks and the value of incremental, testable changes. I leaned on consistent visual patterns, careful refactors, and analytics checks to ship improvements safely without disrupting existing traffic or SEO.
          </p>

          <div className="mb-7">
            <a
              href="https://seabody.com"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-stone-50 px-4 py-2 text-sm font-medium hover:opacity-90"
            >
              Visit website
            </a>
          </div>
        </section>

        {/* Tools & Technology */}
        <section id="tools" aria-labelledby="tools-heading" className="mb-6 md:mb-10 scroll-mt-40 md:scroll-mt-48">
          <h2 id="tools-heading" className="text-xl md:text-3xl font-bold text-[#333] mb-3 md:mb-6 tracking-tight">
            Tools & Technology
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Figma", "Adobe Photoshop", "Adobe Illustrator"].map((tag) => (
              <ToolBadge key={tag} label={tag} />
            ))}
          </div>
        </section>
      </div>

      {/* Image modal with swipe + arrows */}
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
          <div className="bg-white p-3 rounded-lg shadow-lg max-w-[95vw] max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
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
