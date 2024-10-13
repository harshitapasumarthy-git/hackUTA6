import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MindMapContext } from "./mindmap/MindMapContext";

const InputScreen = () => {
  const { setMindMapData } = useContext(MindMapContext);
  const [documentText, setDocumentText] = useState(`{
    "name": "Distributed Systems",
    "children": [
      {
        "name": "Consensus Algorithms",
        "children": [
          { "name": "Paxos" },
          { "name": "Raft" }
        ]
      },
      {
        "name": "Replication",
        "children": [
          { "name": "State Machine Replication" },
          { "name": "Primary-Backup" }
        ]
      }
    ]
  }`);

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setDocumentText(e.target.value);
  };

  const generateMindMap = () => {
    try {
      const parsedData = JSON.parse(documentText);
      setMindMapData(parsedData);
      navigate("/mindmap");
    } catch (error) {
      alert("Invalid JSON format. Please correct the JSON and try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Mind Map Generator</h1>
      <textarea
        rows="20"
        cols="80"
        value={documentText}
        onChange={handleTextChange}
      ></textarea>
      <br />
      <button onClick={generateMindMap}>Generate Mind Map</button>
    </div>
  );
};

export default InputScreen;
