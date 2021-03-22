import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navigation from '../../components/Navigation/Navigation';
import AuthButtons from '../../components/AuthButtons/AuthButtons';
import Footer from '../../components/Footer/Footer';
import '../../styles/common.scss';
import TextbookModule from '../../modules/Textbook/Textbook-module';

export default function TextbookPage() {
  return (
    <div className="textbook-page page">
      <Container>
        <div className="logo-and-auth-buttons">
          <Link to="/">
            <h1>RS Lang</h1>
          </Link>
          <AuthButtons />
        </div>
        <Navigation />
        <TextbookModule />
      </Container>
      <Footer />
    </div>
  );
}
