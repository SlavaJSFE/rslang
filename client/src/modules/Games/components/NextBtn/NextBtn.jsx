import React from 'react';

import { Button } from '@material-ui/core';

export default function NextBtn({ turnNext, id }) {
  return (
    <Button onClick={(e) => turnNext(e, id)} color="secondary">
      Далее
    </Button>
  );
}
