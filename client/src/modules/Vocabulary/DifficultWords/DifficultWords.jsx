import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Word from '../../../components/Word/Word';
import { fetchVocabularyWords } from '../../../redux/vocabulary/actions';

// import { setPage, fetchWords } from '../../../redux/vocabulary/actions';
// const word = {
//   image: 'files/01_0001.jpg',
//   word: 'test',
// };

export default function DifficultWords() {
  const words = useSelector((state) => state.vocabularyDifficultWordsPage.words);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVocabularyWords());
  }, []);
  console.log(words);

  return (
    <div
      className="textbook-list"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      сложные слова
      {words.map((word) => (
        <div>
          <Word word={word} key={word.id} />
          <span>
            unit
            {' '}
            {word.group}
          </span>
          <button type="button">восстановить</button>
        </div>
      ))}
    </div>
  );
}
