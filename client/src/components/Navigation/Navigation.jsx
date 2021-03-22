import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="/textbook">
        <Button variant="contained">Учебник</Button>
      </Link>
      <Link to="/games">
        <Button variant="contained">Игры</Button>
      </Link>
      <Link to="/statistics">
        <Button variant="contained">Статистика</Button>
      </Link>
      <Link to="/team">
        <Button variant="contained">О команде</Button>
      </Link>
    </nav>
  );
}
