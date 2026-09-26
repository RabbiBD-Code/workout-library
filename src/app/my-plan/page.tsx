"use client";

import PlanSavedCard from "@/components/PlanCard";
import SavedCard from "@/components/SavedCard";
import { LibarayContext } from "@/context/LibarayContext";
import { ILibary } from "@/types/libaray";
import Link from "next/link";
import React, { useContext, useState } from "react";

const MyPlanPage = () => {
  const { plan, saved } = useContext(LibarayContext);
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">("duration")
  console.log(sortBy, "sortBy page");

  const sortPlanSaved = (exercise:ILibary[]) =>{
      const sortedExercise = [...exercise];

      if(sortBy === "duration"){
          sortedExercise.sort((a,b)=> b.duration - a.duration)
      }else if(sortBy === "calories"){
        sortedExercise.sort((a,b)=> b.caloriesBurned - a.caloriesBurned)
      }else if(sortBy === "rating"){
        sortedExercise.sort((a,b)=> b.rating - a.rating)
      }
      return sortedExercise;
  }

  const sortedPlan = sortPlanSaved(plan)
  const sortedSaved = sortPlanSaved(saved)


  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const currentExercises = activeTab === "plan" ? plan : saved;
  const totalExercises = currentExercises.length;
  const totalMin = currentExercises.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );
  const totalCal = currentExercises.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  console.log(plan, saved, " i have a plan");

  return (
    <div className="container mx-auto">
      <div className="mt-4">
        <div>
          <h2 className="text-3xl font-bold">My Plan</h2>
          <p>Cap of five lifts for today. Finish them, then load more.</p>
        </div>
        <div className="flex justify-between items-center border border-gray-300 rounded-xl p-5 my-6">
          <div>
            <p className="text-sm">Exercises</p>
            <h2 className="text-4xl font-bold text-[#CCFF00]">
              {totalExercises}
            </h2>
          </div>
          <div>
            <p className="text-sm">Minutes</p>
            <h2 className="text-4xl font-bold ">{totalMin}</h2>
          </div>
          <div>
            <p className="text-sm">Calories</p>
            <h2 className="text-4xl font-bold ">{totalCal}</h2>
          </div>
        </div>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box relative">
        <input
          type="radio"
          name="my_tabs_6"
          className={`tab ${activeTab === "plan"? "text-[#CCFF00]":''}`}
          aria-label="Today’s Plan"
          checked={activeTab === "plan"}
          onChange={() => setActiveTab("plan")}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid gap-4">
            {sortedPlan.length > 0 ? (
              sortedPlan.map((p) => <PlanSavedCard key={p.id} p={p} />)
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4 py-7">
                <h2 className="text-3xl font-bold">NOTHING HERE YET</h2>
                <p>Browse the library and add a lift to get today moving.</p>
                <Link href={"/workouts"}>
                  <button className="btn bg-[#C2F800]  p-6">
                    Go to workouts
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className={`tab ${activeTab === "plan"? "text-[#CCFF00]":''}`}
          aria-label="Saved Plan"
          checked={activeTab === "saved"}
          onChange={() => setActiveTab("saved")}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid gap-4">
            {sortedSaved.length > 0 ? (
              sortedSaved.map((s) => <SavedCard key={s.id} s={s} />)
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4 py-7">
                <h2 className="text-3xl font-bold">NOTHING HERE YET</h2>
                <p>Browse the library and add a lift to get today moving.</p>
                <Link href={"/workouts"}>
                  <button className="btn bg-[#C2F800]  p-6">
                    Go to workouts
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="absolute right-4 flex items-center">
         <div> <p className="w-17.5">Sort-By</p></div>
          <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "duration" | "calories" | "rating")}
            className="select select-neutral"
          >
            <option value={"duration"}>Duration</option>
            <option value={"calories"}>Calories</option>
            <option value={"rating"}>Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
