// src/pages/Seedling/Seedling.jsx
import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import { FaBehance } from "react-icons/fa";

export default function Seedling() {
  return (
    <CaseStudyLayout
      title="Seedling"
      subtitle="MVP full-stack app for a digital food-sharing network."
      // if you're using the bgClass/textClass props:
      bgClass="bg-[#E3D5CA]"
      textClass="text-[#333]"
      // OR if you switched to themes: theme="seabody"
    >
      {/* Hero image */}
      <img
        src="/assets/seedlingIntro.jpg"
        alt="Seedling homepage"
        className="rounded-lg w-3/4 mx-auto mb-2"
      />

      <p className="leading-relaxed">
        <strong>My Role:</strong> As part of a collaborative final project, we
        designed and built Seedling as a responsive, mobile-first React MVP. I
        focused on structured layouts, pagination, CRUD operations, UI state
        management, and accessibility.
      </p>

      {/* Behance link (replaces GitHub) */}
      <div className="flex justify-center mt-4">
        <a
          href="https://www.behance.net/your-project-slug" // <-- drop your real Behance URL here
          target="_blank"
          rel="noopener"
          className="inline-flex items-center hover:underline"
        >
          <FaBehance className="mr-2" /> View on Behance
        </a>
      </div>
    </CaseStudyLayout>
  );
}
