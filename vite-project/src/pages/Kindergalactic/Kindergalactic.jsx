import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";

export default function Kindergalactic() {
  return (
    <CaseStudyLayout
      title="Kindergalactic"
      subtitle="Playful, cosmic-inspired kids’ clothing brand."
      backButtonClass="text-[#333]"
      bgClass="bg-[#F3ECE7]"
      textClass="text-[#333]"
    >
      <p className="text-center text-lg mt-6">
        Watch this space - exciting things are coming soon!
      </p>

      <p className="text-center mt-4">
        <button
          onClick={() => window.open("https://kindergalactic.com", "_blank")}
          className="underline text-[#333] hover:opacity-80"
        >
          kindergalactic.com
        </button>
      </p>
    </CaseStudyLayout>
  );
}
