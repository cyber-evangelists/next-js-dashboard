import React from "react";

export const Timeline = () => {
  return (
    <section className="bg-white px-5">
      <div className="flex gap-1 items-center">
        <div className="w-1 py-4 bg-[#38CAB3]"></div>
        <h1 className="font-medium">TIMELINE</h1>
      </div>
      <div className="flex flex-col justify-center pl-3 mt-5">
        {data.map((d, i) => (
          <List
            heading={d.heading}
            time={d.time}
            description={d.description}
            circleColor={d.circleColor}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

const List = ({ heading, time, description, circleColor }) => {
  return (
    <div className="relative">
      <div
        className={`border-2 rounded-full w-3 h-3 ${circleColor} absolute top-[30%]`}
      ></div>
      <div className="h-full w-full border-l border-gray-200 ml-[6px] pl-5 py-2">
        <div className="flex justify-between">
          <h1 className="text-xs">{heading}</h1>
          <h1 className="text-xs">{time}</h1>
        </div>
        <p className="text-slate-700 text-xs">{description}</p>
      </div>
    </div>
  );
};

const data = [
  {
    heading: "Anita Letterback",
    time: "11.43 pm",
    description: "Lorem ipsum dolor tempor incididunt .",
    circleColor: "border-slate-500",
  },
  {
    heading: "Anita Letterback",
    time: "11.43 pm",
    description: "Lorem ipsum dolor tempor incididunt .",
    circleColor: "border-orange-600",
  },
  {
    heading: "Anita Letterback",
    time: "11.43 pm",
    description: "Lorem ipsum dolor tempor incididunt .",
    circleColor: "border-yellow-500",
  },
  {
    heading: "Anita Letterback",
    time: "11.43 pm",
    description: "Lorem ipsum dolor tempor incididunt .",
    circleColor: "border-red-600",
  },
  {
    heading: "Anita Letterback",
    time: "11.43 pm",
    description: "Lorem ipsum dolor tempor incididunt .",
    circleColor: "border-cyan-500",
  },
  {
    heading: "Anita Letterback",
    time: "11.43 pm",
    description: "Lorem ipsum dolor tempor incididunt .",
    circleColor: "border-red-600",
  },
  {
    heading: "Anita Letterback",
    time: "11.43 pm",
    description: "Lorem ipsum dolor tempor incididunt .",
    circleColor: "border-cyan-500",
  },
];
