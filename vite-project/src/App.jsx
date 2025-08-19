import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent";
import Seabody from "./pages/Seabody/Seabody";
import Dishi from "./pages/Dishi/Dishi";
import Seedling from "./pages/Seedling/Seedling";
import Kindergalactic from "./pages/Kindergalactic/Kindergalactic";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/seabody" element={<Seabody />} />
        <Route path="/dishi" element={<Dishi />} />
        <Route path="/seedling" element={<Seedling />} />
        <Route path="/kindergalactic" element={<Kindergalactic />} />
      </Routes>
    </Router>
  );
}

export default App;
