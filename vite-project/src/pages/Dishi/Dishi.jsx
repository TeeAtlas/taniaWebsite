import React, { useState } from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import { FaGithub } from "react-icons/fa";

export default function Dishi() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src, alt) => setModalImage({ src, alt });
  const closeModal = () => setModalImage(null);

  return (
    <CaseStudyLayout
      title="DiSHi"
      subtitle="A responsive web app designed and developed from concept to launch."
      backButtonClass="text-[#333]"
      bgClass="bg-[#E3D5CA]"
      textClass="text-[#333]"
    >
      {/* Section 1 */}
      <img
        src="/images/dishiHomepage.jpg"
        alt="Dishi homepage"
        className="rounded-lg w-3/4 mx-auto"
      />

      {/* Divider */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30" />

      {/* Two-up gallery */}
      <section className="w-11/12 md:w-5/6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Item A */}
          <figure
            className="group cursor-pointer"
            onClick={() =>
              openModal("/images/dishiReview.jpg", "Dish detail view")
            }
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img
                src="/images/dishiReview.jpg"
                alt="Detail view A"
                className="block !w-full h-auto !mx-0 rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/50">
              <strong>
                The dish detail page lets users like & save, keeping key actions
                prominent for quick, intuitive interaction.
              </strong>
            </figcaption>
          </figure>

          {/* Item B */}
          <figure
            className="group cursor-pointer"
            onClick={() =>
              openModal(
                "/images/dishiSignUp.jpg",
                "Sign-up flow with custom features"
              )
            }
          >
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img
                src="/images/dishiSignUp.jpg"
                alt="Detail view B"
                className="block !w-full h-auto !mx-0 rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/50">
              <strong>
                The sign-up flow includes password creation, error handling,
                dietary preference selection, and custom avatar upload for a
                personalized onboarding experience.
              </strong>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:opacity-80"
            aria-label="Close image"
          >
            ×
          </button>

          {/* Image */}
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
      <aside>
        <p>
          <strong>MY ROLE</strong>
        </p>
        <p className="leading-relaxed mb-2">
          DiSHi was a collaborative school project where I took the lead on
          <strong> front-end development</strong> and{" "}
          <strong> UI design</strong>. I guided the team from initial moodboards
          and competitive analysis through user flows, wireframes, and
          high-fidelity prototypes in
          <strong> Figma</strong>, focusing on a visually cohesive interface
          that balanced aesthetics with usability.
        </p>
        <p className="leading-relaxed mb-2">
          Once designs were approved, I implemented the UI using
          <strong> React</strong> and vanilla CSS, collaborating with the
          back-end team to integrate <strong>Node.js</strong> and{" "}
          <strong>MongoDB</strong>.
        </p>
        <p className="leading-relaxed mb-6">
          I handled <strong>CRUD operations</strong>, built responsive layouts,
          and implemented <strong>error handling</strong> for a smooth user
          experience.
        </p>
      </aside>

      {/* Tools */}
      <p>
        <strong>Tools & Technologies </strong>
      </p>
      <div className="mx-auto w-3/4">
        <div className="mb-6 flex flex-wrap gap-2">
          {[
            "Figma",
            "Adobe Photoshop",
            "Adobe Illustrator",
            "HTML",
            "CSS",
            "React",
            "Responsive Design",
            "AI",
            "MongoDB",
            "Trello",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-lg border-0 bg-stone-50 px-3 py-1 text-xs font-medium text-[#333]"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href="https://github.com/your-username/Dishi"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 rounded-xl border-0 bg-stone-50 px-4 py-2 text-sm font-medium"
        >
          <FaGithub className="h-4 w-4" />
          View on GitHub
        </a>
      </div>
    </CaseStudyLayout>
  );
}
