import React from 'react';

function StudyResults({ word }) {
  return (
    <div>
      <div className="vocabulary-resultsStudy">
        <div className="vocabulary-resultsStudy__values">
          <span>правильных ответов: </span>
          <span className="vocabulary-resultsStudy__valuesNumber">{word.userWord.optional?.amountRightAnswers ?? 0}</span>
        </div>
        <div className="vocabulary-resultsStudy__values">
          <span>ошибок: </span>
          <span className="vocabulary-resultsStudy__valuesNumber">{word.userWord.optional?.amountWrongAnswers ?? 0}</span>
        </div>
      </div>
    </div>
  );
}

export default StudyResults;
