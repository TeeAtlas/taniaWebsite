import React from "react";
import "./Seabody.css"; // or Seabody.module.css
import Navigation from "../../components/Navigation";

export default function Seabody() {
  return (
    <main className="seabody-page">
      <div className="nav-container">
        <Navigation />
      </div>

      <header className="seabody-header">
        <h1 className="seabody-title">Seabody</h1>
        <p className="seabody-subtitle">Clean, image-forward site for sustainable beauty.</p>
      </header>

      <section className="seabody-body">
        <img src="/assets/seabody-homepage.jpg" alt="Seabody homepage" className="seabody-image" />
        <div className="seabody-description">
          <p>
            Seabody being a legacy Wordpress build I was tasked with streamlining and redesigning site navigation and menus, cleaning up and consolidating the CSS files for more readable code.
            And SEO duties. Which included cleaning duplicate tags and debugging the analytics, creating custom JSX code to improve site performance and search visibility.
          </p>
        </div>
      </section>
    </main>
  );
}
