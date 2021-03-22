import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import '../../styles/common.scss';
import Navigation from '../../components/Navigation/Navigation';
import AuthButtons from '../../components/AuthButtons/AuthButtons';
import Footer from '../../components/Footer/Footer';

export default function StatisticsPage() {
  return (
    <div className="statistics-page page">
      <Container>
        <div className="logo-and-auth-buttons">
          <Link to="/">
            <h1>RS Lang</h1>
          </Link>
          <AuthButtons />
        </div>
        <Navigation />
        <h2>Statistics Page</h2>
      </Container>
      <Footer />
    </div>
  );
}
