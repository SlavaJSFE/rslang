import React from 'react';
import { useSelector } from 'react-redux';
import './Statistic.scss';

function StatisticCommon() {
  const amountOfDeletedWords = useSelector((state) => state.vocabularyDeletedWords.words.length);
  return (
    <div>
      <h3 className="statistic__item">Краткосрочная статистика (по дням обучения)</h3>
      <div className="statistic__common">
        <span>Количество изученных слов: </span>
        <span className="statistic__content__value">{amountOfDeletedWords}</span>
      </div>
      <div className="statistic__common">
        <span>Правильных ответов: </span>
        <span className="statistic__content__value">0</span>
        <span className="statistic__content__value">%</span>
      </div>
    </div>
  );
}

export default StatisticCommon;
