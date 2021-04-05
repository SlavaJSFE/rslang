import React from 'react';
import './Statistic.scss';
import StatisticCommon from './StatisticCommon';
import GameStatistic from './GameStatistic';

export default function Statistic() {
  return (
    <div className="statistic">
      <StatisticCommon />
      <div>
        <h4 className="statistic__item">Статистика по мини-играм</h4>
        <div className="statistic__list">
          <GameStatistic gameName="Саванна" data={[]} />
          <GameStatistic gameName="Аудиовызов" data={[]} />
          <GameStatistic gameName="Спринт" data={[]} />
          <GameStatistic gameName="Своя игра" data={[]} />
        </div>
      </div>
      <h3 className="statistic__item">Долгосрочная статистика</h3>
    </div>
  );
}
