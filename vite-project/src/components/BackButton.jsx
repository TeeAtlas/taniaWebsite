import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BackButton({ className = "" }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/")}
      className={`inline-flex items-center gap-2 text-sm font-medium transition-transform duration-200 hover:scale-150 ${className}`}
      aria-label="Go home"
    >
      <FaArrowLeft className="w-4 h-4" />
    </button>
  );
}