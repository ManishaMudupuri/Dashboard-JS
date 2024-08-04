// src/components/LineChartComponent.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Emp A', x: 4000, y: 2400, sales: 2400 },
  { name: 'Emp B', x: 3000, y: 1398, sales: 2210 },
  { name: 'Emp C', x: 2000, y: 9800, sales: 2290 },
  { name: 'Emp D', x: 2780, y: 3908, sales: 2000 },
  { name: 'Emp E', x: 1890, y: 4800, sales: 2181 },
  { name: 'Emp F', x: 2390, y: 3800, sales: 2500 },
  { name: 'Emp G', x: 3490, y: 4300, sales: 2100 },
];

const LineChartComponent = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart
      data={data}
      margin={{
        top: 20, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="x" stroke="#82ca9d" />
      <Line type="monotone" dataKey="y" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartComponent;
