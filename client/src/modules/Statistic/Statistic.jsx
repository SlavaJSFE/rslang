import React from 'react';
import { useSelector } from 'react-redux';

import './Statistic.scss';
import StatisticCommon from './StatisticCommon';
import GameStatistic from './GameStatistic';
import {
  AUDIO_CALL_RU, MEMORY_RU, SAVANNAH_RU, SPRINT_RU,
} from '../../constants/constants';

export default function Statistic() {
  const statistics = useSelector((state) => state.statistics.statistics);
  return (
    <div className="statistic">
      <StatisticCommon statistics={statistics} />
      <div>
        <h4 className="statistic__item">Статистика по мини-играм</h4>
        <div className="statistic__list">
          <GameStatistic gameName={SAVANNAH_RU} statistics={statistics} />
          <GameStatistic gameName={AUDIO_CALL_RU} statistics={statistics} />
          <GameStatistic gameName={SPRINT_RU} data={[]} />
          <GameStatistic gameName={MEMORY_RU} data={[]} />
        </div>
      </div>
      <h3 className="statistic__item">Долгосрочная статистика</h3>
    </div>
  );
}
