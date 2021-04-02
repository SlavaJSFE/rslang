import React, { useState, useEffect } from 'react';
import './Gist.css';
import Chart from './Chart';

export default function Gist() {
  const [chartData, setChartData] = useState();
  const statisticDate = ['01.04.2021', '02.04.2021', '03.04.2021', '04.04.2021', '05.04.2021', '06.04.2021', '07.04.2021', '08.04.2021'];
  const statisticValue = [6175, 1810, 1530, 1065, 1051, 950, 2500];

  const getChartData = () => {
    setChartData({
      labels: statisticDate,
      datasets: [
        {
          label: '',
          data: statisticValue,
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

  useEffect(() => {
    getChartData();
  }, []);

  return (
    <div className="App2">
      <Chart chartData={chartData} legendPosition="bottom" />
    </div>
  );
}
