import React from "react";
import Navigation from "./Navigation";
import ProjectCard from "./ProjectCard";
import DiagonalBackgroundShapes from "./DiagonalBGShapes";
import {
  FaGithub,
  FaFigma,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGit,
} from "react-icons/si";

export default function MainContent() {
  return (
    <>
      <DiagonalBackgroundShapes />
      <HeroBanner />
      <ToolsAndTech />
      <ProjectsArea />
    </>
  );
}

function HeroBanner() {
  return (
    <section className="relative h-[200px] md:h-[400px] mb-9 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden rounded-lg shadow-lg">
        <img
          src="/images/tania_252422.jpg"
          alt="Portrait of Tania"
          className="w-full h-full object-cover transition-transform duration-500 scale-[1.2] md:scale-100 object-[0%_7%] md:object-[0%_8%]"
        />
      </div>

      <div className="absolute inset-0 bg-neutral-900/20 rounded-lg" />

      <div
        className="absolute z-10 -mt-2 text-white text-left px-4 top-6
                md:top-[35%] md:left-8 md:translate-x-0 md:-translate-y-1/2"
      >
        <h1 className="text-3xl md:text-7xl font-bold mb-2 tracking-tighter">
          Hello, I'm Tania
        </h1>
        <p className="text-xs -mt-1 md:text-lg md:mt-0">
          I’m a UI-focused Web Developer and I like making interesting stuff.
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

// MainContent.jsx (replace ProjectsArea with this mapped version)
function ProjectsArea() {
  const projects = [
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
        "rounded-lg p-4 cursor-pointer transform transition-transform duration-300 ease-in-out h-[200px] bg-[#E3D5CA]  hover:scale-[1.03] hover:-rotate-[0.8deg]",
    },
    {
      title: "School UI Concept: Seedling",
      description:
        "Clean, structured app with thoughtful typography and consistent visual styles to help parents teach kids about money.",
      tag: "school project",
      to: "/seedling",
      className:
        "rounded-lg p-4 cursor-pointer transform transition-transform duration-300 ease-in-out h-[200px] bg-[#F3ECE7]  hover:scale-[1.03] hover:-rotate-[0.8deg]",
    },
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

  return (
    <section id="projects" className="p-6 rounded-lg bg-[#252422]">
      <h2 className="text-xl md:text-3xl font-semibold text-white mb-6 px-4 ml-[-4%] md:ml-[4%] tracking-tight">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-4 md:px-0">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

// --- Tool logos ---
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
    default:
      return <FaDatabase className={className} />; // fallback generic icon
  }
};

function ToolsAndTech() {
  const tools = [
    "React",
    "JavaScript",
    "C",
    "Tailwind",
    "Figma",
    "Adobe",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Git",
    "MongoDB",
  ];

  return (
    <section className="mb-9 md:mb-9 rounded-lg bg-[#252422] relative isolate z-0 py-8">
      <h2 className="text-xl md:text-3xl font-semibold text-white mb-6 px-4 md:ml-[4%] tracking-tight">
        Tools & Technologies
      </h2>
      <div className="px-8 md:px-5">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-4 justify-items-center">
          {tools.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-lg border-0 bg-stone-50 px-2 py-1 text-[0.65rem] md:text-sm font-medium text-[#333] w-full justify-center h-9 md:h-11"
            >
              <ToolIcon name={tag} className="w-4 h-4 md:w-5 md:h-5" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
