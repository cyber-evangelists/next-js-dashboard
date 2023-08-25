import React from "react";

const Stats = () => {
  return (
    <div className="mt-4 shadow-md px-5 mb-20 py-10">
      <div className="flex gap-1 items-center">
        <div className="w-1 py-4 bg-[#38CAB3]"></div>
        <h1 className="font-medium">Statistics</h1>
      </div>
      <CallStats
        contry="Pakistan"
        border="border-yellow-500"
        price="$32,879 (65%)"
        lineColor="bg-yellow-500"
        width="w-[58%]"
      />
      <CallStats
        contry="Russia"
        price="$32,879 (65%)"
        border="border-cyan-500"
        lineColor="bg-cyan-500"
        width="w-[79%]"
      />
      <CallStats
        contry="Canada"
        border="border-blue-800"
        price="$32,879 (65%)"
        lineColor="bg-blue-800"
        width="w-[52%]"
      />
      <CallStats
        contry="Brazil"
        border="border-orange-500"
        price="$32,879 (65%)"
        lineColor="bg-orange-500"
        width="w-[93%]"
      />
      <CallStats
        contry="United States"
        price="$32,879 (65%)"
        border="border-gray-600"
        lineColor="bg-gray-600"
        width="w-[72%]"
      />
      <CallStats
        contry="Germany"
        price="$32,879 (65%)"
        lineColor="bg-red-700"
        border="border-red-700"
        width="w-[88%]"
      />
      <CallStats
        contry="India"
        price="$32,879 (65%)"
        lineColor="bg-yellow-800"
        border="border-yellow-800"
        width="w-[45%]"
      />
      <CallStats
        contry="China"
        price="$32,879 (65%)"
        lineColor="bg-indigo-600"
        width="w-[80%]"
        border="border-indigo-600"
      />
    </div>
  );
};

export default Stats;

const CallStats = ({ contry, price, lineColor, width, border }) => {
  return (
    <>
      <div className="flex justify-between items-center flex-grow my-2">
        <h1>{contry}</h1>
        <h1>{price}</h1>
      </div>
      <div>
        <div className={`${lineColor} ${width} h-2 relative rounded`}>
          <span
            className={`absolute w-4 h-4 rounded-full bg-white border-2 ${border} -right-1 -top-1`}
          ></span>
        </div>
      </div>
    </>
  );
};
