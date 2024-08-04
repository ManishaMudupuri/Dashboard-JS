// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

// Sample data
const invoiceData = [
  {"Date": "2024-01-01", "Amount": 1200},
  {"Date": "2024-02-01", "Amount": 1500},
  {"Date": "2024-03-01", "Amount": 1000},
  {"Date": "2024-04-01", "Amount": 2000},
  {"Date": "2024-05-01", "Amount": 1700}
];

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Energy Consumption',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  });

  useEffect(() => {
    const labels = invoiceData.map(item => item.Date);
    const data = invoiceData.map(item => item.Amount);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Energy Consumption',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
        },
      ],
    });
  }, []);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard">
      <h2>Energy Consumption Overview</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Dashboard;
