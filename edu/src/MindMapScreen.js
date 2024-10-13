import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MindMap from "./mindmap/MindMap";
import { MindMapContext } from "./mindmap/MindMapContext";

const MindMapScreen = () => {
  const { mindMapData } = useContext(MindMapContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!mindMapData) {
      // Redirect to input screen if no mind map data is available
      navigate("/");
    }
  }, [mindMapData, navigate]);

  const handleNodeClick = (nodeData) => {
    alert(`Node clicked: ${nodeData.name}`);
  };

  if (!mindMapData) {
    return null; // Prevent rendering if no data
  }

  return (
    <div>
      <button onClick={() => navigate("/")}>Back</button>
      <MindMap data={mindMapData} onNodeClick={handleNodeClick} />
    </div>
  );
};

export default MindMapScreen;
