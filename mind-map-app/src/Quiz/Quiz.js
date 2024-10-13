import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Quiz.css";

const defaultQuizData = [
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
    options: [
      "Charles Dickens",
      "Mark Twain",
      "William Shakespeare",
      "J.K. Rowling",
    ],
    answer: "William Shakespeare",
  },
];

const DS1 = [
  {
    question: "What is a distributed system?",
    options: [
      "A collection of autonomous computing elements that appears as a single coherent system",
      "A single computer system with multiple cores",
      "A centralized system where all data is stored in one place",
      "A system only for storing data across different locations",
    ],
    answer:
      "A collection of autonomous computing elements that appears as a single coherent system",
  },
  {
    question:
      "Who defined a distributed system as 'one in which the failure of a computer you didn't even know existed can render your own computer unusable'?",
    options: ["Leslie Lamport", "Alan Turing", "Linus Torvalds", "Vint Cerf"],
    answer: "Leslie Lamport",
  },
  {
    question:
      "Which of the following is NOT a reason to use distributed systems?",
    options: [
      "To tolerate faults via replication",
      "To increase capacity via parallelism",
      "To store all data in one central location",
      "To place computing physically close to external entities",
    ],
    answer: "To store all data in one central location",
  },
  {
    question: "What is one of the challenges of distributed systems?",
    options: [
      "Coordination and synchronization of many concurrent operations",
      "Lack of autonomy between system components",
      "Data can only be stored in one physical location",
      "Communication failures are impossible",
    ],
    answer: "Coordination and synchronization of many concurrent operations",
  },
  {
    question: "Which of the following is a key goal of distributed systems?",
    options: [
      "Distribution transparency",
      "Centralized computing",
      "Manual resource allocation",
      "Single-point failure management",
    ],
    answer: "Distribution transparency",
  },
  {
    question:
      "What is a key challenge of geographical scalability in distributed systems?",
    options: [
      "Network latency in WAN",
      "Decreased system performance in LAN",
      "Difficulties with local communication",
      "Reliability in synchronous operations",
    ],
    answer: "Network latency in WAN",
  },
  {
    question: "What does replication in a distributed system help with?",
    options: [
      "Increasing availability and balancing load",
      "Reducing performance",
      "Minimizing hardware requirements",
      "Making centralized servers more reliable",
    ],
    answer: "Increasing availability and balancing load",
  },
];

