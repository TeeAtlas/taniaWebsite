import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ title, description, tag, className, to }) {
  const content = (
    <div className={`${className} responsive-card`}>
      {tag && <span className="project-tag">{tag}</span>}
      
      {/* Image wrapper with fixed ratio */}
      {/* <div className="aspect-wrapper">
        <img
          src={`/assets/preview-${title.toLowerCase().replace(/\s+/g, "-")}.jpg`} // optional dynamic
          alt={title}
          className="aspect-image"
        />
      </div> */}

      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}
