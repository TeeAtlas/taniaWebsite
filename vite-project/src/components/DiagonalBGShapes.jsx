// DiagonalBackgroundShapes.jsx
import React from "react";

export default function DiagonalBackgroundShapes({ variant = "color" }) {
  const s1 =
    variant === "bw" ? "bg-neutral-200" : "bg-[#fce4ec]";
  const s2 =
    variant === "bw" ? "bg-neutral-100" : "bg-[#ffe29a]";

  return (
    <>
      <div
        className={`fixed inset-0 -z-10 ${s1} [clip-path:polygon(0_0,40%_0,100%_100%,0%_100%)]`}
      />
      <div
        className={`fixed inset-0 -z-20 ${s2} [clip-path:polygon(40%_0,100%_0,100%_100%,0%_100%)]`}
      />
    </>
  );
}
