import React from "react";


const Btn = ({ href, children }) => (
<a
href={href}
className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 shadow-sm hover:shadow-md transition"
target="_blank" rel="noreferrer noopener"
>
{children}
</a>
);


export default function LinkButtons({ live, github, figma }) {
return (
<div className="flex flex-wrap gap-2">
{live && <Btn href={live}>Live</Btn>}
{github && <Btn href={github}>GitHub</Btn>}
{figma && <Btn href={figma}>Figma</Btn>}
</div>
);
}