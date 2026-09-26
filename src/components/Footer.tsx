import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <hr className="my-3 text-gray-600 " />
      <div className=" py-7">
        <div className="flex justify-between container mx-auto ">
          <div className="flex justify-center items-center gap-2">
            <Image src={logo} alt="Logo" />
            FITLOG
          </div>
          <p className="text-sm">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
