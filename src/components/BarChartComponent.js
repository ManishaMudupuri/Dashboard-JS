// src/components/BarChartComponent.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Cust A', a: 4000, b: 2400, amt: 2400 },
  { name: 'Cust B', a: 3000, b: 1398, amt: 2210 },
  { name: 'Cust C', a: 2000, b: 9800, amt: 2290 },
  { name: 'Cust D', a: 2780, b: 3908, amt: 2000 },
  { name: 'Cust E', a: 1890, b: 4800, amt: 2181 },
  { name: 'Cust F', a: 2390, b: 3800, amt: 2500 },
  { name: 'Cust G', a: 3490, b: 4300, amt: 2100 },
];

const BarChartComponent = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
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
      <Bar dataKey="a" fill="#8884d8" />
      <Bar dataKey="b" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarChartComponent;
