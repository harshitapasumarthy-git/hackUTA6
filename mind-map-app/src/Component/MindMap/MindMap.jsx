import React, { useState } from "react";
import { Graph } from "react-d3-graph";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronRight } from "@material-ui/icons"; // Import Material UI Icon
import { IconButton } from "@material-ui/core"; // Import Material UI IconButton
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

const calculateNodeWeightsAndColors = (nodes, links) => {
  const nodeWeights = {};
  
  nodes.forEach((node) => {
    nodeWeights[node.id] = 0;
  });

  links.forEach((link) => {
    if (nodeWeights[link.source] !== undefined) {
      nodeWeights[link.source] += 1;
    }
    if (nodeWeights[link.target] !== undefined) {
      nodeWeights[link.target] += 1;
    }
  });

  // Add the weight to each node and assign a color based on the weight
  return nodes.map((node) => {
    const weight = nodeWeights[node.id];
    return {
      ...node,
      weight, // Add the calculated weight to each node
      color: getColorByWeight(weight), // Assign a color based on the weight
    };
  });
};

// Function to get a color based on the weight of the node
const getColorByWeight = (weight) => {
  // Example color ranges based on node weight
  if (weight >= 7) return "red";
  if (weight >= 6) return "blue";
  if (weight >= 5) return "purple";
  if (weight >= 4) return "lightgreen";
  if (weight >= 3) return "orange";
  return "gray"; // Default color for nodes with no links
};

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
  const navigate = useNavigate();
  const { fileName } = location.state || {};

  const [selectedNode, setSelectedNode] = useState();
  const [selectedDescription, setSelectedDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);  

  let nodeData = initialDSNodes;
  let linkData = initialDSLinks;

  if (fileName !== null) {
    if ("lung_cancer.pdf" === fileName) {
      nodeData = initialLungNodes;
      linkData = initialLungLinks;
    } else if ("DS1.pdf" === fileName) {
      nodeData = initialDSNodes;
      linkData = initialDSLinks;
    } else if ("DS2.pdf" === fileName) {
      nodeData = initialDSNodes;
      linkData = initialDSLinks;
    } else if ("Data_structures.pdf" === fileName) {
      nodeData = initialDataSNodes;
      linkData = initialDataSLinks;
    }
  }

  const nodesWithCoordinates = generateCoordinates(
    nodeData,
    centerX,
    centerY,
    radius
  );

  const graphData = {
    nodes: nodesWithCoordinates,
    links: linkData,
  };

  const handleOnClick = (nodeId) => {
    const node = nodeData.find((n) => n.id === nodeId);
    if (node) {
      setSelectedNode((prev) => nodeId);
      setSelectedDescription((_) => node.description);
      setIsModalOpen((_) => true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToNextPage = () => {    
    navigate("/Flashcards", {
      state: { fileName: fileName },
    });
  };

  return (
    <div style={{ display: "flex", height: "100vh", position: "relative" }}>
      <div style={{ width: "100%", height: "100%" }}>
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
              <button onClick={closeModal} style={modalStyles.closeButton}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
      <IconButton
        onClick={goToNextPage}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          width: "35px",          
          backgroundColor: "#FD8B51",          
          padding: "5px", 
        }}
      >
        <ChevronRight style={{ color: "white", fontSize: "20px" }} />         
      </IconButton>            
      </div>
      
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    width: "300px",
    textAlign: "center",
  },
  closeButton: {
    marginTop: "10px",
    padding: "10px",
    cursor: "pointer",
  },
};

export default MindMap;
