import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({
  title,
  description,
  tag,
  className = "",
  to,
  imageSrc, // optional: /assets/preview-*.jpg
  imageAlt = "",
  aspectRatio = "4 / 3", // keep consistent site-wide (e.g., "4 / 3" or "16 / 9")
}) {
  const CardInner = (
    <div
      className={`${className} flex h-full flex-col items-start justify-start overflow-hidden`}
    >
      {/* Image (optional) */}
      {imageSrc && (
        <div
          className="relative w-full overflow-hidden rounded-md mb-2"
          style={{ aspectRatio }}
        >
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      )}

      {/* Text sits directly under image */}
      <div className="w-full">
        {tag && (
          <span className="uppercase text-xs font-medium tracking-wide text-gray-500 mb-2 block">
            {tag}
          </span>
        )}
        <h3 className="text-2xl md:text-5xl font-bold mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-sm leading-relaxed opacity-90 tracking-normal">
          {description}
        </p>
      </div>
    </div>
  );

  return to ? (
    <Link to={to} className="block">
      {CardInner}
    </Link>
  ) : (
    CardInner
  );
}
