import React from 'react';
import { Container } from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';

export default function UserProfile() {
  return (
    <div className="user-page page">
      <Container>
        <Header />
        <h2>User Profile</h2>
      </Container>
      <Footer />
    </div>
  );
}
