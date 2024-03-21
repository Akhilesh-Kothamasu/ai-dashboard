import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import './PieChart.css';

const data = require('../../ai-data.json')

const PieChartComponent = () => {
  const { usage_statistics } = data;
  const countryData = Object.entries(usage_statistics.by_country).map(([country, count]) => ({ name: country, value: count }));

  // Generate random color for each pie slice
  const getRandomColor = () => '#' + Math.floor(Math.random()*16777215).toString(16);

  return (
    <div className='piechart'>
    <PieChart width={400} height={300}>
      <Pie data={countryData} dataKey="value" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
        {countryData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={getRandomColor()} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </div>
  );
};

export default PieChartComponent;
