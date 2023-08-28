"use client";
import React from "react";
import { BiLinkExternal, BiSolidUpArrow } from "react-icons/bi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import { BsCurrencyDollar, BsFillCreditCard2BackFill } from "react-icons/bs";

export const Header = () => {
  return (
    <>
      <section className="mt-4 flex lg:flex-row flex-col shadow-md px-5">
        <div className="flex flex-col lg:w-1/2 bg-white border-r">
          <Design
            icon={RiShoppingBag3Line}
            heading="Today Orders"
            headNumber="5,472"
            percentage="0.36%"
            iconColor="bg-[#4EC2F0]"
            bgColor="bg-[#D1EBE7]"
          />
          <Design
            icon={BsCurrencyDollar}
            heading="Profit gain"
            headNumber="$47,589"
            percentage="3.13%"
            iconColor="bg-[#FFBD5A]"
            bgColor="bg-[#D1EBE7]"
          />
        </div>
        <div className="flex flex-col lg:w-1/2 bg-white">
          <Design
            icon={BsFillCreditCard2BackFill}
            heading="Today Earning"
            headNumber="$8,943"
            percentage="0.05%"
            bgColor="bg-[#FDD9D9]"
            iconColor="bg-[#F74F75]"
          />
          <Design
            icon={BiLinkExternal}
            heading="Total Earning"
            headNumber="$57.12M"
            percentage="0.11%"
            iconColor="bg-[#38CAB3]"
            bgColor="bg-[#D1EBE7]"
          />
        </div>
      </section>
    </>
  );
};

const Design = ({ icon, heading, headNumber, percentage, iconColor, bgColor }) => {
  const IconComponent = icon || RiShoppingBag3Line;
  return (
    <>
      <section className="p-10 flex items-center justify-between">
        <div className="flex gap-10">
          <div>
            <div className={`w-10 h-10 rounded-full flex justify-center items-center ${iconColor} text-white`}>
              <IconContext.Provider value={{ size: "1.2rem" }}>
                <IconComponent />
              </IconContext.Provider>
            </div>
          </div>
          <div>
            <h1 className="text-xs mb-2">{heading}</h1>
            <h1 className="text-lg font-medium">{headNumber}</h1>
          </div>
        </div>
        <div className={`${bgColor} flex justify-center items-center rounded-full px-2 py-1 gap-1 text-xs`}>
          <BiSolidUpArrow className=""/> {percentage}
        </div>
      </section>
    </>
  );
};
