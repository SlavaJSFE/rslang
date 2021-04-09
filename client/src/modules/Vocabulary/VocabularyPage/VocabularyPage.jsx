/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import Word from '../../../components/Word/Word';
import '../../../styles/common.scss';
import '../../Textbook/Textbook.scss';
import '../Vocabulary.scss';

export default function VocabularyPage({ isStudyPage }) {
  const allWords = useSelector((state) => state.vocabularyDeletedWords.delWords);

  return (
    <div>
      <div
        className="textbook-list cardWordVocabulary"
      >
        {allWords.map((word) => (
          <Word
            word={word}
            isStudyStatistic={isStudyPage}
            key={word._id}
            className="textbook-list__item"
          />
        ))}
      </div>
    </div>
  );
}
