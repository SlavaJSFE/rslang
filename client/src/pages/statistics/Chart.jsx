import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

export default function Chart({ chartData, displayTitle }) {
  return (
    <div className="chart">
      <Bar
        data={chartData}
        options={{
          title: {
            display: { displayTitle },
            text: 'Статистика по дням',
            fontSize: 25,
          },

        }}
      />

      <Line
        data={chartData}
        options={{
          title: {
            display: { displayTitle },
            text: 'Статистика за весь период изучения',
            fontSize: 25,
          },
        }}
      />
    </div>
  );
}
