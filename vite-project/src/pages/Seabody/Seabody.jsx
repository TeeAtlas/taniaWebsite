import React from "react";
import "./Seabody.css"; // or Seabody.module.css
import Navigation from "../../components/Navigation";
import BackButton from "../../components/BackButton";
import DiagonalBackgroundShapes from "../../components/DiagonalBGShapes";

export default function Seabody() {
  return (
<main className="seabody-page">

  <DiagonalBackgroundShapes variant="bw" />

  <section className="seabody-card">

    <header className="seabody-header">
  <div className="seabody-header-row">
    <BackButton />
    <h1 className="seabody-title">Seabody</h1>
  </div>
  <p className="seabody-subtitle">
    Clean, image-forward site for sustainable beauty.
  </p>
</header>

    <section className="seabody-body">
      <img
        src="/assets/seabodyWeb2.jpg"
        alt="Seabody homepage"
        className="seabody-image"
      />
      <div className="seabody-description">
        <p>  Seabody being a legacy Wordpress build I was tasked with
            streamlining and re-designing site navigation, routing,
            repsonisveness and menus. Cleaning up and consolidating the CSS
            files for more readable code. As well as SEO duties, which included
            cleaning duplicate tags and debugging analytics, creating custom
            JavaScript code to improve site performance and search visibility.</p>
      </div>
    </section>
  </section>
</main>
  );
}