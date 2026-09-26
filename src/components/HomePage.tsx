import React from "react";
import LibraryCard from "./LibraryCard";
import { ILibary } from "@/types/libaray";
import Link from "next/link";

const getLibraryData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};

const HomePage = async () => {
 const fitlogs = await getLibraryData();
  console.log(fitlogs);

  return (
    <div className="container mx-auto my-5">
      <h2 className="text-3xl font-bold">THE LIBRARY</h2>
      <p>Twelve lifts covering every major muscle group.</p>
      <div className="grid grid-cols-1 gap-5">
        {
            fitlogs.map((fitlog:ILibary)=>(<LibraryCard key={fitlog.id} fitlog={fitlog} />))
        }
      </div>
    </div>
  );
};

export default HomePage;
