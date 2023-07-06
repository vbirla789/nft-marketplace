import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import icon from "../assets/Icons-2.svg";
import Graph from "./Graph";

const Wallet = ({ graph }) => {
  return (
    <div className="bg-gradient-to-r from-[#2E409C] to-[#080B2A] mt-4 rounded-xl w-[58vh] h-[39vh] md:w-[33vh] md:h-[25vh] lg:w-[53vh] lg:h-[30vh] lg:ml-0 md:ml-0 ml-8 text-[#fff]">
      <div>
        <div className="flex flex-col items-center justify-center mt-2">
          <div>
            <h1 className="text-base font-semibold lg:my-3 lg:text-3xl">
              Your Balance
            </h1>
          </div>
          <div className="flex items-end gap-x-1 lg:mb-4">
            <span className="text-sm">ETH</span>
            <p className="text-2xl font-semibold">44.000.44</p>
          </div>
          <div className="flex justify-evenly w-[50vh]">
            <div className="flex gap-x-3 items-end mt-1 lg:items-center">
              <img src={icon} className="h-4 w-4 " />
              <span className="opacity-60 text-sm lg:text-lg">
                Ethereum ETH
              </span>
            </div>
            <div className="flex items-end text-xs">
              <AiOutlineDown />
            </div>
          </div>
        </div>
        <div className="flex gap-x-1">
          {graph.map((val, i) => (
            <Graph {...val} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
