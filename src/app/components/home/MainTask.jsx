import React from "react";

export const MainTask = () => {
  return (
    <section className="px-1 md:px-4 font-secondary">
      <div className="mt-4 shadow-md px-5 py-10">
        <div className="flex gap-1 items-center">
          <div className="w-1 py-4 bg-primary"></div>
          <h1 className="font-semibold text-lg">MAIN TASKS</h1>
        </div>
        <div>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="inline-block text-white"
                style={{ accentColor: "#a181fd" }}
              />
              <h1>accurate information at any given point.</h1>
            </div>
            <div className="bg-primary px-2 text-white rounded text-xs py-1">
              Today
            </div>
          </div>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="inline-block text-white"
                style={{ accentColor: "#a181fd" }}
              />
              <h1>sharing the information with clients or stakeholders.</h1>
            </div>
            <div className="bg-primary px-2 text-white rounded text-xs py-1">
              Today
            </div>
          </div>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="inline-block text-white"
                style={{ accentColor: "#a181fd" }}
              />
              <h1>Hearing the information and responding .</h1>
            </div>
            <div className="bg-primary px-2 text-white rounded text-xs py-1">
              Today
            </div>
          </div>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="inline-block text-white"
                style={{ accentColor: "#a181fd" }}
              />
              <h1>Setting up and customizing your own sales.</h1>
            </div>
            <div className="bg-primary px-2 text-white rounded text-xs py-1">
              Today
            </div>
          </div>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="inline-block text-white"
                style={{ accentColor: "#a181fd" }}
              />
              <h1>
                To have a complete 360° overview of sales information, having.
              </h1>
            </div>
            <div className="bg-primary px-2 text-white rounded text-xs py-1">
              Today
            </div>
          </div>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="inline-block text-white"
                style={{ accentColor: "#a181fd" }}
              />
              <h1>New Admin Launched.</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
