import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function AuthButtons() {
  return (
    <div className="auth-buttons">
      <Link to="/login">
        <Button variant="contained">Войти</Button>
      </Link>
      <Link to="/registration">
        <Button variant="contained" color="primary">Регистрация</Button>
      </Link>
    </div>
  );
}
