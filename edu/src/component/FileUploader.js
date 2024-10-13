import React from 'react';

const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      alert("in handleFileChange")
      onFileUpload(file.name);  // Pass the file object to the parent component
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
        style={{ display: 'none' }}  // Hide the input
      />
      
      <button 
      >
      <label htmlFor="fileInput" className="custom-file-upload">
        Choose File
      </label>
      </button>
    </div>
  );
};

export default FileUploader;