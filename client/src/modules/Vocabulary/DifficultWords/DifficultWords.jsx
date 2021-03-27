import React from 'react';
// import savannahImage from '../../../assets/images/safari.jpg';
import Word from '../../../components/Word/Word';
// import {  fetchWordsConnect,  setPageConnect } from '../../Textbook/Textbook-module.jsx';

const word = {
  image: 'files/01_0001.jpg',
  word: 'test',
};

export default function DifficultWords() {
  return (
    <div>
      сложные слова
      <Word word={word} key={word.id} />
    </div>
  );
}
