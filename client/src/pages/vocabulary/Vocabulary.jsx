import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import '../../styles/common.scss';
import Navigation from '../../components/Navigation/Navigation';
import AuthButtons from '../../components/AuthButtons/AuthButtons';
import Footer from '../../components/Footer/Footer';
import VocabularyModule from '../../modules/Vocabulary/Vocabulary-module';

export default function VocabularyPage() {
  return (
    <div className="vocabulary-page page">
      <Container>
        <div className="logo-and-auth-buttons">
          <Link to="/">
            <h1>RS Lang</h1>
          </Link>
          <AuthButtons />
        </div>
        <Navigation />
        <VocabularyModule />
      </Container>
      <Footer />
    </div>
  );
}
