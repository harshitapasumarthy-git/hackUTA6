import React, { useState } from 'react';
import './App.css';
import ButtonComponent from './component/ButtonComponent';

function App() {
  const [loading, setLoading] = useState(false);

  const handleProcessFile = async (file) => {
    setLoading(true);
    alert('request will be sent here');
    setLoading(false);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mt-5">Welcome to the Mind Map Project</h1>
        <ButtonComponent onProcessFile={handleProcessFile} />
        {loading && (
          <p className="text-center text-info mt-3">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;