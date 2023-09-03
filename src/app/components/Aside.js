import React from "react";
import Dashboard from "./asideItems/DashboardSection";
import Web from "./asideItems/WebSection";
import Pagescom from "./asideItems/PagesSection";
import Generel from "./asideItems/GenerelSection";
import Componentss from "./asideItems/ComponentSection";

const Aside = ({ children }) => {
  return (
    <>
      <section className="">
        <div className="flex">
          <div className="hidden lg:block min-w-[240px] min-h-screen border bg-white h-screen sticky top-20 overflow-auto">
            <Dashboard />
            <Web /> 
            <Pagescom /> 
            <Generel /> 
            <Componentss />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </section>
    </>
  );
};

export default Aside;

