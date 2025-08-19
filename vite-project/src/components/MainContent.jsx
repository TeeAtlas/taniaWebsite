import React from "react";
import Navigation from "./Navigation";
import ProjectCard from "./ProjectCard";
import DiagonalBackgroundShapes from "./DiagonalBGShapes";

// Icons
import { FaFigma, FaReact, FaNodeJs, FaDatabase, FaJs } from "react-icons/fa";
import {
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGit,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiC,
  SiAdobecreativecloud,
} from "react-icons/si";

/* =========================
   Static Data
========================= */
const PROJECTS = [
  {
    title: "Client Portfolio: Seabody",
    description:
      "A clean, image-forward site for sustainable skin care and beauty products.",
    tag: "client work",
    to: "/seabody",
    className:
      "rounded-lg p-4 cursor-pointer transform transition-transform duration-300 ease-in-out h-[200px] bg-[#DAD7CD] hover:scale-[1.03] hover:-rotate-[0.8deg]",
  },
  {
    title: "School Portfolio: DiSHi",
    description:
      "A minimal React MVP. Focused on responsive layouts, paginations, CRUD operations, Data management, and frontend UI. Focus on usability and addressing user needs.",
    tag: "school project",
    to: "/dishi",
    className:
      "rounded-lg p-4 cursor-pointer transform transition-transform duration-300 ease-in-out h-[200px] bg-[#E3D5CA] hover:scale-[1.03] hover:-rotate-[0.8deg]",
  },
  {
    title: "School UI Concept: Seedling",
    description:
      "Clean, structured app with thoughtful typography and consistent visual styles to help parents teach kids about money.",
    tag: "school project",
    to: "/seedling-old",
    className:
      "rounded-lg p-4 cursor-pointer transform transition-transform duration-300 ease-in-out h-[200px] bg-[#F3ECE7] hover:scale-[1.03] hover:-rotate-[0.8deg]",
  },
  // {
  //   title: "School UI Concept: Seedling",
  //   description:
  //     "Clean, structured app with thoughtful typography and consistent visual styles to help parents teach kids about money.",
  //   tag: "school project",
  //   to: "/seedling",
  //   className:
  //     "rounded-lg p-4 cursor-pointer transform transition-transform duration-300 ease-in-out h-[200px] bg-[#F3ECE7] hover:scale-[1.03] hover:-rotate-[0.8deg]",
  // },
  {
    title: "Kindergalactic App (WIP)",
    description:
      "A creative, whimsical UI concept. Playful, cosmic, and kid-inspired brand.",
    tag: "upcoming",
    to: "/kindergalactic",
    className:
      "rounded-lg p-4 cursor-pointer transform transition-transform duration-300 ease-in-out h-[200px] bg-[#C4D7E0] hover:scale-[1.03] hover:-rotate-[0.8deg]",
  },
];

const TOOLS = [
  "React",
  "JavaScript",
  "C",
  "Tailwind",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Git",
  "MongoDB",
];

/* =========================
   Reusable
========================= */
const ToolIcon = ({ name, className = "w-7 h-7" }) => {
  switch (name.trim()) {
    case "Figma":
      return <FaFigma className={className} />;
    case "React":
      return <FaReact className={className} />;
    case "Node.js":
      return <FaNodeJs className={className} />;
    case "MongoDB":
      return <SiMongodb className={className} />;
    case "Git":
      return <SiGit className={className} />;
    case "Adobe Photoshop":
      return <SiAdobephotoshop className={className} />;
    case "Adobe Illustrator":
      return <SiAdobeillustrator className={className} />;
    case "Tailwind":
      return <SiTailwindcss className={className} />;
    case "PostgreSQL":
      return <SiPostgresql className={className} />;
    case "Express":
      return <SiExpress className={className} />;
    case "JavaScript":
      return <FaJs className={className} />;
    case "C":
      return <SiC className={className} />;
    case "Adobe":
      return <SiAdobecreativecloud className={className} />;
    default:
      return <FaDatabase className={className} />;
  }
};

/* =========================
   Main
========================= */
export default function MainContent() {
  return (
    <main className="px-4 pt-8 md:px-8 md:pt-8 pb-12">
      <DiagonalBackgroundShapes />
      <HeroBanner />
      <ToolsAndTech />
      <ProjectsArea />
    </main>
  );
}

/* =========================
   Sections
========================= */
function HeroBanner() {
  return (
    <section
      aria-label="Intro"
      className="relative h-[160px] md:h-[368px] mb-0 flex items-center justify-center px-4 md:px-8"
    >
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <img
          src="/images/tania-hero-banner.jpg"
          alt="Portrait of Tania"
          className="w-full h-full object-cover transition-transform duration-500 scale-[1.2] md:scale-100 object-[130%_7%] md:object-[0%_60%]"
        />
      </div>

      <div className="absolute inset-0 bg-neutral-900/20 rounded-lg" />

      <div className="absolute z-10 -mt-2 text-[#FAFAFA] text-left left-4 md:left-8 top-6 md:top-[35%] md:translate-x-0 md:-translate-y-1/2">
        <h1 className="text-3xl md:text-7xl font-bold mb-2 tracking-tighter">
          Hello, I&apos;m Tania
        </h1>
        <p className="text-xs -mt-1 md:text-lg md:mt-0">
          I’m a UI-focused Web Developer.
          <br />
          This is my portfolio.
        </p>
      </div>

      <div className="absolute right-4 bottom-4 md:bottom-6 md:right-[25px] md:left-auto z-20">
        <Navigation iconColorClass="text-[#FAFAFA]" />
      </div>
    </section>
  );
}

function ToolsAndTech() {
  const mid = Math.ceil(TOOLS.length / 2);
  const row1 = TOOLS.slice(0, mid);
  const row2 = TOOLS.slice(mid);

  return (
    <section
      aria-labelledby="tech-stack-heading"
      className="px-4 md:px-8 mb-3 md:mb-7 md:mt-4 relative isolate z-0 py-3"
    >
      <h2
        id="tech-stack-heading"
        className="text-xl md:text-3xl font-bold text-[#333] mb-3 md:mb-6 tracking-tight"
      >
        Tech Stack
      </h2>

      {/* Tablet & Mobile */}
      <div className="flex flex-col gap-3 items-center lg:hidden">
        {[row1, row2].map((row, i) => (
          <div key={i} className="flex flex-wrap justify-center gap-4 md:gap-6">
            {row.map((tag) => (
              <div key={tag} className="relative group flex items-center">
                <ToolIcon
                  name={tag}
                  className="w-5 h-5 md:w-7 md:h-7 text-[#333] hover:scale-110 transition-transform cursor-pointer"
                />
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-7 opacity-0 group-hover:opacity-100 pointer-events-none bg-[#252422] text-[#E3D5CA] text-xs rounded px-2 py-1 whitespace-nowrap shadow transition-opacity duration-200 z-10">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {TOOLS.map((tag) => (
              <div key={tag} className="relative group flex items-center">
                <ToolIcon
                  name={tag}
                  className="w-6 h-6 md:w-8 md:h-8 text-[#333] hover:scale-110 transition-transform cursor-pointer"
                />
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-7 opacity-0 group-hover:opacity-100 pointer-events-none bg-[#252422] text-[#E3D5CA] text-xs rounded px-2 py-1 whitespace-nowrap shadow transition-opacity duration-200 z-10">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsArea() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-4 md:px-8 pb-6 pt-3 rounded-lg bg-[#313131]"
    >
      <h2
        id="projects-heading"
        className="text-xl md:text-3xl font-semibold text-[#FAFAFA] mb-3 md:mb-6 tracking-tight"
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
