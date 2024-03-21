import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './LineChart2.css';

const usageData = require('../../ai-data.json')

const LineChartComponent2 = () => {
    const { by_country: countryData } = usageData.usage_statistics;
    const countryEntries = Object.entries(countryData);
    
    return (
        <div className='linechart'>
            <ResponsiveContainer width="100%" height={600}>
                <LineChart
                    data={countryEntries}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="0" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="1" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartComponent2;
