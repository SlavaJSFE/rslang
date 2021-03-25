import React from 'react';
import { Container } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';

export default function RegistrationPage() {
  return (
    <div className="login-page page">
      <Container>
        <Header />
        <h2>Registration Page</h2>
      </Container>
      <Footer />
    </div>
  );
}
