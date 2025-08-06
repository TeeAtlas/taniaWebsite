import React from "react";
import Navigation from "./Navigation";
import ProjectCard from "./ProjectCard";
import DiagonalBackgroundShapes from "./DiagonalBGShapes";

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
          <br className="hidden sm:block" />I build clean, beautiful work from
          prototype to production.
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
      <div className="projects-grid">
        <ProjectCard
          title="Client Portfolio: Seabody"
          description="A clean, image-forward site for sustainable skin care and beauty products."
          tag="client work"
          className="project-card project-card-2"
          to="/seabody"
        />

        <ProjectCard
          title="School Portfolio: DiSHi"
          description="A minimal, mobile-first React MVP. With focus on responsive layouts, paginations, CRUD operations, Data management, and frontend UI. Focus on usability and addressing user needs."
          tag="school project"
          className="project-card project-card-3"
          to="/dishi"
        />

        <ProjectCard
          title="School UI Concept: Seedling"
          description="A concept UI project built for a school module — clean layouts, structured typography, and design tokens. An app for parents to teach kids how to manage finances."
          tag="school project"
          className="project-card project-card-4"
        />
        <ProjectCard
          title="Kindergalactic App (WIP)"
          description="A creative, whimsical UI concept for Kindergalactic — playful, cosmic, and kid-inspired."
          tag="upcoming"
          className="project-card project-card-1"
        />
      </div>
    </section>
  );
}
