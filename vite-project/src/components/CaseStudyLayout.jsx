import React from "react";
import BackButton from "./BackButton";
import DiagonalBackgroundShapes from "./DiagonalBGShapes";

export default function CaseStudyLayout({
  title = "Case Study",
  subtitle = "",
  backButtonClass = "text-[#E3D5CA]",
  bgClass = "bg-[#252422]",   // default background
  textClass = "text-[#E3D5CA]", // default text color
  children
}) {
  return (
    <main className="relative">
      <DiagonalBackgroundShapes variant="bw" />

      <div className="w-full flex justify-center px-4">
        <section
          className={`
            rounded-xl p-8 relative z-10 w-full max-w-[1200px]
            min-h-[clamp(400px,60vh,900px)]
            flex flex-col justify-start
            ${bgClass}
          `}
        >
          <header className="mb-8 flex flex-col items-center text-center gap-2">
            <div className="w-full flex justify-between items-baseline relative mb-[-1rem]">
              <BackButton className={backButtonClass} />
              <h1
                className={`
                  text-[2.5rem] m-0 text-center absolute left-1/2 -translate-x-1/2
                  ${textClass}
                `}
              >
                {title}
              </h1>
            </div>
            {subtitle && (
              <p className={`text-[1.25rem] mt-2 ${textClass}`}>{subtitle}</p>
            )}
          </header>

          <section
            className={`
              flex flex-col gap-6
              ${textClass}
              [&_img]:rounded-lg [&_img]:w-3/4 [&_img]:mx-auto
            `}
          >
            {children}
          </section>
        </section>
      </div>
    </main>
  );
}
