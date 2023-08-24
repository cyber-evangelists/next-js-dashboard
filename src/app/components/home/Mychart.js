"use client";
import React from "react";
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
// import { faker } from "@faker-js/faker";

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
      text: "Line Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Feb",
  "January",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [120, 130, 110, 120, 135, 115, 160, 120],
      borderColor: "rgba(56, 202, 179)",
      backgroundColor: "rgba(56, 202, 179, 1)",
    },
  ],
};

const Mychart = () => {
  return (
    <div className="w-full px-5">
      <Line options={options} data={data} />
    </div>
  );
};

export default Mychart;

// import { faker } from '@faker-js/faker';