const DS2 = [
  {
    question:
      "Which of the following is an example of high-performance distributed computing?",
    options: [
      "Parallel computing systems",
      "Transaction processing systems",
      "Mobile computing systems",
      "Sensor networks",
    ],
    answer: "Parallel computing systems",
  },
  {
    question:
      "What is the main characteristic of a distributed shared memory system?",
    options: [
      "Allows a processor to address memory at another computer as if it were local",
      "Uses only local memory for computations",
      "Relies on message passing for communication",
      "Requires large amounts of physical memory",
    ],
    answer:
      "Allows a processor to address memory at another computer as if it were local",
  },
  {
    question:
      "Which of the following describes a key feature of grid computing?",
    options: [
      "High degree of heterogeneity and geographical dispersion",
      "Simple and homogeneous computing environment",
      "Localized and centralized control of resources",
      "No need for a virtual organization",
    ],
    answer: "High degree of heterogeneity and geographical dispersion",
  },
  {
    question:
      "Which service model allows users to deploy and run arbitrary software on the cloud?",
    options: [
      "Software as a Service (SaaS)",
      "Platform as a Service (PaaS)",
      "Infrastructure as a Service (IaaS)",
      "Database as a Service (DBaaS)",
    ],
    answer: "Infrastructure as a Service (IaaS)",
  },
  {
    question: "Which of the following is a challenge for pervasive systems?",
    options: [
      "Static resource allocation",
      "Handling contextual changes in the environment",
      "Centralized processing",
      "Using wired communication",
    ],
    answer: "Handling contextual changes in the environment",
  },
  {
    question:
      "What is one of the main challenges of unstructured peer-to-peer architectures?",
    options: [
      "Efficiently locating needed data items",
      "Managing server-client interactions",
      "Maintaining synchronous communication",
      "Scaling to a large number of nodes",
    ],
    answer: "Efficiently locating needed data items",
  },
  {
    question: "Which of the following describes edge computing?",
    options: [
      "Servers are placed at the boundary of enterprise networks and the internet",
      "All content is served from centralized data centers",
      "Data is processed exclusively in the cloud",
      "Relies on low-power, battery-operated devices",
    ],
    answer:
      "Servers are placed at the boundary of enterprise networks and the internet",
  },
];
const DS = [
  {
    question: "What is a primitive data structure?",
    options: [
      "A structure with elements that involve other subparts",
      "A built-in data type in programming languages",
      "A data structure created at runtime",
      "A type of non-linear data structure",
    ],
    answer: "A built-in data type in programming languages",
  },
  {
    question:
      "Which of the following is an example of a non-linear data structure?",
    options: ["Array", "Stack", "Queue", "Tree"],
    answer: "Tree",
  },
  {
    question: "What is the key characteristic of a linear data structure?",
    options: [
      "It stores elements in a hierarchical order",
      "Each element has a unique successor and predecessor",
      "It uses a dynamic memory allocation",
      "Elements are stored in key-value pairs",
    ],
    answer: "Each element has a unique successor and predecessor",
  },
  {
    question:
      "Which of the following operations can be performed on a data structure?",
    options: ["Traversal", "Replication", "Sorting", "Merge"],
    answer: "Traversal",
  },
  {
    question: "What is the time complexity of a push operation in a stack?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    answer: "O(1)",
  },
  {
    question:
      "Which of the following is NOT an asymptotic notation used to analyze algorithms?",
    options: ["Big O", "Big Omega", "Big Theta", "Big Sigma"],
    answer: "Big Sigma",
  },
  {
    question: "What does Big Oh (O) notation represent?",
    options: [
      "Upper bound of an algorithm's complexity",
      "Lower bound of an algorithm's complexity",
      "Exact bound of an algorithm's complexity",
      "Average case complexity of an algorithm",
    ],
    answer: "Upper bound of an algorithm's complexity",
  },
  {
    question: "Which data structure uses Last In First Out (LIFO) order?",
    options: ["Queue", "Stack", "Array", "Tree"],
    answer: "Stack",
  },
  {
    question: "In a queue, where is insertion performed?",
    options: ["At the front", "At the rear", "At both ends", "In the middle"],
    answer: "At the rear",
  },
  {
    question: "What is the key advantage of using dynamic memory allocation?",
    options: [
      "It allows for fixed memory allocation",
      "It allows memory to be allocated at runtime",
      "It improves algorithm efficiency",
      "It prevents memory fragmentation",
    ],
    answer: "It allows memory to be allocated at runtime",
  },
  {
    question: "What is a binary search tree (BST)?",
    options: [
      "A tree where each node has exactly two children",
      "A tree where the left subtree contains nodes with smaller values than the parent",
      "A tree where nodes are arranged in decreasing order",
      "A tree where all leaf nodes are at the same level",
    ],
    answer:
      "A tree where the left subtree contains nodes with smaller values than the parent",
  },
  {
    question:
      "Which sorting algorithm has a worst-case time complexity of O(n^2)?",
    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
    answer: "Bubble Sort",
  },
  {
    question:
      "Which tree traversal method visits the left child, root, and right child in sequence?",
    options: ["Pre-order", "Post-order", "In-order", "Level-order"],
    answer: "In-order",
  },
  {
    question: "In a graph, what is a path?",
    options: [
      "A sequence of edges between two vertices",
      "A single vertex in a graph",
      "A method to traverse nodes",
      "A set of disconnected nodes",
    ],
    answer: "A sequence of edges between two vertices",
  },
  {
    question: "What is the purpose of a priority queue?",
    options: [
      "To store elements in order of insertion",
      "To process the highest priority element first",
      "To perform deletion and insertion at both ends",
      "To reverse the order of elements",
    ],
    answer: "To process the highest priority element first",
  },
];

