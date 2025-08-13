// src/pages/case-studies/Seabody.jsx
import React, { useState, useEffect } from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

// If Seabody shows tool badges, keep these tiny SVG caps (same as Seedling/Dishi)
const ToolIcon = ({ name, className = "w-7 h-7" }) => {
  switch (name) {
    case "Figma":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path fill="#F24E1E" d="M5 2h4v8H5a4 4 0 0 1 0-8z" />
          <path fill="#FF7262" d="M9 2h4a4 4 0 0 1 0 8H9V2z" />
          <path fill="#A259FF" d="M13 10h-4v8h4a4 4 0 0 0 0-8z" />
          <path fill="#1ABCFE" d="M9 10H5a4 4 0 0 0 0 8h4v-8z" />
          <path fill="#0ACF83" d="M9 18H5a4 4 0 0 0 0 8h4v-8z" />
        </svg>
      );
    case "Adobe Photoshop":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect width="24" height="24" rx="3" fill="#001E36" />
          <text x="5" y="17" fontSize="11" fontFamily="Arial Black, sans-serif" fill="#31A8FF">Ps</text>
        </svg>
      );
    case "Adobe Illustrator":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect width="24" height="24" rx="3" fill="#300" />
          <text x="5" y="17" fontSize="11" fontFamily="Arial Black, sans-serif" fill="#FF9A00">Ai</text>
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

export default function Seabody() {
  const [modalImage, setModalImage] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const openModal = (src, alt) => setModalImage({ src, alt });
  const closeModal = () => setModalImage(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroBottom = document.getElementById("hero-section")?.getBoundingClientRect().bottom;
      setShowBackToTop(heroBottom !== undefined && heroBottom < 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <CaseStudyLayout
      title="Seabody"
      subtitle="{/* Keep your existing subtitle here */}"
      backButtonClass="text-[#333]"
      bgClass="bg-[#F3ECE7]" // adjust if Seabody uses a different background
      textClass="text-[#333]"
    >
      {/* Sticky scrollable menu — EXACTLY like Seedling */}
      <nav className="sticky top-0 z-30 mx-auto w-11/12 md:w-5/6">
        <ul className="flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap overflow-x-auto rounded-xl bg-white/60 backdrop-blur px-2 py-2">
          <li><a href="#top" className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90">Overview</a></li>
          <li><a href="#gallery" className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90">Gallery</a></li>
          <li><a href="#my-role" className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90">My Role</a></li>
          <li><a href="#what-i-learned" className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90">What I Learned</a></li>
          <li><a href="#tools" className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90">Tools & Tech</a></li>
          {showBackToTop && (
            <li><a href="#top" className="inline-block rounded-lg px-3 py-2 text-sm font-medium hover:opacity-90">Back to Top</a></li>
          )}
        </ul>
      </nav>

      {/* Top anchor for Overview */}
      <div id="top" className="scroll-mt-24" />

      {/* HERO — do not change your image/text, just add id and keep classes */}
      <figure id="hero-section" className="group cursor-pointer w-3/4 mx-auto" onClick={() => openModal("/images/seabody-hero.jpg", "Seabody hero")}>{/* <-- replace src/alt with your existing hero */}
        <img src="/images/seabody-hero.jpg" alt="Seabody hero" className="rounded-lg w-full h-auto transition-transform duration-300 ease-out group-hover:scale-[1.01]" />
      </figure>

      {/* Divider below hero */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />

      {/* My Gallery heading — anchor lands just below sticky menu */}
      <h2 id="gallery" className="text-lg font-semibold text-[#333] w-11/12 md:w-5/6 mx-auto mb-4 scroll-mt-40 md:scroll-mt-48">My Gallery</h2>

      {/* GALLERY — keep your exact images/captions; just ensure wrapper matches */}
      <section className="w-11/12 md:w-5/6 mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Example items — replace with your Seabody gallery content without altering text/images */}
          <figure className="group cursor-pointer" onClick={() => openModal("/images/seabody-1.jpg", "Seabody detail")}>{/* replace paths/alts */}
            <div className="relative w-full overflow-hidden rounded-lg">
              <img src="/images/seabody-1.jpg" alt="Seabody detail" className="block w-full h-auto rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]" loading="lazy" />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/50"><strong>{/* your original caption */}Seabody detail caption</strong></figcaption>
          </figure>
          <figure className="group cursor-pointer" onClick={() => openModal("/images/seabody-2.jpg", "Seabody detail 2")}>{/* replace paths/alts */}
            <div className="relative w-full overflow-hidden rounded-lg">
              <img src="/images/seabody-2.jpg" alt="Seabody detail 2" className="block w-full h-auto rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]" loading="lazy" />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/50"><strong>{/* your original caption */}Seabody detail caption 2</strong></figcaption>
          </figure>
        </div>
      </section>

      {/* Divider before My Role */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <button onClick={closeModal} className="absolute top-6 right-6 text-white text-3xl font-bold hover:opacity-80" aria-label="Close image">×</button>
          <div className="bg-white p-3 rounded-lg shadow-lg">
            <img src={modalImage.src} alt={modalImage.alt} className="rounded max-w-full max-h-[90vh]" />
          </div>
        </div>
      )}

      {/* MY ROLE — paste your existing text here; do not edit content, only wrapper */}
      <aside id="my-role" className="scroll-mt-40 md:scroll-mt-48">
        {/* BEGIN: Your original "My Role" block */}
        <p className="mb-2 text sm font-semibold uppercase tracking-wide text-[#333]">My Role</p>
        <p className="leading-relaxed mb-2">{/* ...your existing paragraphs... */}</p>
        <p className="leading-relaxed mb-2">{/* ... */}</p>
        <p className="leading-relaxed mb-6">{/* ... */}</p>
        {/* END: Your original "My Role" block */}
      </aside>

      {/* Divider below My Role */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />

      {/* WHAT I LEARNED — paste your existing text; keep anchor/offset */}
      <section id="what-i-learned" className="scroll-mt-40 md:scroll-mt-48">
        <p className="mb-2 text sm font-semibold uppercase tracking-wide text-[#333]">What I Learned</p>
        <p className="leading-relaxed mb-6">{/* your existing takeaways text */}</p>
      </section>

      {/* TOOLS — if Seabody has tools, keep badges; otherwise you can remove this section */}
      <section id="tools" className="scroll-mt-40 md:scroll-mt-48">
        <p className="mb-2 text sm font-semibold uppercase tracking-wide text-[#333]">Tools & Technology</p>
        <div className="mx-auto w-3/4 mb-6">
          <div className="flex flex-wrap gap-3">
            {/* Keep your original tool list. Example: */}
            {"Figma,Adobe Photoshop,Adobe Illustrator".split(",").map((tag) => (
              <span key={tag} className="inline-flex items-center gap-2 rounded-lg border-0 bg-stone-50 px-3 py-2 text-sm font-medium text-[#333]"><ToolIcon name={tag} />{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
