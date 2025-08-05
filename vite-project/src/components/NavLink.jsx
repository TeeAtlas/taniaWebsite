import React from "react";
import "../App.css";

export default function NavLink({ href, text, onClick, _blank }) {
  return (
    <a
      href={href}
      target={_blank ? "_blank" : "_self"}
      rel={_blank ? "noopener noreferrer" : undefined}
      onClick={onClick}
    >
      {text}
    </a>
  );
}
