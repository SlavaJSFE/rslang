import React, { useEffect, useState } from 'react';

import './timer.scss';

export default function Timer({ setStartTimer }) {
  const [time, setTime] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    if (time === 0) {
      setStartTimer(false);
    }
    return () => {
      clearInterval(timer);
    };
  });
  return <div className="timer">{time}</div>;
}
