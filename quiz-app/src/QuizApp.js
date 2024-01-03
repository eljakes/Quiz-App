import './index.css';

import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Quiz from './Quiz';
import Result from './Result';

const QuizApp = () => {
  const [score, setScore] = useState(0);

  const handleScore = (newScore) => {
    setScore(newScore);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Quiz handleScore={handleScore} />
        </Route>
        <Route path="/result">
          <Result score={score} />
        </Route>
      </Switch>
    </Router>
  );
};

export default QuizApp;
