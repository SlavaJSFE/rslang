// import { Snackbar, Alert } from '@material-ui/core';
import { useCallback } from 'react';

export default function useMessage() {
  return useCallback((text) => {
    if (text) {
      alert(text)
      // return (
      //   <Snackbar open="true" autoHideDuration={6000}>
      //     <Alert severity="success">
      //       {text}
      //     </Alert>
      //   </Snackbar>
      // );
    }
  }, []);
}
