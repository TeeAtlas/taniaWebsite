import React from "react";


export default function Section({ id, eyebrow, title, aside, children, className = "" }) {
return (
<section id={id} className={`w-full max-w-5xl mx-auto px-4 md:px-6 ${className}`}>
{(eyebrow || title || aside) && (
<header className="mb-6 md:mb-8 grid md:grid-cols-12 gap-4">
<div className="md:col-span-8">
{eyebrow && (
<p className="text-xs tracking-widest uppercase opacity-70">{eyebrow}</p>
)}
{title && <h2 className="text-2xl md:text-3xl font-semibold mt-1">{title}</h2>}
</div>
{aside && <aside className="md:col-span-4">{aside}</aside>}
</header>
)}
<div>{children}</div>
</section>
);
}