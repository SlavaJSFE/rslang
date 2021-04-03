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
import '../../../styles/common.scss';
import '../../Textbook/Textbook-module.scss';
import '../Vocabulary-module.scss';

export default function VocabularyPage({ isStudyPage, wordsType }) {
  const allWords = useSelector((state) => state[wordsType].words);
  const userData = useSelector((state) => state.user.user);
  const [page, setPage] = React.useState(primaryPage);
  const [start, setStart] = React.useState(startWordOnPage);
  const [finish, setFinish] = React.useState(wordsOnPage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVocabularyWords(userData));
    dispatch(fetchVocabularyDeletedWords(userData));
    dispatch(fetchVocabularyStudyWords(userData));
  }, [userData]);

  const handleChange = (event, value) => {
    setPage(value);
    setStart(Math.ceil((value - primaryPage) * wordsOnPage));
    setFinish(calcLastWordIndex(allWords.length, value));
  };

  // eslint-disable-next-line no-unused-vars
  const wordsVocabularyPage = allWords.slice(start, finish);

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
      <div>
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
