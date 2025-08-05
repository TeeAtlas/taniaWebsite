import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import NavLink from "./NavLink";
import "../App.css";

export default function MainContent() {
  return (
    <>
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

{
  /* <div className="absolute inset-0 bg-gradient-to-b from-orange-400/20 to-orange-500/40"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
          <div className="relative">
            <div className="absolute -top-24">
              <div className="h-48 w-48 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div> */
}
