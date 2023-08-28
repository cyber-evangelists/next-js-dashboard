import React from "react";

export const MainTask = () => {
  return (
    <>
      <div className="mt-4 shadow-md px-5 py-10">
        <div className="flex gap-1 items-center">
          <div className="w-1 py-4 bg-[#38CAB3]"></div>
          <h1 className="font-medium">MAIN TASKS</h1>
        </div>
        <div>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="inline-block text-white"
                style={{ accentColor: "#38CAB3" }}
              />
              <h1>accurate information at any given point.</h1>
            </div>
            <div className="bg-[#38CAB3] px-2 text-white rounded text-xs py-1">
              Today
            </div>
          </div>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="inline-block text-white"
                style={{ accentColor: "#38CAB3" }}
              />
              <h1>sharing the information with clients or stakeholders.</h1>
            </div>
            <div className="bg-[#38CAB3] px-2 text-white rounded text-xs py-1">
              Today
            </div>
          </div>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="inline-block text-white"
                style={{ accentColor: "#38CAB3" }}
              />
              <h1>Hearing the information and responding .</h1>
            </div>
            <div className="bg-[#38CAB3] px-2 text-white rounded text-xs py-1">
              Today
            </div>
          </div>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="inline-block text-white"
                style={{ accentColor: "#38CAB3" }}
              />
              <h1>Setting up and customizing your own sales.</h1>
            </div>
            <div className="bg-[#38CAB3] px-2 text-white rounded text-xs py-1">
              Today
            </div>
          </div>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="inline-block text-white"
                style={{ accentColor: "#38CAB3" }}
              />
              <h1>
                To have a complete 360° overview of sales information, having.
              </h1>
            </div>
            <div className="bg-[#38CAB3] px-2 text-white rounded text-xs py-1">
              Today
            </div>
          </div>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="inline-block text-white"
                style={{ accentColor: "#38CAB3" }}
              />
              <h1>New Admin Launched.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
