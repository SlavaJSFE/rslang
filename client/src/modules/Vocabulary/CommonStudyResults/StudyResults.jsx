import React from 'react';
import { useSelector } from 'react-redux';
import calcRightAnswersByWord from '../utils';
import { getUserWord } from '../../../api/apiVocabulary';

function StudyResults({ word }) {
  const statistics = useSelector((state) => state.statistics.statistics);
  console.log('statisticsFilt', statistics
    .map((value) => value)
    // eslint-disable-next-line no-underscore-dangle
    .filter((item) => item.word._id === word._id));
  const userData = useSelector((state) => state.user.user);
  // eslint-disable-next-line no-underscore-dangle
  // const userWord = await getUserWord(word._id, userData);
  // console.log('word', word);
  return (
    <div>
      <div className="vocabulary-resultsStudy">
        <div className="vocabulary-resultsStudy__values">
          <span>правильных ответов: </span>
          <span className="vocabulary-resultsStudy__valuesNumber">{word.userWord.optional?.rightAnswers ?? 0}</span>
        </div>
        <div className="vocabulary-resultsStudy__values">
          <span>ошибок: </span>
          <span className="vocabulary-resultsStudy__valuesNumber">{word.userWord.optional?.wrongAnswers ?? 0}</span>
        </div>
      </div>
    </div>
  );
}

export default StudyResults;
