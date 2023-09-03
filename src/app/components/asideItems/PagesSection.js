"use client"
import React from 'react'
import MainStructure from './MainStructure'
import { BiSolidLayer } from 'react-icons/bi'
import { TbClockExclamation } from 'react-icons/tb'

const PagesSection = () => {
  return (
    <>
        <h1 className="text-[#B7BAC3] px-3 py-2 text-xs my-5 ">PAGES</h1>
      <MainStructure
        subHeading="APPS"
        icon={BiSolidLayer}
        mapLinks={pagesLinks}
      />
      <MainStructure
        subHeading="Elements"
        icon={TbClockExclamation}
        mapLinks={utilitesLinks}
      />
    </>
  )
}

export default PagesSection


  
  const pagesLinks = [
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
  
    const utilitesLinks = [
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