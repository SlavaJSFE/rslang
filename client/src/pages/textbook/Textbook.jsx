import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Pagination, PaginationItem } from '@material-ui/lab';
import * as axios from 'axios';
import { connect } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';
import AuthButtons from '../../components/AuthButtons/AuthButtons';
import Footer from '../../components/Footer/Footer';
import '../../styles/common.scss';
import Word from '../../components/Word/Word';
import { setWords, setPage } from '../../redux/textBook/actions';

const TextbookPage = ({
  words,
  setWordsConnect,
  currentPage,
  setPageConnect,
}) => {
  const { urlPage } = useParams('/textbook/:page');

  const fetchWords = () => {
    axios
      .get(
        `https://react-learnwords-example.herokuapp.com/words?group=${1}&page=${currentPage}`,
      )
      .then(({ data }) => {
        setWordsConnect(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setPageConnect(urlPage - 1);
  }, []);

  useEffect(() => {
    fetchWords();
  }, [currentPage]);

  const onPageChange = (event, page) => {
    setPageConnect(page - 1);
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
        <div className="textbook-content">
          {words.length ? (
            words.map((word) => <Word word={word} key={word.id} />)
          ) : (
            <div>Loading......</div>
          )}
          <Pagination
            count={30}
            color="primary"
            page={Number(currentPage + 1)}
            onChange={onPageChange}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/textbook${item.page === 1 ? '/1' : `/${item.page}`}`}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...item}
              />
            )}
          />
        </div>
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
  currentPage: state.textBookPage.currentPage,
});

export default connect(mapStateToProps, {
  setWordsConnect: setWords,
  setPageConnect: setPage,
})(TextbookPage);
