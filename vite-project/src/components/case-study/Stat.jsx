import React from "react";


export default function Stat({ value, label }) {
return (
<div className="rounded-2xl p-4 shadow-sm border">
<div className="text-2xl md:text-3xl font-bold">{value}</div>
<div className="text-sm opacity-70">{label}</div>
</div>
);
}