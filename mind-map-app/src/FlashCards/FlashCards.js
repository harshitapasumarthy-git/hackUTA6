import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FlashCard from "./FlashCard";

const flashcardData = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is 2 + 2?", answer: "4" },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  { question: "What is the capital of Spain?", answer: "Madrid" },
  { question: "What is 5 * 6?", answer: "30" },
  {
    question: "What is the smallest country in the world?",
    answer: "Vatican City",
  },
  { question: "What is the capital of Italy?", answer: "Rome" },
  { question: "What is 10 / 2?", answer: "5" },
  { question: "What planet is known as the Red Planet?", answer: "Mars" },
];

const DS1Flashcards = [
  {
    question: "Distributed System",
    answer: "Independent computers appearing as one system.",
  },
  {
    question: "Leslie Lamport",
    answer: "Defined distributed system with a computer crash analogy.",
  },
  { question: "Challenges", answer: "Synchronization of operations." },
  {
    question: "Linear vs Non-linear",
    answer: "Linear: Sequence, Non-linear: Hierarchy.",
  },
  {
    question: "Replication",
    answer: "Increases availability and balances load.",
  },
  { question: "Transparency", answer: "Hides the distribution of resources." },
  {
    question: "Geographical Scalability",
    answer: "Challenges due to network latency.",
  },
  {
    question: "Middleware",
    answer: "Uniform programming model for communication.",
  },
  {
    question: "CAP Theorem",
    answer: "Consistency, Availability, Partition Tolerance (pick 2).",
  },
  {
    question: "High-Performance Computing",
    answer: "Parallel computing systems.",
  },
];
const DS2Flashcards = [
  {
    question: "Grid Computing",
    answer: "Geographical dispersion, heterogeneity.",
  },
  {
    question: "Distributed Shared Memory",
    answer: "Access remote memory as local.",
  },
  {
    question: "IaaS",
    answer: "Run arbitrary software on virtual infrastructure.",
  },
  { question: "Unstructured P2P", answer: "Locating data efficiently." },
  {
    question: "Edge Computing",
    answer: "Processing near the source (devices).",
  },
  {
    question: "Pervasive Systems",
    answer: "Handle dynamic environmental changes.",
  },
  { question: "Replication", answer: "Fault tolerance, availability." },
  {
    question: "Hierarchical vs Relational",
    answer: "Tree vs Table structures.",
  },
  { question: "Cloud Layers", answer: "IaaS, PaaS, SaaS." },
  { question: "Scalability", answer: "Handle growth by adding resources." },
];
const lungCancerFlashcards = [
  { question: "Tobacco Study", answer: "Doll and Hill." },
  { question: "NCI Founded", answer: "1937." },
  { question: "Lung Cancer", answer: "Rare in early 20th century." },
  {
    question: "1950s Research",
    answer: "Large studies linking smoking to cancer.",
  },
  { question: "Study Design", answer: "Case-control." },
  { question: "Wade Hampton Frost", answer: "First epidemiology professor." },
  { question: "Early Criticism", answer: "No identified carcinogen." },
  { question: "UK Regulations", answer: "First to regulate tobacco ads." },
  { question: "Pioneering Study", answer: "Doll and Hill, 1950." },
  { question: "Cancer and Smoking", answer: "Established link in 1950s." },
];
const dataStructuresFlashcards = [
  {
    question: "Primitive Data Structure",
    answer: "Built-in types like int, char.",
  },
  { question: "Linear Data Structure", answer: "Sequential (array, stack)." },
  { question: "Array Insertion", answer: "O(n) time." },
  { question: "Stack Push", answer: "Add element to top (LIFO)." },
  { question: "BST", answer: "Left < Parent < Right." },
  {
    question: "Doubly Linked List",
    answer: "Pointers to next and previous nodes.",
  },
  { question: "Circular Queue", answer: "Connect last position to first." },
  {
    question: "Tree Traversal",
    answer: "Visit all nodes (in-order, pre-order).",
  },
  {
    question: "BFS vs DFS",
    answer: "BFS: Level by level, DFS: Deep as possible.",
  },
  { question: "Binary Search", answer: "O(log n) complexity." },
  { question: "Dynamic Memory", answer: "Allocate memory at runtime." },
];

