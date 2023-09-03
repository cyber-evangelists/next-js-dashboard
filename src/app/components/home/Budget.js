"use client";
import React from "react";
import BudgetChart from "./BudgetChart";



export const Budget = () => {
  return (
    <section className="px-1 md:px-4 font-secondary">
      <div className="mt-4 shadow-md px-5 py-10 bg-white">
        <div className="flex gap-1 items-center">
          <div className="w-1 py-4 bg-primary"></div>
          <h1 className="font-semibold text-lg">WEEKLY BUDGET</h1>
        </div>
        <BudgetChart />
      </div>
    </section>
  );
};
