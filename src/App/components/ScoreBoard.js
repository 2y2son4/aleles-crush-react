import React from 'react';
import './scoreBoard.scss';
// import Timer from './Timer';

const ScoreBoard = ({ score, resetGame }) => {
  return (
    <div className='score-board'>
      <h2>Score: {score}</h2>
      {/* <Timer /> */}
      <button className='score-reset' onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default ScoreBoard;
