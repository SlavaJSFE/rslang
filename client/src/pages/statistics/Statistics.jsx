import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';
import Statistic from '../../modules/Statistic/Statistic';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import { getStatistics } from '../../redux/statistics/actions';
import Gist from './Gist';

export default function StatisticsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    getStatistics();
    dispatch(getStatistics());
  }, []);
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
