import React from "react";
import { useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const ButtonComponent = () => {
  const navigate = useNavigate();
  const handleClick = (buttonType) => {
    if (buttonType ==="Mindmap") {
      navigate("/MindMapStart");
    }
    if (buttonType ==="Flashcards"){
        navigate("/Flashcards")
    }
    if (buttonType ==="Quiz"){
        navigate("/Quiz")
    }
  };

  return (
    <div style={styles.container}>
    <ChakraProvider>
      <button style={styles.button} onClick={() => handleClick("Quiz")}>
        Quiz
      </button>
      </ChakraProvider>

      <button style={styles.button} onClick={() => handleClick("Flashcards")}>
        Flashcards
      </button>
      <button style={styles.button} onClick={() => handleClick("Mindmap")}>
        Mindmap
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
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
};

export default ButtonComponent;
