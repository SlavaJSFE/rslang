import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';
import useRoutes from './routes';
import Header from '../../components/Header';

export default function TextbookPage() {
  const { path, url } = useRouteMatch();
  const textbookRoutes = useRoutes(path);

  return (
    <div className="textbook-page page">
      <Container>
        <Header />
        <div className="textbook-nav-buttons">
          <Link to={`${url}/vocabulary`}>
            <Button type="button">Словарь</Button>
          </Link>
          <Link to={`${url}/settings`}>
            <Button type="button">Настройки</Button>
          </Link>
        </div>
        {textbookRoutes}
      </Container>
      <Footer />
    </div>
  );
}
