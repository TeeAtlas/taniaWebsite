import React from "react";
import Header from "./Header"
import Navigation from "./Navigation";
import NavLink from "./NavLink";
import "../App.css";

export default function MainContent() {
  return (
    <>
      {/* header section */}
      <section
      >
        <div className="flex items-center mb-1">
          <h1 className="text-4xl font-bold">Hello, I'm Tania</h1>
          <div className="ml-auto">
            <Navigation />  
          </div>
        </div>
        <div>
          <p className="mb-8">I'm a Web Developer</p>
        </div>
      </section>
  

      {/* Hero Section */}
      <img
        src="/assets/sun.jpg" // Ensure the image is in the public/assets folder
        alt="Placeholder"
        className="h-100 rounded-lg shadow-lg object-cover mb-12"
      />

      <About />
      <Projects />
    </>
  );
}

function About() {
  return (
    <section id="about">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-12">
        I was a bartender and an artist for around 20 years. In that time, I
        learned a lot about people, animals, and art. COVID hit, and like many
        of us, I had to pivot. That’s when I found Web Development and UI. I
        love it. It feels like a good fit for a creative mind like mine. I love
        nothing more than to see a project take shape. Whether it's an app or a
        painting... I'm all in!
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      // className="mt-10 p-6 rounded-lg shadow-lg bg-gray-100 text-gray-800"
    >
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <p>
        Stay tuned for more updates as I continue to build and create exciting
        things.
      </p>
    </section>
  );
}

{
  /* <div className="absolute inset-0 bg-gradient-to-b from-orange-400/20 to-orange-500/40"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24">
          <div className="relative">
            <div className="absolute -top-24">
              <div className="h-48 w-48 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div> */
}
