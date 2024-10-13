import React, { useState } from "react";
import './Quiz.css';

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "J.K. Rowling"],
    answer: "William Shakespeare",
  },
];

function Quiz() {
  const [userAnswers, setUserAnswers] = useState(
    Array(quizData.length).fill(null)
  ); // Track user's answers
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (index, option) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = option;
    setUserAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    let newScore = 0;
    quizData.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setShowScore(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Full viewport height to center vertically
        gap: "20px", // Spacing between the elements
        padding: "20px",
        backgroundColor: '#CFE8F6',
      }}
    >
      {showScore ? (
        <div className="result-section">
          <h4 style={{ textAlign: "center" }}>
            You scored {score} out of {quizData.length}
          </h4>

          <h5 style={{ textAlign: "center" }}>
            Review your answers:
          </h5>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {quizData.map((q, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <strong>Question {index + 1}:</strong> {q.question}
                <div>
                  <strong>Your answer:</strong> {userAnswers[index]}{" "}
                  {userAnswers[index] === q.answer ? "✅" : "❌"}
                </div>
                {userAnswers[index] !== q.answer && (
                  <div>
                    <strong>Correct answer:</strong> {q.answer}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <form>
          {quizData.map((q, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                width: "100%",
                maxWidth: "600px",
                padding: "20px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #ccc",
                borderRadius: "10px",
              }}
            >
              <h6 style={{ textAlign: "center" }}>{q.question}</h6>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {q.options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleOptionChange(index, option)}
                    style={{
                      padding: "10px",
                      border: "1px solid",
                      borderRadius: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                      width: "100%",
                      backgroundColor: userAnswers[index] === option ? "#1976d2" : "white",
                      color: userAnswers[index] === option ? "white" : "black",
                      margin: "5px 0",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = userAnswers[index] === option ? "#1565c0" : "#f5f5f5"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = userAnswers[index] === option ? "#1976d2" : "white"}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "#1976d2",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
              onClick={handleSubmitQuiz}
              disabled={userAnswers.includes(null)}
            >
              Submit Quiz
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Quiz;
