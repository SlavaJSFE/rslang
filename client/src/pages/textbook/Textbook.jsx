import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import * as axios from 'axios';
import { connect } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';
import AuthButtons from '../../components/AuthButtons/AuthButtons';
import Footer from '../../components/Footer/Footer';
import '../../styles/common.scss';
import Word from '../../components/Word/Word';
import { setWords, setPage } from '../../redux/textBook/actions';

const TextbookPage = ({ words, setWordsConnect, page, setPageConnect }) => {
  const fetchWords = () => {
    axios
      .get(
        `https://react-learnwords-example.herokuapp.com/words?group=${1}&page=${page}`,
      )
      .then(({ data }) => {
        setWordsConnect(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchWords();
  }, []);

  const onPageChange = (event, newPage) => {
    setPageConnect(newPage);
    fetchWords();
  };

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
        {words.length ? (
          words.map((word) => <Word word={word} />)
        ) : (
          <div>Loading......</div>
        )}
        <Pagination count={20} color="primary" onChange={onPageChange} />
        <p>
          Где-то здесь на этой странице должна быть ещё кнопка настроек. Также
          здесь будет навигация по 6 разделам учебника, например в виде табов
          (Tabs), и в виде, например, пагинации для 30-ти страниц каждого
          раздела
        </p>
        <p>под вот этим вот всем бедут ссылки (карточки?) на 4 игры</p>
        <p>
          А также где-то ещё должен быть словарь. Я пока не сильно представляю
          как он должен быть прикручен к этому учебнику. Может тоже
          дополнительная кнопка как и настройки, которая переключает на словарь?
        </p>
      </Container>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  words: state.textBookPage.words,
  page: state.textBookPage.page,
});

export default connect(mapStateToProps, {
  setWordsConnect: setWords,
  setPageConnect: setPage,
})(TextbookPage);
