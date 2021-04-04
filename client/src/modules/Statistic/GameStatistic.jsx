import React from 'react';
import './Statistic.scss';

function StatisticGameSprint({ gameName }) {
  return (
    <div className="statistic__card">
      <h4 className="statistic__item">{gameName}</h4>
      <div className="statistic__content">
        <div>
          <span>Количество изученных слов: </span>
          <span className="statistic__content__value">0</span>
        </div>
        <div>
          <span>Правильных ответов: </span>
          <span className="statistic__content__value">0</span>
          <span className="statistic__content__value">%</span>
        </div>
        <div>
          <span>Самая длинная серия правильных ответов: </span>
          <span className="statistic__content__value">0</span>
        </div>
      </div>
    </div>
  );
}

export default StatisticGameSprint;
