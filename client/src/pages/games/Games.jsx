import React from 'react';
import { Container } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';
import GamesModule from '../../modules/Games/Games-module';
import Header from '../../components/Header';

export default function GamesPage() {
  return (
    <div className="games-page page">
      <Container>
        <Header />
        <GamesModule />
      </Container>
      <Footer />
    </div>
  );
}
