import React from "react";
import "./Dishi.css";
import BackButton from "../../components/BackButton";
import DiagonalBackgroundShapes from "../../components/DiagonalBGShapes";

export default function Dishi() {
  return (
    <main className="dishi-page">
      <DiagonalBackgroundShapes variant="bw" />

      <div className="dishi-wrapper">
        <section className="dishi-card">
          <header className="dishi-header">
            <div className="dishi-header-row">
              <BackButton />
              <h1 className="dishi-title">DiSHi</h1>
            </div>
            <p className="dishi-subtitle">
              Mobile-first MVP UI for a digital food-sharing network.
            </p>
          </header>

          <section className="dishi-body">
            <img
              src="/assets/dishiLandingPage.jpg"
              alt="Dishi homepage"
              className="dishi-image"
            />
            <div className="dishi-description">
              <p>
                <strong className="font-bold">My Role:</strong> As part of a
                school project, I designed and built DiSHi as a responsive,
                mobile-first React MVP. I focused on structured layouts,
                pagination, CRUD operations, UI state management, and
                accessibility. The project also emphasized usability and solving
                a specific user problem: connecting people to share surplus food
                within local communities.
              </p>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
