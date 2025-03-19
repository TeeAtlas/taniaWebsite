// import { useState } from "react";
import "./App.css";

function App() {
  // const [email, setEmail] = useState("");
  // const [aiResponse, setAIResponce] = useState("");

  return (
    <div className="min-h-screen flex flex-col p-4">
      <div className="flex space-x-4 mb-4">
        <a href="#about">
          About
        </a>
        <a href="#contact">
          Contact
        </a>
        </div>
      <img
        src="../assets/sun.jpg"
        alt="Placeholder"
        className="rounded-lg shadow-lg mb-8"
      />
      <h1 className="text-4xl">
        Hello My Name is Tania
      </h1>

    </div>
  );
}

export default App;