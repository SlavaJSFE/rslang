import React from 'react';
import { Container } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';

export default function LoginPage() {
  return (
    <div className="login-page page">
      <Container>
        <Header />
        <h2>Login Page</h2>
      </Container>
      <Footer />
    </div>
  );
}
