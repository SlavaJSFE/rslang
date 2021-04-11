import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Gist.scss';
import BarChart from './BarChart';
import LineChart from './LineChart';
import { getAllDate, getAllBarValues, getAllLineValues } from './utils';

export default function Gist() {
  const statistics = useSelector((state) => state.statistics.statistics);
  const statisticDate = getAllDate(statistics);

  const [barChartData, setBarChartData] = useState();
  const statisticBarValue = getAllBarValues(statistics);

  const [lineChartData, setLineChartData] = useState();
  const statisticLineValue = getAllLineValues(statistics);

  const getBarChartData = () => {
    setBarChartData({
      labels: statisticDate,
      datasets: [
        {
          label: '',
          data: statisticBarValue,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)',
          ],
        },
      ],
    });
  };

  const getLineChartData = () => {
    setLineChartData({
      labels: statisticDate,
      datasets: [
        {
          label: '',
          data: statisticLineValue,
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
          ],
        },
      ],
    });
  };

  useEffect(() => {
    getBarChartData();
    getLineChartData();
  }, []);

  return (
    <div className="statistic__graphics">
      <div className="statistic__graphics__content">
        <BarChart barChartData={barChartData} legendPosition="bottom" />
        <div className="graphics-line" />
        <LineChart lineChartData={lineChartData} legendPosition="bottom" />
      </div>
    </div>
  );
}
