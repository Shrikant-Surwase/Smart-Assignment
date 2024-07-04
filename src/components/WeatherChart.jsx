import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
const WeatherChart = ({ data }) => {
  const chartData = {
    labels: data.map(day => day.date),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(day => day.temperature),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default WeatherChart;
