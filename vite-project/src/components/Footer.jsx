import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-neutral-300/40 py-6 text-center">
      <p className="text-xs md:text-sm text-neutral-500">
        Designed & built by me with{" "}
        <span className="font-medium text-neutral-700">React</span>,{" "}
        <span className="font-medium text-neutral-700">Tailwind</span>, and hosted on{" "}
        <span className="font-medium text-neutral-700">Vercel</span>.
      </p>
    </footer>
  );
}
