import React, { useState } from 'react';
import FileUploader from './FileUploader';

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

  return (
    <div className="container mt-5 text-center">
      <button 
        className="btn btn-primary mb-3"
        id="uploadbutton"
        onClick={handleButtonClick}
      >
        {showFileUploader && fileName ? 'Process Mind Map' : 'Upload Mind Map FileName'}
      </button>

      {showFileUploader && (
        <>
          <div className="my-3">
            <FileUploader onFileUpload={handleFileNameUpload} />
          </div>
          {fileName && (
            <>
              <p className="font-weight-bold">Uploaded FileName</p>
              <div 
                className="border rounded p-3"
                style={{ whiteSpace: 'pre-wrap', textAlign: 'left', marginTop: '20px', alignContent: 'center' }}
              >
                <strong>{fileName}</strong>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ButtonComponent;