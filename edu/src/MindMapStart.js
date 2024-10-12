import React, { useState } from "react";

import MindMap from "./mindmap/MindMap";
import NodeOptionsModal from "./mindmap/NodeOptionalModal";
import { parseDocument } from "./mindmap/parser/parseDocument";
const MindMapStart = () => {
  const [documentText, setDocumentText] = useState(`
# Distributed Systems
## Consensus Algorithms
### Paxos
### Raft
## Replication
### State Machine Replication
### Primary-Backup
    `);
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
    const parsedData = parseDocument(documentText);
    setMindMapData(parsedData);
  };
  const handleNodeClick = (nodeData) => {
    alert(`Node clicked: ${nodeData.name}`);
  };

  return (
    <div>
      <h1>Mind Map Generator</h1>
      <textarea
        rows="10"
        cols="50"
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
