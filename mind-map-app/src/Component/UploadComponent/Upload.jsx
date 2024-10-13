import React, { useState } from "react";
import ButtonComponent from "../Button";

const Upload = ({callBack}) => {
  const [loading, setLoading] = useState(false);
    
  const handleProcessFile = async (file) => {
    setLoading(true);
    const formData = new FormData();
    const prompt = `
    I am uploading a file containing some text. Please read the content of the file and generate a JSON structure that can be used to create a mind map in React.js.

    The JSON should have the following format:

    - Each node should have an \`id\`, a \`label\`, and a \`description\`.
    - The nodes should be structured hierarchically. Parent nodes should connect to their children using a \`parent\` key.
    - The \`description\` field should contain a brief explanation of the content of each node.

    Please ensure that the hierarchy of the mind map is reflected in the structure and that each node contains a meaningful \`description\` based on the file's content.

    Output the generated JSON structure.
  `;
    formData.append('file', file); 
    formData.append('prompt', prompt); 
    alert('File upload successful:', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('File upload failed');
      }
  
      const data = await response.json();
      console.log('File upload successful:', data);
      alert('File upload successful:', data);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="container">
    
        <ButtonComponent onProcessFile={handleProcessFile} />
      </div>    
  );
}

export default Upload;