/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import Word from '../../../components/Word/Word';
import calcCountPagination, {
  calcLastWordIndex, wordsOnPage, startWordOnPage, primaryPage,
} from '../utils';
import { fetchVocabularyWords } from '../../../redux/vocabulary/DifficultWords/actions';
import { fetchVocabularyDeletedWords } from '../../../redux/vocabulary/DeletedWords/actions';
import { fetchVocabularyStudyWords } from '../../../redux/vocabulary/StudyWords/actions';
import { fetchVocabularyAmountStudyWords } from '../../../redux/vocabulary/AmountStudyWords/actions';
import { setGameWords } from '../../../redux/miniGameWords/actions';
import '../../../styles/common.scss';
import '../../Textbook/Textbook-module.scss';
import '../Vocabulary.scss';

export default function VocabularyPage({ isStudyPage, wordsType }) {
  const allWords = useSelector((state) => state[wordsType].words);
  const userData = useSelector((state) => state.user.user);
  const group = useSelector((state) => state.group);
  const [page, setPage] = React.useState(primaryPage);
  const [unit, setUnit] = React.useState(0);
  const [start, setStart] = React.useState(startWordOnPage);
  const [finish, setFinish] = React.useState(wordsOnPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVocabularyWords(userData));
    dispatch(fetchVocabularyDeletedWords(userData));
    dispatch(fetchVocabularyStudyWords(userData, unit));
    dispatch(fetchVocabularyAmountStudyWords(userData, group));
  }, [userData, group]);

  const handleChange = (event, value) => {
    setPage(value);
    setStart(Math.ceil((value - primaryPage) * wordsOnPage));
    setFinish(calcLastWordIndex(allWords.length, value));
  };

  const wordsVocabularyPage = allWords.slice(start, finish);

  // useEffect(() => {
  //   dispatch(setGameWords(wordsVocabularyPage));
  // }, [wordsVocabularyPage]);

  return (
    <div>
      <div
        className="textbook-list cardWordVocabulary"
      >
        {allWords.slice(start, finish).map((word) => (
          <Word
            word={word}
            isStudyStatistic={isStudyPage}
            key={word._id}
            className="textbook-list__item"
          />
        ))}
      </div>
      <div className="paginationVocabulary">
        <Pagination
          className="vocabularyPagination"
          count={calcCountPagination(allWords.length)}
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
