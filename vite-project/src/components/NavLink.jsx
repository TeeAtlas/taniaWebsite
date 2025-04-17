import React from "react";
import "../App.css";

export default function NavLink({ href, text, onClick }) {
  return (
    <a href={href} onClick={onClick}>
      {text}
    </a>
  );
}
