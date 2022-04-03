import React, { PureComponent } from "react";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  ResponsiveContainer,
  AreaChart,
  Area,
  ComposedChart,
  Line,
} from "recharts";

const DashBoard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 24111,
      revenue: 204012,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 42113,
      revenue: 245005,
    },
    {
      month: "May",
      investment: 500000,
      sell: 72611,
      revenue: 470106,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 52259,
      revenue: 404054,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 64201,
      revenue: 509001,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 474225,
      revenue: 620465,
    },
  ];

  return (
    <div className="flex items-center justify-evenly pt-16 flex-wrap">
      <div>
        <h2 className="text-center pb-5 text-xl font-[700] text-[#8884d8]">Investment vs Revenue</h2>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>

      <div>
        <PieChart width={400} height={300}>
          <Pie data={data} dataKey="revenue" cx="50%" cy="50%" outerRadius={90} fill="#8884d8" />
          <Pie
            data={data}
            dataKey="investment"
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={120}
            fill="#82ca9d"
            label
          />
        </PieChart>
        <h2 className="text-center pb-5 text-xl font-[700] text-[#8884d8]">Investment vs Revenue</h2>
      </div>

      <div className="mt-10">
        <AreaChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
        <h2 className="text-center pb-5 text-xl font-[700] text-[#8884d8]">Investment vs Revenue</h2>
      </div>

      <div className="mt-16">
        <ComposedChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="investment" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="investment" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="sell" stroke="#ff7300" />
        </ComposedChart>

        <h2 className="text-center pb-5 text-xl font-[700] text-[#8884d8]">Investment vs Revenue</h2>
      </div>
    </div>
  );
};

export default DashBoard;
