import React from 'react';

function CommonStudyResults() {
  return (
    <div>
      <div className="vocabulary-module-results">
        <div className="vocabulary-module-results__values">
          <span>всего изучаемых слов: </span>
          <span className="vocabulary-module-results__valuesNumber">000</span>
        </div>
        <div className="vocabulary-module-results__values">
          <span>кол-во изученных слов: </span>
          <span className="vocabulary-module-results__valuesNumber">002</span>
        </div>
        <div className="vocabulary-module-results__values">
          <span>кол-во слов оставшихся для изучения: </span>
          <span className="vocabulary-module-results__valuesNumber">003</span>
        </div>
      </div>
    </div>
  );
}

export default CommonStudyResults;
