import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import NavLink from "./NavLink";
import "../App.css";

export default function MainContent() {
  return (
    <>
      {/* Diagonal background */}
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
      {/* Hero Section */}
      <section className="relative h-[400px] mb-12 flex items-center justify-center">
        <img
          src="/assets/tania.jpg"
          alt="Placeholder"
          className="absolute inset-0 w-full h-full object-cover object-[0_13%] rounded-lg shadow-lg"
        />
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 rounded-lg" />
        <div className="absolute inset-4 flex flex-col  z-10">
          <h1 className="text-5xl font-bold text-white mb-2">
            Hello, I'm Tania
          </h1>
          <p className="mb-0 text-lg text-white">
            I’m a UI focused web developer and I like making interesting stuff.
          </p>
          <p className="mb-0 text-lg text-white">
            I build clean, beautiful work from prototype to production.
          </p>
        </div>
        <div className="absolute top-4 right-6 z-20">
          <Navigation />
        </div>
      </section>

      {/* <About /> */}
      <Projects />
    </>
  );
}

function About() {
  return (
    <section id="about">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-12">
        Hi, my name is Tania, I’m a UI focused web developer and I like making
        interesting r. I build clean, beautiful work from prototype to
        production.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      // className="mt-10 p-6 rounded-lg shadow-lg bg-gray-100 text-gray-800"
    >
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <p>
        Stay tuned for more updates as I continue to build and create exciting
        things.
      </p>
    </section>
  );
}
