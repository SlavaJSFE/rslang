import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './AuthButtons.scss';

export default function AuthButtons() {
  return (
    <div className="auth-buttons">
      <Link to="/login">
        <Button className="auth-button" variant="outlined" color="primary">Войти</Button>
      </Link>
      <Link to="/registration">
        <Button variant="contained" color="primary">
          Регистрация
        </Button>
      </Link>
    </div>
  );
}
