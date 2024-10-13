import { Box, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./App.css";
import Upload from "./Component/UploadComponent/Upload";

function Home() {
  let [currentIndex, setCurrentIndex] = useState(0);
  return (
    <Box
      sx={{
        backgroundColor: "#D2E0FB", // Background color of the Box // You can replace this with any color code
        padding: "20px",
        borderRadius: "8px", // Optional, for rounded corners
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3" // You can adjust the variant (h1, h2, h3, etc.) based on your design
        align="center" // Centers the text horizontally
        sx={{
          color: "#FD8B51", // Sets the text color (blue in this case)
          fontWeight: "bold", // Makes the text bold
          marginBottom: "200px",

          fontFamily: "'Roboto', sans-serif", // Custom font family (optional)
        }}
      >
        Memora
      </Typography>
      <Upload />
    </Box>
  );
}

export default Home;
