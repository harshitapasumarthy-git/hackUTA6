import React, { useState } from 'react';
import FlashCard from './FlashCard';

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
  const [currentIndex, setCurrentIndex] = useState(0); // State for single card navigation
  const [pageIndex, setPageIndex] = useState(0); // State for pagination when viewing all
  const pageSize = 6; // Number of flashcards per page
  const totalPages = Math.ceil(flashcardData.length / pageSize);

  // Handle view mode change
  const handleViewModeChange = (newViewMode) => {
    setViewMode(newViewMode);
    setPageIndex(0); // Reset to the first page when changing view mode
    setCurrentIndex(0); // Reset to the first card when changing view mode
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
    <div style={{ textAlign: 'center', padding: '20px', minHeight: '100vh' }}>
      <h1>Flash Cards</h1>

      {/* View Mode Selector */}
      <div style={{ marginBottom: '50px' }}>
        <button onClick={() => handleViewModeChange('one')} style={{ marginRight: '10px', padding: '10px' }}>
          One by One
        </button>
        <button onClick={() => handleViewModeChange('all')} style={{ padding: '10px' }}>
          View All
        </button>
      </div>

      {viewMode === 'one' ? (
        // Single card view
        <div style={{ marginBottom: '50px' }}>
          <FlashCard
            question={flashcardData[currentIndex].question}
            answer={flashcardData[currentIndex].answer}
          />
          <div>
            <button onClick={goToPrevCard} disabled={currentIndex === 0} style={{ marginRight: '10px' }}>
              &#8592; Previous
            </button>
            <button onClick={goToNextCard} disabled={currentIndex === flashcardData.length - 1}>
              Next &#8594;
            </button>
          </div>
          <p>Card {currentIndex + 1} of {flashcardData.length}</p>
        </div>
      ) : (
        // View all cards with pagination
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {currentFlashcards.map((flashcard, index) => (
              <div key={startIndex + index} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
                <FlashCard question={flashcard.question} answer={flashcard.answer} />
              </div>
            ))}
          </div>
          <div style={{ marginTop: '50px' }}>
            <button onClick={goToPrevPage} disabled={pageIndex === 0} style={{ marginRight: '10px' }}>
              &#8592; Previous Page
            </button>
            <button onClick={goToNextPage} disabled={pageIndex === totalPages - 1}>
              Next Page &#8594;
            </button>
          </div>
          <p>Page {pageIndex + 1} of {totalPages}</p>
        </div>
      )}
    </div>
  );
};

export default FlashCards;
