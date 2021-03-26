import React, { useEffect, useState, useRef } from 'react';

export default function ActiveWord({
  text, breakPoint, setIsFail, isClicked,
}) {
  const [progress, setProgress] = useState(0);
  const btn = useRef();

  useEffect(() => {
    const word = btn ? btn.current.getBoundingClientRect().y : null;
    const shouldFall = word <= breakPoint - 15 && breakPoint && !isClicked;
    const isDown = word >= breakPoint - 15 && breakPoint;

    if (shouldFall) {
      setProgress(progress + 0.03);
    }

    if (isDown) {
      setIsFail(true);
    }
  }, [progress, btn, breakPoint]);

  return (
    <div
      className="activeWord"
      style={{
        position: 'absolute',
        top: `${progress}%`,
      }}
      ref={btn}
    >
      {text}
    </div>
  );
}
