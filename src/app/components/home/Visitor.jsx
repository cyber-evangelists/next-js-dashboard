"use client";
import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import VisitorChart from "./VisitorChart";

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
        <VisitorChart />
      </div>
    </div>
  );
};
