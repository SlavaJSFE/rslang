import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { games } from '../../constants/constants';
import './GameCards.scss';

export default function GameCards() {
  return (
    <div className="game-cards">
      {games.map((game) => (
        <Box className={`game-card ${game.className}`} boxShadow={3} key={game.name}>
          <Link to={game.path}>
            <img src={game.image} alt="" />
            <h2 className="card-title">
              {game.name}
            </h2>
          </Link>
        </Box>
      ))}
    </div>
  );
}
