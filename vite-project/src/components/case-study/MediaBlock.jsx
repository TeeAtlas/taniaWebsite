import React from "react";

export default function MediaBlock({
  type = "image",
  src,
  alt = "",
  caption,
  className = "",
  mediaClass = "",
  captionClass = "",
}) {
  return (
    <figure className={className}>
      {type === "video" ? (
        <video src={src} className={mediaClass} controls playsInline />
      ) : (
        <img src={src} alt={alt} className={mediaClass} loading="lazy" />
      )}
      {caption && <figcaption className={captionClass}>{caption}</figcaption>}
    </figure>
  );
}
