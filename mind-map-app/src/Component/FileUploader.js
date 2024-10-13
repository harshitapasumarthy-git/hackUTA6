import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";  // Material-UI's CircularProgress
import CloudUploadIcon from "@material-ui/icons/CloudUpload";  // Example of a custom icon for the button

const FileUploader = ({ onFileUpload }) => {
  const [isLoading, setIsLoading] = useState(false);  // Loading state

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsLoading(true);  // Set loading to true when the process starts

      // Generate a random delay between 3 to 5 seconds
      const delay = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;

      // Delay the onFileUpload call
      setTimeout(() => {
        onFileUpload(file.name);  // Pass the file object to the parent component after delay
        setIsLoading(false);  // Set loading to false after the timeout ends
      }, delay);
    }
  };

  return (
    <div className="form-group" style={{justifyItems: 'center'}}>
      <input
        type="file"
        id="fileInput"
        className="form-control-file"
        accept=".txt,.doc,.docx,.pdf"
        onChange={handleFileChange}
        style={{ display: "none" }}  // Hide the input
      />

      {/* Button for choosing a file */}
      <button
        style={{
          padding: "5px 9px",
          borderRadius: "10px",
          fontSize: "14px",
          cursor: "pointer",
          backgroundColor: "#FD8B51",
          color: "white",          
          alignItems: "center",
          justifyContent: "center"
        }}
        disabled={isLoading}  // Disable the button while loading
      >
        <label htmlFor="fileInput" style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
          <CloudUploadIcon style={{ marginRight: "8px" }} />  {/* Material-UI Upload Icon */}
          {isLoading ? "Uploading..." : "Choose File"}
        </label>
      </button>

      {/* Show the spinner when the file is being processed */}
      {isLoading && (
        <div style={{ marginTop: "10px" }}>
          <CircularProgress color="secondary" />  {/* Material-UI CircularProgress component */}
        </div>
      )}
    </div>
  );
};

export default FileUploader;