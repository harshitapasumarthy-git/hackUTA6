import React, { useState } from "react";
import MindMap from "./mindmap/MindMap";
import NodeOptionsModal from "./mindmap/NodeOptionalModal";

const MindMapStart = () => {
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

  const [mindMapData, setMindMapData] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);

  const handleTextChange = (e) => {
    setDocumentText(e.target.value);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedNode(null);
  };

  const generateMindMap = () => {
    try {
      const parsedData = JSON.parse(documentText);
      setMindMapData(parsedData);
    } catch (error) {
      alert("Invalid JSON format. Please correct the JSON and try again.");
      console.error(error);
    }
  };

  const handleNodeClick = (nodeData) => {
    alert(`Node clicked: ${nodeData.name}`);
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
      {mindMapData && (
        <>
          <MindMap data={mindMapData} onNodeClick={handleNodeClick} />
          <NodeOptionsModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            nodeName={selectedNode}
          />
        </>
      )}
    </div>
  );
};

export default MindMapStart;
