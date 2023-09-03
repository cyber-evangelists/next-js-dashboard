"use client";

import React from "react";
import MainStructure from "./MainStructure";
import { AiOutlineForm } from "react-icons/ai";
import { CiPaperplane, CiViewTable } from "react-icons/ci";
import { BiSolidWidget } from "react-icons/bi";

const ComponentSection = () => {
  return (
    <>
      <h1 className="text-[#B7BAC3] px-3 py-2 text-xs my-5 ">COMPONENTS</h1>
      <MainStructure subHeading="Forms" icon={AiOutlineForm} mapLinks={formsLinks} />
      <MainStructure
        subHeading="Tables"
        icon={CiViewTable}
        mapLinks={tableLinks}
      />
      <MainStructure
        subHeading="Widgets"
        icon={BiSolidWidget}
        mapLinks={WidgetsLinks}
      />
      <MainStructure
        subHeading="Maps"
        icon={CiPaperplane}
        mapLinks={mapLinks}
      />
    </>
  );
};

export default ComponentSection;

const formsLinks = [
  { link: "#", title: "Cards" },
  { link: "#", title: "Range-slider" },
  { link: "#", title: "Calendar" },
  { link: "#", title: "Contacts" },
  { link: "#", title: "Image-Compare" },
  { link: "#", title: "Notification" },
  { link: "#", title: "Widge-notification" },
  { link: "#", title: "Treeview" },
  { link: "#", title: "File-manger-01" },
  { link: "#", title: "File-manger-02" },
  { link: "#", title: "File-details" },
  { link: "#", title: "Notification" },
  { link: "#", title: "Widge-notification" },
  { link: "#", title: "Treeview" },
  { link: "#", title: "File-manger-01" },
  { link: "#", title: "File-manger-02" },
  { link: "#", title: "File-details" },
  { link: "#", title: "Treeview" },
  { link: "#", title: "File-manger-01" },
  { link: "#", title: "File-manger-02" },
  { link: "#", title: "File-details" },
];

const tableLinks = [
  { link: "#", title: "Cards" },
  { link: "#", title: "Range-slider" },
  { link: "#", title: "Calendar" },
  { link: "#", title: "Contacts" },
  { link: "#", title: "Image-Compare" },
  { link: "#", title: "Notification" },
  { link: "#", title: "Widge-notification" },
  { link: "#", title: "Treeview" },
  { link: "#", title: "File-manger-01" },
  { link: "#", title: "File-manger-02" },
  { link: "#", title: "File-details" },
  { link: "#", title: "Cards" },
  { link: "#", title: "Range-slider" },
  { link: "#", title: "Calendar" },
  { link: "#", title: "Contacts" },
  { link: "#", title: "Image-Compare" },
  { link: "#", title: "Notification" },
  { link: "#", title: "Widge-notification" },
  { link: "#", title: "Treeview" },
  { link: "#", title: "File-manger-01" },
  { link: "#", title: "File-manger-02" },
  { link: "#", title: "File-details" },
  { link: "#", title: "Cards" },
  { link: "#", title: "Range-slider" },
  { link: "#", title: "Calendar" },
  { link: "#", title: "Contacts" },
  { link: "#", title: "Image-Compare" },
  { link: "#", title: "Notification" },
  { link: "#", title: "Widge-notification" },
  { link: "#", title: "Treeview" },
  { link: "#", title: "File-manger-01" },
  { link: "#", title: "File-manger-02" },
  { link: "#", title: "File-details" },
];
const WidgetsLinks = [
    { link: "#", title: "Cards" },
    { link: "#", title: "Range-slider" },
    { link: "#", title: "Calendar" },
    { link: "#", title: "Contacts" },
    { link: "#", title: "Image-Compare" },
    { link: "#", title: "Notification" },
    { link: "#", title: "Widge-notification" },
    { link: "#", title: "Treeview" },
    { link: "#", title: "File-manger-01" },
    { link: "#", title: "File-manger-02" },
    { link: "#", title: "File-details" },
    { link: "#", title: "Cards" },
    { link: "#", title: "Range-slider" },
    { link: "#", title: "Calendar" },
    { link: "#", title: "Contacts" },
    { link: "#", title: "Image-Compare" },
    { link: "#", title: "Notification" },
    { link: "#", title: "Widge-notification" },
    { link: "#", title: "Treeview" },
    { link: "#", title: "File-manger-01" },
    { link: "#", title: "File-manger-02" },
    { link: "#", title: "File-details" },
    { link: "#", title: "Cards" },
    { link: "#", title: "Range-slider" },
    { link: "#", title: "Calendar" },
    { link: "#", title: "Contacts" },
    { link: "#", title: "Image-Compare" },
    { link: "#", title: "Notification" },
    { link: "#", title: "Widge-notification" },
    { link: "#", title: "Treeview" },
    { link: "#", title: "File-manger-01" },
    { link: "#", title: "File-manger-02" },
    { link: "#", title: "File-details" },
  ];
  const mapLinks = [
    { link: "#", title: "Cards" },
    { link: "#", title: "Range-slider" },
    { link: "#", title: "Calendar" },
    { link: "#", title: "Contacts" },
    { link: "#", title: "Image-Compare" },
    { link: "#", title: "Notification" },
    { link: "#", title: "Widge-notification" },
    { link: "#", title: "Treeview" },
    { link: "#", title: "File-manger-01" },
    { link: "#", title: "File-manger-02" },
    { link: "#", title: "File-details" },
    { link: "#", title: "Cards" },
    { link: "#", title: "Range-slider" },
    { link: "#", title: "Calendar" },
    { link: "#", title: "Contacts" },
    { link: "#", title: "Image-Compare" },
    { link: "#", title: "Notification" },
    { link: "#", title: "Widge-notification" },
    { link: "#", title: "Treeview" },
    { link: "#", title: "File-manger-01" },
    { link: "#", title: "File-manger-02" },
    { link: "#", title: "File-details" },
    { link: "#", title: "Cards" },
    { link: "#", title: "Range-slider" },
    { link: "#", title: "Calendar" },
    { link: "#", title: "Contacts" },
    { link: "#", title: "Image-Compare" },
    { link: "#", title: "Notification" },
    { link: "#", title: "Widge-notification" },
    { link: "#", title: "Treeview" },
    { link: "#", title: "File-manger-01" },
    { link: "#", title: "File-manger-02" },
    { link: "#", title: "File-details" },
  ];
