import React from "react";
import "./App.css";
import MainContent from "./components/MainContent"
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <Header />
      <MainContent />
    </div>
  );

}

export default App;
