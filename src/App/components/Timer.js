import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import './timer.scss';

const timerProps = {
  isPlaying: true,
  size: 70,
  strokeWidth: 6,
};

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className='timer'>Too lale...</div>;
  }

  return (
    <div className='timer'>
      <div className='timer-value'>{remainingTime}</div>
    </div>
  );
};

function Timer() {
  return (
    <div className='timer-wrapper'>
      <CountdownCircleTimer
        {...timerProps}
        isPlaying
        duration={90}
        colors={[['#ff69b4', 0.33], ['#9c436f', 0.33], ['#461e32']]}
        onComplete={() => [true, 1000]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default Timer;
