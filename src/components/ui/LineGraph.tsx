"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Dot, Tooltip } from 'recharts';

export interface GraphDataPoint {
  month: string;
  value: number;
}

export interface LineGraphProps {
  data: GraphDataPoint[];
  currentPrice?: number;
  currentPriceLabel?: string;
  lineColor?: string;
  height?: number;
  showGrid?: boolean;
  showCurrentPrice?: boolean;
  domain?: [number, number];
  className?: string;
}

const LineGraph = ({
  data,
  currentPrice,
  currentPriceLabel,
  lineColor = "#10B981",
  height = 320,
  showGrid = true,
  showCurrentPrice = true,
  domain = [0, 2500],
  className = ""
}: LineGraphProps) => {
  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 text-white px-2 py-1 text-xs rounded whitespace-nowrap shadow-lg">
          PKR {payload[0].value.toLocaleString()}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`w-full ${className}`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 20,
          }}
        >
          {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />}
          <XAxis 
            dataKey="month" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9ca3af' }}
          />
          <YAxis 
            domain={domain}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9ca3af' }}
            tickFormatter={(value) => value.toString()}
          />
          <Tooltip 
            content={<CustomTooltip />}
            cursor={{ stroke: lineColor, strokeWidth: 2, strokeDasharray: '3 3' }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={lineColor}
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6, fill: lineColor, strokeWidth: 2, stroke: '#fff' }}
          />
          {showCurrentPrice && currentPrice && currentPriceLabel && (
            <Line
              type="monotone"
              dataKey="value"
              stroke="transparent"
              dot={(props: any) => {
                if (props.payload && props.payload.month === data[data.length - 1]?.month) {
                  return (
                    <g key={`current-price-${props.payload.month}`}>
                      <Dot 
                        cx={props.cx} 
                        cy={props.cy} 
                        r={4} 
                        fill={lineColor}
                      />
                   
                    </g>
                  );
                }
                return <g key={`dot-${props.payload?.month}`} />;
              }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

LineGraph.displayName = "LineGraph";

export { LineGraph };