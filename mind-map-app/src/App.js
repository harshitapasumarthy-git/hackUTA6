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
          minHeight: "100vh", // Full viewport height
          display: "flex", // Flexbox for centering content
          flexDirection: "column", // Stack content vertically
          justifyContent: "center", // Center alignment
          alignItems: "center", // Center alignment
          padding: "20px",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FlashCards" element={<FlashCards />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/MindMap" element={<MindMap />} />
        </Routes>

        {/* Add an image at the bottom */}
        <Box
          component="img"
          sx={{
            marginTop: "auto", // Push the image to the bottom
            width: "400px", // Set the image width
            height: "auto",
            marginBottom: "100px", // Maintain aspect ratio
          }}
          src="/SuccessKid.jpg" // Replace with the path to your image
          alt="Bottom image"
        />
      </Box>
    </Router>
  );
}

export default App;
