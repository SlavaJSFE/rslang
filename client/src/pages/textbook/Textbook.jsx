import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import Navigation from '../../components/Navigation/Navigation';
import AuthButtons from '../../components/AuthButtons/AuthButtons';
import Footer from '../../components/Footer/Footer';
import '../../styles/common.scss';
import useRoutes from './routes';

export default function TextbookPage() {
  const { path, url } = useRouteMatch();
  const textbookRoutes = useRoutes(path);

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
