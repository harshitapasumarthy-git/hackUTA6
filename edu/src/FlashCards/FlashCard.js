import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty'; // Import ThreeSixty icon
import './FlashCard.css';

const FlashCard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => {
    setShowAnswer((prev) => !prev);
  };

  const colors = ['#D2E0FB', '#FEF9D9', '#8EACCD', '#DEE5D4'];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <Card
      sx={{
        minWidth: 275,
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
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        }}
      >
        <Typography variant="h5" component="div">
          {question}
        </Typography>

        {showAnswer && (
          <Typography sx={{ fontSize: 18, marginTop: '20px' }} color="text.secondary">
            {answer}
          </Typography>
        )}

        <div
          onClick={handleToggleAnswer}
          style={{
            marginTop: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'right',
            justifyContent: 'right',
          }}
        >
          {showAnswer ? (
            <ThreeSixtyIcon sx={{ fontSize: '40px' }} />
          ) : (
            <ThreeSixtyIcon sx={{ fontSize: '40px' }} />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FlashCard;
