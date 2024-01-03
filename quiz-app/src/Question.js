import React, { useState } from 'react';

const Question = ({ question, onNextQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    onNextQuestion(selectedAnswer);
    setSelectedAnswer('');
  };

  return (
    <div>
      <h3>{question.questionText}</h3>
      <ul>
        {question.options.map((option) => (
          <li key={option} onClick={() => handleOptionSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleNext} disabled={!selectedAnswer}>
        Next
      </button>
    </div>
  );
};

export default Question;
