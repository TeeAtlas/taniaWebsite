import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ label = "←", className = "" }) {
  const navigate = useNavigate();

  return (
    <button className={`back-button ${className}`} onClick={() => navigate(-1)}>
      {label}
    </button>
  );
}
