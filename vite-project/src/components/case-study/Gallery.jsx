import React from "react";
import MediaBlock from "./MediaBlock";


export default function Gallery({ items = [], className = "" }) {
return (
<div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}>
{items.map((m, i) => (
<MediaBlock key={i} {...m} />
))}
</div>
);
}