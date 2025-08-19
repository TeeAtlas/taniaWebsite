import React from "react";


export default function MediaBlock({ type = "image", src, alt = "", caption, className = "" }) {
return (
<figure className={`rounded-2xl overflow-hidden shadow-sm border ${className}`}>
{type === "video" ? (
<video src={src} className="w-full" controls playsInline />
) : (
<img src={src} alt={alt} className="w-full object-cover" loading="lazy" />
)}
{caption && <figcaption className="text-sm p-3 opacity-75">{caption}</figcaption>}
</figure>
);
}