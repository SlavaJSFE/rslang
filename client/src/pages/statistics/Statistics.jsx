import React from 'react';
import { Container } from '@material-ui/core';
import StatisticsModule from '../../modules/Statistics/Statistics-module';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import Gist from './Gist';

export default function StatisticsPage() {
  return (
    <div className="statistics-page page">
      <Container>
        <Header />
        <StatisticsModule />
        <Gist />
      </Container>
      <Footer />
    </div>
  );
}
