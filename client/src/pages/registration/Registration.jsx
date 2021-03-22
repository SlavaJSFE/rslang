import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import '../../styles/common.scss';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

export default function RegistrationPage() {
  return (
    <div className="login-page page">
      <Container>
        <div className="logo-and-auth-buttons">
          <Link to="/">
            <h1>RS Lang</h1>
          </Link>
          <Link to="/login">
            <Button variant="contained" color="primary">
              Войти
            </Button>
          </Link>
        </div>
        <Navigation />
        <h2>Registration Page</h2>
      </Container>
      <Footer />
    </div>
  );
}
