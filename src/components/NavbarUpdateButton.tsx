"use client";

import { LibarayContext } from "@/context/LibarayContext";
import Link from "next/link";
import React, { useContext } from "react";

const NavbarUpdateButton = () => {
  const { plan,  saved } = useContext(LibarayContext);

  return (
    <div className="flex gap-3">
      <Link href={`/my-plan`}>
        <button className="flex cursor-pointer">
        Plan{" "}
        <span className="border border-gray-200 rounded-full w-6 h-6 ml-1 text-base flex justify-center items-center font-bold text-gray-400 bg-[#baff00]">
          {plan.length}
        </span>
      </button>
      </Link>
      <Link href={`/my-plan`}>
      <button className="flex cursor-pointer">
        Saved
        <span className="border border-gray-200 rounded-full w-6 h-6 ml-1 text-base flex justify-center items-center font-bold">
          {saved.length}
        </span>
      </button>
      </Link>
    </div>
  );
};

export default NavbarUpdateButton;
