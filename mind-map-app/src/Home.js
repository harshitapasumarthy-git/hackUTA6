import React from "react";
import ButtonComponent from "../src/Component/Button"; // Import the component
import "./App.css";

function Home() {
  return (
    <div className="App">
      <h1>Welcome to the Mind Map Project</h1>
      <ButtonComponent /> {/* Render the button component here */}
    </div>
  );
}

export default Home;
