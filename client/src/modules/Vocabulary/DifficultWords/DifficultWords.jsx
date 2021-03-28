import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import savannahImage from '../../../assets/images/safari.jpg';
import Word from '../../../components/Word/Word';
// import {  fetchWordsConnect,  setPageConnect } from '../../Textbook/Textbook-module.jsx';

// const word = {
//   image: 'files/01_0001.jpg',
//   word: 'test',
// };

export default function DifficultWords() {
  const words = useSelector((state) => state.textBookPage.words);

  useEffect(() => {
    console.log(words);
  }, [words]);
  console.log(words);
  return (
    <div>
      сложные слова
      {/* <Word word={word} key={word.id} /> */}
    </div>
  );
}
