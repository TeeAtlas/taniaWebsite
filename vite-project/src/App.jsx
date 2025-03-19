import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <Header />
      <MainContent />
    </div>
  );

  function Header() {
    return (
      <div className="flex space-x-4 mb-4">
        <NavLink href="#about" text="About" />
        <NavLink href="#contact" text="Contact" />
      </div>
    );
  }

  function NavLink({ href, text }) {
    return <a href={href}>{text}</a>;
  }

  function MainContent() {
    return (
      <>
        <img
          src="../assets/sun.jpg"
          alt="Placeholder"
          className="rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-4xl">Hello My Name is Tania</h1>
      </>
    );
  }
}

export default App;
