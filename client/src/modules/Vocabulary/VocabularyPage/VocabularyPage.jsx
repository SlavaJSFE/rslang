import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@material-ui/lab';
// import Typography from '@material-ui/core/Typography';
import Word from '../../../components/Word/Word';
import calcCountPagination, { calcLastWordIndex } from '../utils';
import { fetchVocabularyWords } from '../../../redux/vocabulary/DifficultWords/actions';
import { fetchVocabularyDeletedWords } from '../../../redux/vocabulary/DeletedWords/actions';
import { fetchVocabularyStudyWords } from '../../../redux/vocabulary/StudyWords/actions';

import '../../../styles/common.scss';
import '../../Textbook/Textbook-module.scss';

export default function VocabularyPage({ isStudyPage, wordsType }) {
  const allWords = useSelector((state) => state[wordsType].words);
  const userData = useSelector((state) => state.user.user);
  const [page, setPage] = React.useState(1);
  const [start, setStart] = React.useState(0);
  const [finish, setFinish] = React.useState(20);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVocabularyWords(userData));
    dispatch(fetchVocabularyDeletedWords(userData));
    dispatch(fetchVocabularyStudyWords(userData));
  }, [allWords]);

  const handleChange = (event, value) => {
    setPage(value);
    setStart(Math.ceil((value - 1) * 20));
    setFinish(calcLastWordIndex(allWords.length, value));
  };

  const wordsVocabularyPage = allWords.slice(start, finish);

  return (
    <div>
      <div
        className="textbook-list"
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {allWords.slice(start, finish).map((word) => (
          <Word
            word={word}
            isStudyStatistic={isStudyPage}
            key={word.id}
            className="textbook-list__item"
          />
        ))}
        {/* <Typography>
        Page:
        {page}
      </Typography> */}
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
