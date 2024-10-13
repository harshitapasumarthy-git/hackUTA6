import React, { useState } from 'react';
import FlashCard from './FlashCard';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const flashcardData = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is 2 + 2?', answer: '4' },
  { question: 'What is the largest planet in our solar system?', answer: 'Jupiter' },
  { question: 'What is the capital of Spain?', answer: 'Madrid' },
  { question: 'What is 5 * 6?', answer: '30' },
  { question: 'What is the smallest country in the world?', answer: 'Vatican City' },
  { question: 'What is the capital of Italy?', answer: 'Rome' },
  { question: 'What is 10 / 2?', answer: '5' },
  { question: 'What planet is known as the Red Planet?', answer: 'Mars' },
];

const FlashCards = () => {
  const [viewMode, setViewMode] = useState('one'); // 'one' or 'all'

  // State for single card navigation
  const [currentIndex, setCurrentIndex] = useState(0);

  // State for pagination when viewing all
  const [pageIndex, setPageIndex] = useState(0);
  const pageSize = 6; // Number of flashcards per page
  const totalPages = Math.ceil(flashcardData.length / pageSize);

  // Handle view mode change
  const handleViewModeChange = (event, newViewMode) => {
    if (newViewMode !== null) {
      setViewMode(newViewMode);
    }
  };

  // Handlers for single card navigation
  const goToNextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < flashcardData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const goToPrevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  // Handlers for pagination when viewing all
  const goToNextPage = () => {
    setPageIndex((prevPageIndex) =>
      prevPageIndex < totalPages - 1 ? prevPageIndex + 1 : prevPageIndex
    );
  };

  const goToPrevPage = () => {
    setPageIndex((prevPageIndex) =>
      prevPageIndex > 0 ? prevPageIndex - 1 : prevPageIndex
    );
  };

  const startIndex = pageIndex * pageSize;
  const currentFlashcards = flashcardData.slice(startIndex, startIndex + pageSize);

  return (
    <Box sx={{ textAlign: 'center', padding: '20px',
     minHeight: '100vh' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Flash Cards
      </Typography>

      {/* View Mode Selector */}
      <ToggleButtonGroup
        value={viewMode}
        exclusive
        onChange={handleViewModeChange}
        sx={{ marginBottom: '50px' }}

      >
        <ToggleButton value="one">One by One</ToggleButton>
        <ToggleButton value="all">View All</ToggleButton>
      </ToggleButtonGroup>

      {viewMode === 'one' ? (
        // Single card view with consistent size
        <>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <FlashCard
                question={flashcardData[currentIndex].question}
                answer={flashcardData[currentIndex].answer}
              />
            </Grid>
          </Grid>
          <Box sx={{ marginTop: '50px' }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={goToPrevCard}
              sx={{ marginRight: '10px' }}
              disabled={currentIndex === 0}
            >
              &#8592; Previous
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={goToNextCard}
              disabled={currentIndex === flashcardData.length - 1}
            >
              Next &#8594;
            </Button>
          </Box>
          <Typography variant="caption" display="block" gutterBottom>
            Card {currentIndex + 1} of {flashcardData.length}
          </Typography>
        </>
      ) : (
        // View all cards with pagination
        <>
          <Grid container spacing={2} justifyContent="center">
            {currentFlashcards.map((flashcard, index) => (
              <Grid item xs={12} sm={6} md={4} key={startIndex + index}>
                <FlashCard question={flashcard.question} answer={flashcard.answer} />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ marginTop: '50px' }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={goToPrevPage}
              sx={{ marginRight: '10px' }}
              disabled={pageIndex === 0}
            >
              &#8592; Previous Page
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={goToNextPage}
              disabled={pageIndex === totalPages - 1}
            >
              Next Page &#8594;
            </Button>
          </Box>
          <Typography variant="caption" display="block" gutterBottom>
            Page {pageIndex + 1} of {totalPages}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default FlashCards;
