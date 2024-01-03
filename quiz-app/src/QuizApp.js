import './index.css';

import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Update the import statement

import Quiz from './Quiz';
import Result from './Result';

const QuizApp = () => {
  const [score, setScore] = useState(0);

  const handleScore = (newScore) => {
    setScore(newScore);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz handleScore={handleScore} />} />
        <Route path="/result" element={<Result score={score} />} />
      </Routes>
    </Router>
  );
};

export default QuizApp;
