import React from "react";
import Navigation from "./Navigation";
import ProjectCard from "./ProjectCard";
import DiagonalBackgroundShapes from "./DiagonalBGShapes";

export default function MainContent() {
  return (
    <>
      <DiagonalBackgroundShapes />
      <HeroBanner />
      <ProjectsArea />
    </>
  );
}

function HeroBanner() {
  return (
    <section className="relative h-[200px] md:h-[400px] mb-9 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden rounded-lg shadow-lg">
        <img
          src="/assets/tania_252422.jpg"
          alt="Portrait of Tania"
          className="w-full h-full object-cover transition-transform duration-500 scale-[1.2] md:scale-100 object-[0%_7%] md:object-[0%_8%]"
        />
      </div>

      <div className="absolute inset-0 bg-neutral-900/20 rounded-lg" />

      <div className="absolute z-10 -mt-2 text-white text-left px-4 top-6 md:top-[35%] md:left-[30%] md:-translate-x-1/2 md:-translate-y-1/2">
        <h1 className="text-3xl md:text-7xl font-bold mb-2 tracking-tighter">
          Hello, I'm Tania
        </h1>
        <p className="text-sm -mt-1 md:text-lg md:mt-0">
          I’m a UI-focused web developer and I like making interesting stuff.
          <br className="hidden sm:block" />I build clean, beautiful work from
          prototype to production.
        </p>
      </div>

      <div className="absolute right-4 bottom-4 md:bottom-6 md:right-[25px] md:left-auto z-20">
        <Navigation />
      </div>
    </section>
  );
}

function ProjectsArea() {
  return (
    <section id="projects" className="p-6 rounded-lg bg-[#252422]">
      <h2 className="text-3xl font-semibold text-white mb-6 px-4 ml-[-4%] md:ml-[4%] tracking-tight">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4 md:px-0">
        {/* Seabody */}
        <ProjectCard
          title="Client Portfolio: Seabody"
          description="A clean, image-forward site for sustainable skin care and beauty products."
          tag="client work"
          to="/seabody"
          className="rounded-lg p-4 cursor-pointer transform transition-transform duration-300 ease-in-out h-[200px] bg-[#E3D5CA] hover:scale-[1.03] hover:-rotate-[0.8deg]"
          // imageSrc="/assets/preview-seabody.jpg"
          // aspectRatio="4 / 3"
        />

        {/* DiSHi */}
        <ProjectCard
          title="School Portfolio: DiSHi"
          description="A minimal React MVP. With focus on responsive layouts, paginations, CRUD operations, Data management, and frontend UI. Focus on usability and addressing user needs."
          tag="school project"
          to="/dishi"
          className="rounded-lg p-4 cursor-pointer transform transition-transform duration-300 ease-in-out h-[200px] bg-[#DAD7CD] hover:scale-[1.03] hover:-rotate-[0.8deg]"
          // imageSrc="/assets/preview-seabody.jpg"
          // aspectRatio="4 / 3"
        />

        {/* Seedling */}
        <ProjectCard
          title="School UI Concept: Seedling"
          description="A concept UI project built for a school module — clean layouts, structured typography, and design tokens. An app for parents to teach kids how to manage finances."
          tag="school project"
          to="/seedling"
          className="rounded-lg p-4 cursor-pointer transform transition-transform duration-300 ease-in-out h-[200px] bg-[#C4D7E0] hover:scale-[1.03] hover:-rotate-[0.8deg]"
          // imageSrc="/assets/preview-seabody.jpg"
          // aspectRatio="4 / 3"
        />

        {/* Kindergalactic */}
        <ProjectCard
          title="Kindergalactic App (WIP)"
          description="A creative, whimsical UI concept for Kindergalactic — playful, cosmic, and kid-inspired."
          tag="upcoming"
          className="rounded-lg p-4 cursor-pointer transform transition-transform duration-300 ease-in-out h-[200px] bg-[#F3ECE7] hover:scale-[1.03] hover:-rotate-[0.8deg]"
          // imageSrc="/assets/preview-seabody.jpg"
          // aspectRatio="4 / 3"
        />
      </div>
    </section>
  );
}
