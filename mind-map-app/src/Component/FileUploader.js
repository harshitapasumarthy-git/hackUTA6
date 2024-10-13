import React from "react";

const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file.name); // Pass the file object to the parent component
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
