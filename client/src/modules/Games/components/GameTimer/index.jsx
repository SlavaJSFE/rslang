import React, { useState, useEffect } from 'react';

import { addZero } from '../../utils';

const GameTimer = ({ setTiming }) => {
  const [count, setCount] = useState(60);
  useEffect(() => {
    let timer;

    if (count > 0) {
      timer = setInterval(() => {
        setCount(count - 1);
      }, 1000);
    }

    if (!count) setTiming(false);

    return function () {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div className="display">
      {addZero(count)}
    </div>
  );
};

export default GameTimer;
