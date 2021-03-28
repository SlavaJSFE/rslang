import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './AuthButtons.scss';
import { useSelector } from 'react-redux';

export default function AuthButtons() {
  const isAuth = useSelector((state) => state.user.isAuth);

  function showAuthButtons() {
    if (isAuth) {
      return (
        <Button className="auth-button" variant="contained" color="primary">Выйти</Button>
      );
    }

    return (
      <>
        <Link to="/login">
          <Button className="auth-button" variant="outlined" color="primary">Войти</Button>
        </Link>
        <Link to="/registration">
          <Button variant="contained" color="primary">
            Регистрация
          </Button>
        </Link>
      </>
    );
  }

  const authButtons = showAuthButtons();

  return (
    <div className="auth-buttons">
      {authButtons}
    </div>
  );
}
