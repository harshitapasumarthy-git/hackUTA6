import React from "react";
import Tree from "react-d3-tree";

const containerStyles = {
  width: "100%",
  height: "100vh",
};
const MindMap = ({ data, onNodeClick }) => {
  const renderCustomNode = ({ nodeDatum, toggleNode }) => (
    <g>
      <circle r={15} fill="#00aaff" onClick={() => onNodeClick(nodeDatum)} />
      <text fill="black" strokeWidth="1" x="20">
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
        initialDepth={1}
        nodeSize={{ x: 200, y: 200 }}
        separation={{ siblings: 1, nonSiblings: 2 }}
      />
    </div>
  );
};
export default MindMap;
