import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from '@material-ui/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';

export default function UserProfile() {
  const { name, userId } = useSelector((state) => state.user.user);

  return (
    <div className="user-page page">
      <Container>
        <Header />
        <h2>User Profile</h2>
        <p>
          {`It's a ${name}'s profile. My user ID is: ${userId}`}
        </p>
      </Container>
      <Footer />
    </div>
  );
}
