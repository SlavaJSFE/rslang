import React from 'react';
import { Container } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';

export default function TeamPage() {
  return (
    <div className="team-page page">
      <Container>
        <Header />
        <h2>Team Page</h2>
      </Container>
      <Footer />
    </div>
  );
}
