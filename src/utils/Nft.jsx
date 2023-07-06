import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Nft = ({ id, img, name, logo, title, desc, price, bid }) => {
  return (
    <div key={id}>
      <div className="relative">
        <img src={img} className="md:w-[32vh] w-[45vh] " />
      </div>
      <div className="flex p-2 m-x-2 gap-x-[45%] items-center w-[50vh] md:w-[32vh] md:p-3 lg:w-[78vh] lg:p-4 absolute top-[2%] z-10">
        <h1>{name}</h1>
        <span>
          <AiOutlineHeart />
        </span>
      </div>
      <div className="bg-[#0000001a] backdrop-blur-md flex items-center top-[70%] rounded-lg gap-x-2 text-base md:w-[32vh] md:top-[80%] lg:top-[65%] lg:w-[22vh] w-[42vh] left-[3%] absolute py-1">
        <div className="ml-2">
          <img src={logo} className="w-[10vh] h-[10vh] lg:w-[6vh] lg:h-[6vh]" />
        </div>
        <div>
          <p>{title}</p>
          <span className="text-[#5EEAD4]">{price}</span>
        </div>
        <div>
          <p>{desc}</p>
          <span className="text-[#5EEAD4] opacity-80">{bid}</span>
        </div>
      </div>
    </div>
  );
};

export default Nft;
