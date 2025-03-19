import React from "react"
import NavLink from "./NavLink";

export default function Header() {
    return (
      <div className="flex space-x-4 mb-4">
        <NavLink href="#about" text="About" />
        <NavLink href="#contact" text="Contact" />
      </div>
    );
  }
