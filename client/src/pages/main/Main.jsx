import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, Container } from '@material-ui/core';
import './Main.scss';
import Footer from '../../components/Footer/Footer';
import mainImage from '../../assets/images/students-textbooksss.png';
import Header from '../../components/Header';

import { setGameWords } from '../../redux/miniGameWords/actions';

export default function MainPage() {
  const dispatch = useDispatch();
  dispatch(setGameWords([]));
  return (
    <div className="main-page page">
      <Container>
        <Header />
        <Box className="intro">
          <Box>
            <h2>RS Lang - твой верный помошник в изучении английского языка!</h2>
            <p>
              RS Lang - это приложение, которое поможет тебе расширить свой словарный запас и легко
              общаться на английском.
            </p>
            <div className="intro_buttons">
              <Link to="/textbook">
                <Button variant="contained" color="primary">
                  Начать обучение
                </Button>
              </Link>
            </div>
          </Box>
          <Box>
            <img className="image" src={mainImage} alt="" />
          </Box>
        </Box>
        <Box className="video center">
          <h2>Как это работает</h2>
          <div className="video-block" />
        </Box>
        <Box className="center">
          <h2>Особенности приложения</h2>
          <div className="app-properties_wrapper">
            <div className="app-properties_block">
              <h3 className="app-properties_title">База слов</h3>
              <p>
                Здесь вы найдёте 3600 популярных слов, которые обязательно пригодятся вам как
                в деловом, так и повседневном общении.
              </p>
            </div>
            <div className="app-properties_block">
              <h3 className="app-properties_title">Формирование своего словаря</h3>
              <p>
                Вы можете помечать слова как сложные и уделять им больше внимания.
              </p>
            </div>
            <div className="app-properties_block">
              <h3 className="app-properties_title">Игры</h3>
              <p>
                Благодяря таким играм как Саванна, Аудиовызов, Спринт и Мемори процесс
                изучения и запоминания слов будет более приятным и увлекательным.
              </p>
            </div>
            <div className="app-properties_block">
              <h3 className="app-properties_title">Статистика</h3>
              <p>
                Вы сможете следить за своим процессом изучения благодаря странице статистики,
                где отображаются результаты как за текущий день, так и за весь период.
              </p>
            </div>
          </div>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}
