import React from "react";
import { AiOutlineDoubleRight, AiOutlineFileText } from "react-icons/ai";
import { BsBookmark, BsThreeDots } from "react-icons/bs";

export const RecentTrans = () => {
  return (
    <section className="px-1 md:px-4 font-secondary">
      <div className="mt-4 shadow-md bg-white px-5 py-10">
        <div className="flex gap-1 items-center">
          <div className="w-1 py-4 bg-primary"></div>
          <h1 className="font-semibold text-lg">RECENT TRANSACTIONS</h1>
        </div>
        <div className="flex justify-between my-4">
          <div className="flex gap-2">
            <div className="bg-green-200 rounded px-3 flex justify-start items-center text-[#38CAB3]">
              <AiOutlineDoubleRight  className="text-xs"/>
            </div>
            <div className="text-xs">
              <h1>Hamza. M</h1>
              <h1 className="text-[#B7BAC3]">24-9-2022</h1>
            </div>
          </div>
          <div className="text-xs text-[#18A558]">
            <h1>Processing</h1>
            <h1>$256,345</h1>
          </div>
        </div>

        <div className="flex justify-between my-4">
          <div className="flex gap-2">
            <div className="bg-red-200 rounded px-3 flex justify-start items-center text-red-400">
              <BsBookmark className="text-xs"/>
            </div>
            <div className="text-xs">
              <h1>Hamza. M</h1>
              <h1 className="text-[#B7BAC3]">24-9-2022</h1>
            </div>
          </div>
          <div className="text-xs text-[#38CAB3]">
            <h1 className="text-red-500">$256,345</h1>
          </div>
        </div>

        <div className="flex justify-between my-4">
          <div className="flex gap-2">
            <div className="bg-blue-200 rounded px-3 flex justify-start items-center text-blue-400">
              <BsThreeDots  className="text-xs"/>
            </div>
            <div className="text-xs">
              <h1>Hamza. M</h1>
              <h1 className="text-[#B7BAC3]">24-9-2022</h1>
            </div>
          </div>
          <div className="text-xs text-[#18A558]">
            <h1>Processing</h1>
            <h1>$256,345</h1>
          </div>
        </div>

        <div className="flex justify-between my-4">
          <div className="flex gap-2">
            <div className="bg-green-200 rounded px-3 flex justify-start items-center text-[#38CAB3]">
              <AiOutlineDoubleRight  className="text-xs"/>
            </div>
            <div className="text-xs">
              <h1>Hamza. M</h1>
              <h1 className="text-[#B7BAC3]">24-9-2022</h1>
            </div>
          </div>
          <div className="text-xs text-[#18A558]">
            <h1>Processing</h1>
            <h1 className="text-red-500">$256,345</h1>
          </div>
        </div>

        <div className="flex justify-between my-4">
          <div className="flex gap-2">
            <div className="bg-orange-200 rounded px-3 flex justify-start items-center text-orange-400">
              <AiOutlineFileText  className="text-xs"/>
            </div>
            <div className="text-xs">
              <h1>Hamza. M</h1>
              <h1 className="text-[#B7BAC3]">24-9-2022</h1>
            </div>
          </div>
          <div className="text-xs text-[#18A558]">
            <h1>Processing</h1>
            <h1>$256,345</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
