import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import { FaGithub } from "react-icons/fa";

export default function Dishi() {
  return (
    <CaseStudyLayout
      title="Dishi"
      subtitle="Clean, image-forward site for sustainable beauty."
      backButtonClass="text-[#333]"    // dark arrow matching subtitle/text
      bgClass="bg-[#E3D5CA]"            // light peach card background
      textClass="text-[#333]"           // dark text everywhere
    >

      {/* Section 1 */}
      <img
        src="/assets/s_bodyHomepage_1.jpg"
        alt="Dishi homepage"
        className="rounded-lg w-3/4 mx-auto mb-2"
         headerCta={
        <a
        href="https://github.com/your-username/Dishi"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center hover:underline"
        >
          <FaGithub className="mr-2 text-[#333]" />
        </a>
      }
      />
      <p className="leading-relaxed">
        <strong>My Role:</strong> Dishi being a legacy WordPress build I was tasked with streamlining and re-designing site navigation, routing, responsiveness and menus. Cleaning up and consolidating the CSS files for more readable code. As well as SEO duties, which included cleaning duplicate tags and debugging analytics, creating custom JavaScript code to improve site performance and search visibility.
      </p>
      
    </CaseStudyLayout>
  );
}