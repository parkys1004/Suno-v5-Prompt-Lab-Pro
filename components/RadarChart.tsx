import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { ATTRIBUTE_LABELS } from '../constants';

interface RadarChartProps {
  data: number[];
  category: "Standard" | "K-POP";
}

export const RadarChartComponent: React.FC<RadarChartProps> = ({ data, category }) => {
  const chartData = ATTRIBUTE_LABELS.map((label, index) => ({
    subject: label,
    A: data[index],
    fullMark: 10,
  }));

  const color = category === 'K-POP' ? '#db2777' : '#3b82f6';
  const fillColor = category === 'K-POP' ? 'rgba(219, 39, 119, 0.15)' : 'rgba(59, 130, 246, 0.15)';

  return (
    <div className="chart-container-inner" style={{ minHeight: '320px' }}>
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#4b5563', fontSize: 12, fontWeight: 700 }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
          <Radar
            name="Genre Attributes"
            dataKey="A"
            stroke={color}
            strokeWidth={3}
            fill={fillColor}
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};