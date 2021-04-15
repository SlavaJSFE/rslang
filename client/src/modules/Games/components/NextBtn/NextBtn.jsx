import React from 'react';

import { Button } from '@material-ui/core';

export default function NextBtn({ handleClick, id, text }) {
  return (
    <Button
      onClick={(e) => handleClick(e, id)}
      variant="contained"
      color="secondary"
    >
      {text}
    </Button>
  );
}
