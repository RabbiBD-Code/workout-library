"use client";

import { LibarayContext } from "@/context/LibarayContext";
import { ILibary } from "@/types/libaray";
import React, { useContext } from "react";
import { toast } from "react-toastify";

interface PlanButtonProps {
  exercise: ILibary;
}

const PlanButton = ({ exercise }: PlanButtonProps) => {
  const { plan, setPlan } = useContext(LibarayContext);

  const handlePlanButton = () => {
    // alert("palan button tiger",);
    const exist = plan.some((p) => p.id === exercise.id);
    if (exist) {
      toast.error(`${exercise.name} is already in today's plan`);
      return;
    }
    toast.success(`Add a plan ${exercise.name}`);
    setPlan([...plan, exercise]);
    if(plan.length >= 5){
      toast.error("Added to day's Five plan")
    }
  };

  return (
    <button
      disabled = {plan.length >= 5}
      onClick={() => handlePlanButton()}
      className="flex h-9 items-center gap-2 rounded-lg bg-[#baff00] px-4 text-[11px] font-bold text-black disabled:bg-[#ef700f] disabled:cursor-not-allowed"
    >
      <span className="font-bold text-2xl">▣</span>
      Add to today&apos;s plan
    </button>
  );
};

export default PlanButton;
