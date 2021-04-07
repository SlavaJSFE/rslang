import React, { useEffect, useState } from 'react';
import './Statistic.scss';
import { getAllAnswers, getAllRightAnswers } from './utils';

function StatisticCommon({ statistics }) {
  const todayId = new Date().toLocaleString().slice(0, 10).replaceAll('.', '_');
  const [correctPercentage, setCorrectPercentage] = useState(0);

  useEffect(() => {
    if (statistics) {
      const allAnswers = getAllAnswers(statistics, todayId);
      const allRightAnswers = getAllRightAnswers(statistics, todayId);
      setCorrectPercentage((allRightAnswers / allAnswers).toFixed(2));
    }
  }, [statistics]);

  return (
    <div>
      <h3 className="statistic__item">
        Краткосрочная статистика (по дням обучения)
      </h3>
      <div className="statistic__common">
        <span>Количество изученных слов: </span>
        <span className="statistic__content__value">
          {statistics?.length || 0}
        </span>
      </div>
      <div className="statistic__common">
        <span>Правильных ответов: </span>
        <span className="statistic__content__value">
          {correctPercentage * 100}
        </span>
        <span className="statistic__content__value">%</span>
      </div>
    </div>
  );
}

export default StatisticCommon;
