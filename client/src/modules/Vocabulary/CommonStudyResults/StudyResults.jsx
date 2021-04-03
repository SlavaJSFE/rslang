import React from 'react';

function StudyResults({ word }) {
  return (
    <div>
      <div className="vocabulary-module-resultsStudy">
        <div className="vocabulary-module-resultsStudy__values">
          <span>правильных ответов: </span>
          <span className="vocabulary-module-resultsStudy__valuesNumber">{word.userWord.optional?.amountRightAnswers ?? 0}</span>
        </div>
        <div className="vocabulary-module-resultsStudy__values">
          <span>ошибок: </span>
          <span className="vocabulary-module-resultsStudy__valuesNumber">{word.userWord.optional?.amountWrongAnswers ?? 0}</span>
        </div>
      </div>
    </div>
  );
}

export default StudyResults;
