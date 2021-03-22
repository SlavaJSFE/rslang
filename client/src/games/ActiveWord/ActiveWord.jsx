import React, { useState } from 'react';

import { useTransition, animated } from 'react-spring';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

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
export default function ActiveWord({ text }) {
  const classes = useStyles();

  return (
    <div className="activeWord">
      {text}
    </div>
  );
}
