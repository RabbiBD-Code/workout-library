"use client"

import { ILibary } from '@/types/libaray';
import React, { createContext, ReactNode, useState } from 'react';
interface LibraryContextType {
  plan: ILibary[];
  setPlan: React.Dispatch<React.SetStateAction<ILibary[]>>;
  saved: ILibary[];
  setSaved: React.Dispatch<React.SetStateAction<ILibary[]>>;
}

export const LibarayContext = createContext<LibraryContextType>({} as LibraryContextType)

const BookProvider = ({children}:{children: ReactNode}) => {

    const [plan, setPlan] = useState<ILibary[]>([]);
    const [saved, setSaved] = useState<ILibary[]>([]);

    const sharedData = {
        plan,
        setPlan,
        saved,
        setSaved
    }
    

    return (
        <LibarayContext.Provider value={sharedData}>
            {children}
        </LibarayContext.Provider>
    );
};

export default BookProvider;