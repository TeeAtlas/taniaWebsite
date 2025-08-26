import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

export default function Kindergalactic() {
  return (
    <CaseStudyLayout
      title="Kindergalactic"
      subtitle="Playful, cosmic-inspired kids’ clothing brand."
      backButtonClass="text-[#333] transition-transform duration-200 hover:scale-105"
      bgClass="transparent"
      textClass="text-[#333]"
    >
      <p className="mx-auto max-w-prose text-center text-lg mt-8 leading-relaxed">
        Watch this space - exciting things are coming soon!
      </p>

      <p className="mx-auto max-w-prose text-center mt-6">
        <button
          onClick={() => window.open("https://teeatlas.github.io/kindergalactic/", "_blank")}
          className="underline underline-offset-4 text-[#333] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#333] rounded-sm transition"
        >
          kindergalactic.com
        </button>
      </p>
    </CaseStudyLayout>
  );
}
