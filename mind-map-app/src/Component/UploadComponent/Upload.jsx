import React, { useState } from "react";
import ButtonComponent from "../Button";

const Upload = ({callBack}) => {
  const [loading, setLoading] = useState(false);
    
  const handleProcessFile = async (file) => {
    setLoading(true);
    //alert("you got it")
  };

  return (
      <div className="container">
    
        <ButtonComponent onProcessFile={handleProcessFile} />
      </div>    
  );
}

export default Upload;