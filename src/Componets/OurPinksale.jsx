import React from "react";
import TitleSection from "./TitleSection";
import { BsPlusLg } from "react-icons/bs";

function OurPinksale() {
  return (
    <div className="mb-10 md:mb-20">
      <div className="container ">
        <TitleSection title="Our Pinksale Distribution" />
        <div className="flex items-center justify-between bg-primary p-2 rounded-xl shadow-lg h-full lg:h-[300px] flex-col lg:flex-row">
          {/* --row one-- */}
          <ul className="w-full md:w-1/2">
            <li className="flex items-center justify-center mb-3 text-white">
              <BsPlusLg color="#fff" className="mr-2" /> 100% of Liquidity Pool
              will be Locked for a year on Pinksale
            </li>
            <li className="flex items-center justify-center mb-3 text-white">
              <BsPlusLg color="#fff" className="mr-2" /> 100% of Liquidity Pool
              will be Locked for a year on Pinksale
            </li>
            <li className="flex items-center justify-center mb-3 text-white">
              <BsPlusLg color="#fff" className="mr-2" /> 100% of Liquidity Pool
              will be Locked for a year on Pinksale
            </li>
          </ul>
          {/* --row thow-- */}
          <ul className="w-full md:w-1/2">
            <li className="flex items-center justify-center  mb-3 text-white">
              <BsPlusLg color="#fff" className="mr-2" /> 100% of Liquidity Pool
              will be Locked for a year on Pinksale
            </li>
            <li className="flex items-center justify-center mb-3 text-white">
              <BsPlusLg color="#fff" className="mr-2" /> 100% of Liquidity Pool
              will be Locked for a year on Pinksale
            </li>
            <li className="flex items-center justify-center mb-3 text-white">
              <BsPlusLg color="#fff" className="mr-2" /> 100% of Liquidity Pool
              will be Locked for a year on Pinksale
            </li>
          </ul>
          {/* --percentage row-- */}
          <div className="flex justify-between items-center flex-col lg:flex-row w-full">
            <div className="bg-[#0000004D] p-4 rounded-xl flex justify-center flex-col items-center w-full  md:w-[200px] h-[150px] mb-3" >
              <h3 className="text-xl font-light capitalize text-white">100%</h3>
              <h4 className="text-xl font-light capitalize text-white">total supply</h4>
            </div>
            <div className="bg-[#0000004D] p-4 rounded-xl flex justify-center flex-col items-center w-full  md:w-[200px] h-[150px] mb-3" >
              <h3 className="text-xl font-light capitalize text-white">100%</h3>
              <h4 className="text-xl font-light capitalize text-white">total supply</h4>
            </div>
            <div className="bg-[#0000004D] p-4 rounded-xl flex justify-center flex-col items-center w-full  md:w-[200px] h-[150px] mb-3" >
              <h3 className="text-xl font-light capitalize text-white">100%</h3>
              <h4 className="text-xl font-light capitalize text-white">total supply</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPinksale;
