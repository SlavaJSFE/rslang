/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@material-ui/lab';
// import Typography from '@material-ui/core/Typography';
import Word from '../../../components/Word/Word';
import calcCountPagination, { calcLastWordIndex } from '../utils';
import { fetchVocabularyWords } from '../../../redux/vocabulary/actions';
import { fetchVocabularyDeletedWords } from '../../../redux/vocabulary/actionsDeletedWords';

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
  }, []);
  const handleChange = (event, value) => {
    setPage(value);
    setStart(Math.ceil((value - 1) * 20));
    setFinish(calcLastWordIndex(allWords.length, value));
  };
  return (
    <div
      className="textbook-list"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {allWords.slice(start, finish).map((word) => (
        <Word
          word={word}
          isStudyStatistic={isStudyPage}
          key={word.id}
        />
      ))}
      {/* <Typography>
        Page:
        {page}
      </Typography> */}
      <Pagination count={calcCountPagination(allWords.length)} page={page} onChange={handleChange} />
    </div>
  );
}