const lung_cancer = [
  {
    question:
      "Which study first implicated the use of tobacco as a major risk factor for lung cancer?",
    options: [
      "Framingham Study",
      "Doll and Hill Study",
      "Wynder and Graham Study",
      "The Ten-City Survey",
    ],
    answer: "Doll and Hill Study",
  },
  {
    question:
      "In what year did the National Cancer Institute get founded in the United States?",
    options: ["1935", "1937", "1942", "1950"],
    answer: "1937",
  },
  {
    question:
      "What type of cancer did early 20th-century pathologists describe as one of the rarest forms of disease?",
    options: ["Lung cancer", "Colon cancer", "Breast cancer", "Skin cancer"],
    answer: "Lung cancer",
  },
  {
    question:
      "Which decade marked the rise of large epidemiological studies linking smoking to lung cancer?",
    options: ["1920s", "1930s", "1940s", "1950s"],
    answer: "1950s",
  },
  {
    question:
      "What type of study design was used by Doll and Hill in their groundbreaking lung cancer research?",
    options: [
      "Case-control study",
      "Cohort study",
      "Randomized control trial",
      "Cross-sectional study",
    ],
    answer: "Case-control study",
  },
  {
    question:
      "Who was the first professor of epidemiology in the United States?",
    options: [
      "Wade Hampton Frost",
      "Richard Doll",
      "Hammond Horn",
      "Colin White",
    ],
    answer: "Wade Hampton Frost",
  },
  {
    question:
      "What was one of the primary criticisms of early studies linking smoking to lung cancer?",
    options: [
      "No carcinogen had been identified in tobacco smoke",
      "Smoking was not popular enough to cause widespread cancer",
      "Lung cancer cases were decreasing, not increasing",
      "There was insufficient funding for cancer research",
    ],
    answer: "No carcinogen had been identified in tobacco smoke",
  },
];

function Quiz() {
  const location = useLocation();
  const { fileName } = location.state || {};
  const [currentQuizData, setCurrentQuizData] = useState(defaultQuizData); // State to hold the current quiz data
  const [userAnswers, setUserAnswers] = useState(
    Array(defaultQuizData.length).fill(null)
  ); // Track user's answers
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (fileName === "DS1.pdf") {
      setCurrentQuizData(DS1);
      setUserAnswers(Array(DS1.length).fill(null)); // Reset user answers when the quiz changes
    } else if (fileName === "DS2.pdf") {
      setCurrentQuizData(DS2);
      setUserAnswers(Array(DS2.length).fill(null));
    } else if (fileName === "lung_cancer.pdf") {
      setCurrentQuizData(lung_cancer);
      setUserAnswers(Array(lung_cancer.length).fill(null));
    } else if (fileName === "Data_structures.pdf") {
      setCurrentQuizData(DS);
      setUserAnswers(Array(DS.length).fill(null));
    } else {
      setCurrentQuizData(defaultQuizData);
      setUserAnswers(Array(defaultQuizData.length).fill(null)); // Reset user answers
    }
  }, [fileName]);

  const handleOptionChange = (index, option) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = option;
    setUserAnswers(newAnswers);
  };

  const handleSubmitQuiz = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    let newScore = 0;
    currentQuizData.forEach((q, index) => {
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
        backgroundColor: "#CFE8F6",
      }}
    >
      {showScore ? (
        <div className="result-section">
          <h4 style={{ textAlign: "center" }}>
            You scored {score} out of {currentQuizData.length}
          </h4>

          <h5 style={{ textAlign: "center" }}>Review your answers:</h5>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {currentQuizData.map((q, index) => (
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
        <form onSubmit={handleSubmitQuiz}>
          {currentQuizData.map((q, index) => (
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
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
                      backgroundColor:
                        userAnswers[index] === option ? "#1976d2" : "white",
                      color: userAnswers[index] === option ? "white" : "black",
                      margin: "5px 0",
                      transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        userAnswers[index] === option ? "#1565c0" : "#f5f5f5")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        userAnswers[index] === option ? "#1976d2" : "white")
                    }
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
              type="submit"
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
