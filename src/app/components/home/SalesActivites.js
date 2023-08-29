"use client"
import React, { useEffect, useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import Mychart from "./Mychart";
import TestMyChart from "./TestMyChart";

export const SalesActivites = () => {
  // const [str, setStr] = useState('');

  // useEffect(() => {
  //   const handleResize = () => {
  //     //const newWidth = window.innerWidth > 768 ? 550 : 270; // You can adjust the breakpoint and widths
      
  //     if(window.innerWidth > 768) {
  //       setStr(`w-[570px]`)
  //     }
  //     else if(window.innerWidth > 1200){
  //       setStr(`w-[770px]`)
  //     }
  //     else{
  //       setStr(`w-[290px]`)
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize(); // Initial setup

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  return (
    <div className="px-1 md:px-4 font-secondary">
      <section className={`bg-white shadow-md xl:pb-[23px]`}>
        <main className="px-5 py-5 mt-4 pb-4">
          <nav className="block lg:flex justify-between">
            <div className="flex gap-1 items-center">
              <div className="w-1 py-4 bg-primary"></div>
              <h1 className="font-semibold text-lg font-secondary ">SALES ACTIVITY</h1>
            </div>
            <div className="flex items-center gap-3">
              <a className="cursor-pointer py-1 lg:px-2 hover:bg-slate-100 transition-all ease-in-out rounded">
                Week
              </a>
              <a className="cursor-pointer py-1 lg:px-2 hover:bg-slate-100 transition-all ease-in-out rounded">
                Month
              </a>
              <a className="cursor-pointer py-1 lg:px-2 hover:bg-slate-100 transition-all ease-in-out rounded">
                Year
              </a>
            </div>
          </nav>
          <section className="lg:mx-10 flex flex-col items-start justify-center gap-5 md:flex-row md:justify-between mt-10">
            <Stats
              cash="$52,618"
              duration="This week"
              percentage="0.9%"
              pColor="bg-[#18A558]"
              iconColor="text-[#18A558]"
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
              pColor="bg-[#18A558]"
              iconColor="text-[#18A558]"
            />
          </section>
          <TestMyChart />
        </main>
      </section>
    </div>
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
