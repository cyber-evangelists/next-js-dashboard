"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiCircle } from "react-icons/gi";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { IconContext } from "react-icons";
import { BiHome } from "react-icons/bi";

const MainStructure = ({ subHeading, mapLinks, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!isOpen) return;
      if (event.target.closest(".dropdown")) return;
      setIsOpen(false);
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const IconComponent = icon || GiCircle;

  return (
    <>
      <div className="relative dropdown my-5">
        <button
          onClick={toggleDropdown}
          className="focus:outline-none font-bold px-4 flex items-center w-full gap-2"
        >
          <IconContext.Provider value={{ size: "1.2rem" }}>
            <IconComponent />
          </IconContext.Provider>
          <span className="inline-flex justify-between items-center w-full">
            {subHeading}
            {isOpen ? (
              <BsArrowDownShort className="mt-1" />
            ) : (
              <BsArrowUpShort className="mt-1" />
            )}
          </span>
        </button>
        {isOpen && (
          <div className="mt-2 w-full bg-white py-2 px-6">
            {mapLinks.map((d, i) => {
              return (
                <section key={i} className="">
                  <Link href={d.link} key={i}>
                    <div className="flex items-center gap-2">
                      <GiCircle className="text-[7px]" />
                      <h1>{d.title}</h1>
                    </div>
                  </Link>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default MainStructure;
