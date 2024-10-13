import React, { useState } from 'react';
import MindMap from './MindMap/MindMap';

const ButtonComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (buttonType) => {
    if (buttonType === "Mindmap") {
      setCurrentIndex((_) => 2);
    }
    alert(`You clicked on ${buttonType}`);
  };

  return (
    <>
      <div style={styles.container}>
        <button style={styles.button} onClick={() => handleClick("Quiz")}>
          Quiz
        </button>
        <button style={styles.button} onClick={() => handleClick("Flashcards")}>
          Flashcards
        </button>
        <button style={styles.button} onClick={() => handleClick("Mindmap")}>
          Mindmap
        </button>
      </div>
      <div style={styles.mindmapContainer}>
        {currentIndex === 2 ? <MindMap /> : <></>}
      </div>
    </>
  );
};

const styles = {
  container: {
    // display: "flex",
    justifyContent: "center",
    gap: "10px",
    margin: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
  },
  mindmapContainer: {    
    // display: "flex",
    justifyContent: "center", // Centering the graph horizontally
    alignItems: "center", // Centering the graph vertically
    height: "100vh", // Takes the full height of the viewport
  },
};

export default ButtonComponent;
