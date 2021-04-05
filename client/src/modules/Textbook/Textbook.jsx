/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { connect, useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './Textbook.scss';
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
import calcPaginationCount from './utils';
import ErrorMessage from './ErrorMessage/ErrorMessage';

const TextbookModule = ({
  words,
  loading,
  fetchWordsConnect,
  currentPage,
  setPageConnect,
  currentGroup,
  fetchSettingsConnect,
  userData,
  wordsCount,
}) => {
  const { urlPage } = useParams('/textbook/list/:group/:urlPage');

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
    fetchWordsConnect(currentGroup, currentPage, userData);
  }, [currentPage, currentGroup, userData]);

  const onPageChange = (event, page) => {
    setPageConnect(page - 1);
  };

  return (
    <div className="textbook-module">
      <ErrorMessage />
      <Container>
        <div className="textbook-content">
          <NavTabs />
          <div className="textbook-list">
            {loading ? (
              <Preloader size={60} />
            ) : (
              <TransitionGroup>
                {words.map((word) => (
                  <CSSTransition key={word.id} timeout={200} className="item">
                    <div>
                      <Word
                        word={word}
                        key={word._id}
                        isHard={!!word?.userWord?.difficulty}
                        isTextbook
                        className="textbook-list__item"
                      />
                    </div>
                  </CSSTransition>
                ))}
              </TransitionGroup>
            )}
          </div>
          <Pagination
            className="textbook-pagination"
            count={calcPaginationCount(wordsCount) || 30}
            color="primary"
            page={currentPage + 1}
            onChange={onPageChange}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/textbook/list/${currentGroup + 1}/${item.page}`}
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
  wordsCount: state.textBookPage.wordsCount,
  userData: state.user.user,
});

export default connect(mapStateToProps, {
  fetchWordsConnect: fetchWords,
  setPageConnect: setPage,
  fetchSettingsConnect: fetchSettings,
})(TextbookModule);
