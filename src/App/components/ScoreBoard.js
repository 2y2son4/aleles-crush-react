import React from 'react';
import './scoreBoard.scss';

const ScoreBoard = ({ score }) => {
  return (
    <div className='score-board'>
      <h2 className='score-title'>Puntuación: {score}</h2>
    </div>
  );
};

export default ScoreBoard;
