/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import Word from '../../../components/Word/Word';
import { fetchVocabularyWords } from '../../../redux/vocabulary/actions';
import RestoreBtn from '../RestoreBtn/RestoreBtn';
import calcCountPagination from '../utils';

export default function DifficultWords() {
  const words = useSelector((state) => state.vocabularyDifficultWordsPage.words);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVocabularyWords());
  }, []);
console.log(words.length);
  return (
    <div
      className="textbook-list"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {/* сложные слова */}
      {words.map((word) => (
        <div>
          <Word word={word} key={word.id} />
          <span>
            unit
            {' '}
            {word.group}
          </span>
          <RestoreBtn />
        </div>
      ))}
      <Pagination
        className="textbook-pagination"
        count={calcCountPagination(words.length)}
        color="primary"
        page={0 + 1}
        onChange={null}
        renderItem={(item) => (
          <PaginationItem
            // component={''}
            to={`/textbook/${0 + 1}/${item.page}`}
            {...item}
          />
        )}
      />
    </div>
  );
}
