const config = {
    nodeHighlightBehavior: true,
    automaticRearrangeAfterDropNode: true,
    width: window.innerWidth * 0.8,   // Dynamically adjust the graph size
    height: window.innerHeight * 0.8, // Dynamically adjust the graph size
    d3: {
      gravity: -200,  // Adjust gravity for node spacing
    },
  };
  
  
  export default config;
  