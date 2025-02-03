import React from 'react';

interface BarChartProps {
  data: {
    label: string;
    value: number;
    percentage: number;
  }[];
  title: string;
}

export const BarChart: React.FC<BarChartProps> = ({ data, title }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">{title}</h3>
      <div className="space-y-5">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-600">
                  {item.percentage}%
                </span>
              </div>
              <span className="text-sm text-gray-600">{item.value.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}