"use client";
import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
    //   text: "Chart.js Line Chart",
    },
  },
};

const labels = ["0", "1", "2", "3", "4", "5", "6", "7"];

export const data = {
  labels,
  datasets: [
    {
      label: "Male",
      data: [120, 130, 110, 120, 135, 115, 160, 120],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Female",
      data: [140, 110, 150, 190, 205, 113, 134, 163],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const Visitor = () => {
  return (
    <div className="mt-4 shadow-md px-5 py-10">
      <div className="flex gap-1 items-center">
        <div className="w-1 py-4 bg-[#38CAB3]"></div>
        <h1 className="font-medium">WEEKLY VISITORS</h1>
      </div>
      <div className="flex justify-between mt-4">
        <h1 className="text-xs text-[#B7BAC3]">Average Male Visitors</h1>
        <h1 className="text-xs text-[#B7BAC3]">Average Female Visitors</h1>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-5">
          <h1 className="text-xl font-medium">2,132</h1>
          <h1 className="text-[#24D5B8] text-center">
            <BiSolidUpArrow className="text-xs" /> 0.23%
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <h1 className="text-xl font-medium">1,053</h1>
          <h1 className="text-[#F34343] text-center">
            <BiSolidUpArrow className="text-xs transform rotate-180" /> 0.11%
          </h1>
        </div>
      </div>
      <Line options={options} data={data} className="min-h-[20rem]"/>
    </div>
  );
};
