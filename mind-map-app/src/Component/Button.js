import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUploader from "./FileUploader";

const ButtonComponent = ({ onProcessFile }) => {

  const [showFileUploader, setShowFileUploader] = useState(false);
  const [fileName, setFileName] = useState(null);

  // Handle the button click to toggle fileName uploader
  const handleButtonClick = () => {
    if (!showFileUploader) {
      setShowFileUploader(true);  // Show fileName uploader on first click
    } 
  };

  // Handle fileName upload and save the fileName content
  const handleFileNameUpload = (fileName) => {
    setFileName(fileName); 
    if (fileName) {
      onProcessFile(fileName);  // Process the fileName content on second click
    } // Save fileName name
  };

  const navigate = useNavigate();
  const handleClick = (buttonType) => {
    if (buttonType === "Mindmap") {
      navigate(`/MindMap/${fileName}`);
    }
    if (buttonType === "Flashcards") {
      navigate("/Flashcards");
    }
    if (buttonType === "Quiz") {
      navigate("/Quiz");
    }
  };

  return (
    <React.Fragment>
      {(fileName !== null) && <div style={styles.container}>
        <button style={styles.button} onClick={() => handleClick("Quiz")}>
          Quiz
        </button>
        <button style={styles.button} onClick={() => handleClick("Flashcards")}>
          Flashcards
        </button>
        <button style={styles.button} onClick={() => handleClick("Mindmap")}>
          Mindmap
        </button>
      </div>}
      
      <div className="container mt-5 text-center">
      {(fileName === null) &&  <button 
        className="btn btn-primary mb-3"
        id="uploadbutton"
        onClick={handleButtonClick}
      >
        {showFileUploader && fileName ? 'Process Mind Map' : 'Upload Mind Map FileName'}
      </button>}

      {(fileName === null) && showFileUploader && (
        <React.Fragment>
          <div className="my-3">
            <FileUploader onFileUpload={handleFileNameUpload} />
          </div>
          {fileName && (
            <React.Fragment>
              <p className="font-weight-bold">Uploaded FileName</p>
              <div 
                className="border rounded p-3"
                style={{ whiteSpace: 'pre-wrap', textAlign: 'left', marginTop: '20px', alignContent: 'center' }}
              >
                <strong>{fileName}</strong>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </div>
    </React.Fragment>
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
