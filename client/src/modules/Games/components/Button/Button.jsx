import React from 'react';

import { Button } from '@material-ui/core';

export default function GameButton({ handleClick, text }) {
  return (
    <Button onClick={(e) => handleClick(e, text)}>
      {text}
    </Button>
  );
}
