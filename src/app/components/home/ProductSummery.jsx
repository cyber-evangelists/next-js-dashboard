"use client";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSolidPencil } from "react-icons/bi";

export const ProductSummery = () => {
  return (
    <section className="px-1 md:px-4 font-secondary">
      <div className="mt-4 shadow-md bg-white px-5 py-10">
        <div className="flex gap-1 items-center">
          <div className="w-1 py-4 bg-primary"></div>
          <h1 className="font-semibold text-lg">WEEKLY BUDGET</h1>
        </div>
        <section className="overflow-x-auto">
          <div className="my-4 flex justify-between">
            <select id="cars" name="cars" className="border px-2 py-1 inline-block">
              <option value="volvo">Show 10</option>
              <option value="saab">Show 15</option>
              <option value="mercedes">Show 20</option>
              <option value="audi">Show 25</option>
            </select>
            <div>
              <input type="text" placeholder="Search..." className=" px-2 py-1"/>
            </div>
          </div>
          <TableDesign />
        </section>
        <div className="flex justify-between items-center mt-4">
          <h1 className="font-medium text-xs">Page 1 of 1</h1>
          <div className="">
            <button className="bg-gray-200 px-3 py-1 text-xs mx-2 text-gray-600">Previous</button>
            <button className="bg-gray-200 px-3 py-1 text-xs mx-2 text-gray-600">&#60;&#60;</button>
            <button className="bg-gray-200 px-3 py-1 text-xs mx-2 text-gray-600">&#60;</button>
            <button className="bg-gray-200 px-3 py-1 text-xs mx-2 text-gray-600">&#62;</button>
            <button className="bg-gray-200 px-3 py-1 text-xs mx-2 text-gray-600">&#62;&#62;</button>
            <button className="bg-gray-200 px-3 py-1 text-xs mx-2 text-gray-600">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TableDesign = () => {
  return (
    <>
      <table className="text-xs w-full">
        <thead>
          <tr>
            <th
              className="text-center cursor-pointer"
              colSpan="1"
              role="columnheader"
              title="Toggle SortBy"
            >
              Purchase Date
            </th>
            <th
              className="text-center cursor-pointer"
              colSpan="1"
              role="columnheader"
              title="Toggle SortBy"
            >
              Client Name
            </th>
            <th
              className="text-center cursor-pointer"
              colSpan="1"
              role="columnheader"
              title="Toggle SortBy"
            >
              Product ID
            </th>
            <th
              className="text-center cursor-pointer"
              colSpan="1"
              role="columnheader"
              title="Toggle SortBy"
            >
              Product
            </th>
            <th
              className="text-center cursor-pointer"
              colSpan="1"
              role="columnheader"
              title="Toggle SortBy"
            >
              Product Cost
            </th>
            <th
              className="text-center cursor-pointer"
              colSpan="1"
              role="columnheader"
              title="Toggle SortBy"
            >
              Payment Mode
            </th>
            <th
              className="text-center cursor-pointer"
              colSpan="1"
              role="columnheader"
              title="Toggle SortBy"
            >
              Status
            </th>
            <th
              className="text-center cursor-pointer"
              colSpan="1"
              role="columnheader"
              title="Toggle SortBy"
            >
              ACTION
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Tiger Nixon</td>
            <td>PRO12345</td>
            <td>Mi LED Smart TV 4A 80</td>
            <td>$320,800</td>
            <td>Online Payment</td>
            <td>
              <span className="bg-green-100 text-green-500 text-xs px-2 py-1 rounded">
                Delivered
              </span>
            </td>
            <td>
              <span className="flex gap-2">
                <a href="#" className="bg-[#18A558] px-4 py-2 rounded">
                  <BiSolidPencil className="text-white" />
                </a>
                <a href="#" className="bg-red-400 px-4 py-2 rounded">
                  <AiOutlineDelete className="text-white" />
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Garrett Winters</td>
            <td>PRO8765</td>
            <td className="">Thomson R9 122cm (48 inch) Full HD LED TV</td>
            <td>$170,750</td>
            <td>Cash on delivered</td>
            <td>
              <span className="bg-green-100 text-green-500 text-xs px-2 py-1 rounded">
                Add Cart
              </span>
            </td>
            <td>
              <span className="flex gap-2">
                <a href="#" className="bg-[#18A558] px-4 py-2 rounded">
                  <BiSolidPencil className="text-white" />
                </a>
                <a href="#" className="bg-red-400 px-4 py-2 rounded">
                  <AiOutlineDelete className="text-white" />
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td>#03</td>
            <td>Ashton Cox</td>
            <td>PRO54321</td>
            <td>Vu 80cm (32 inch) HD Ready LED TV</td>
            <td>$86,000</td>
            <td>Online Payment</td>
            <td>
              <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded">
                Pending
              </span>
            </td>
            <td>
              <span className="flex gap-2">
                <a href="#" className="bg-[#18A558] px-4 py-2 rounded">
                  <BiSolidPencil className="text-white" />
                </a>
                <a href="#" className="bg-red-400 px-4 py-2 rounded">
                  <AiOutlineDelete className="text-white" />
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td>#04</td>
            <td>Cedric Kelly</td>
            <td>PRO97654</td>
            <td>Micromax 81cm (32 inch) HD Ready LED TV</td>
            <td>$433,060</td>
            <td>Cash on delivered</td>
            <td>
              <span className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded">
                Delivering
              </span>
            </td>
            <td>
              <span className="flex gap-2">
                <a href="#" className="bg-[#18A558] px-4 py-2 rounded">
                  <BiSolidPencil className="text-white" />
                </a>
                <a href="#" className="bg-red-400 px-4 py-2 rounded">
                  <AiOutlineDelete className="text-white" />
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td>#05</td>
            <td>Airi Satou</td>
            <td>PRO4532</td>
            <td>HP 200 Mouse &amp; Wireless Laptop Keyboard</td>
            <td>$162,700</td>
            <td>Online Payment</td>
            <td>
              <span className="bg-pink-100 text-pink-500 text-xs px-2 py-1 rounded">
                Delivered
              </span>
            </td>
            <td>
              <span className="flex gap-2">
                <a href="#" className="bg-[#18A558] px-4 py-2 rounded">
                  <BiSolidPencil className="text-white" />
                </a>
                <a href="#" className="bg-red-400 px-4 py-2 rounded">
                  <AiOutlineDelete className="text-white" />
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td>#06</td>
            <td>Garrett Winters</td>
            <td>PRO8765</td>
            <td className="">Thomson R9 122cm (48 inch) Full HD LED TV</td>
            <td>$170,750</td>
            <td>Cash on delivered</td>
            <td>
              <span className="bg-green-100 text-green-500 text-xs px-2 py-1 rounded">
                Add Cart
              </span>
            </td>
            <td>
              <span className="flex gap-2">
                <a href="#" className="bg-[#18A558] px-4 py-2 rounded">
                  <BiSolidPencil className="text-white" />
                </a>
                <a href="#" className="bg-red-400 px-4 py-2 rounded">
                  <AiOutlineDelete className="text-white" />
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td>#07</td>
            <td>Ashton Cox</td>
            <td>PRO54321</td>
            <td>Vu 80cm (32 inch) HD Ready LED TV</td>
            <td>$86,000</td>
            <td>Online Payment</td>
            <td>
              <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded">
                Pending
              </span>
            </td>
            <td>
              <span className="flex gap-2">
                <a href="#" className="bg-[#18A558] px-4 py-2 rounded">
                  <BiSolidPencil className="text-white" />
                </a>
                <a href="#" className="bg-red-400 px-4 py-2 rounded">
                  <AiOutlineDelete className="text-white" />
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td>#08</td>
            <td>Cedric Kelly</td>
            <td>PRO97654</td>
            <td>Micromax 81cm (32 inch) HD Ready LED TV</td>
            <td>$433,060</td>
            <td>Cash on delivered</td>
            <td>
              <span className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded">
                Delivering
              </span>
            </td>
            <td>
              <span className="flex gap-2">
                <a href="#" className="bg-[#18A558] px-4 py-2 rounded">
                  <BiSolidPencil className="text-white" />
                </a>
                <a href="#" className="bg-red-400 px-4 py-2 rounded">
                  <AiOutlineDelete className="text-white" />
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td>#09</td>
            <td>Colleen Hurst</td>
            <td>PRO35785</td>
            <td>Mi LED Smart TV 4A 80</td>
            <td>$205,500</td>
            <td>Online Payment</td>
            <td>
              <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded">
                Pending
              </span>
            </td>
            <td>
              <span className="flex gap-2">
                <a href="#" className="bg-[#18A558] px-4 py-2 rounded">
                  <BiSolidPencil className="text-white" />
                </a>
                <a href="#" className="bg-red-400 px-4 py-2 rounded">
                  <AiOutlineDelete className="text-white" />
                </a>
              </span>
            </td>
          </tr>
          <tr>
            <td>#10</td>
            <td>Sonya Frost</td>
            <td>PRO23409</td>
            <td>Vu 80cm (32 inch) HD Ready LED TV</td>
            <td>$103,600</td>
            <td>Cash on delivered</td>
            <td>
              <span className="bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded">
                Deliverd
              </span>
            </td>
            <td>
              <span className="flex gap-2">
                <a href="#" className="bg-[#18A558] px-4 py-2 rounded">
                  <BiSolidPencil className="text-white" />
                </a>
                <a href="#" className="bg-red-400 px-4 py-2 rounded">
                  <AiOutlineDelete className="text-white" />
                </a>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
