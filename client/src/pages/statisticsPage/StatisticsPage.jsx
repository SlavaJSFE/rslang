import React from 'react';
import { Container } from '@material-ui/core';
import Statistic from '../../modules/Statistic/Statistic';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import Gist from './Gist';

export default function StatisticsPage() {
  return (
    <div className="statistics-page page">
      <Container>
        <Header />
        <Statistic />
        <Gist />
      </Container>
      <Footer />
    </div>
  );
}
