import React from 'react';
import { useSelector } from 'react-redux';

function CommonStudyResults() {
  const amountOfStydyWords = useSelector((state) => state.vocabularyStudyWords.words.length);
  const amountOfDeletedWords = useSelector((state) => state.vocabularyDeletedWords.words.length);

  return (
    <div>
      <div className="vocabulary-module-results">
        <div className="vocabulary-module-results__values">
          <span>всего изучаемых слов: </span>
          <span className="vocabulary-module-results__valuesNumber">{amountOfStydyWords}</span>
        </div>
        <div className="vocabulary-module-results__values">
          <span>кол-во изученных слов: </span>
          <span className="vocabulary-module-results__valuesNumber">{amountOfDeletedWords}</span>
        </div>
        <div className="vocabulary-module-results__values">
          <span>кол-во слов оставшихся для изучения: </span>
          <span className="vocabulary-module-results__valuesNumber">{3600 - amountOfDeletedWords}</span>
        </div>
      </div>
    </div>
  );
}

export default CommonStudyResults;
