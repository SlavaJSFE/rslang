import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/textbook">
        <div className="menu-item">УЧЕБНИК</div>
      </Link>
      <Link to="/games">
        <div className="menu-item">ИГРЫ</div>
      </Link>
      <Link to="/statistics">
        <div className="menu-item">СТАТИСТИКА</div>
      </Link>
      <Link to="/team">
        <div className="menu-item">О КОМАНДЕ</div>
      </Link>
    </nav>
  );
}
