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
      // text: "Line Chart",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [120, 130, 110, 120, 135, 115, 140],
      borderColor: "#a181fd",
      backgroundColor: "#a181fd",
      // borderRadius: "100px"
    },
  ],
};

const Mychart = () => {
  return (
      <Line options={options} data={data} className="w-full mx-auto min-h-[20rem]"/>
  );
};

export default Mychart;

// import { faker } from '@faker-js/faker';
