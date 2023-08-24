"use client";
import MainStructure from "./MainStructure";
import { BiHome } from "react-icons/bi";

const Dashboard = () => {

  return (
    <>
              <h1 className="text-[#B7BAC3] px-3 py-2 text-xs mb-5">Main</h1>
        <MainStructure subHeading="Dashboards" icon={BiHome} mapLinks={dashboardLinks}/>
    </>
  );
};

export default Dashboard;

const dashboardLinks = [
    { link : "#" , title: "Dashboard 01"},
    { link : "#" , title: "Dashboard 02"},
    { link : "#" , title: "Dashboard 03"},

]