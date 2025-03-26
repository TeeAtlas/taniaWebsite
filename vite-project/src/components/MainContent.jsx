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
        <h3 className="mt-1">I'm a Web Developer (who nerds out on UI and Design)</h3>
        {showAbout && (
           <div className="mt-4 p-4 rounded-lg shadow-lg bg-gray-600 text-white">
            <h2 className="text-xl  mb-2 text-white">About Me</h2>
            <p>
              I was a bartender and a painter for around 20 years. In that time I learned a lot about people, animals, and art.
              COVID hit and like many of us, I had to pivot. Which is when I found Web Develoment and UI. I love it. It feels like a good fit for a creative mind link mine. It's endlessly changing, always interesting (sometimes frustating--coding amiright 🤪), but cool as all get out. 
            </p>
          </div>
        )}
      </>
    );
  }

          {/* <div className="absolute inset-0 bg-gradient-to-b from-orange-400/20 to-orange-500/40"></div>
        
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
        </div> */}