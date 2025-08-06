import React from "react";
import { Link } from "react-router-dom";


export default function ProjectCard({ title, description, tag, className, to }) {
  const CardContent = (
    <div className={className}>
      {tag && <span className="project-tag">{tag}</span>}
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
    </div>
  );

  return to ? <Link to={to}>{CardContent}</Link> : CardContent;
}