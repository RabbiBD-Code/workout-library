import PlanButton from '@/components/ButtonHandle/PlanButton';
import SavedButton from '@/components/SavedButton';
import { ILibary } from '@/types/libaray';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps{
    params: Promise<{
        Id: string
    }>
    filogs: ILibary[]
}

const getLibraryData = async(Id:string)=>{
    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${Id}`)
    return res.json()
}

const DetailsPage = async({params}:IBookDetailsPageProps) => {
    const {Id} = await params
    const exercise = await getLibraryData(Id)
    console.log(exercise);
    
    return (
    <div className="min-h-screen p-4 text-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8  p-0 lg:grid-cols-[1fr_1fr]">
        
        {/* LEFT IMAGE */}
        <div className="relative  overflow-hidden rounded-r-2xl ">
          <Image src={exercise.image} height={500} width={900} alt={exercise.name}>

          </Image>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col px-5 py-1 lg:px-2 lg:py-0">

          {/* TITLE */}
          <h1 className="text-[28px] font-black uppercase leading-none tracking-tight text-white sm:text-[34px]">
            {exercise.name}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-3 max-w-[620px] text-[13px] leading-5 text-gray-400">
            {exercise.description}
          </p>

          {/* MUSCLE TAGS */}
          <div className="mt-3 flex gap-2">
            {exercise.muscleGroups.map((muscle:string) => (
              <span
                key={muscle}
                className="rounded-full bg-[#baff00] px-4 py-1 text-[11px] font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* INFORMATION CARD */}
          <div className="mt-2 overflow-hidden rounded-xl border border-[#252b34] ">
            
            {/* EQUIPMENT */}
            <div className="flex h-[55px] items-center justify-between border-b border-[#242a32] px-4">
              <span className="text-[9px] font-bold tracking-wider text-gray-500">
                EQUIPMENT
              </span>

              <span className="text-[11px] text-gray-300">
                {exercise.equipment}
              </span>
            </div>

            {/* DIFFICULTY */}
            <div className="flex h-[55px] items-center justify-between border-b border-[#242a32] px-4">
              <span className="text-[9px] font-bold tracking-wider text-gray-500">
                DIFFICULTY
              </span>

              <span className="text-[11px] text-gray-300">
                {exercise.difficulty}
              </span>
            </div>

            {/* SETS */}
            <div className="flex h-[55px] items-center justify-between border-b border-[#242a32] px-4">
              <span className="text-[9px] font-bold tracking-wider text-gray-500">
                SETS
              </span>

              <span className="text-[11px] text-gray-300">
                {exercise.sets}
              </span>
            </div>

            {/* REPS */}
            <div className="flex h-[55px] items-center justify-between border-b border-[#242a32] px-4">
              <span className="text-[9px] font-bold tracking-wider text-gray-500">
                REPS
              </span>

              <span className="text-[11px] text-gray-300">
                {exercise.reps}
              </span>
            </div>

            {/* DURATION */}
            <div className="flex h-[55px] items-center justify-between border-b border-[#242a32] px-4">
              <span className="text-[9px] font-bold tracking-wider text-gray-500">
                DURATION
              </span>

              <span className="text-[11px] text-gray-300">
                {exercise.duration} min
              </span>
            </div>

            {/* CALORIES */}
            <div className="flex h-[55px] items-center justify-between border-b border-[#242a32] px-4">
              <span className="text-[9px] font-bold tracking-wider text-gray-500">
                CALORIES
              </span>

              <span className="text-[11px] text-gray-300">
                {exercise.caloriesBurned} kcal
              </span>
            </div>

            {/* RATING */}
            <div className="flex h-[55px] items-center justify-between px-4">
              <span className="text-[9px] font-bold tracking-wider text-gray-500">
                RATING
              </span>

              <span className="text-[11px] text-gray-300">
                {exercise.rating}
              </span>
            </div>
          </div>

          {/* INSTRUCTIONS */}
          <div className="">
            <h2 className="text-[13px] font-extrabold tracking-wide">
              INSTRUCTIONS
            </h2>

            <ol className="mt-3 space-y-2 pl-5">
              {exercise.instructions.map((instruction:string, index:string) => (
                <li
                  key={index}
                  className="pl-1 text-[11px] leading-5 text-gray-400"
                >
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-3 pb-1">
            <PlanButton exercise={exercise}/>

            <SavedButton exercise={exercise}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;