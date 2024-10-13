import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";

import FlashCards from "./FlashCards/FlashCards";
import Quiz from "./Quiz/Quiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FlashCards" element={<FlashCards />} />
        <Route path="/Quiz" element={<Quiz/>}/>
      </Routes>
    </Router>
  );
}

export default App;
