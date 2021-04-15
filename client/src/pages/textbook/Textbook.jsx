import React, { useEffect, useState } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Footer from '../../components/Footer/Footer';
import useTextbookRoutes from './TextbookRoutes';
import Header from '../../components/Header';
import textbookIcon from '../../assets/images/icons/reading.svg';
import vocabularyIcon from '../../assets/images/icons/dictionary.svg';
import settingsIcon from '../../assets/images/icons/settings.svg';
import { VOCABULARY, SETTINGS, LIST } from './constants';
import './Textbook.scss';
import defineLocation from './utils';

export default function TextbookPage() {
  const { path, url } = useRouteMatch();
  const location = useLocation();
  const [active, setActive] = useState();
  const textbookRoutes = useTextbookRoutes(path);

  useEffect(() => {
    const currentLocation = defineLocation(location.pathname);
    setActive(currentLocation);
  }, [location]);

  return (
    <div className="textbook-page page">
      <Container>
        <Header />
        <div className="textbook-nav-buttons">
          <Link to={url}>
            <div className={`textbook-menu-item ${active === LIST ? 'active' : ''}`}>
              <img src={textbookIcon} alt="" />
              <span>ИЗУЧЕНИЕ</span>
            </div>
          </Link>
          <Link to={`${url}/${VOCABULARY}`}>
            <div className={`textbook-menu-item ${active === VOCABULARY ? 'active' : ''}`}>
              <img src={vocabularyIcon} alt="" />
              <span>СЛОВАРЬ</span>
            </div>
          </Link>
          <Link to={`${url}/${SETTINGS}`}>
            <div className={`textbook-menu-item ${active === SETTINGS ? 'active' : ''}`}>
              <img src={settingsIcon} alt="" />
              <span>НАСТРОЙКИ</span>
            </div>
          </Link>
        </div>
        {textbookRoutes}
      </Container>
      <Footer />
    </div>
  );
}
