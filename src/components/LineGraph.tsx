import React, { Component } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar
} from "recharts";

export default function LineGraph(props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={props.weatherVal}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Users.count"
          name="Users"
          stroke="rgb(106, 110, 229)"
          fill="rgba(106, 110, 229, .16)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
