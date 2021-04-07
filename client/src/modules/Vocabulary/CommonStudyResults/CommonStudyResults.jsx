import React from 'react';
import { useSelector } from 'react-redux';

function CommonStudyResults() {
  const amountOfStydyWords = useSelector((state) => state.vocabularyAmountStudyWords.amountWords);
  const amountOfDeletedWords = useSelector((state) => state.vocabularyDeletedWords.delWordsCount);
  return (
    <div>
      <div className="vocabulary-results">
        <div className="vocabulary-results__values">
          <span>всего изучаемых слов: </span>
          <span className="vocabulary-results__valuesNumber">{amountOfStydyWords}</span>
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
