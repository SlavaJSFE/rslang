import React from 'react';
import { useSelector } from 'react-redux';

function CommonStudyResults() {
  const amountOfStudyWords = useSelector((state) => state.vocabulary.countStudyWords);
  const amountOfDeletedWords = useSelector((state) => state.vocabulary.countDelWords);
  return (
    <div>
      <div className="vocabulary-results">
        <div className="vocabulary-results__values">
          <span>всего изучаемых слов: </span>
          <span className="vocabulary-results__valuesNumber">{amountOfStudyWords}</span>
        </div>
        <div className="vocabulary-results__values">
          <span>кол-во изученных слов: </span>
          <span className="vocabulary-results__valuesNumber">{amountOfDeletedWords}</span>
        </div>
        <div className="vocabulary-results__values">
          <span>кол-во слов оставшихся для изучения: </span>
          <span className="vocabulary-results__valuesNumber">{3600 - amountOfDeletedWords}</span>
        </div>
      </div>
    </div>
  );
}

export default CommonStudyResults;
