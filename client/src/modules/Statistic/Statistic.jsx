import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Statistic.scss';
import StatisticCommon from './StatisticCommon';
import GameStatistic from './GameStatistic';
import { getStatistics } from '../../redux/statistics/actions';
import { gameNames } from '../../constants/constants';

export default function Statistic() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatistics());
  }, []);
  const statistics = useSelector((state) => state.statistics.statistics);
  return (
    <div className="statistic">
      <StatisticCommon statistics={statistics} />
      <div>
        <h4 className="statistic__item">Статистика по мини-играм</h4>
        <div className="statistic__list">
          <GameStatistic gameName={gameNames.savannah} statistics={statistics} />
          <GameStatistic gameName={gameNames.audioCall} statistics={statistics} />
          <GameStatistic gameName="Спринт" data={[]} />
          <GameStatistic gameName="Своя игра" data={[]} />
        </div>
      </div>
      <h3 className="statistic__item">Долгосрочная статистика</h3>
    </div>
  );
}
