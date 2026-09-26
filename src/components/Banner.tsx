import Image from "next/image";
import React from "react";
import bannerLogo from '@/assets/banner.png'

const Banner = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto md:flex flex-row-reverse justify-between items-center py-16">
        <div className="mt-5 flex justify-center mx-auto">
            <Image src={bannerLogo} alt="BannerLogo"/>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <p className="text-[#b5d63e] text-sm font-bold">WORKOUT LIBRARY</p>
            <h1 className="text-6xl font-extrabold">TRAIN WITH INTENT. LOG <br />
EVERY SET.</h1>
            <p className="py-6">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
into today's plan, and watch the week's work add up.
            </p>
            <button className="btn bg-[#C2F800]  p-6">BROWSE WORKOUTS</button>
          </div>
        </div>
      </div>
  );
};

export default Banner;
