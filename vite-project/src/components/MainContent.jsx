import React from "react";
import Navigation from "./Navigation";
import "../App.css";

export default function MainContent() {
  return (
    <>
      <DiagonalBackgroundShapes />
      <HeroBanner />
      <ProjectsArea />
    </>
  );
}

// 🎨 Decorative background shapes
function DiagonalBackgroundShapes() {
  return (
    <>
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: "#fce4ec",
          clipPath: "polygon(0 0, 40% 0, 100% 100%, 0% 100%)",
        }}
      />
      <div
        className="fixed inset-0 -z-20"
        style={{
          background: "#ffe29a",
          clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
    </>
  );
}

// 📸 Combined hero banner for desktop and mobile
function HeroBanner() {
  return (
    <section className="relative h-[200px] md:h-[400px] mb-12 flex items-center justify-center">
      <img
        src="/assets/tania.jpg"
        alt="Portrait of Tania"
        className="absolute inset-0 w-full h-full object-cover object-[0_8%] md:object-[0_10%] rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 bg-black/40 rounded-lg" />

      {/* Heading and paragraph text */}
      <div className="absolute z-10 text-white text-center px-4 top-4 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Hello, I'm Tania
        </h1>
        <p className="text-base md:text-lg">
          I’m a UI-focused web developer and I like making interesting stuff.
          <br className="hidden sm:block" />I build clean, beautiful work from
          prototype to production.
        </p>
      </div>

      {/* 🧭 Navigation: bottom-right on mobile, top-right on desktop */}
      <div className="absolute right-4 bottom-4 md:top-4 md:right-6 md:left-auto md:bottom-auto z-20">
      <Navigation />
      </div>
    </section>
  );
}

// 🛠️ Projects section
function ProjectsArea() {
  return (
    <section
      id="projects"
      className="mt-10 p-6 rounded-lg shadow-lg bg-gray-100 text-gray-800"
    >
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <p>
        Stay tuned for more updates as I continue to build and create exciting
        things.
      </p>
    </section>
  );
}
