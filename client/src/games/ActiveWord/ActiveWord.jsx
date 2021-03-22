import React, { useEffect, useState, useRef } from 'react';

import { useTransition, animated } from 'react-spring';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Keyframes } from 'react-spring/renderprops-universal';

const useStyles = makeStyles({
  word: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    width: 100,
    margin: '0 auto',
    padding: '0 30px',
  },

});
export default function ActiveWord({ text, breakPoint }) {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  const btn = useRef();

  useEffect(() => {
    const word = btn ? btn.current.getBoundingClientRect().y : null;
    console.log(breakPoint, word);
    if (word <= breakPoint - 15 && breakPoint) {
      console.log(progress);
      setProgress(progress + 0.03);
    }
  }, [progress, btn, breakPoint]);

  return (
    <div
      className="activeWord"
      style={{
        position: 'absolute',
        top: `${progress}%`,
        // transform: `translateY(${progress}%)`,
      }}
      ref={btn}
    >
      {text}
    </div>
  );
}
