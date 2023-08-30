import React from "react";

export const RecentCustomer = () => {
  return (
    <section className="px-1 md:px-4 font-secondary">
      <div className="mt-4 shadow-md bg-white px-5 py-10">
        <div className="flex gap-1 items-center">
          <div className="w-1 py-4 bg-primary"></div>
          <h1 className="font-semibold text-lg">RECENT CUSTOMERS</h1>
        </div>
        <section>
          <div className="my-4 flex justify-between">
            <div className="flex gap-4 items-center">
              <img
                src="https://nextjs.spruko.com/nowa/preview/assets/img/faces/2.jpg"
                alt="_avtar"
                className="w-8 h-8 rounded-full inline-block"
              />
              <div className="text-xs">
                <h1>Samantha Melon</h1>
                <h1 className="text-[#b2b3b4]">User ID: #1234</h1>
              </div>
            </div>
            <div className="bg-[#18A558] px-2 rounded text-white text-xs flex justify-center items-center ml-5">
              Paid
            </div>
          </div>

          <div className="my-4 flex justify-between">
            <div className="flex gap-4 items-center">
              <img
                src="https://nextjs.spruko.com/nowa/preview/assets/img/faces/1.jpg"
                alt="_avtar"
                className="w-8 h-8 rounded-full inline-block"
              />
              <div className="text-xs">
                <h1>Samantha Melon</h1>
                <h1 className="text-[#b2b3b4]">User ID: #1234</h1>
              </div>
            </div>
            <div className="bg-red-500 px-2 rounded text-white text-xs flex justify-center items-center ml-5">
              Pending
            </div>
          </div>

          <div className="my-4 flex justify-between">
            <div className="flex gap-4 items-center">
              <img
                src="https://nextjs.spruko.com/nowa/preview/assets/img/faces/5.jpg"
                alt="_avtar"
                className="w-8 h-8 rounded-full inline-block"
              />
              <div className="text-xs">
                <h1>Samantha Melon</h1>
                <h1 className="text-[#b2b3b4]">User ID: #1234</h1>
              </div>
            </div>
            <div className="bg-red-500 px-2 rounded text-white text-xs flex justify-center items-center ml-5">
              Pending
            </div>
          </div>

          <div className="my-4 flex justify-between">
            <div className="flex gap-4 items-center">
              <img
                src="https://nextjs.spruko.com/nowa/preview/assets/img/faces/7.jpg"
                alt="_avtar"
                className="w-8 h-8 rounded-full inline-block"
              />
              <div className="text-xs">
                <h1>Samantha Melon</h1>
                <h1 className="text-[#b2b3b4]">User ID: #1234</h1>
              </div>
            </div>
            <div className="bg-[#18A558] px-2 rounded text-white text-xs flex justify-center items-center ml-5">
              Paid
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
