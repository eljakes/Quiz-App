import React, { useState } from 'react';

import Question from './Question';

const Quiz = ({ handleScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      questionText: 'What is the capital of France?',
      options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
      correctAnswer: 'Paris',
    },
    // Add more questions as needed
  ];

  const handleNextQuestion = (selectedAnswer) => {
    setAnswers([...answers, selectedAnswer]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const calculateScore = () => {
    const correctAnswers = questions.filter(
      (question, index) => question.correctAnswer === answers[index]
    );
    handleScore(correctAnswers.length);
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          onNextQuestion={handleNextQuestion}
        />
      ) : (
        <button onClick={calculateScore}>Finish</button>
      )}
    </div>
  );
};

export default Quiz;
