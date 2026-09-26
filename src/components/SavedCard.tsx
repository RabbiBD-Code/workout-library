"use client"

import { LibarayContext } from '@/context/LibarayContext';
import { ILibary } from '@/types/libaray';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SavedCard = ({s}:{s:ILibary}) => {
    const {saved, setSaved} = useContext(LibarayContext)

    const handleRemoveButton = () =>{
        console.log("Remove click");
        const remove = saved.filter(save => save.id !== s.id)
        toast.error(`${s.name} is success delete`)
        setSaved(remove)
    }
    const handleMarkDone = () =>{
          toast.success('Mark as Done')
        }

    return (
    <div className="flex w-full items-center gap-4 rounded-lg border px-4 py-3">
      {/* Exercise Image */}
      <div className="h-[62px] w-[110px] shrink-0 overflow-hidden rounded-lg">
        <Image
          src={s.image}
          width={200}
          height={200}
          alt={s.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* p Info */}
      <div className="min-w-0 flex-1">
        <h2 className="truncate text-sm font-bold uppercase text-white">
          {s.name}
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          {s.equipment}
        </p>

        <div className="mt-2 flex items-center gap-4 text-[11px] text-gray-300">
          {/* Duration */}
          <span className="flex items-center gap-1">
            <span className="text-lime-400">◷</span>
            {s.duration} min
          </span>

          {/* Calories */}
          <span className="flex items-center gap-1">
            <span className="text-lime-400">♨</span>
            {s.caloriesBurned} kcal
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1">
            <span className="text-yellow-400">☆</span>
            {s.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-3">
        <Link href={`/workouts/${s.id}`}>
        <button
          type="button"
          className="rounded-full border border-gray-600 px-4 py-2 text-xs text-gray-300 transition hover:border-gray-400 hover:text-white"
        >
          View Details
        </button>
        </Link>

        <button
        onClick={()=> handleMarkDone()}
          type="button"
          className="flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2 text-xs font-semibold text-black transition hover:bg-lime-300"
        >
          <span>✓</span>
          Mark as Done
        </button>

        <button
        onClick={()=> handleRemoveButton()}
          type="button"
          className="ml-1 text-lg text-gray-500 transition hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default SavedCard;