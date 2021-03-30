import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { connect, useDispatch } from 'react-redux';

import '../../styles/common.scss';
import './Textbook-module.scss';
import Word from '../../components/Word/Word';
import {
  setPage,
  fetchWords,
  fetchSettings,
} from '../../redux/textBook/actions';
import { setGameWords } from '../../redux/miniGameWords/actions';
import NavTabs from '../../components/NavTabs/NavTabs';
import Preloader from '../../components/Preloader/Preloader';
import GameCards from '../../components/GameCards/GameCards';

const TextbookModule = ({
  words,
  loading,
  fetchWordsConnect,
  currentPage,
  setPageConnect,
  currentGroup,
  fetchSettingsConnect,
  userData,
}) => {
  const { urlPage } = useParams('/textbook/:group/:urlPage');

  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(setGameWords(words));
  }, [words]);

  useEffect(() => {
    setPageConnect(urlPage - 1);
  }, []);

  useEffect(() => {
    fetchSettingsConnect(userData);
  }, [userData]);

  useEffect(() => {
    fetchWordsConnect(currentGroup, currentPage);
  }, [currentPage, currentGroup]);

  const onPageChange = (event, page) => {
    setPageConnect(page - 1);
  };

  return (
    <div className="textbook-module">
      <Container>
        <div className="textbook-content">
          <NavTabs />
          <div className="textbook-list">
            {loading ? (
              <Preloader size={60} />
            ) : (
              words.map((word) => (
                <Word
                  word={word}
                  key={word.id}
                  className="textbook-list__item"
                />
              ))
            )}
          </div>
          <Pagination
            className="textbook-pagination"
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
        <GameCards />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  words: state.textBookPage.words,
  loading: state.textBookPage.loading,
  currentPage: state.textBookPage.currentPage,
  currentGroup: state.textBookPage.currentGroup,
  userData: state.user.user,
});

export default connect(mapStateToProps, {
  fetchWordsConnect: fetchWords,
  setPageConnect: setPage,
  fetchSettingsConnect: fetchSettings,
})(TextbookModule);
