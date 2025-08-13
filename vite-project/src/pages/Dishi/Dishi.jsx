import React, { useState } from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";import { FaGithub } from "react-icons/fa";


const ToolIcon = ({ name, className = "w-7 h-7" }) => {
  switch (name) {
    case "Figma":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path fill="#F24E1E" d="M5 2h4v8H5a4 4 0 0 1 0-8z" />
          <path fill="#FF7262" d="M9 2h4a4 4 0 0 1 0 8H9V2z" />
          <path fill="#A259FF" d="M13 10h-4v8h4a4 4 0 0 0 0-8z" />
          <path fill="#1ABCFE" d="M9 10H5a4 4 0 0 0 0 8h4v-8z" />
          <path fill="#0ACF83" d="M9 18H5a4 4 0 0 0 0 8h4v-8z" />
        </svg>
      );
    case "Adobe Photoshop":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#001E36" />
          <text x="5" y="17" fontSize="11" fontFamily="Arial Black, sans-serif" fill="#31A8FF">Ps</text>
        </svg>
      );
    case "Adobe Illustrator":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#300" />
          <text x="5" y="17" fontSize="11" fontFamily="Arial Black, sans-serif" fill="#FF9A00">Ai</text>
        </svg>
      );
    case "HTML":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path fill="#E34F26" d="M3 2l1.8 20.4L12 26l7.2-3.6L21 2H3z" />
          <path fill="#EF652A" d="M12 4v18l5.8-2.9L18.3 4H12z" />
          <path fill="#fff" d="M12 9H9.2l.1 1.8H12v1.8H9.4l.2 1.9H12V17l-3.7-1-.3-3.4L7.7 7H12v2z" />
        </svg>
      );
    case "CSS":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path fill="#1572B6" d="M3 2l1.9 20.5L12 26l7.1-3.5L21 2H3z" />
          <path fill="#33A9DC" d="M12 4v18l5.8-2.8L18.2 4H12z" />
          <path fill="#fff" d="M12 9H8.5l.2 1.8H12v1.8H8.7l.2 1.9H12V17l-3.6-1 .1-1.3H10V13H8.5L8.3 11H12V9z" />
        </svg>
      );
    case "React":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1.5" fill="none">
            <ellipse cx="12" cy="12" rx="9" ry="4.5" />
            <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );
    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path fill="#13AA52" d="M12 2s4 3.5 4 8.7c0 5.7-3.3 7.7-3.7 8-.4.3-.3 2.2-.3 2.2h-.1s.1-1.9-.3-2.2c-.4-.3-3.7-2.3-3.7-8C8 5.5 12 2 12 2z" />
          <path fill="#B8C4C2" d="M12 21.6s.1-1.4.4-1.6c0 0-.2.2-.4.2-.2 0-.4-.2-.4-.2.3.2.4 1.6.4 1.6z" />
        </svg>
      );
    case "Trello":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect width="24" height="24" rx="4" fill="#0052CC" />
          <rect x="4" y="4" width="7" height="16" rx="1.5" fill="#fff" />
          <rect x="13" y="4" width="7" height="10" rx="1.5" fill="#fff" />
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
      {/* Tools & Technologies */}
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]">Tools & Technologies</p>
      <div className="mx-auto w-3/4 mb-8">
        <div className="mb-6 flex flex-wrap gap-3">
          {["Figma","Adobe Photoshop","Adobe Illustrator","HTML","CSS","React","MongoDB","Trello","Responsive Design","AI"].map((tag) => (
            <ToolBadge key={tag} label={tag} />
          ))}
        </div>
      </div>

      {/* Hero image */}
      <figure className="group cursor-pointer w-3/4 mx-auto" onClick={() => openModal("/images/dishiHomepage.jpg", "Dishi homepage")}>
        <img src="/images/dishiHomepage.jpg" alt="Dishi homepage" className="rounded-lg w-full h-auto transition-transform duration-300 ease-out group-hover:scale-[1.01] shadow-sm" />
      </figure>

      {/* Divider */}
      <div className="w-11/12 md:w-5/6 mx-auto h-[2px] bg-[#333]/30 my-6" />

      {/* Gallery */}
      <section className="w-11/12 md:w-5/6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <figure className="group cursor-pointer" onClick={() => openModal("/images/dishiReview.jpg", "Dish detail view")}>
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img src="/images/dishiReview.jpg" alt="Detail view A" className="block w-full h-auto rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]" loading="lazy" />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/50"><strong>The dish detail page lets users like & save, keeping key actions prominent for quick, intuitive interaction.</strong></figcaption>
          </figure>
          <figure className="group cursor-pointer" onClick={() => openModal("/images/dishiSignUp.jpg", "Sign-up flow with custom features")}>
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img src="/images/dishiSignUp.jpg" alt="Detail view B" className="block w-full h-auto rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]" loading="lazy" />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/50"><strong>The sign-up flow includes password creation, error handling, dietary preference selection, and custom avatar upload for a personalized onboarding experience.</strong></figcaption>
          </figure>
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <button onClick={closeModal} className="absolute top-6 right-6 text-white text-3xl font-bold hover:opacity-80" aria-label="Close image">×</button>
          <div className="bg-white p-3 rounded-lg shadow-lg">
            <img src={modalImage.src} alt={modalImage.alt} className="rounded max-w-full max-h-[90vh]" />
          </div>
        </div>
      )}
      

      {/* My Role */}
      <aside>
        <p className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]">MY ROLE</p>
        <p className="leading-relaxed mb-2">DiSHi was a collaborative school project where I took the lead on <strong>front-end development</strong> and <strong>UI design</strong>. I guided the team from initial moodboards and competitive analysis through user flows, wireframes, and high-fidelity prototypes in <strong>Figma</strong>, focusing on a visually cohesive interface that balanced aesthetics with usability.</p>
        <p className="leading-relaxed mb-2">Once designs were approved, I implemented the UI using <strong>React</strong> and semantic CSS, collaborating with the back-end team to integrate <strong>Node.js</strong> and <strong>MongoDB</strong>.</p>
        <p className="leading-relaxed mb-6">I handled <strong>CRUD operations</strong>, built responsive layouts, and implemented <strong>error handling</strong> for a smooth user experience.</p>

        {/* What I Learned */}
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]">What I Learned</p>
        <p className="leading-relaxed mb-6">This project reinforced the importance of clear component architecture in React, early integration with the back-end team to avoid blockers, and maintaining consistent visual patterns across all views for user trust and ease-of-use.</p>

        {/* GitHub */}
        <div className="mx-auto w-3/4 mb-7">
          <a href="https://github.com/your-username/Dishi" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-xl border-0 bg-stone-50 px-4 py-2 text-sm font-medium hover:opacity-90">
            <FaGithub className="h-5 w-5" />
            View on GitHub
          </a>
        </div>
      </aside>
    </CaseStudyLayout>
  );
}
