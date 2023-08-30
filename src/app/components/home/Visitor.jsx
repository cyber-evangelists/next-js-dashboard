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
import MyChartTwo from "./MyChartTwo";

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
      borderColor: "#a181fd",
      backgroundColor: "#a181fd",
    },
    {
      label: "Female",
      data: [140, 110, 150, 190, 205, 113, 134, 163],
      borderColor: "#DF81FD",
      backgroundColor: "#DF81FD",
    },
  ],
};

export const Visitor = () => {
  return (
    <div className="px-1 md:px-4 font-secondary">
      <div className="mt-4 shadow-md bg-white px-5 py-5">
        <div className="flex gap-1 items-center">
          <div className="w-1 py-4 bg-primary"></div>
          <h1 className="font-semibold text-lg">WEEKLY VISITORS</h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-4">
          <h1 className="text-xs text-[#B7BAC3]">Average Male Visitors</h1>
          <h1 className="text-xs text-[#B7BAC3]">Average Female Visitors</h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between mt-4">
          <div className="flex items-center gap-5">
            <h1 className="text-xl font-medium">2,132</h1>
            <h1 className="text-[#18A558] text-center">
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
        {/* <Line options={options} data={data} className="min-h-[300px]" /> */}
        <MyChartTwo />
      </div>
    </div>
  );
};
