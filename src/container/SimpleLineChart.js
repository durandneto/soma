import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Mon', NovasQueries: 2200, Execucoes: 3400 },
  { name: 'Tue', NovasQueries: 1280, Execucoes: 2398 },
  { name: 'Wed', NovasQueries: 5000, Execucoes: 4300 },
  { name: 'Thu', NovasQueries: 4780, Execucoes: 2908 },
  { name: 'Fri', NovasQueries: 5890, Execucoes: 4800 },
  { name: 'Sat', NovasQueries: 4390, Execucoes: 3800 },
  { name: 'Sun', NovasQueries: 4490, Execucoes: 4300 },
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Execucoes" stroke="#82ca9d" />
        <Line type="monotone" dataKey="NovasQueries" 
        stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;