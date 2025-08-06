import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import Seabody from "./pages/Seabody/Seabody";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/seabody" element={<Seabody />} />
      </Routes>
    </Router>
  );
}

export default App;