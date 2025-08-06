import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css"; // optional if styling separately

export default function BackButton({ label = "← Back", className = "" }) {
  const navigate = useNavigate();

  return (
    <button className={`back-button ${className}`} onClick={() => navigate(-1)}>
      {label}
    </button>
  );
}
