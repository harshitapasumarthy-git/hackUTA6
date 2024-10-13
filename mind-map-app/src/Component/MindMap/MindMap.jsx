import React, { useState } from "react";
import { Graph } from "react-d3-graph";
import { useLocation } from "react-router-dom";
import { initialDataSLinks, initialDataSNodes } from "./data_structures";
import { initialDSLinks, initialDSNodes } from "./distributed_systems";
import { initialLungLinks, initialLungNodes } from "./lung";
import config from "./mindmap.config";

const containerWidth = 1300; 
const containerHeight = 700;
const centerX = containerWidth / 2;
const centerY = containerHeight / 2;

const distance = 150;
const radius = 50;

const generateCoordinates = (nodes, centerX, centerY, radius) => {
  const angleIncrement = (2 * Math.PI) / nodes.length; // Divide circle into equal angles
  return nodes.map((node, index) => {
    const angle = index * angleIncrement; // Calculate angle for the current node
    const x = centerX + radius * Math.cos(angle); // Calculate x based on angle
    const y = centerY + radius * Math.sin(angle); // Calculate y based on angle
    return { ...node, x, y }; // Return updated node with coordinates
  });
};


const MindMap = () => {  
  
  const location = useLocation();
  const { fileName } = location.state || {};

  const [selectedNode, setSelectedNode] = useState();
  const [selectedDescription, setSelectedDescription] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);  
  console.log("Filename: "+fileName)

  let nodeData = initialDSNodes;
  let linkData = initialDSLinks;

  if (fileName !== null) {
    if("lung_cancer.pdf" === fileName) {
        nodeData = initialLungNodes;
        linkData = initialLungLinks;
    } 
   else if("DS1.pdf" === fileName) {
      nodeData = initialDSNodes;
      linkData = initialDSLinks;
  } 
  else if("DS2.pdf" === fileName) {
    nodeData = initialDSNodes;
    linkData = initialDSLinks;
}  else if("Data_structures.pdf" === fileName) {
  nodeData = initialDataSNodes;
  linkData = initialDataSLinks;
} 
  }
  
  const nodesWithCoordinates = generateCoordinates(nodeData, centerX, centerY, radius);
  
  const graphData = {
    nodes: nodesWithCoordinates,
    links: linkData,
  };
  
  const handleOnClick = (nodeId) => {
    const node = nodeData.find(n => n.id === nodeId);
    if (node) {
      setSelectedNode((prev) => nodeId)
      setSelectedDescription((_) => node.description); 
      setIsModalOpen((_) => true);
    }
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "100%", height: "100%"}}> 
        <Graph
          id="mindmap"
          data={graphData}
          config={config}
          onClickNode={handleOnClick}  
        />        
        {isModalOpen && (
          <div style={modalStyles.overlay}>
            <div style={modalStyles.modal}>
              <h3>Description:</h3>
              <p>{selectedDescription}</p>
              <button onClick={closeModal} style={modalStyles.closeButton}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    width: '300px',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: '10px',
    padding: '10px',
    cursor: 'pointer',
  },
};


export default MindMap;