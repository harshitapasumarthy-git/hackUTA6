import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import MindMapStart from "./MindMapStart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MindMapStart" element={<MindMapStart />} />
      </Routes>
    </Router>
  );
}

export default App;
