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
          {
          questionText: 'What is the capital of Italy?',
          options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
          correctAnswer: 'Rome',
          },
          {
          questionText: 'What is the capital of Ghana?',
          options: ['Berlin', 'Paris', 'Accra', 'Rome'],
          correctAnswer: 'Accra',
          },
          {
          questionText: 'What is the capital of Spain?',
          options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
          correctAnswer: 'Madrid',
          },

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
