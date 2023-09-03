import React from "react";

const statsData = [
  {
    contry: "Pakistan",
    border: "border-yellow-500",
    price: "$32,879 (65%)",
    lineColor: "bg-yellow-500",
    width: "w-[58%]",
  },
  {
    contry: "Russia",
    border: "border-cyan-500",
    price: "$32,879 (65%)",
    lineColor: "bg-cyan-500",
    width: "w-[79%]",
  },
  {
    contry: "Canada",
    border: "border-blue-800",
    price: "$32,879 (65%)",
    lineColor: "bg-blue-800",
    width: "w-[52%]",
  },
  {
    contry: "Brazil",
    border: "border-orange-500",
    price: "$12,279 (65%)",
    lineColor: "bg-orange-500",
    width: "w-[93%]",
  },
  {
    contry: "United States",
    border: "border-gray-600",
    price: "$32,879 (65%)",
    lineColor: "bg-gray-600",
    width: "w-[72%]",
  },
  {
    contry: "Germany",
    border: "border-red-700",
    price: "$22,813 (65%)",
    lineColor: "bg-red-700",
    width: "w-[88%]",
  },
];
const Stats = () => {
  return (
    <div className="px-1 md:px-4 font-secondary">
      <div className="mt-4 shadow-md bg-white px-5 py-10">
        <div className="flex gap-1 items-center">
          <div className="w-1 py-4 bg-primary"></div>
          <h1 className="font-semibold text-lg">Statistics</h1>
        </div>
        {statsData.map((d, i) => (
          <CallStats
            key={i}
            contry={d.contry}
            price={d.price}
            lineColor={d.lineColor}
            border={d.border}
            width={d.width}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats;

const CallStats = ({ contry, price, lineColor, width, border }) => {
  return (
    <>
      <div className="flex justify-between items-center flex-grow my-4 text-xs">
        <h1>{contry}</h1>
        <h1>{price}</h1>
      </div>
      <div>
        <div className={`${lineColor} ${width} h-[6px] relative rounded`}>
          <span
            className={`absolute w-3 h-3 rounded-full shadow-2xl bg-white border-2 ${border} -right-1 top-[-3px]`}
          ></span>
        </div>
      </div>
    </>
  );
};
