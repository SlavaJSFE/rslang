import React from 'react';
import { useSelector } from 'react-redux';

function StudyResults({ word }) {
  const statistics = useSelector((state) => state.statistics.statistics);

  // eslint-disable-next-line no-underscore-dangle
  const currentWord = statistics.filter((item) => item._id === word._id);
  const todayId = new Date().toLocaleString().slice(0, 10).replaceAll('.', '_');
  const rightAnswers = currentWord[0]?.userWord?.optional?.stat[todayId]?.savannah?.rightAnswers;
  const wrongAnswers = currentWord[0]?.userWord?.optional?.stat[todayId]?.savannah?.wrongAnswers;
  return (
    <div>
      <div className="vocabulary-resultsStudy">
        <div className="vocabulary-resultsStudy__values">
          <span>правильных ответов: </span>
          <span className="vocabulary-resultsStudy__valuesNumber">{rightAnswers ?? 0}</span>
        </div>
        <div className="vocabulary-resultsStudy__values">
          <span>ошибок: </span>
          <span className="vocabulary-resultsStudy__valuesNumber">{wrongAnswers ?? 0}</span>
        </div>
      </div>
    </div>
  );
}

export default StudyResults;
