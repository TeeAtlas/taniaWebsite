// src/pages/case-studies/Seediling.jsx
import React, { useState } from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

export default function Seedling() {
  const [modalImage, setModalImage] = useState(null);
  const openModal = (src, alt) => setModalImage({ src, alt });
  const closeModal = () => setModalImage(null);

  return (
    <CaseStudyLayout
      title="Seedling"
      subtitle="Clean, image-forward site for sustainable beauty."
      backButtonClass="text-[#333]"
      bgClass="bg-[#F3ECE7]"   // keep colors
      textClass="text-[#333]" // keep colors
    >
      {/* Hero image (width is controlled by CaseStudyLayout) */}
      <img
        src="/assets/seedlingIntro.jpg"
        alt="Seedling homepage"
        className="rounded-lg w-3/4 mx-auto"
      />

      {/* Divider line — match enforced content/image width, like DiSHi */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30" />

      {/* Two-up gallery (thumbnails that open a modal) */}
      <section className="w-11/12 md:w-5/6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Thumb A */}
          <figure
            className="group cursor-pointer"
            onClick={() =>
              openModal("/assets/seedlingScreen1.jpg", "Seedling screen 1")
            }
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img
                src="/assets/seedlingScreen1.jpg"
                alt="Seedling screen 1"
                className="block !w-full h-auto !mx-0 rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/50">
              <strong>Example UI screen — clean layout and readable hierarchy.</strong>
            </figcaption>
          </figure>

          {/* Thumb B */}
          <figure
            className="group cursor-pointer"
            onClick={() =>
              openModal("/assets/seedlingScreen2.jpg", "Seedling screen 2")
            }
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img
                src="/assets/seedlingScreen2.jpg"
                alt="Seedling screen 2"
                className="block !w-full h-auto !mx-0 rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/50">
              <strong>Responsive component with consistent spacing and type scale.</strong>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Modal (same behavior as DiSHi: sized to image, with close “×”) */}
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

      {/* Content block (kept your copy + styling) */}
      <aside>
        <p className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]">
          MY ROLE
        </p>
        <p className="leading-relaxed mb-2">
          Seedling was my final school project — a complete website concept I
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
          ability to own the full UI/UX process — from research to polished,
          functional front-end.
        </p>

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

        {/* Behance link aligned with badges */}
        <div className="mx-auto w-3/4 mb-7">
          <a
            href="https://www.behance.net/taniaboterman"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border-0 bg-stone-50 px-4 py-2 text-sm font-medium"
          >
            View this &amp; other UI designs on Behance
          </a>
        </div>
      </aside>
    </CaseStudyLayout>
  );
}
