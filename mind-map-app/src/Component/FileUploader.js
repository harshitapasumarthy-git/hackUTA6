import React from "react";

const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // Generate a random delay between 3 to 5 seconds
      const delay = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000; // Random delay between 3000ms and 5000ms

      // Delay the onFileUpload call
      setTimeout(() => {
        onFileUpload(file.name); // Pass the file object to the parent component after delay
      }, delay);
    }
  };

  return (
    <div className="form-group">
      <input
        type="file"
        id="fileInput"
        className="form-control-file"
        accept=".txt,.doc,.docx,.pdf"
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the input
      />

      <button
        style={{
          padding: "5px 9px", // Smaller padding to reduce button size
          borderRadius: "10px", // Optional, adds a small rounded corner
          fontSize: "14px", // Smaller font size
          cursor: "pointer",
          backgroundColor: "#FD8B51",
        }}
      >
        <label htmlFor="fileInput">Choose File</label>
      </button>
    </div>
  );
};

export default FileUploader;
