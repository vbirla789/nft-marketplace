import React from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import Bid from "../utils/Bid";
import Wallet from "../utils/Wallet";
import { graph } from "../data/data";

const Hero = ({ biddata }) => {
  //   console.log(biddata);

  return (
    <section className="flex md:flex-col lg:flex-col pt-[6%] pl-[11%] md:pt-[24%] md:pl-[20%] lg:pt-[20%] lg:ml-[0]">
      <div>
        <div className="flex justify-between w-[120vh] md:w-[90%] lg:w-[90%]">
          <div className="md:w-[40%]">
            <h1 className="text-2xl text-[#E2E4E9] font-semibold">
              Popular NFT's Live Auction
            </h1>
          </div>
          <div className="flex items-center text-[#028BD3] gap-x-2">
            <span className="text-sm font-semibold">Show More</span>
            <AiOutlineDown />
          </div>
        </div>
        <div className="flex md:flex-col">
          {biddata.map((val, i) => (
            <div key={i}>
              <Bid {...val} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between w-[65vh] md:w-[90%] lg:w-[53vh] ml-4 md:mt-4 md:ml-2 lg:ml-0 lg:mt-6">
          <div>
            <h1 className="text-2xl text-[#E2E4E9] font-semibold">Wallet</h1>
          </div>
          <div className="flex items-center text-[#028BD3] gap-x-2">
            <span className="text-sm font-semibold">Show More</span>
            <AiOutlineRight />
          </div>
        </div>
        <div>
          <Wallet graph={graph} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
