import React from "react";
import { FaGithub, FaFigma, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTailwindcss, SiAdobeillustrator, SiAdobephotoshop, SiGit } from "react-icons/si";


const map = {
GitHub: FaGithub,
Figma: FaFigma,
React: FaReact,
"Node.js": FaNodeJs,
MongoDB: SiMongodb,
PostgreSQL: SiPostgresql,
Tailwind: SiTailwindcss,
Illustrator: SiAdobeillustrator,
Photoshop: SiAdobephotoshop,
Git: SiGit,
};


export default function ToolIcon({ name, className = "w-6 h-6" }) {
const Icon = map[name] || (() => <span className="text-xs">{name}</span>);
return <Icon className={className} aria-label={name} title={name} />;
}