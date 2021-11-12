import React from 'react';
import './scoreBoard.scss';

const ScoreBoard = ({ score, resetGame }) => {
  return (
    <div className='score-board'>
      <h2>Score: {score}</h2>
      <button className='score-reset' onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default ScoreBoard;
