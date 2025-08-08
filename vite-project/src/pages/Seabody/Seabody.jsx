import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import { FaGithub } from "react-icons/fa";

export default function Seabody() {
  return (
    <CaseStudyLayout
      title="Seabody"
      subtitle="Clean, image-forward site for sustainable beauty."
      backButtonClass="text-[#333]"    // dark arrow matching subtitle/text
      bgClass="bg-[#E3D5CA]"            // light peach card background
      textClass="text-[#333]"           // dark text everywhere
    >

      {/* Section 1 */}
      <img
        src="/assets/s_bodyHomepage_1.jpg"
        alt="Seabody homepage"
        className="rounded-lg w-3/4 mx-auto mb-2"
      />
      <p className="leading-relaxed">
        <strong>My Role:</strong> Seabody being a legacy WordPress build I was tasked with streamlining and re-designing site navigation, routing, responsiveness and menus. Cleaning up and consolidating the CSS files for more readable code. As well as SEO duties, which included cleaning duplicate tags and debugging analytics, creating custom JavaScript code to improve site performance and search visibility.
      </p>
      {/* Optional GitHub Link */}
      <div className="flex justify-center mb-4">
        <a
          href="https://github.com/your-username/seabody"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center hover:underline"
        >
          <FaGithub className="mr-2" /> View on GitHub
        </a>
      </div>
    </CaseStudyLayout>
  );
}
