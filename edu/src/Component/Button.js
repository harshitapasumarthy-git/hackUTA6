import React from 'react';

const ButtonComponent = () => {
  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={() => handleClick('Quiz')}>Quiz</button>
      <button style={styles.button} onClick={() => handleClick('Flashcards')}>Flashcards</button>
      <button style={styles.button} onClick={() => handleClick('Mindmap')}>Mindmap</button>
    </div>
  );
};

const handleClick = (buttonType) => {
  alert(`You clicked on ${buttonType}`);
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    margin: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#f0f0f0',
  },
};

export default ButtonComponent;
