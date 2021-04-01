import React from 'react';
import { Button } from '@material-ui/core';

function RestoreBtn({ onRestoreWord }) {
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        type="button"
        // onClick={onRestoreWord}
      >
        восстановить
      </Button>
    </div>
  );
}

export default RestoreBtn;
