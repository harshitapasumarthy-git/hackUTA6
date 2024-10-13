import React, { useState } from "react";
import ButtonComponent from "../Button";

const Upload = ({callBack}) => {
  const [loading, setLoading] = useState(false);
    
  const handleProcessFile = async (file) => {
    setLoading(true);
    alert('request will be sent here');
    setLoading(false);
  };

  return (
      <div className="container">
    
        <ButtonComponent onProcessFile={handleProcessFile} />
        {loading && (
          <p className="text-center text-info mt-3">Loading...</p>
        )}
      </div>    
  );
}

export default Upload;