import React from 'react';

import { Button } from '@material-ui/core';

export default function NextBtn({ turnNext, idx }) {
  return (
    <Button onClick={(e) => turnNext(e, idx + 1)} color="secondary">
      Далее
    </Button>
  );
}
