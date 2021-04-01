import React, { useEffect, useState } from 'react';

export default function ActiveWord({
  text,
  breakPoint,
  setIsFail,
  isFail,
  wordsForGame,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const isDown = progress >= breakPoint;
    if (isDown) {
      setIsFail(true);
      setProgress(0);
    }
  }, [progress]);

  useEffect(() => {
    setProgress(0);
  }, [wordsForGame]);

  useEffect(() => {
    const inteval = setInterval(() => {
      setProgress((currentProgress) => currentProgress + 3);
    }, 50);
    return () => {
      clearInterval(inteval);
    };
  }, [isFail]);

  return (
    <div
      className="activeWord"
      style={{
        position: 'absolute',
        top: `${progress}px`,
      }}
    >
      {text}
    </div>
  );
}
