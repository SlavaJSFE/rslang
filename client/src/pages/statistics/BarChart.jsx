import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Gist.scss';

export default function Chart({ barChartData, displayTitle }) {
  return (
    <div className="chart">
      <Bar
        data={barChartData}
        options={{
          title: {
            display: { displayTitle },
            text: 'Статистика по дням обучения',
            fontSize: 17,
          },
        }}
      />
    </div>
  );
}
