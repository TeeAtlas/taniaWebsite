
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
      bgClass="bg-[#F3ECE7]"
      textClass="text-[#333]"
    >
      {/* Hero image */}
      <imgyes
        src="/assets/seedlingIntro.jpg"
        alt="Seedling homepage"
        className="rounded-lg w-3/4 mx-auto"
      />

      {/* Second full-width image */}
      <img
        src="/assets/seedlingLowFiFrames.jpg"
        alt="Seedling secondary feature"
        className="rounded-lg w-3/4 mx-auto mt-6"
        loading="lazy"
      />

      {/* Divider */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />

      {/* First two-up gallery */}
      <section className="w-11/12 md:w-5/6 mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Thumb A */}
          <figure
            className="group cursor-pointer"
            onClick={() =>
              openModal("/assets/seedlingUserFlow.jpg", "Seedling screen 1")
            }
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img
                src="/assets/seedlingUserFlow.jpg"
                alt="Seedling screen 1"
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

          {/* Thumb B */}
          <figure
            className="group cursor-pointer"
            onClick={() =>
              openModal("/assets/seedlingStyleGuide.jpg", "Seedling screen 2")
            }
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img
                src="/assets/seedlingStyleGuide.jpg"
                alt="Seedling screen 2"
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

      {/* Second two-up gallery */}
      <section className="w-11/12 md:w-5/6 mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Thumb C */}
          <figure
            className="group cursor-pointer"
            onClick={() =>
              openModal("/assets/seedlingFlow3.jpg", "Seedling screen 3")
            }
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img
                src="/assets/seedlingFlow3.jpg"
                alt="Seedling screen 3"
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

      {/* Content block */}
      <aside>
        <p>
          <strong>MY ROLE</strong>
        </p>
        <p className="leading-relaxed mb-2">
          Seedling was my final school project — a complete app concept I
          designed end-to-end.
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
          I developed responsive layouts, navigation, and interactions, applying
          information architecture and UX best practices to make the site
          intuitive and visually engaging.
        </p>
        <p className="leading-relaxed mb-6">
          This project demonstrates my ability to own the full UI/UX process —
          from research to a polished product design.
        </p>

        <p className="mb-4">
          <strong>Tools & Technologies </strong>
        </p>
        <div className="mx-auto w-3/4">
          <div className="mb-6 flex flex-wrap gap-2">
            {["Figma", "Adobe Photoshop", "Adobe Illustrator"].map((tag) => (
              <span
                key={tag}
                className="rounded-lg border-0 bg-stone-50 px-3 py-1 text-xs font-medium text-[#333]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

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
