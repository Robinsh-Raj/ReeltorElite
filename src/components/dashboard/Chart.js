import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(...registerables);

const Chart = ({ section, data }) => {
  const datasets = Object.keys(data)
    .filter(key => key !== 'labels')
    .map((key, index) => ({
      label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
      data: data[key],
      fill: false,
      backgroundColor: index === 0 ? 'rgba(75, 192, 192, 0.2)' : 'rgba(255, 99, 132, 0.2)',
      borderColor: index === 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)',
      tension: 0.1
    }));

  const chartData = {
    labels: data.labels,
    datasets
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: `${section.charAt(0).toUpperCase() + section.slice(1)} Performance Metrics`
      }
    }
  };

  return (
    <div className="chart-container">
      <h3>Monthly Performance</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
