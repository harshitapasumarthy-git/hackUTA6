import React, { useState } from 'react';
import './FlashCard.css';

const FlashCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  const colors = ['#D2E0FB', '#FEF9D9', '#8EACCD', '#DEE5D4'];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      style={{
        minWidth: '275px',
        textAlign: 'center',
        margin: '20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: getRandomColor(),
        borderRadius: '20px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          padding: '16px',
        }}
      >
        <h5 style={{ margin: 0 }}>{question}</h5>

        {showAnswer && (
          <p style={{ fontSize: '18px', marginTop: '20px', color: '#555' }}>
            {answer}
          </p>
        )}

        <div
          onClick={handleToggleAnswer}
          style={{
            marginTop: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >          
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
