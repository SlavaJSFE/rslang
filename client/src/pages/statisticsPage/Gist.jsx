import React, { useState, useEffect } from 'react';
import './Gist.scss';
import BarChart from './BarChart';
import LineChart from './LineChart';

export default function Gist() {
  const [barChartData, setBarChartData] = useState();
  const statisticBarDate = ['01.04.2021', '02.04.2021', '03.04.2021', '04.04.2021', '05.04.2021', '06.04.2021', '07.04.2021', '08.04.2021'];
  const statisticBarValue = [6175, 1810, 1530, 1065, 1051, 950, 2500, 1323];

  const [lineChartData, setLineChartData] = useState();
  const statisticLineDate = ['01.04.2021', '02.04.2021', '03.04.2021', '04.04.2021', '05.04.2021', '06.04.2021', '07.04.2021'];
  const statisticLineValue = [100, 168, 234, 345, 454, 521, 645];

  const getBarChartData = () => {
    setBarChartData({
      labels: statisticBarDate,
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
      labels: statisticLineDate,
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
