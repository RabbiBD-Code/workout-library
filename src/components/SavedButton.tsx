"use client"

import { LibarayContext } from '@/context/LibarayContext';
import { ILibary } from '@/types/libaray';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

interface PlanButtonProps {
  exercise: ILibary;
}


const SavedButton = ({exercise}:PlanButtonProps) => {

    const {saved, setSaved} = useContext(LibarayContext)

    const handleSavedButton = () =>{
        // alert("palan button tiger",);
         const exist = saved.some((p) => p.id === exercise.id);
            if (exist) {
              toast.error(`${exercise.name} is already saved`);
              return;
            }
        toast.success(`Add a saved ${exercise.name}`)
        setSaved([...saved, exercise])
    }

    return (
        <button onClick={()=> handleSavedButton()} className="flex h-9 items-center gap-2 rounded-lg border border-[#303740] bg-transparent px-4 text-[11px] text-gray-300">
              <span className='font-bold text-2xl'>♡</span>
              Save for later
            </button>
    );
};

export default SavedButton;