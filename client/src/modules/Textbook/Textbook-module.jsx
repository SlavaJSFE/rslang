import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { connect } from 'react-redux';

import '../../styles/common.scss';
import Word from '../../components/Word/Word';
import { setPage, fetchWords } from '../../redux/textBook/actions';
import NavTabs from '../../components/NavTabs/NavTabs';
import Preloader from '../../components/Preloader/Preloader';

const TextbookModule = ({
  words,
  loading,
  fetchWordsConnect,
  currentPage,
  setPageConnect,
  currentGroup,
}) => {
  const { urlPage } = useParams('/textbook/:group/:urlPage');

  useEffect(() => {
    setPageConnect(urlPage - 1);
  }, []);

  useEffect(() => {
    fetchWordsConnect(currentGroup, currentPage);
  }, [currentPage, currentGroup]);

  const onPageChange = (event, page) => {
    setPageConnect(page - 1);
  };

  return (
    <div className="textbook-module">
      <Container>
        <h2>Textbook Module</h2>
        <div className="textbook-content">
          <NavTabs />
          <div
            className="textbook-list"
            style={{ display: 'flex', flexWrap: 'wrap' }}
          >
            {loading ? (
              <Preloader />
            ) : (
              words.map((word) => <Word word={word} key={word.id} />)
            )}
          </div>
          <Pagination
            count={30}
            color="primary"
            page={currentPage + 1}
            onChange={onPageChange}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/textbook/${currentGroup + 1}/${item.page}`}
                {...item}
              />
            )}
          />
        </div>
        <p>Где-то здесь на этой странице должна быть ещё кнопка настроек.</p>
        <p>под вот этим вот всем бедут ссылки (карточки?) на 4 игры</p>
        <p>
          А также где-то ещё должен быть словарь. Я пока не сильно представляю
          как он должен быть прикручен к этому учебнику. Может тоже
          дополнительная кнопка как и настройки, которая переключает на словарь?
        </p>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  words: state.textBookPage.words,
  loading: state.textBookPage.loading,
  currentPage: state.textBookPage.currentPage,
  currentGroup: state.textBookPage.currentGroup,
});

export default connect(mapStateToProps, {
  fetchWordsConnect: fetchWords,
  setPageConnect: setPage,
})(TextbookModule);
