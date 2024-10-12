import React from 'react';
import './App.css';
import ButtonComponent from '../src/Component/Button'; // Import the component

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Mind Map Project</h1>
      <ButtonComponent />  {/* Render the button component here */}
    </div>
  );
}

export default App;
