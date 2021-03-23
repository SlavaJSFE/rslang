import React, { useEffect, useState, useRef } from 'react';

export default function ActiveWord({ text, breakPoint }) {
  const [progress, setProgress] = useState(0);
  const btn = useRef();

  useEffect(() => {
    const word = btn ? btn.current.getBoundingClientRect().y : null;

    if (word <= breakPoint - 15 && breakPoint) {
      setProgress(progress + 0.03);
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
