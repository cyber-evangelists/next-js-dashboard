"use client";
import React from "react";
import { AiFillGift } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import MainStructure from "./MainStructure";

const GenerelSection = () => {
  return (
    <>
      <h1 className="text-[#B7BAC3] px-3 py-2 text-xs my-5 ">GENERAL</h1>
      <MainStructure
        subHeading="GIFT"
        icon={AiFillGift}
        mapLinks={giftLinks}
      />
      <MainStructure
        subHeading="Charts"
        icon={BsBarChartFill}
        mapLinks={chartLinks}
      />
    </>
  );
};

export default GenerelSection;

const giftLinks = [
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

const chartLinks = [
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
