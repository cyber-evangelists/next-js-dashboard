"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
    //   text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["1", "2", "3", "4", "5", "6", "7"];

export const data = {
  labels,
  datasets: [
    {
      label: "This Week",
      data: [140, 210, 210, 190, 235, 152, 60, 220],
      backgroundColor: "rgba(110, 254, 228, 1)",
    },
    {
      label: "Last Week",
      data: [120, 130, 110, 120, 135, 115, 160, 120],
      backgroundColor: "rgba(242, 243, 243, 1)",
    },
  ],
};

export const WeeklyBd = () => {
  return (
    <>
      <div className="mt-4 shadow-md px-5 py-10">
        <div className="flex gap-1 items-center">
          <div className="w-1 py-4 bg-[#38CAB3]"></div>
          <h1 className="font-medium">WEEKLY BUDGET</h1>
        </div>
        <Bar options={options} data={data} />
      </div>
    </>
  );
};
