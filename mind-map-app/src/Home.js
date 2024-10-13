import React, { useState } from "react";
import ButtonComponent from "../src/Component/Button"; // Import the component
import "./App.css";
import Upload from "./Component/UploadComponent/Upload";
import MindMap from "./Component/MindMap/MindMap";
import FlashCards from "./FlashCards/FlashCards";

function Home() {
  
  let [currentIndex, setCurrentIndex] = useState(0);      
  return (
    <div className="App">
      <h1>Welcome to the Mind Map Project</h1>
      <Upload/>
    </div>
  );
}

export default Home;
