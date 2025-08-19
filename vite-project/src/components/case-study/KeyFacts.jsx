import React from "react";
import ToolIcon from "./ToolIcon";


export default function KeyFacts({ role, timeframe, team, tools = [] }) {
return (
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<div>
<div className="text-xs opacity-70">Role</div>
<div className="font-medium">{role}</div>
</div>
<div>
<div className="text-xs opacity-70">Timeframe</div>
<div className="font-medium">{timeframe}</div>
</div>
<div>
<div className="text-xs opacity-70">Team</div>
<div className="font-medium">{team}</div>
</div>
<div className="flex items-center gap-2 flex-wrap">
{tools.map((t) => (
<ToolIcon key={t} name={t} />
))}
</div>
</div>
);
}