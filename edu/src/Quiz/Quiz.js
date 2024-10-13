import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

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
  const colors = ['#D2E0FB', '#FEF9D9', '#8EACCD', '#DEE5D4'];

  const getCardBackgroundColor = (index) => {
    return userAnswers[index] !== null ? "#D2E0FB" : "#FFFFFF"; // Change background if answered
  };

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Full viewport height to center vertically
        gap: 3, // Spacing between the elements
        padding: 3,
        backgroundColor:'#CFE8F6'

    
    
      }}
    >
      {/* <Paper sx={{ p: 3, width: "100%", maxWidth: 600 }} elevation={3}> */}
        {showScore ? (
          <div className="result-section">
            <Typography variant="h4" gutterBottom textAlign="center">
              You scored {score} out of {quizData.length}
            </Typography>

            <Typography variant="h5" gutterBottom textAlign="center">
              Review your answers:
            </Typography>
            <ul>
              {quizData.map((q, index) => (
                <li key={index}>
                  <Typography variant="body1">
                    <strong>Question {index + 1}:</strong> {q.question}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Your answer:</strong> {userAnswers[index]}{" "}
                    {userAnswers[index] === q.answer ? "✅" : "❌"}
                  </Typography>
                  {userAnswers[index] !== q.answer && (
                    <Typography variant="body2">
                      <strong>Correct answer:</strong> {q.answer}
                    </Typography>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <form>
            {quizData.map((q, index) => (
              <Card
                key={index}
                sx={{
                  mb: 6,
                  width: "100%",
                  maxWidth: 1500,
                  backgroundColor: getCardBackgroundColor(index), // Apply background color
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom textAlign="center">
                    {q.question}
                  </Typography>
                  <FormControl component="fieldset" fullWidth>
                    <Grid
                      container
                      direction="column"
                      spacing={2}
                      justifyContent="center"
                      alignItems="center"
                    >
                      {q.options.map((option) => (
                        <Grid item xs={12} key={option} sx={{ width: "100%" }}>
                          <Box
                            onClick={() => handleOptionChange(index, option)}
                            sx={{
                              p: 2,
                              border: "1px solid",
                              borderRadius: "10px",
                              textAlign: "center",
                              cursor: "pointer",
                
                              backgroundColor:
                                userAnswers[index] === option
                                  ? "#1976d2"
                                  : "white",
                              color:
                                userAnswers[index] === option
                                  ? "white"
                                  : "black",
                              "&:hover": {
                                backgroundColor:
                                  userAnswers[index] === option
                                    ? "#1565c0"
                                    : "#f5f5f5",
                              },
                            }}
                          >
                            {option}
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </FormControl>
                </CardContent>
              </Card>
            ))}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                color ="primary"
                onClick={handleSubmitQuiz}
                disabled={userAnswers.includes(null)}
              >
                Submit Quiz
              </Button>
            </Box>
          </form>
        )}
      {/* </Paper> */}
    </Box>
  );
}

export default Quiz;
