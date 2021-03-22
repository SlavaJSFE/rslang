import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navigation from '../../components/Navigation/Navigation';
import AuthButtons from '../../components/AuthButtons/AuthButtons';
import Footer from '../../components/Footer/Footer';
import '../../styles/common.scss';

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
        <h2>Textbook Page</h2>
        <p>Где-то здесь на этой странице должна быть ещё кнопка настроек. Также здесь будет навигация по 6 разделам учебника, например в виде табов (Tabs), и в виде, например, пагинации для 30-ти страниц каждого раздела</p>
        <p>под вот этим вот всем бедут ссылки (карточки?) на 4 игры</p>
        <p>А также где-то ещё должен быть словарь. Я пока не сильно представляю как он должен быть прикручен к этому учебнику. Может тоже дополнительная кнопка как и настройки, которая переключает на словарь?</p>
      </Container>
      <Footer />
    </div>
  );
}
