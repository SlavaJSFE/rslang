import React from 'react';

import { Container } from '@material-ui/core';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import GameCards from '../../components/GameCards/GameCards';

export default function GamesPage() {
  return (
    <div className="games-page page">
      <Container>
        <Header />
        <GameCards />
      </Container>
      <Footer />
    </div>
  );
}
