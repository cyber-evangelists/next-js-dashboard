"use client"
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"; 
 
const data = [
    {
      name: "A",
      LastWeek: 4000,
      ThisWeek: 2400,
    },
    {
      name: "B",
      LastWeek: 3000,
      ThisWeek: 1398,
    },
    {
      name: "C",
      LastWeek: 2000,
      ThisWeek: 4000,
    },
    {
      name: "D",
      LastWeek: 2780,
      ThisWeek: 3908,
    },
    {
      name: "E",
      LastWeek: 1890,
      ThisWeek: 4800,
    },
    // {
    //   name: "Page F",
    //   LastWeek: 2390,
    //   ThisWeek: 3800,
    //   amt: 2500,
    // },
    // {
    //   name: "Page G",
    //   LastWeek: 3490,
    //   ThisWeek: 4300,
    //   amt: 2100,
    // },
  ];

export default function BudgetCharty() {
  const [selectedLegendOne, setSelectedLegendOne] = useState(true);
  const [selectedLegendTwo, setSelectedLegendTwo] = useState(true);
  const [barData, setBarData] = useState(data)

//   const handleLegendMouseEnter = (e) => {
//     console.log("here", e.dataKey);
//     setSelectedLegend(e.dataKey);
//   };

//   const handleLegendMouseLeave = () => {
//     setSelectedLegend(null);
//   };

  const selectBar = (e) => {
    if(e.dataKey === "ThisWeek"){
        if(barData[0].ThisWeek !== 0){
            const updateData =  barData.map((p)=>({...p , ThisWeek : 0}));
       setBarData(updateData);
        }
       
        else{
            setBarData(data)
        }
    }
    else{
        if(barData[0].LastWeek !== 0){
            const updateData =  barData.map((p)=>({...p , LastWeek : 0}));
       setBarData(updateData);
        }
       
        else{
            setBarData(data)
        }
    }
  };

  return (
    <section className="mt-5">
      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          // width="100%"
          // height={300}
          data={barData}
          margin={{
            top: 5,
            // right: 30,
            // left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            onClick={selectBar}
            // onMouseOver={handleLegendMouseEnter}
            // onMouseOut={handleLegendMouseLeave}
          />
          {/* <Bar dataKey="ThisWeek" fill={selectedLegendOne  ? "#8884d8" : "#FFF"} /> */}
          <Bar dataKey={selectedLegendOne  ? "ThisWeek" : " "} fill="#8884d8" />
          <Bar dataKey={selectedLegendOne  ? "LastWeek" : " "} fill="#82ca9d" />
          {/* <Bar dataKey="LastWeek" fill={selectedLegendTwo  ? "#82ca9d" : "#FFF"} /> */}
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
