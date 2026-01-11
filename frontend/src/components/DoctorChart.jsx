import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

import chartData from "../data/chartData";
import BellShape from "./BellShape";

const DoctorChart = () => {
  return (
    <div className="bg-white p-10 rounded-2xl shadow mb-14">
      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={chartData}
          barSize={110}              
          barCategoryGap={60}        
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
          />

          <YAxis
            domain={[0, 1800]}
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
          />

          <Bar
            dataKey="value"
            shape={<BellShape />}
            isAnimationActive={true}
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DoctorChart;
