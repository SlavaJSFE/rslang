import React, { useEffect, useState } from 'react';

import './Statistic.scss';
import { getAllAnswers, getAllRightAnswers } from './utils';

function StatisticGameSprint({ gameName, statistics }) {
  const todayId = new Date().toLocaleString().slice(0, 10).replaceAll('.', '_');
  const [gameStatistics, setGameStatistics] = useState([]);
  const [allAnswers, setAllAnswers] = useState(0);
  const [allRightAnswers, setAllRightAnswers] = useState(0);

  useEffect(() => {
    if (statistics) {
      const data = statistics.filter(
        (word) => word.userWord.optional.stat[todayId][gameName],
      );
      setGameStatistics(data);
    }
  }, [statistics]);

  useEffect(() => {
    setAllAnswers(getAllAnswers(gameStatistics, todayId));
    setAllRightAnswers(getAllRightAnswers(gameStatistics, todayId));
  }, [gameStatistics]);

  return (
    <div className="statistic__card">
      <h4 className="statistic__item">{gameName}</h4>
      <div className="statistic__content">
        <div>
          <span>Количество изученных слов: </span>
          <span className="statistic__content__value">{allAnswers || 0}</span>
        </div>
        <div>
          <span>Правильных ответов: </span>
          <span className="statistic__content__value">
            {(allRightAnswers / allAnswers).toFixed(2) * 100 || 0}
          </span>
          <span className="statistic__content__value">%</span>
        </div>
        <div>
          <span>Самая длинная серия правильных ответов: </span>
          <span className="statistic__content__value">в разработке</span>
        </div>
      </div>
    </div>
  );
}

export default StatisticGameSprint;
