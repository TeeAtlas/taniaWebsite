import React from "react";
import Navigation from "./Navigation";
import "../App.css"; // This is where the semantic class definitions live

export default function MainContent() {
  return (
    <>
      <DiagonalBackgroundShapes />
      <HeroBanner />
      <ProjectsArea />
    </>
  );
}

function DiagonalBackgroundShapes() {
  return (
    <>
      <div className="bg-shape-pink" />
      <div className="bg-shape-yellow" />
    </>
  );
}

function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-image-wrapper">
  <img
    src="/assets/tania.jpg"
    alt="Portrait of Tania"
    className="hero-image"
  />
</div>
      <div className="hero-overlay" />
      <div className="hero-text">
        <h1 className="hero-heading">Hello, I'm Tania</h1>
        <p className="hero-subtext">
          I’m a UI-focused web developer and I like making interesting stuff.
          <br className="hidden sm:block" />
          I build clean, beautiful work from prototype to production.
        </p>
      </div>
      <div className="nav-container">
        <Navigation />
      </div>
    </section>
  );
}

function ProjectsArea() {
  return (
    <section id="projects" className="projects-area">
      <h2 className="projects-heading">Projects</h2>
      <p>
        Stay tuned for more updates as I continue to build and create exciting
        things.
      </p>
    </section>
  );
}
