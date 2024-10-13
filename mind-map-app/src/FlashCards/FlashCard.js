import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import './FlashCard.css'; // For card flip CSS

const FlashCard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prevFlipped) => !prevFlipped);
  };

  const colors = ['#D2E0FB', '#FEF9D9', '#8EACCD', '#DEE5D4'];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      className={`flashcard ${flipped ? 'flipped' : ''}`}
      style={{ backgroundColor: getRandomColor() }}
    >
      {/* Front side of the card */}
      <div className="front">
        <h5 style={{ margin: 0 }}>{question}</h5>
        <IconButton onClick={handleFlip} style={{ marginTop: '20px' }}>
          < FlipCameraAndroidIcon/>
        </IconButton>
      </div>

      {/* Back side of the card (answer) */}
      <div className="back">
        <p style={{ fontSize: '18px', color: '#555' }}>{answer}</p>
        <IconButton onClick={handleFlip} style={{ marginTop: '20px' }}>
          <FlipCameraAndroidIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default FlashCard;
