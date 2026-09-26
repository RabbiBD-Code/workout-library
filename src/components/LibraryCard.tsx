import { ILibary } from "@/types/libaray";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoFlame, GoStar } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";


const LibraryCard = async ({fitlog}:{fitlog:ILibary}) => {
  
  return (
    <Link href={`/workouts/${fitlog.id}`}> 
    
    <div className="my-7 ">
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image src={fitlog.image} alt={fitlog.name} width={500} height={200}/>
        </figure>
        <div className="card-body">
            <div className="flex gap-2">
                {
                    fitlog.muscleGroups.map(muscle =>(
                        <span className="badge bg-[#c8fc0c] px-6 py-3 rounded-full" key={muscle}>{muscle}</span>
                    ))
                }
            </div>
          <h2 className="card-title">{fitlog.name}</h2>
          <p>
            {fitlog.equipment}
          </p>
          <hr className="text-gray-200"/>
          <div className="grid grid-cols-3">
           <p className="flex items-center gap-2"><IoIosTimer className="text-lg" />{fitlog.duration} min </p>
           <p className="flex items-center gap-1"><GoFlame className="text-lg" />{fitlog.caloriesBurned} kcal</p>
           <p className="flex items-center gap-1"><GoStar className="text-lg"/>{fitlog.rating}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default LibraryCard;
