import React from 'react';
import './Statistic.scss';

function StatisticCommon() {
  return (
    <div>
      <h3 className="statistic__item">Краткосрочная статистика (по дням обучения)</h3>
      <div className="statistic__common">
        <span>Количество изученных слов: </span>
        <span className="statistic__content__value">0</span>
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
