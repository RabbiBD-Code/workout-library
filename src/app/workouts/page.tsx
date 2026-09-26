import Banner from '@/components/Banner';
import LibraryCard from '@/components/LibraryCard';
import { ILibary } from '@/types/libaray';
import React from 'react';

const getLibraryData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return res.json();
};


const WorkoutsPage = async() => {
    const fitlogs = await getLibraryData();
  console.log(fitlogs);
    return (
        <div>
            <Banner/>
            <div className="container mx-auto">
             <h2 className="text-3xl font-bold">THE LIBRARY</h2>
             <p>Twelve lifts covering every major muscle group.</p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
               {
                   fitlogs.map((fitlog:ILibary)=><LibraryCard fitlog={fitlog} key={fitlog.id}/>)
               }
             </div>
           </div>
        </div>
    );
};

export default WorkoutsPage;