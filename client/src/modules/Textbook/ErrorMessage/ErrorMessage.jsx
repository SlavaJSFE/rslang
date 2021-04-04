import React from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';

import { setIsAuthError } from '../../../redux/textBook/actions';

const ErrorMessage = () => {
  const text = 'Please login';
  const dispatch = useDispatch();
  const isAuthError = useSelector((state) => state.textBookPage.isAuthError);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setIsAuthError(false));
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isAuthError}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} variant="filled" severity="error">
        {text}
      </Alert>
    </Snackbar>
  );
};

export default ErrorMessage;
