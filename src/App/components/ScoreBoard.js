import React from 'react';

const ScoreBoard = ({ score }) => {
  return (
    <div className='score-board'>
      <h2>Puntuación: {score}</h2>
    </div>
  );
};

export default ScoreBoard;
