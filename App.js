import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of pakistan__________?",
      options: [
        { id: 0, text: "karachi", isCorrect: false },
        { id: 1, text: "Lahore", isCorrect: false },
        { id: 2, text: "Islamabad", isCorrect: true },
        { id: 3, text: "Pishawar", isCorrect: false },
      ],
    },
    {
      text: "The term ‘Computer’ is derived from__________?",
      options: [
        { id: 0, text: "Latin", isCorrect: true },
        { id: 1, text: "German", isCorrect: false },
        { id: 2, text: "French", isCorrect: false },
        { id: 3, text: "Arabic", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the Pakistan___________?",
      options: [
        { id: 0, text: "Arif Alvi", isCorrect: true },
        { id: 1, text: "Shehbaz Sharif", isCorrect: false },
        { id: 2, text: "Imran Khan", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "WWW stands for___________?",
      options: [
        { id: 0, text: "World Whole Web", isCorrect: false },
        { id: 1, text: "Wide World Web", isCorrect: false },
        { id: 2, text: "Web World Wide", isCorrect: false },
        { id: 3, text: "World Wide Web", isCorrect: true },
      ],
        }, 

         {      text: "What type of operating system MS-DOS is___________?",
      options: [
        { id: 0, text: "Graphical User Interface", isCorrect: false },
        { id: 1, text: "Command Line Interface", isCorrect: true },
        { id: 2, text: "Multitasking", isCorrect: false },
        { id: 3, text: "Menu Driven Interface", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">


      {/* Current Score  */}
      <h2>Score: {score}</h2>

      {/* Show results or show the question game  */}
      {showResults ? (
        /* Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Game...?</button>
        </div>
      ) : (
        /* Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2> Question: {currentQuestion + 1} out of {questions.length} </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;