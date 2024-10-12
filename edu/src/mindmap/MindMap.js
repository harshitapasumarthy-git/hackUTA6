import React from "react";
import Tree from "react-d3-tree";

const containerStyles = {
  width: "100%",
  height: "100vh",
};

const MindMap = ({ data, onNodeClick }) => {
  const renderCustomNode = ({ nodeDatum, toggleNode }) => (
    <g>
      <circle
        r={15}
        fill="#00aaff"
        onClick={(e) => {
          e.stopPropagation(); // Prevent event bubbling
          toggleNode();
        }}
      />
      <text
        fill="black"
        strokeWidth="1"
        x="20"
        dy=".35em"
        onClick={() => onNodeClick(nodeDatum)}
        style={{ cursor: "pointer" }}
      >
        {nodeDatum.name}
      </text>
    </g>
  );

  return (
    <div style={containerStyles}>
      <Tree
        data={data}
        orientation="vertical"
        renderCustomNodeElement={renderCustomNode}
        zoomable
        collapsible
        // Remove or comment out the initialDepth prop
        // initialDepth={1}
        nodeSize={{ x: 200, y: 200 }}
        separation={{ siblings: 1, nonSiblings: 2 }}
      />
    </div>
  );
};

export default MindMap;
