"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Links = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-4">
      <li>
        <Link
          href="/workouts"
          className={pathname === "/workouts" ? "text-[#C2F800]" : ""}
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className={pathname === "/my-plan" ? "text-[#C2F800]" : ""}
        >
          My plan
        </Link>
      </li>
    </div>
  );
};

export default Links;
