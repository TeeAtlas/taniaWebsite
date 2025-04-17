import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full top-0 left-0 z-50 bg-white transition-all duration-300 ${
        isSticky ? "fixed shadow-md py-2" : "relative py-4"
      }`}
    >
      <div className="container mx-auto flex items-center">
        <h1 className="text-4xl font-bold">Hello, I'm Tania</h1>
        <div className="ml-auto">
          <Navigation />
        </div>
      </div>
      <p className="text-gray-700">I'm a Web Developer</p>
    </header>
  );
}
