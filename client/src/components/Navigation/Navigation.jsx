import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  GAMES, MAIN, STATISTIC, TEAM, TEXTBOOK,
} from '../../constants/constants';
import './Navigation.scss';
import defineLocation from './utils/defineLocation';

export default function Navigation() {
  const [active, setActive] = useState();
  const location = useLocation();

  useEffect(() => {
    const currentLocation = defineLocation(location.pathname);
    setActive(currentLocation);
  }, [location]);
  return (
    <nav className="navigation">
      <Link to="/">
        <div className={`menu-item ${active === MAIN ? 'active' : ''}`}>
          ГЛАВНАЯ
        </div>
      </Link>
      <Link to="/textbook">
        <div className={`menu-item ${active === TEXTBOOK ? 'active' : ''}`}>
          УЧЕБНИК
        </div>
      </Link>
      <Link to="/games">
        <div className={`menu-item ${active === GAMES ? 'active' : ''}`}>
          ИГРЫ
        </div>
      </Link>
      <Link to="/statistic">
        <div className={`menu-item ${active === STATISTIC ? 'active' : ''}`}>
          СТАТИСТИКА
        </div>
      </Link>
      <Link to="/team">
        <div className={`menu-item ${active === TEAM ? 'active' : ''}`}>
          О КОМАНДЕ
        </div>
      </Link>
    </nav>
  );
}
