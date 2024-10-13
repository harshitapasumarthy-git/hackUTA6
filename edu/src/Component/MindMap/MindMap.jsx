import React, { useState } from "react";
import { Graph } from "react-d3-graph";
import config from "./mindmap.config";  // Import the configuration

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

  const initialNodes = [
    { id: "Central Idea", color: "red", symbolType: "square" },
    { id: "Sub Idea 1", color: "lightblue" },
    { id: "Sub Idea 2", color: "lightgreen" },
    { id: "Sub Idea 3", color: "orange" },
  ];
  
  const initialLinks = [
    { source: "Central Idea", target: "Sub Idea 1" },
    { source: "Central Idea", target: "Sub Idea 2" },
    { source: "Central Idea", target: "Sub Idea 3" },
  ];
  
  const nodesWithCoordinates = generateCoordinates(initialNodes, centerX, centerY, radius);
  
  const graphData = {
    nodes: nodesWithCoordinates,
    links: initialLinks,
  };
  

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <div style={{ width: "80%", height: "80%", border: "2px solid black" }}> 
        <Graph
          id="mindmap"
          data={graphData}
          config={config}  // Use the imported config
        />
      </div>
    </div>
  );
};

export default MindMap;
