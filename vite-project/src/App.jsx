import React, { useState }from "react";
import "./App.css";
import MainContent from "./components/MainContent"
import Header from "./components/Header";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  function handleAboutClick(e) {
    e.preventDefault();
    setShowAbout((currShowAbout) => !currShowAbout)
  }

  return (
      
    <div className="min-h-screen flex flex-col p-4">
      <Header onAboutClick={handleAboutClick}/>
      <MainContent showAbout={showAbout} />
    </div>
  );

}

export default App;
