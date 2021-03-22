import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import './Main.scss';
import '../../styles/common.scss';
import Navigation from '../../components/Navigation/Navigation';
import AuthButtons from '../../components/AuthButtons/AuthButtons';
import Footer from '../../components/Footer/Footer';

export default function MainPage() {
  return (
    <div className="main-page page">
      <Container>
        <div className="logo-and-auth-buttons">
          <Link to="/">
            <h1>RS Lang</h1>
          </Link>
          <AuthButtons />
        </div>
        <Navigation />
      </Container>
      <Footer />
    </div>
  );
}
