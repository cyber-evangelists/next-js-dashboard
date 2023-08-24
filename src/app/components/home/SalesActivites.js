import React from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import Mychart from "./Mychart";

export const SalesActivites = () => {
  return (
    <>
      <main className="mt-4 bg-white items-center pb-4 shadow-md w-[70%]">
        <nav className="flex justify-between ">
          <div className="flex gap-1 items-center">
            <div className="w-1 py-4 bg-[#38CAB3]"></div>
            <h1 className="font-medium">SALES ACTIVITY</h1>
          </div>
          <div className="flex items-center gap-3">
            <a className="cursor-pointer py-1 px-2 hover:bg-slate-100 transition-all ease-in-out rounded">Week</a>
            <a className="cursor-pointer py-1 px-2 hover:bg-slate-100 transition-all ease-in-out rounded">Month</a>
            <a className="cursor-pointer py-1 px-2 hover:bg-slate-100 transition-all ease-in-out rounded">Year</a>
          </div>
        </nav>
        <section className="mx-10 flex justify-between mt-10">
          <Stats
            cash="$52,618"
            duration="This week"
            percentage="0.9%"
            pColor="bg-[#24D5B8]"
            iconColor="text-[#24D5B8]"
          />
          <Stats
            cash="$11,197"
            duration="This Month"
            percentage="0.15%"
            pColor="bg-[#F34343]"
            iconColor="text-[#F34343] transform rotate-180"
          />
          <Stats
            cash="$1,143"
            duration="Today"
            percentage="0.11%"
            pColor="bg-[#24D5B8]"
            iconColor="text-[#24D5B8]"
          />
        </section>
        <Mychart />
      </main>
    </>
  );
};

const Stats = ({ cash, duration, percentage, pColor, iconColor }) => {
  return (
    <>
      <section>
        <h1 className="text-xs">Total Sales</h1>
        <h1 className="text-lg font-medium">{cash}</h1>
        <div className="flex items-center gap-2">
          <h1 className="text-xs">{duration}</h1>
          <BiSolidUpArrow className={`${iconColor} text-xs`} />
          <div
            className={`px-2 rounded-lg ${pColor} text-white text-xs text-center py-[2px]`}
          >
            {percentage}
          </div>
        </div>
      </section>
    </>
  );
};
