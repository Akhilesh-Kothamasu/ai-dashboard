import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./BarChart.css";

const usageData = require('../../ai-data.json');

const BarChartComponent = () => {
    const { by_platform: platformData } = usageData.usage_statistics;
    const platformEntries = Object.entries(platformData);
    
    return (
        <div className='barchart'>
            <ResponsiveContainer width="100%" height={600}>
                <BarChart data={platformEntries}>
                    <XAxis dataKey="0" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="1" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;
