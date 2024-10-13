import { Box } from "@material-ui/core";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MindMap from "./Component/MindMap/MindMap";
import FlashCards from "./FlashCards/FlashCards";
import Home from "./Home";
import Quiz from "./Quiz/Quiz";

function App() {
  return (
    <Router>
      <Box
        sx={{
          backgroundColor: "#D2E0FB", // Background color of the Box
          // Full viewport height
          display: "flex", // Flexbox for centering
          justifyContent: "center", // Horizontal center alignment
          alignItems: "center", // Vertical center alignment
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FlashCards" element={<FlashCards />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/MindMap" element={<MindMap />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
