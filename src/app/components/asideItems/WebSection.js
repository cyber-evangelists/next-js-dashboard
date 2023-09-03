"use client"
import React from "react";
import MainStructure from "./MainStructure";
import { AiOutlineAppstoreAdd, AiOutlineSafetyCertificate } from "react-icons/ai";
import { BsFillDatabaseFill } from "react-icons/bs";

const WebSection = () => {
  return (
    <section className="">
      <h1 className="text-[#B7BAC3] px-3 py-2 text-xs my-5 ">Web APPS</h1>
      <MainStructure
        subHeading="APPS"
        icon={AiOutlineAppstoreAdd}
        mapLinks={appsLinks}
      />
      <MainStructure
        subHeading="Elements"
        icon={BsFillDatabaseFill}
        mapLinks={elementLinks}
      />
      <MainStructure
        subHeading="Advanced UI"
        icon={AiOutlineSafetyCertificate}
        mapLinks={uiLinks}
      />
    </section>
  );
};

export default WebSection;

const appsLinks = [
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

const elementLinks = [
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

  const uiLinks = [
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