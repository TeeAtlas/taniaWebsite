import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ label = "←", className = "" }) {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      aria-label="Go back"
      onClick={() => navigate(-1)}
      className={[
        // --- Button shell ---
        "group inline-flex items-center gap-2 rounded-2xl ",
        "px-3 py-2 md:px-4 md:py-2 shadow-none",

        // ✨ No background (this is where we remove white)
        // If you had `bg-white/...` before, swap it for `bg-transparent`.
        "bg-transparent",

        // --- Motion + states ---
        "transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-95",
        
        className,
      ].join(" ")}
    >
      <span
        // --- Arrow sizing & hover behavior ---
        // `text-3xl md:text-4xl` sets a large base glyph
        // `scale-75` makes it exactly 75% of that size (3/4 size)
        // on hover we go from 0.75 -> 0.825 (a gentle ~10% bump)
        className="inline-block -ml-1 leading-none text-3xl md:text-4xl scale-75 group-hover:scale-[1] transition-transform duration-200 ease-out"
        aria-hidden="true"
      >
        {label}
      </span>
    </button>
  );
}
