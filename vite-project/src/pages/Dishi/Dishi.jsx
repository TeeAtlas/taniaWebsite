import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import { FaGithub } from "react-icons/fa";

export default function Dishi() {
  return (
    <CaseStudyLayout
      title="DiSHi"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
      backButtonClass="text-[#333]" // dark arrow matching subtitle/text
      bgClass="bg-[#E3D5CA] " // light peach card background
      textClass="text-[#333]" // dark text everywhere
    >
      {/* Section 1 (keep placement) */}
      <img
        src="/assets/dishiHomepage.jpg"
        alt="Dishi homepage"
        className="rounded-lg w-3/4 mx-auto mb-2"
        /* headerCta belongs on CaseStudyLayout props; keeping image as-is per request */
      />

      {/* Content block: match Seedling page styling */}

      {/* Section 2: Two-up gallery (kept exactly as provided) */}
      <section className="w-11/12 md:w-5/6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Item A */}
          <figure className="group">
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img
                src="/assets/dishiBurger.jpg"
                alt="Detail view A"
                className="block !w-full h-auto !mx-0 rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/80">
              Short description for image A — what it shows or why it matters.
            </figcaption>
          </figure>

          {/* Item B */}
          <figure className="group">
            <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
              <img
                src="/assets/dishiSignUp_1.jpg"
                alt="Detail view B"
                className="block !w-full h-auto !mx-0 rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/80">
              Short description for image B — e.g., refactor, nav cleanup,
              responsiveness.
            </figcaption>
          </figure>
        </div>
      </section>

      <aside>
        {/* MY ROLE */}
        <p>
          <strong>MY ROLE</strong>
        </p>
        <p className="leading-relaxed mb-6">
          Dishi, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
          nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
          ligula massa, varius a, semper congue, euismod non, mi.
        </p>
      </aside>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#333]">
        Tools &amp; Technologies
      </p>

      {/* Badges aligned to image width */}
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
            "mongoDB",
            "trello"
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-lg border-0 bg-stone-50 px-3 py-1 text-xs font-medium text-[#333]"
            >
              {tag}
            </span>
          ))}
          <a
            href="https://github.com/your-username/Dishi"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-xl border-0 bg-stone-50 px-4 py-2 text-sm font-medium transition
                       hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/20"
          >
            <FaGithub className="h-4 w-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </CaseStudyLayout>
  );
}

// import React from "react";
// import CaseStudyLayout from "../../components/CaseStudyLayout";
// import { FaGithub } from "react-icons/fa";

// export default function Dishi() {
//   return (
//     <CaseStudyLayout
//       title="DiSHi"
//       subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio."
//       backButtonClass="text-[#333]" // dark arrow matching subtitle/text
//       bgClass="bg-[#DAD7CD]" // light peach card background
//       textClass="text-[#333]" // dark text everywhere
//     >
//       {/* Section 1 */}
//       <img
//         src="/assets/dishiHomepage.jpg"
//         alt="Dishi homepage"
//         className="rounded-lg w-3/4 mx-auto mb-2"
//         headerCta={
//           <a
//             href="https://github.com/your-username/Dishi"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center hover:underline"
//           >
//             <FaGithub className="mr-2 text-[#333]" />
//           </a>
//         }
//       />
//       <p className="leading-relaxed">
//         <strong>My Role:</strong> Dishi, lorem ipsum dolor sit amet, consectetur
//         adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
//         amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
//         diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
//       </p>

//     {/* Section 2: Two-up gallery, natural image height */}
// <section className="mt-8 w-11/12 md:w-5/6 mx-auto">
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//     {/* Item A */}
//     <figure className="group">
//       <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
//         <img
//           src="/assets/dishiBurger.jpg"
//           alt="Detail view A"
//           className="block !w-full h-auto !mx-0 rounded-lg
//                      transition-transform duration-300 ease-out group-hover:scale-[1.02]"
//           loading="lazy"
//         />
//       </div>
//       <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/80">
//         Short description for image A — what it shows or why it matters.
//       </figcaption>
//     </figure>

//     {/* Item B */}
//     <figure className="group">
//       <div className="relative w-full overflow-hidden rounded-lg shadow-sm">
//         <img
//           src="/assets/dishiSignUp_1.jpg"
//           alt="Detail view B"
//           className="block !w-full h-auto !mx-0 rounded-lg
//                      transition-transform duration-300 ease-out group-hover:scale-[1.02]"
//           loading="lazy"
//         />
//       </div>
//       <figcaption className="mt-2 text-sm leading-relaxed text-[#333]/80">
//         Short description for image B — e.g., refactor, nav cleanup, responsiveness.
//       </figcaption>
//     </figure>
//   </div>
// </section>

//     </CaseStudyLayout>
//   );
// }
