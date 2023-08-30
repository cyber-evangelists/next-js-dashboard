"use client";
import React, { useState } from "react";
import { BiFullscreen, BiMenuAltLeft, BiSearchAlt2 } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { HiMenuAlt1 } from "react-icons/hi";
import { CiDark } from "react-icons/ci";
import { AiOutlineMail, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings} from "react-icons/fi";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";

const imgsrc =
  "https://nextjs.spruko.com/nowa/preview/assets/img/brand/logo.png";
const avtar = "https://nextjs.spruko.com/nowa/preview/assets/img/faces/2.jpg";
const Nav = () => {
  return (
    <>
      <nav className="bg-white sticky top-0 z-20">
        <div className="hidden lg:flex items-center">
          <div className="h-[5rem] border py-4 px-2 flex justify-center items-center gap-2 min-w-[240px]">
            <img src="/assets/logo.png" alt="_logo" className="inline-block w-9 h-9" />
            <h1 className="font-medium text-xl">Cyber<span className="text-primary">Evangelists</span></h1>
          </div>
          <div className="h-[5rem] flex-1 flex items-center justify-between border py-4 px-2">
            <div className="flex justify-center items-center">
              <Link href="">
                <HiMenuAlt1 className="text-3xl mr-2" />
              </Link>
              <div className="flex">
                <div className="flex border px-4 py-1 justify-center items-center">
                  <input type="text" className="no-style-input" />
                  <BiSearchAlt2 />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-8">
              <div className="flex text-2xl gap-5">
                <Link href="#">
                  <TbWorld />
                </Link>
                <Link href="#">
                  <CiDark />
                </Link>
                <Link href="#">
                  <div className="relative">
                    <div className="absolute w-5 h-5 -top-2 -right-1 rounded-full bg-red-400 text-white flex justify-center items-center text-xs">
                      9
                    </div>
                    <AiOutlineShoppingCart />
                  </div>
                </Link>
                <Link href="#">
                  <div className="relative">
                    <div className="absolute w-5 h-5 -top-2 -right-1 rounded-full bg-red-400 text-white flex justify-center items-center text-xs">
                      3
                    </div>
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="#">
                  <div className="relative">
                    <div className="absolute w-5 h-5 -top-2 -right-1 rounded-full bg-red-400 text-white flex justify-center items-center text-xs">
                      4
                    </div>
                    <IoMdNotificationsOutline />
                  </div>
                </Link>
                <Link href="#">
                  <BiFullscreen />
                </Link>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Link href="#">
                  <BiMenuAltLeft className="text-3xl" />
                </Link>
                <Link href="#">
                  <img src={avtar} alt="_avtar" className="rounded-full w-7" />
                </Link>
                <Link href="#">
                  <FiSettings className="text-lg rotating" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <SmallScreen />
      </nav>
    </>
  );
};

export default Nav;

const SmallScreen = () => {
  const [dots, setdots] = useState(false);
  return (
    <>
      <nav className="bg-white">
        <div className="flex lg:hidden items-center justify-between px-5">
          <div>
            <HiMenuAlt1 className="text-xl sm:text-3xl mr-2" />
          </div>
          <div className="h-[3.5rem] py-4 px-2 flex justify-center items-center gap-2 min-w-[100px]">
            <img src="/assets/logo.png" alt="_logo" className="inline-block w-9 h-9" />
            {/* <h1 className="font-medium text-xl">Cyber<span className="text-primary">Evangelists</span></h1> */}
          </div>
          <div className="flex items-center gap-5">
            <div className="cursor-pointer" onClick={() => setdots(!dots)}>
              <BsThreeDotsVertical className="text-xl sm:text-3xl" />
            </div>
            <Link href="#">
              <FiSettings className="text-lg sm:text-3xl rotating" />
            </Link>
          </div>
        </div>
        <section className="w-full">
          {dots && (
            <>
              <div className="flex justify-center items-center gap-6 sm:gap-8 shadow-md w-full py-4 px-5">
                <div className="flex text-xl gap-2 sm:gap-5">
                  <Link href="#">
                    <TbWorld />
                  </Link>
                  <Link href="#">
                    <CiDark />
                  </Link>
                  <Link href="#">
                    <div className="relative">
                      <div className="absolute w-4 h-4 -top-2 -right-1 rounded-full bg-red-400 text-white flex justify-center items-center text-xs">
                        9
                      </div>
                      <AiOutlineShoppingCart />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="relative">
                      <div className="absolute w-4 h-4 -top-2 -right-1 rounded-full bg-red-400 text-white flex justify-center items-center text-xs">
                        3
                      </div>
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="relative">
                      <div className="absolute w-4 h-4 -top-2 -right-1 rounded-full bg-red-400 text-white flex justify-center items-center text-xs">
                        4
                      </div>
                      <IoMdNotificationsOutline />
                    </div>
                  </Link>
                  <Link href="#">
                    <BiFullscreen />
                  </Link>
                </div>
                <div className="flex justify-center items-center gap-2 sm:gap-4">
                  <Link href="#">
                    <BiMenuAltLeft className="text-xl" />
                  </Link>
                  <Link href="#">
                    <img
                      src={avtar}
                      alt="_avtar"
                      className="rounded-full w-8"
                    />
                  </Link>
                </div>
              </div>
            </>
          )}
        </section>
      </nav>
    </>
  );
};
