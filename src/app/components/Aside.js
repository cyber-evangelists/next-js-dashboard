import React from "react";
import Dashboard from "./asideItems/Dashboard";
import Web from "./asideItems/Web";
import Pagescom from "./asideItems/Pagescom";
import Generel from "./asideItems/Generel";
import Componentss from "./asideItems/componentss";

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

