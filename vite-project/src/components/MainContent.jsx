import React from "react";
import "../App.css"

export default function MainContent({ showAbout }) {
    return (
      <>
        <img
          src="../assets/sun.jpg"
          alt="Placeholder"
          className="rounded-lg shadow-lg mb-8"
        />
        <h1 className="text-4xl">Hello My Name is Tania</h1>
        <h3 className="mt-1">I'm a Web Developer</h3>
        {showAbout && (
           <div className="mt-4 p-4 rounded-lg shadow-lg bg-gray-800 text-white">
            <h2 className="text-2xl font-bold mb-2">About Me</h2>
            <p>
              This is where I tell you how cool I am.
              I was a bartender and an painter for around 20 years. I learned a lot about people during that time and a lot about animals.
              COVID hit and like many of us, I had to shift. Which is when I found UI and Web Development. I love it. It feels like a good for a creative mind link mine. It's endless changing, always interesting (sometimes frustating - coding amiright 🤪), but cool as hell. And I hope to keep making interesting stuff.
            </p>
          </div>
        )}
      </>
    );
  }