const FlashCards = () => {
  const location = useLocation();
  const [currentQuizData, setCurrentQuizData] = useState(DS1Flashcards);
  const { fileName } = location.state || {}; // Get file name from location state
  const [viewMode, setViewMode] = useState("one"); // 'one' or 'all'
  const [currentIndex, setCurrentIndex] = useState(0); // State for single card navigation
  const [pageIndex, setPageIndex] = useState(0); // State for pagination when viewing all
  const [currentFlashcardsData, setCurrentFlashcardsData] =
    useState(flashcardData); // State for the current flashcard data

  const pageSize = 6; // Number of flashcards per page
  const totalPages = Math.ceil(currentFlashcardsData.length / pageSize);

  // Update flashcards based on the fileName
  useEffect(() => {
    if (fileName === "DS1.pdf") {
      setCurrentFlashcardsData(DS1Flashcards);
    } else if (fileName === "DS2.pdf") {
      setCurrentFlashcardsData(DS2Flashcards);
    } else if (fileName === "lung_cancer.pdf") {
      setCurrentFlashcardsData(lungCancerFlashcards);
    } else if (fileName === "Data_structures.pdf") {
      setCurrentFlashcardsData(dataStructuresFlashcards);
    } else {
      setCurrentFlashcardsData(DS1Flashcards);
    }
  }, [fileName]);

  // Handle view mode change
  const handleViewModeChange = (newViewMode) => {
    setViewMode(newViewMode);
    setPageIndex(0); // Reset to the first page when changing view mode
    setCurrentIndex(0); // Reset to the first card when changing view mode
  };

  // Handlers for single card navigation
  const goToNextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < currentFlashcardsData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const goToPrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
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
  const currentFlashcards = currentFlashcardsData.slice(
    startIndex,
    startIndex + pageSize
  );


    return (
      <div className="flashcards-container">
        <h1>Flash Cards</h1>
  
        {/* View Mode Selector */}
        <div className="view-mode-buttons">
          <button
            onClick={() => handleViewModeChange("one")}
            className={`view-button ${viewMode === "one" ? "active" : ""}`}
          >
            One by One
          </button>
          <button
            onClick={() => handleViewModeChange("all")}
            className={`view-button ${viewMode === "all" ? "active" : ""}`}
          >
            View All
          </button>
        </div>
  
        {viewMode === "one" ? (
          <div className="flashcard-navigation">
            <FlashCard
              question={currentFlashcardsData[currentIndex].question}
              answer={currentFlashcardsData[currentIndex].answer}
            />
            <div className="nav-buttons">
              <button
                onClick={goToPrevCard}
                disabled={currentIndex === 0}
                className="nav-button"
              >
                &#8592; Previous
              </button>
              <button
                onClick={goToNextCard}
                disabled={currentIndex === currentFlashcardsData.length - 1}
                className="nav-button"
              >
                Next &#8594;
              </button>
            </div>
            <p>
              Card {currentIndex + 1} of {currentFlashcardsData.length}
            </p>
          </div>
        ) : (
          <div className="all-flashcards">
            <div className="flashcards-list">
              {currentFlashcards.map((flashcard, index) => (
                <div key={startIndex + index} className="flashcard-item">
                  <FlashCard
                    question={flashcard.question}
                    answer={flashcard.answer}
                  />
                </div>
              ))}
            </div>
            <div className="pagination-buttons">
              <button
                onClick={goToPrevPage}
                disabled={pageIndex === 0}
                className="pagination-button"
              >
                &#8592; Previous Page
              </button>
              <button
                onClick={goToNextPage}
                disabled={pageIndex === totalPages - 1}
                className="pagination-button"
              >
                Next Page &#8594;
              </button>
            </div>
            <p>
              Page {pageIndex + 1} of {totalPages}
            </p>
          </div>
        )}
      </div>
    );
  };
  

export default FlashCards;
