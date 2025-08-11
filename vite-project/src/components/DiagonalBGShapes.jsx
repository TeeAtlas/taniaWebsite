// DiagonalBackgroundShapes.jsx
import React from "react";

export default function DiagonalBackgroundShapes({ variant = "color" }) {
  const s1 =
    variant === "bw" ? "bg-neutral-900" : "bg-[#fce4ec]";
  const s2 =
    variant === "bw" ? "bg-neutral-700" : "bg-[#ffe29a]";

  if (variant === "softTopDarkBottom") {
    // keep same polygon shapes, just swap in your grey + dark colors
    return (
      <>
        {/* top shape (soft grey) */}
        <div
          className={`fixed inset-0 -z-10 bg-[#252422]
            [clip-path:polygon(0_0,40%_0,100%_100%,0%_100%)]`}
        />
        {/* bottom shape (dark) */}
        <div
          className={`fixed inset-0 -z-20  bg-[#e9e9e9]
            [clip-path:polygon(40%_0,100%_0,100%_100%,0%_100%)]`}
        />
      </>
    );
  }

  // default behaviour
  return (
    <>
      <div
        className={`fixed inset-0 -z-10 ${s1}
          [clip-path:polygon(0_0,40%_0,100%_100%,0%_100%)]`}
      />
      <div
        className={`fixed inset-0 -z-20 ${s2}
          [clip-path:polygon(40%_0,100%_0,100%_100%,0%_100%)]`}
      />
    </>
  );
}
