import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { setError, setMessage } from '../../redux/user/actions';
import { CLICK_AWAY, sixSeconds } from '../../constants/constants';

export default function Message() {
  const [openMessage, setOpenMessage] = useState(false);
  const [openError, setOpenError] = useState(false);
  const message = useSelector((state) => state.user.message);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  function handleCloseMessage(reason) {
    dispatch(setMessage(null));
    if (reason === CLICK_AWAY) {
      return;
    }

    setOpenMessage(false);
  }

  function handleCloseError(reason) {
    dispatch(setError(null));
    if (reason === CLICK_AWAY) {
      return;
    }

    setOpenError(false);
  }

  useEffect(() => {
    if (message) {
      setOpenMessage(true);
    }
  }, [message]);

  useEffect(() => {
    if (error) {
      setOpenError(true);
    }
  }, [error]);

  return (
    <div className="snackbar">
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openMessage}
        autoHideDuration={sixSeconds}
        onClose={handleCloseMessage}
      >
        <Alert onClose={handleCloseMessage} severity="success" variant="filled">
          {message || null}
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openError}
        autoHideDuration={sixSeconds}
        onClose={handleCloseError}
      >
        <Alert onClose={handleCloseError} severity="error" variant="filled">
          {error ? error.toString() : null}
        </Alert>
      </Snackbar>
    </div>
  );
}
