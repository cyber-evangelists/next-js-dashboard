import React from "react";
import { LiaAngleDoubleRightSolid } from "react-icons/lia";
export const Nav = () => {
  return (
    <nav className="sm:px-4">
      <nav className="flex flex-col sm:flex-row justify-between font-secondary">
        <div>
          <h1 className="font-semibold text-lg">DASHBOARD</h1>
        </div>
        <div className="flex gap-3 items-center">
          <h1 className="cursor-pointer text-[#B7BAC3] hover:text-black transition-all ease-linear">
            Dashboard
          </h1>
          <h1>
            <LiaAngleDoubleRightSolid />
          </h1>
          <h1>Sales</h1>
        </div>
      </nav>
    </nav>
  );
};
