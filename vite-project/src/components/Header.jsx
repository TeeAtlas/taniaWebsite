import React from "react";
import NavLink from "./NavLink";

export default function Header({ onAboutClick }) {
  return (
    <div className="flex space-x-4 mb-4">
      <NavLink href="#about" text="About" onClick={onAboutClick} />
      <NavLink href="#contact" text="Contact" />
    </div>
  );
}
