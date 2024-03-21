import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./LineChart.css";

const data = require('../../ai-data.json');

const LineChartComponent = () => {
  return (
    <div className='linechart'>
    <ResponsiveContainer width="80%" height={600}>
      <LineChart
        data={data.user_satisfaction.ratings}
        margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="rating" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;
