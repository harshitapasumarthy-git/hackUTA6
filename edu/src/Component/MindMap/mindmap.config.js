const config = {
    nodeHighlightBehavior: true,
    automaticRearrangeAfterDropNode: true,
    node: {
      size: 700
    },
    width: window.innerWidth * 1.0,   
    height: window.innerHeight * 1.0, 
    link: {
      highlightColor: "red"
    },
    color: (link, selectedNode) => {
     
      if (link.source === selectedNode || link.target === selectedNode) {
        return "green"; // Highlight color for links connected to the selected node
      }
      return "black"; // Default color
    },
    d3: {
      gravity: -500,  
    },
  };
  
  
  export default config;
  