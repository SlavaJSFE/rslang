import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Word from '../../../components/Word/Word';

export default function StudiedWords() {
  // const words = useSelector((state) => state.vocabularyDifficultWordsPage.words);

  // useEffect(() => {

  // }, [words]);

  return (
    <div
      className="textbook-list"
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {/* {words.map((word) => (
        <div>
          <Word word={word} key={word.id} />
          <span>
            unit
            {' '}
            {word.group}
          </span>
          <button type="button">восстановить</button>
          <p>кол-во правильных ответов</p>
          <p>кол-во ошибок</p>
        </div>
      ))} */}
    </div>
  );
}
