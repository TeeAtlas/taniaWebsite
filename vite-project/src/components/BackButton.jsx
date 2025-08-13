import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton({ className = "" }) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.history.back();
      }}
      className={`inline-flex items-center gap-2 text-sm font-medium transition-transform duration-200 hover:scale-150 ${className}`}
      aria-label="Go back"
    >
      <FaArrowLeft className="w-4 h-4" />
    </a>
  );
}
