import React from "react"
import "../App.css"

export default function NavLink({ href, text }) {
    return <a href={href}>{text}</a>;
  }
  