import React from 'react';
import { Line } from 'react-chartjs-2';

export default function Chart({ lineChartData, displayTitle }) {
  return (
    <div className="chart">
      <Line
        data={lineChartData}
        options={{
          title: {
            display: { displayTitle },
            text: 'Статистика за весь период обучения',
            fontSize: 17,
          },
        }}
      />
    </div>
  );
}
